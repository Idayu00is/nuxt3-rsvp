<!-- index.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#001f3f] to-[#003366] text-white text-center px-6 relative overflow-hidden">

    <!-- Floating petals -->
    <div aria-hidden="true" class="petals-container">
      <div class="petal" style="--i:0;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.6)" stroke="rgba(255, 215, 0, 0.9)" stroke-width="2"/>
        </svg>
      </div>
      <div class="petal" style="--i:1;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.5)" stroke="rgba(255, 215, 0, 0.8)" stroke-width="2"/>
        </svg>
      </div>
      <div class="petal" style="--i:2;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.4)" stroke="rgba(255, 215, 0, 0.7)" stroke-width="2"/>
        </svg>
      </div>
      <div class="petal" style="--i:3;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.55)" stroke="rgba(255, 215, 0, 0.85)" stroke-width="2"/>
        </svg>
      </div>
      <div class="petal" style="--i:4;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.5)" stroke="rgba(255, 215, 0, 0.8)" stroke-width="2"/>
        </svg>
      </div>
      <div class="petal" style="--i:5;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.6)" stroke="rgba(255, 215, 0, 0.9)" stroke-width="2"/>
        </svg>
      </div>
      <div class="petal" style="--i:6;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.45)" stroke="rgba(255, 215, 0, 0.75)" stroke-width="2"/>
        </svg>
      </div>
      <div class="petal" style="--i:7;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.5)" stroke="rgba(255, 215, 0, 0.8)" stroke-width="2"/>
        </svg>
      </div>
      <div class="petal" style="--i:8;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.55)" stroke="rgba(255, 215, 0, 0.85)" stroke-width="2"/>
        </svg>
      </div>
      <div class="petal" style="--i:9;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.6)" stroke="rgba(255, 215, 0, 0.9)" stroke-width="2"/>
        </svg>
      </div>

      <!-- 10 more petals -->
      <div class="petal" style="--i:10;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.5)" stroke="rgba(255, 215, 0, 0.8)" stroke-width="2"/>
        </svg>
      </div>
      <div class="petal" style="--i:11;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.45)" stroke="rgba(255, 215, 0, 0.75)" stroke-width="2"/>
        </svg>
      </div>
      <div class="petal" style="--i:12;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.6)" stroke="rgba(255, 215, 0, 0.9)" stroke-width="2"/>
        </svg>
      </div>
      <div class="petal" style="--i:13;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.4)" stroke="rgba(255, 215, 0, 0.7)" stroke-width="2"/>
        </svg>
      </div>
      <div class="petal" style="--i:14;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.55)" stroke="rgba(255, 215, 0, 0.85)" stroke-width="2"/>
        </svg>
      </div>
      <div class="petal" style="--i:15;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.5)" stroke="rgba(255, 215, 0, 0.8)" stroke-width="2"/>
        </svg>
      </div>
      <div class="petal" style="--i:16;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.6)" stroke="rgba(255, 215, 0, 0.9)" stroke-width="2"/>
        </svg>
      </div>
      <div class="petal" style="--i:17;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.45)" stroke="rgba(255, 215, 0, 0.75)" stroke-width="2"/>
        </svg>
      </div>
      <div class="petal" style="--i:18;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.5)" stroke="rgba(255, 215, 0, 0.8)" stroke-width="2"/>
        </svg>
      </div>
      <div class="petal" style="--i:19;">
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C47 32 48 64 32 96C17 64 16 32 32 0Z" fill="rgba(255, 215, 0, 0.55)" stroke="rgba(255, 215, 0, 0.85)" stroke-width="2"/>
        </svg>
      </div>
    </div>

    <div class="max-w-2xl space-y-4 animate-fadeInUp z-10 relative">
      <h1 class="text-5xl md:text-6xl font-playfair text-yellow-400 drop-shadow-lg animate-fadeInUp delay-100">
        You're Invited
      </h1>
      <p class="text-xl mt-2 font-light tracking-wide animate-fadeInUp delay-200">
        To the wedding celebration of
      </p>

      <h2 class="text-5xl md:text-6xl mt-4 font-greatvibes text-white drop-shadow-xl animate-fadeInUp delay-300">
        Bride's Name & Groom's Name
      </h2>

      <p class="mt-4 text-sm italic animate-fadeInUp delay-400">
        July 27, 2025 • Kuala Lumpur
      </p>

      <!-- Details button -->
      <UButton
        to="/details"
        variant="solid"
        class="no-underline bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-lg shadow-lg"
      >
        View Details
      </UButton>

      <div class="flex flex-col items-center space-y-4 mt-8">
        <!-- RSVP button -->
        <UButton
          to="/rsvp"
          variant="solid"
          size="lg"
          class="no-underline font-semibold text-white bg-yellow-500 hover:bg-yellow-400 visited:text-white transition"
        >
          RSVP Now
        </UButton>

        <!-- Admin link -->
        <UButton
          to="/admin"
          variant="link"
          class="no-underline text-sm text-white/70 hover:text-white visited:text-white/70"
        >
          Admin
        </UButton>
      </div>
      </div>
        </div>
      </template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@500&display=swap');

.font-greatvibes {
  font-family: 'Great Vibes', cursive;
}

.font-playfair {
  font-family: 'Playfair Display', serif;
}

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
.animate-fadeInUp.delay-100 {
  animation-delay: 0.1s;
}
.animate-fadeInUp.delay-200 {
  animation-delay: 0.2s;
}
.animate-fadeInUp.delay-300 {
  animation-delay: 0.3s;
}
.animate-fadeInUp.delay-400 {
  animation-delay: 0.4s;
}

@keyframes pulseSlow {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 6px rgba(255, 215, 0, 0.7);
  }
  50% {
    opacity: 0.8;
    box-shadow: 0 0 14px rgba(255, 215, 0, 1);
  }
}
.animate-pulseSlow {
  animation: pulseSlow 3s ease-in-out infinite;
}

.petals-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: visible;
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
  will-change: transform, opacity;
}

.petal svg {
  width: 100%;
  height: 100%;
  display: block;
  transform-origin: center bottom;
  transform-box: fill-box;
  will-change: transform, opacity;
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

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.6);
  }
  50% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 1);
  }
}

.glow-hover:hover {
  animation: glow 1.5s ease-in-out infinite;
}

:deep(a:visited) {
  color: inherit !important;
}

</style>
