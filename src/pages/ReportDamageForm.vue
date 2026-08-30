<template>
  <q-page class="form-page">
    <div class="form-header">
      <q-btn
        flat
        round
        icon="arrow_back"
        @click="$router.back()"
        class="back-btn"
      />
      <div>
        <h1 class="form-title">Report Damage</h1>
        <p class="form-subtitle"
          >Upload a photo and details about monument damage you have
          witnessed</p
        >
      </div>
    </div>

    <q-card class="form-card">
      <q-card-section>
        <q-form @submit.prevent="handleSubmit" class="form-fields">
          <q-input
            v-model="form.name"
            label="Your Name"
            outlined
            :rules="[v => !!v || 'Name is required']"
          />
          <q-input
            v-model="form.contact"
            label="Phone / Email (optional)"
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
              <img
                :src="imagePreview"
                class="image-preview"
                alt="damage preview"
              />
            </div>
          </div>

          <q-btn
            type="submit"
            label="Submit Report"
            color="negative"
            class="submit-btn"
            :loading="submitting"
          />
        </q-form>
      </q-card-section>
    </q-card>

    <q-dialog v-model="successDialog">
      <q-card class="success-card">
        <q-card-section class="text-center">
          <div style="font-size: 3rem">??</div>
          <div class="text-h6 q-mt-md">Report Submitted!</div>
          <p
            >Thank you for helping preserve heritage. Your report has been
            received.</p
          >
        </q-card-section>
        <q-card-actions align="center">
          <q-btn
            flat
            label="Go Back Home"
            color="primary"
            @click="$router.push('/')"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, watch } from 'vue'

const form = ref({
  name: '',
  contact: '',
  monument: '',
  location: '',
  description: '',
  image: null
})
const submitting = ref(false)
const successDialog = ref(false)
const imagePreview = ref(null)

watch(
  () => form.value.image,
  file => {
    if (file) {
      const reader = new FileReader()
      reader.onload = e => {
        imagePreview.value = e.target.result
      }
      reader.readAsDataURL(file)
    } else {
      imagePreview.value = null
    }
  }
)

const handleSubmit = async () => {
  submitting.value = true
  await new Promise(r => setTimeout(r, 1000))
  submitting.value = false
  successDialog.value = true
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
.back-btn {
  margin-top: 4px;
}
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
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
.success-card {
  border-radius: 20px;
  min-width: 280px;
  padding: 16px;
}
</style>
