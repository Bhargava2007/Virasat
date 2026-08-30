<template>
  <q-page class="form-page">
    <div class="form-header">
      <q-btn flat round icon="arrow_back" @click="$router.back()" class="back-btn" />
      <div>
        <h1 class="form-title">Rectify Information</h1>
        <p class="form-subtitle">Submit a formal request to correct heritage data</p>
      </div>
    </div>

    <q-card class="form-card">
      <q-card-section>
        <q-form @submit.prevent="handleSubmit" class="form-fields">
          <q-input
            v-model="form.name"
            label="Your Full Name"
            outlined
            :rules="[v => !!v || 'Name is required']"
          />
          <q-input
            v-model="form.email"
            label="Email Address"
            type="email"
            outlined
            :rules="[v => !!v || 'Email is required']"
          />
          <q-select
            v-model="form.role"
            :options="roleOptions"
            label="Your Role"
            outlined
          />
          <q-input
            v-model="form.monument"
            label="Monument / Site Name"
            outlined
            :rules="[v => !!v || 'Monument name is required']"
          />
          <q-input
            v-model="form.currentInfo"
            label="Current Incorrect Information"
            type="textarea"
            outlined
            autogrow
            :rules="[v => !!v || 'Please describe the incorrect info']"
          />
          <q-input
            v-model="form.correction"
            label="Correct Information (with sources)"
            type="textarea"
            outlined
            autogrow
            :rules="[v => !!v || 'Please provide the correction']"
          />
          <q-input
            v-model="form.source"
            label="Reference / Source Link (optional)"
            outlined
          />
          <q-btn
            type="submit"
            label="Submit Request"
            color="primary"
            class="submit-btn"
            :loading="submitting"
          />
        </q-form>
      </q-card-section>
    </q-card>

    <q-dialog v-model="successDialog">
      <q-card class="success-card">
        <q-card-section class="text-center">
          <div style="font-size:3rem">?</div>
          <div class="text-h6 q-mt-md">Request Submitted!</div>
          <p>Thank you. Your rectification request has been received. We will review it shortly.</p>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Go Back Home" color="primary" @click="$router.push('/')" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', role: null, monument: '', currentInfo: '', correction: '', source: '' })
const roleOptions = ['Local Resident', 'Historian', 'Researcher', 'Academic', 'Other']
const submitting = ref(false)
const successDialog = ref(false)

const handleSubmit = async () => {
  submitting.value = true
  await new Promise(r => setTimeout(r, 1000)) // Simulate API call
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
