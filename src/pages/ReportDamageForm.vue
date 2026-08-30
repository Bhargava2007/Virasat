<template>
  <q-page class="form-page">
    <div class="form-header">
      <q-btn flat round icon="arrow_back" @click="$router.back()" class="back-btn" />
      <div>
        <h1 class="form-title">Report Damage</h1>
        <p class="form-subtitle">Upload a photo and details about monument damage you have witnessed</p>
      </div>
    </div>

    <q-card class="form-card">
      <q-card-section>
        <q-form @submit.prevent="handleSubmit" class="form-fields" ref="formRef">
          <q-input
            v-model="form.name"
            label="Your Name"
            outlined
            :rules="[v => !!v || 'Name is required']"
          />
          <q-input
            v-model="form.email"
            label="Email Address"
            type="email"
            outlined
            :rules="[v => !!v || 'Email is required', v => /.+@.+\..+/.test(v) || 'Enter a valid email']"
          />
          <q-input
            v-model="form.phone"
            label="Phone Number (optional)"
            outlined
          />
          <q-input
            v-model="form.monument"
            label="Monument / Site Name"
            outlined
            :rules="[v => !!v || 'Monument name is required']"
          />
          <q-input
            v-model="form.location"
            label="Location / District"
            outlined
          />
          <q-input
            v-model="form.description"
            label="Describe the Damage"
            type="textarea"
            outlined
            autogrow
            :rules="[v => !!v || 'Please describe the damage']"
          />

          <div class="upload-section">
            <p class="upload-label">Upload Image of Damage</p>
            <q-file
              v-model="form.image"
              label="Choose Image"
              outlined
              accept="image/*"
              max-file-size="5242880"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
            <div v-if="imagePreview" class="image-preview-wrap">
              <img :src="imagePreview" class="image-preview" alt="damage preview" />
            </div>
            <p class="upload-note">
              <q-icon name="info_outline" size="14px" />
              Image is previewed locally. A separate upload integration is required to include it in the email.
            </p>
          </div>

          <q-btn
            type="submit"
            label="Submit Report"
            color="negative"
            class="submit-btn"
            :loading="submitting"
            :disable="submitting"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import emailjs from '@emailjs/browser'

const $q = useQuasar()
const formRef = ref(null)

const form = ref({
  name: '',
  email: '',
  phone: '',
  monument: '',
  location: '',
  description: '',
  image: null
})

const submitting = ref(false)
const imagePreview = ref(null)

watch(() => form.value.image, (file) => {
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => { imagePreview.value = e.target.result }
    reader.readAsDataURL(file)
  } else {
    imagePreview.value = null
  }
})

const handleSubmit = async () => {
  if (submitting.value) return

  const valid = await formRef.value.validate()
  if (!valid) return

  submitting.value = true

  const templateParams = {
    complaint_type: 'Monument Damage Report',
    monument_name: form.value.monument,
    location: form.value.location || '(not provided)',
    name: form.value.name,
    email: form.value.email,
    phone: form.value.phone || '(not provided)',
    message: form.value.description,
    image_url: form.value.image
      ? `[Attachment: ${form.value.image.name} - upload integration required to include image]`
      : '(no image attached)',
    reply_to: form.value.email
  }

  if (import.meta.env.DEV) {
    console.log('EmailJS Diagnostics:')
    console.log('Service ID present:', !!import.meta.env.VITE_EMAILJS_SERVICE_ID)
    console.log('Template ID present:', !!import.meta.env.VITE_EMAILJS_COMPLAINT_TEMPLATE_ID)
    console.log('Public Key present:', !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_COMPLAINT_TEMPLATE_ID,
      templateParams,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
    )

    formRef.value.resetValidation()
    form.value = { name: '', email: '', phone: '', monument: '', location: '', description: '', image: null }
    imagePreview.value = null

    $q.notify({
      type: 'positive',
      icon: 'check_circle',
      message: 'Report submitted successfully!',
      caption: 'Thank you for helping preserve heritage. Our team will review your report.',
      position: 'top',
      timeout: 5000
    })
  } catch (err) {
    if (import.meta.env.DEV) {
      console.error('EmailJS Error:', err)
    }
    $q.notify({
      type: 'negative',
      icon: 'error_outline',
      message: 'Could not submit your report.',
      caption: 'Please check your connection and try again.',
      position: 'top',
      timeout: 6000
    })
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.form-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 24px 24px 80px;
}
.form-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 24px;
}
.back-btn { margin-top: 4px; }
.form-title {
  font-family: var(--font-heading), Outfit, sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
}
.form-subtitle {
  color: var(--color-text-muted, #666);
  font-size: 0.9rem;
  margin: 4px 0 0;
}
.form-card {
  border-radius: 20px;
  background: rgba(255, 248, 235, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(212, 160, 23, 0.2);
  box-shadow: 0 4px 24px rgba(74, 44, 30, 0.12);
}
.form-fields {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.upload-label {
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
}
.upload-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.upload-note {
  font-size: 0.78rem;
  color: #888;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
  line-height: 1.4;
}
.image-preview-wrap {
  border-radius: 12px;
  overflow: hidden;
}
.image-preview {
  width: 100%;
  max-height: 240px;
  object-fit: cover;
  border-radius: 12px;
}
.submit-btn {
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  font-size: 1rem;
}
</style>
