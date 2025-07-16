<template>
  <div class="min-h-screen bg-gradient-to-b from-[#001f3f] to-[#003366] text-white px-6 py-10 flex items-center justify-center">
    <div class="max-w-xl w-full relative overflow-hidden">
      <div class="flex justify-center mb-6">
          <UButton
            to="/"
            variant="ghost"
            size="lg"
            icon="i-heroicons-home"
            aria-label="Back to Home"
            class="text-gray-700 hover:text-primary"
          />
      </div>

      <!-- Shared Header (Bismillah on All Slides) -->
      <div class="text-center mb-4">
        <h1 class="text-3xl font-arabic mb-2">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ</h1>
        <p class="italic text-sm text-gray-300">In the Name of Allah, the Most Gracious, the Most Merciful</p>
      </div>

      <!-- Slide Content -->
      <div class="bg-white text-black p-6 rounded-xl shadow-lg text-center animate-fadeInUp space-y-4 min-h-[350px]">
        <template v-if="currentSlide === 0">
          <p>With humble hearts and gratitude to Allah S.W.T.,</p>
          <p>we joyfully invite you to attend the wedding ceremony of our beloved children.</p>
        </template>

        <template v-else-if="currentSlide === 1">
          <h2 class="text-xl font-bold">Rosmaidayu & Ahmad Firdaus</h2>
          <p class="text-sm text-gray-500">Bride & Groom</p>
        </template>

        <template v-else-if="currentSlide === 2">
          <div>
            <p class="font-semibold text-primary">Bride-to-be:</p>
            <p class="font-bold">Hidayah Binti Ismail</p>
            <p class="text-sm text-gray-500">
              Daughter of:<br />
              Tuan Haji Ismail Bin [Father’s Name]<br />
              & Puan Hajjah [Mother’s Name]
            </p>
          </div>

          <div class="my-4" />

          <div>
            <p class="font-semibold text-primary">Groom-to-be:</p>
            <p class="font-bold">Ahmad Firdaus Bin Abdullah</p>
            <p class="text-sm text-gray-500">
              Son of:<br />
              Encik Abdullah Bin [Father-in-law’s Name]<br />
              & Puan Zainab Binti [Mother-in-law’s Name]
            </p>
          </div>
        </template>

        <template v-else-if="currentSlide === 3">
          <h2 class="font-semibold text-lg text-primary">Wedding Details</h2>
          <p>📅 <strong>Date:</strong> Saturday, 10th August 2025</p>
          <p>🕓 <strong>Time:</strong> 11:00 AM – 4:00 PM</p>
          <p>📍 <strong>Venue:</strong> Dewan Perdana Felda,<br />Jalan Maktab, KL</p>
        </template>

        <template v-else-if="currentSlide === 4">
          <p class="text-arabic text-xl text-primary mb-2">
            بَارَكَ ٱللَّهُ لَكُمْ وَبَارَكَ عَلَيْكُمْ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
          <p class="text-sm">“May Allah bless you both, and join you together in goodness.”</p>
          <p class="text-xs text-gray-500">— (Abu Dawood)</p>
        </template>

        <template v-else-if="currentSlide === 5">
          <div class="flex flex-col items-center gap-3">
            <UButton
              to="https://goo.gl/maps/zVZtXMd7UQmvMd7T9"
              target="_blank"
              icon="i-heroicons-map-pin"
              color="primary"
              class="font-semibold"
            >
              View Location
            </UButton>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?data=https://goo.gl/maps/zVZtXMd7UQmvMd7T9&size=150x150"
              alt="QR Code"
              class="rounded shadow"
            />
            <p class="text-sm text-gray-500">Scan to open in Google Maps</p>
          </div>
        </template>
      </div>

      <!-- Navigation Icons / Dots -->
      <div class="flex justify-center mt-6 space-x-3">
        <button
          v-for="(_, index) in totalSlides"
          :key="index"
          class="w-5 h-5 rounded-full border-2 border-white transition"
          :class="currentSlide === index ? 'bg-white shadow-lg' : 'bg-white/30 hover:bg-white/60'"
          @click="currentSlide = index"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const currentSlide = ref(0)
const totalSlides = 6

let autoSlideInterval = null

onMounted(() => {
  autoSlideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides
  }, 5000)
})

onBeforeUnmount(() => {
  clearInterval(autoSlideInterval)
})
</script>

<style scoped>
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
  animation: fadeInUp 1.9s ease forwards;
}
.font-arabic {
  font-family: 'Amiri', serif;
  direction: rtl;
}

:deep(a:visited) {
  color: inherit !important;
}
</style>
