<template>
  <section class="min-h-screen bg-[#061C36] text-yellow-300 flex items-center justify-center px-4 py-10">
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
    <UContainer class="max-w-xl w-full animate-fadeInUp">
      <!-- Title -->
      <div class="text-center space-y-2">
        <h1 class="text-4xl font-bold tracking-wide">RSVP</h1>
        <div class="h-1 bg-yellow-400 w-2/3 mx-auto rounded-full"></div>
        <p class="text-white text-xl font-semibold">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
        <p class="text-white text-base">In the Name of Allah, the Most Gracious, the Most Merciful</p>
      </div>
      <!-- Card Box -->
      <div class="rounded-2xl shadow-xl px-6 py-8 space-y-6">

        <div class="flex justify-center mb-6">
          <UButton
            to="/"
            variant="ghost"
            size="sm"
            icon="i-heroicons-home"
            aria-label="Back to Home"
            class="text-gray-700 hover:text-primary"
          />
        </div>

        <!-- Scrollable Form -->
        <div class="overflow-y-auto max-h-[60vh] pr-1 space-y-6">
          <form @submit.prevent="submitForm" class="space-y-6 text-center">
            <p class="text-sm text-gray-300">
              <span class="italic">Kindly respond by:</span>
              <span class="text-white font-medium">[Insert RSVP Deadline Date]</span>
            </p>

            <UFormGroup label="Name(s):" name="name">
            <UInput
              v-model="name"
              placeholder="Type your name"
              variant="none"
              :ui="{
                base: 'bg-transparent border-b border-yellow-400',
                input: 'text-white placeholder-yellow-300'
              }"
            />
            </UFormGroup>

            <!-- Attendance -->
            <div class="text-center">
              <p class="italic text-yellow-300">Attendance:</p>
              <div class="mt-2 flex flex-col items-center text-white space-y-2">
                <label class="flex items-center gap-2">
                  <input type="radio" value="Yes" v-model="attending" />
                  In shaa Allah, I/We will attend
                </label>
                <label class="flex items-center gap-2">
                  <input type="radio" value="No" v-model="attending" />
                  Regretfully unable to attend
                </label>
              </div>
            </div>

            <UFormGroup label="Number of guests attending:" name="guestCount">
              <UInput
                v-model="guestCount"
                type="number"
                min="1"
                variant="none"
                class="w-24 mx-auto"
                :ui="{
                  base: 'bg-transparent border-b border-yellow-400',
                  input: 'text-white placeholder-yellow-300'
                }"
              />
            </UFormGroup>

            <div class="text-center">
              <p class="text-yellow-300">Do you require special seating (e.g. women-only area)?</p>
              <div class="mt-2 flex flex-col items-center text-white space-y-2">
                <label class="flex items-center gap-2">
                  <input type="radio" v-model="specialSeating" :value="true" />
                  Yes
                </label>
                <label class="flex items-center gap-2">
                  <input type="radio" v-model="specialSeating" :value="false" />
                  No
                </label>
              </div>
            </div>

            <UFormGroup label="Dietary needs (if any):" name="dietary">
              <UInput
                v-model="dietary"
                placeholder="Type here"
                variant="none"
                :ui="{
                  base: 'bg-transparent border-b border-yellow-400',
                  input: 'text-white placeholder-yellow-300'
                }"
              />
            </UFormGroup>

            <UFormGroup label="Doa & Blessings:" name="doa">
              <p class="italic text-yellow-200 mb-1 text-sm">(Write your well wishes for the bride and groom)</p>
              <UTextarea
                v-model="doa"
                placeholder="Your wishes here..."
                variant="none"
                :rows="4"
                :ui="{
                  base: 'bg-transparent border border-yellow-400 p-2',
                  textarea: 'text-white placeholder-yellow-300'
                }"
              />
            </UFormGroup>

            <!-- Submit Button -->
            <div class="text-center pt-4">
              <UButton type="submit" color="yellow" size="lg" class="px-8 font-semibold">
                Submit RSVP
              </UButton>
            </div>

            <p v-if="submitted" class="text-center text-green-300 font-medium pt-4">
              🎉 Thank you! Your RSVP has been submitted.
            </p>
          </form>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useRuntimeConfig } from '#imports'

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

const name = ref('')
const attending = ref('Yes')
const guestCount = ref(1)
const specialSeating = ref(null)
const dietary = ref('')
const doa = ref('')
const submitted = ref(false)

const submitForm = async () => {
  try {
    await addDoc(collection(db, 'rsvps'), {
      name: name.value,
      attending: attending.value,
      guestCount: guestCount.value,
      specialSeating: specialSeating.value,
      dietary: dietary.value,
      doa: doa.value,
      submittedAt: new Date().toISOString()
    })
    submitted.value = true
    name.value = ''
    attending.value = 'Yes'
    guestCount.value = 1
    specialSeating.value = null
    dietary.value = ''
    doa.value = ''
  } catch (error) {
    alert('Something went wrong. Please try again.')
    console.error(error)
  }
}
</script>

<style scoped>
:deep(a:visited) {
  color: inherit !important;
}
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
</style>
