<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#001f3f] to-[#003366] text-white text-center px-6 relative overflow-hidden">
    
    <!-- Floating petals (same as index.vue) -->
    <div aria-hidden="true" class="petals-container">
      <div v-for="i in 20" :key="i" class="petal" :style="`--i:${i - 1};`">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z"
            :fill="`rgba(255, 215, 0, ${0.4 + (i % 5) * 0.05})`"
            :stroke="`rgba(255, 215, 0, ${0.7 + (i % 5) * 0.05})`"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>

    <!-- Centered Content -->
    <div class="w-full max-w-md z-10 relative bg-white text-black p-6 rounded-lg shadow-lg animate-fadeInUp">
      <!-- Back Icon Button (above password field) -->
        <div class="mb-6">
          <UButton
            to="/"
            variant="ghost"
            size="sm"
            icon="i-heroicons-home"
            aria-label="Back to Home"
          />
        </div>
      <!-- Login -->
      <div v-if="!authenticated">
        <h2 class="text-xl font-bold mb-4">Admin Login</h2>

        <!-- Password Field -->
        <UInput
          v-model="adminPassword"
          placeholder="Enter admin password"
          type="password"
          class="mb-6"
        />

        <UButton
          @click="checkLogin"
          color="primary"
          variant="ghost"
          size="lg"
          class="text-base font-semibold transition duration-300 ease-in-out rounded-lg hover:bg-primary/90 active:scale-95 shadow-md hover:shadow-lg mb-6"
        >
          Login
        </UButton>
        <!-- Error Text -->
        <p v-if="loginError" class="text-red-500 mt-3 text-sm">Wrong password</p>
      </div>

      <!-- Dashboard -->
      <div v-else>
        <h1 class="text-xl font-bold mb-4 text-center text-primary">RSVP Submissions</h1>

        <div v-if="loading" class="text-center text-gray-500 mb-4">Loading RSVP data...</div>

        <UTable
          v-else-if="rsvps.length > 0"
          :rows="rsvps"
          :columns="columns"
          class="mb-6"
        />

        <div v-else class="text-center text-gray-500 mb-4">No submissions yet.</div>

        <div class="flex flex-col items-center gap-3">
          <p class="font-medium text-center">Total Attending: {{ totalAttending }}</p>
          <div class="flex gap-4">
            <UButton @click="printPage" color="primary">Print</UButton>
            <UButton @click="exportCSV" color="yellow">Export CSV</UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { useRuntimeConfig } from '#imports'

// Firebase config
const config = useRuntimeConfig().public
const firebaseConfig = {
  apiKey: config.firebaseApiKey,
  authDomain: config.firebaseAuthDomain,
  projectId: config.firebaseProjectId,
  storageBucket: config.firebaseStorageBucket,
  messagingSenderId: config.firebaseMessagingSenderId,
  appId: config.firebaseAppId,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// States
const rsvps = ref([])
const authenticated = ref(false)
const adminPassword = ref('')
const loginError = ref(false)
const loading = ref(false)

// Table columns
const columns = [
  { key: 'name', label: 'Name' },
  { key: 'attending', label: 'Attending' },
  { key: 'guestCount', label: 'Guests' },
  { key: 'specialSeating', label: 'Special Seating' },
  { key: 'dietary', label: 'Dietary Needs' },
  { key: 'doa', label: 'Blessings' },
  { key: 'submittedAt', label: 'Submitted At' }
]

// Fetch data
const fetchRSVPs = async () => {
  loading.value = true
  const snapshot = await getDocs(collection(db, 'rsvps'))
  rsvps.value = snapshot.docs.map(doc => {
    const data = doc.data()
    return {
      ...data,
      specialSeating: data.specialSeating ? 'Yes' : 'No',
      submittedAt: new Date(data.submittedAt).toLocaleString()
    }
  })
  loading.value = false
}

// Count attending
const totalAttending = computed(() =>
  rsvps.value.filter(r =>
    (r.attending || '').toString().trim().toLowerCase() === 'yes'
  ).length
)

// Admin login
const checkLogin = async () => {
  if (adminPassword.value === 'wedding2025') {
    authenticated.value = true
    loginError.value = false
    await fetchRSVPs()
  } else {
    loginError.value = true
  }
}

// Print
const printPage = () => window.print()

// Export CSV
const exportCSV = () => {
  const csv = [
    ['Name', 'Attending', 'Guests', 'Special Seating', 'Dietary Needs', 'Blessings', 'Submitted At'],
    ...rsvps.value.map(r => [
      r.name,
      r.attending,
      r.guestCount,
      r.specialSeating,
      r.dietary,
      r.doa ? r.doa.replace(/\n/g, ' ') : '',
      r.submittedAt
    ])
  ].map(row => row.join(',')).join('\n')

  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'rsvps.csv'
  link.click()
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
/* Fade animation */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeInUp {
  animation: fadeInUp 0.7s ease forwards;
}

/* Petals animation */
.petals-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.petal {
  position: absolute;
  width: 24px;
  height: 36px;
  top: 100%;
  left: calc(var(--i) * 5vw);
  animation: floatPetal 12s linear infinite;
  animation-delay: calc(var(--i) * -1.2s);
  transform-origin: center bottom;
  filter: drop-shadow(0 0 3px rgba(255, 215, 0, 0.8));
}
.petal svg {
  width: 100%;
  height: 100%;
  display: block;
}
@keyframes floatPetal {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateY(-110vh) rotate(360deg);
    opacity: 0;
  }
}

/* Print Hide */
@media print {
  button,
  .flex.gap-4 {
    display: none !important;
  }
}

:deep(a:visited) {
  color: inherit !important;
}
</style>
