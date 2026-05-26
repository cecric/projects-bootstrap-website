<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { tm, locale } = useI18n();

type FeatureItem = { eyebrow: string; title: string; description: string };
type WhatsNewItem = { title: string; description: string };

const heroPills = computed(() => tm('home.heroPills') as string[]);
const features = computed(() => tm('home.features.list') as FeatureItem[]);
const whatsNew = computed(() => tm('home.whatsNew.items') as WhatsNewItem[]);
</script>

<template>
  <main>
    <!-- =====================  HERO  ===================== -->
    <section class="relative overflow-hidden">
      <!-- soft organic background -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute -top-32 -left-24 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style="background-color: var(--color-secondary);"></div>
        <div class="absolute top-40 -right-24 w-[28rem] h-[28rem] rounded-full opacity-30 blur-3xl"
          style="background-color: var(--color-accent);"></div>
      </div>

      <div
        class="max-w-7xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-12 md:pb-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div class="order-2 md:order-1">
          <span class="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
            style="background-color: var(--color-secondary); color: var(--color-primary-dark);">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 256 256" fill="currentColor">
              <path
                d="M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119A8,8,0,0,0,137,123.78L191.85,144Zm59-107.22h-16V41a8,8,0,0,1,16,0Zm44,32a8,8,0,0,1-8,8H216a8,8,0,0,1,0-16h16A8,8,0,0,1,240,89Z" />
            </svg>
            {{ $t('home.tagline') }}
          </span>

          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-5"
            style="color: var(--color-ink);">
            {{ $t('home.title') }}
          </h1>

          <p class="text-lg sm:text-xl leading-relaxed mb-7 max-w-xl" style="color: var(--color-ink-soft);">
            {{ $t('home.description') }}
          </p>

          <!-- Download buttons (visible above the fold on mobile and desktop) -->
          <div class="flex flex-col sm:flex-row gap-3 mb-5">
            <a target="_blank" href="https://apps.apple.com/us/app/jeannot/id6749574145"
              class="group flex-1 sm:flex-none bg-black hover:bg-gray-900 text-white font-medium py-3.5 px-5 rounded-xl text-center inline-flex items-center justify-center gap-2 transition-all duration-300 ease-snappy hover:-translate-y-0.5 shadow-sm hover:shadow-md">
              <svg viewBox="0 0 24 24" class="w-5 h-5">
                <path fill="currentColor"
                  d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <span>{{ $t('home.downloadSection.store.ios') }}</span>
            </a>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.jeannot.app"
              class="group flex-1 sm:flex-none text-white font-medium py-3.5 px-5 rounded-xl text-center inline-flex items-center justify-center gap-2 transition-all duration-300 ease-snappy hover:-translate-y-0.5 shadow-sm hover:shadow-md"
              style="background-color: var(--color-primary);">
              <svg viewBox="0 0 24 24" class="w-5 h-5">
                <path fill="currentColor"
                  d="M16.61 15.15C16.15 15.15 15.77 14.78 15.77 14.32S16.15 13.5 16.61 13.5H16.61C17.07 13.5 17.45 13.86 17.45 14.32C17.45 14.78 17.07 15.15 16.61 15.15M7.41 15.15C6.95 15.15 6.57 14.78 6.57 14.32C6.57 13.86 6.95 13.5 7.41 13.5H7.41C7.87 13.5 8.24 13.86 8.24 14.32C8.24 14.78 7.87 15.15 7.41 15.15M16.91 10.14L18.58 7.26C18.67 7.09 18.61 6.88 18.45 6.79C18.28 6.69 18.07 6.75 18 6.92L16.29 9.83C14.95 9.22 13.5 8.9 12 8.91C10.47 8.91 9 9.24 7.73 9.82L6.04 6.91C5.95 6.74 5.74 6.68 5.57 6.78C5.4 6.87 5.35 7.08 5.44 7.25L7.1 10.13C4.25 11.69 2.29 14.58 2 18H22C21.72 14.59 19.77 11.7 16.91 10.14H16.91Z" />
              </svg>
              <span>{{ $t('home.downloadSection.store.android') }}</span>
            </a>
          </div>

          <a href="#whats-new" class="inline-flex items-center gap-1.5 text-sm font-semibold mb-7"
            style="color: var(--color-primary-dark);">
            {{ $t('home.learnMore') }}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
              <path
                d="M205.66,117.66l-80,80a8,8,0,0,1-11.32,0l-80-80a8,8,0,0,1,11.32-11.32L120,172.69V40a8,8,0,0,1,16,0V172.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
            </svg>
          </a>

          <!-- Feature pills -->
          <ul class="flex flex-wrap gap-2 mt-1">
            <li v-for="pill in heroPills" :key="pill" class="text-xs font-medium px-3 py-1.5 rounded-full border"
              style="background-color: rgba(255,255,255,0.6); border-color: rgba(124,144,130,0.25); color: var(--color-ink-soft);">
              {{ pill }}
            </li>
          </ul>
        </div>

        <div class="order-1 md:order-2 relative flex justify-center">
          <!-- Decorative leaves -->
          <div class="absolute -top-6 -left-4 w-16 h-16 opacity-30" style="color: var(--color-primary);">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
              <path
                d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94.14c-18,29.85-17.65,66.27.95,97.39L40,209.07a8,8,0,0,0,12,10.43l13.5-15.85c14.41,7.55,29,11.36,43.46,11.36a85.27,85.27,0,0,0,44.11-12.33C156.13,176.66,178.92,115.6,223.45,40.07ZM149.46,178.36C124.16,193,93.6,191,67.66,173.83l68-78.5a8,8,0,0,0-12-10.43L55.5,163.36c-7.51-19.78-7.51-44.4,7.06-67.59C84.45,60.59,138.65,42,206.55,46.07,202.51,114,184,156.4,149.46,178.36Z" />
            </svg>
          </div>

          <div class="relative rounded-3xl overflow-hidden shadow-2xl ring-1"
            style="background-color: var(--color-secondary); --tw-ring-color: rgba(124,144,130,0.25);">
            <img src="/assets/jeannot-banner-illus2.webp" :alt="$t('home.title')"
              class="block w-full max-w-[460px] h-auto" />
          </div>

          <!-- Floating chip: AI -->
          <div
            class="hidden md:flex absolute -bottom-4 -left-4 items-center gap-2 px-3 py-2 rounded-2xl shadow-lg ring-1"
            style="background-color: white; --tw-ring-color: rgba(124,144,130,0.15);">
            <span class="w-8 h-8 rounded-xl flex items-center justify-center text-white"
              style="background-color: var(--color-primary);">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
                <path
                  d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12H156V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z" />
              </svg>
            </span>
            <div class="leading-tight">
              <p class="text-xs font-semibold" style="color: var(--color-ink);">Jeannot AI</p>
              <p class="text-[11px]" style="color: var(--color-ink-soft);">Always one tap away</p>
            </div>
          </div>

          <!-- Floating chip: Moon -->
          <div class="hidden md:flex absolute -top-3 -right-4 items-center gap-2 px-3 py-2 rounded-2xl shadow-lg ring-1"
            style="background-color: white; --tw-ring-color: rgba(124,144,130,0.15);">
            <span class="w-8 h-8 rounded-xl flex items-center justify-center text-white"
              style="background-color: var(--color-ink);">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
                <path
                  d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z" />
              </svg>
            </span>
            <div class="leading-tight">
              <p class="text-xs font-semibold" style="color: var(--color-ink);">Lunar calendar</p>
              <p class="text-[11px]" style="color: var(--color-ink-soft);">Plan with the moon</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================  WHAT'S NEW  ===================== -->
    <section id="whats-new" class="py-16 md:py-24 relative" style="background-color: white;">
      <div class="max-w-7xl mx-auto px-5 md:px-8">
        <div class="max-w-3xl mb-10 md:mb-14">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style="color: var(--color-primary);">
            {{ $t('home.whatsNew.eyebrow') }}
          </p>
          <h2 class="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4" style="color: var(--color-ink);">
            {{ $t('home.whatsNew.title') }}
          </h2>
          <p class="text-lg leading-relaxed" style="color: var(--color-ink-soft);">
            {{ $t('home.whatsNew.description') }}
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <article v-for="(item, i) in whatsNew" :key="`whats-new-${i}`"
            class="relative p-6 rounded-2xl border transition-all duration-300 ease-fluid hover:-translate-y-1 hover:shadow-lg"
            :style="{ backgroundColor: 'var(--color-background)', borderColor: 'rgba(124,144,130,0.18)' }">
            <span class="inline-flex items-center justify-center w-9 h-9 rounded-xl text-white mb-4"
              style="background-color: var(--color-primary);">
              <span class="text-xs font-bold">{{ String(i + 1).padStart(2, '0') }}</span>
            </span>
            <h3 class="font-display font-semibold text-lg mb-2" style="color: var(--color-ink);">{{ item.title }}</h3>
            <p class="text-sm leading-relaxed" style="color: var(--color-ink-soft);">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- =====================  FEATURES  ===================== -->
    <section id="features" class="py-16 md:py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-grain -z-10"></div>

      <div class="max-w-7xl mx-auto px-5 md:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style="color: var(--color-primary);">
            {{ $t('nav.features') }}
          </p>
          <h2 class="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4" style="color: var(--color-ink);">
            {{ $t('home.features.title') }}
          </h2>
          <p class="text-lg leading-relaxed" style="color: var(--color-ink-soft);">
            {{ $t('home.features.description') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Feature card -->
          <article v-for="(feature, i) in features" :key="`feature-${i}`"
            class="group relative rounded-2xl overflow-hidden border bg-white transition-all duration-500 ease-fluid hover:-translate-y-1 hover:shadow-xl"
            style="border-color: rgba(124,144,130,0.18);">
            <div class="p-6 pb-0">
              <div class="flex items-center gap-3 mb-4">
                <span
                  class="inline-flex items-center justify-center w-11 h-11 rounded-2xl text-white shadow-sm transition-transform duration-500 ease-snappy group-hover:scale-110"
                  style="background-color: var(--color-primary);">
                  <!-- Icon by feature index -->
                  <template v-if="i === 0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256"
                      fill="currentColor">
                      <path
                        d="M247.63,47.89a8,8,0,0,0-7.52-7.52c-51.76-3-93.4,10.74-114.27,37.69-14.81,19.13-18.16,43.32-9.86,67.83a87.88,87.88,0,0,0-22.34,33.85C81.5,159.74,53.55,128,16,128a8,8,0,0,0-8,8c0,37.55,31.74,65.5,51.74,77.64a87.88,87.88,0,0,0,33.85,22.34,87.74,87.74,0,0,0,2,12.61,8,8,0,0,0,15.5-4c-6-23.36-1.74-46.61,12-65.4a8,8,0,1,0-12.88-9.47,89.9,89.9,0,0,0-12.81,24.07,71.92,71.92,0,0,1-15.34-15.34A89.9,89.9,0,0,0,124.5,150c8.8-3.4,16.6-8.05,23.07-13.83a8,8,0,0,0-10.66-11.94,71.93,71.93,0,0,1-11.62,8.61c-3.95-15.27.27-29.85,10.49-43.05C153.31,69.41,189,57.5,232.45,55.55,230.5,99,218.59,134.69,200.21,150.22c-13.2,10.22-27.78,14.44-43.05,10.49a71.93,71.93,0,0,1,8.61-11.62A8,8,0,0,0,153.83,138.5c-5.78,6.47-10.43,14.27-13.83,23.07a89.9,89.9,0,0,0,18.51,7.86c-18.79,13.7-42,17.94-65.4,12a8,8,0,0,0-4,15.5A105,105,0,0,0,121,200c33.16,0,62.2-16.32,84.13-37.69C232,141.45,245.74,99.65,247.63,47.89Z" />
                    </svg>
                  </template>
                  <template v-else-if="i === 1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256"
                      fill="currentColor">
                      <path
                        d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12H156V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z" />
                    </svg>
                  </template>
                  <template v-else-if="i === 2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256"
                      fill="currentColor">
                      <path
                        d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z" />
                    </svg>
                  </template>
                  <template v-else-if="i === 3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256"
                      fill="currentColor">
                      <path
                        d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z" />
                    </svg>
                  </template>
                  <template v-else-if="i === 4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256"
                      fill="currentColor">
                      <path
                        d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24ZM200,184H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200ZM96,80a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,80Zm0,32a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,112Z" />
                    </svg>
                  </template>
                  <template v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256"
                      fill="currentColor">
                      <path
                        d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-32.6-89.94-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L113.74,157l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                  </template>
                </span>
                <span class="text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style="color: var(--color-primary-dark);">
                  {{ feature.eyebrow }}
                </span>
              </div>

              <h3 class="font-display text-xl font-semibold mb-2" style="color: var(--color-ink);">
                {{ feature.title }}
              </h3>
              <p class="text-sm leading-relaxed mb-5" style="color: var(--color-ink-soft);">
                {{ feature.description }}
              </p>
            </div>

            <div class="px-6 pb-6">
              <div class="aspect-video rounded-xl overflow-hidden ring-1 transition-shadow duration-300"
                style="--tw-ring-color: rgba(124,144,130,0.15); background-color: var(--color-surface);">
                <img :src="`/assets/${locale}/screenshots/screenshot-${i}.jpg`" :alt="feature.title"
                  class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-fluid"
                  loading="lazy" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>





    <!-- =====================  BILINGUAL  ===================== -->
    <section class="py-12 md:py-16" style="background-color: var(--color-background);">
      <div class="max-w-7xl mx-auto px-5 md:px-8">
        <div
          class="rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 border"
          style="background-color: var(--color-secondary); border-color: rgba(124,144,130,0.25);">
          <div class="flex-shrink-0 flex items-center gap-2">
            <span class="font-display text-3xl font-bold px-4 py-2 rounded-2xl shadow-sm"
              style="background-color: white; color: var(--color-primary-dark);">FR</span>
            <span class="font-display text-3xl font-bold" style="color: var(--color-primary-dark);">·</span>
            <span class="font-display text-3xl font-bold px-4 py-2 rounded-2xl shadow-sm"
              style="background-color: white; color: var(--color-primary-dark);">EN</span>
          </div>
          <div class="flex-1">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] mb-1" style="color: var(--color-primary-dark);">
              {{ $t('home.bilingual.eyebrow') }}
            </p>
            <h3 class="font-display text-2xl md:text-3xl font-bold tracking-tight mb-2"
              style="color: var(--color-ink);">
              {{ $t('home.bilingual.title') }}
            </h3>
            <p class="text-base" style="color: var(--color-ink-soft);">
              {{ $t('home.bilingual.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================  SCREENSHOTS  ===================== -->
    <section class="py-16 md:py-20" style="background-color: white;">
      <div class="max-w-7xl mx-auto px-5 md:px-8">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight mb-3" style="color: var(--color-ink);">
            {{ $t('home.seeJeannotInAction.title') }}
          </h2>
          <p class="text-base md:text-lg" style="color: var(--color-ink-soft);">
            {{ $t('home.seeJeannotInAction.description') }}
          </p>
        </div>

        <div class="flex overflow-x-auto pb-6 gap-5 snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide">
          <div v-for="i in 6" :key="`preview-${i - 1}`" class="flex-shrink-0 w-[260px] md:w-[300px] snap-center">
            <div class="rounded-3xl overflow-hidden shadow-xl ring-1"
              style="--tw-ring-color: rgba(124,144,130,0.2); background-color: var(--color-secondary);">
              <img :src="`/assets/${locale}/preview-${i - 1}.png`" :alt="`Preview ${i}`" class="w-full h-auto block"
                loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================  DOWNLOAD CTA  ===================== -->
    <section id="download" class="py-16 md:py-24 text-white w-full relative overflow-hidden"
      style="background-color: var(--color-primary);">
      <div class="absolute inset-0 opacity-10"
        style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px;">
      </div>
      <div class="max-w-4xl mx-auto px-5 md:px-8 relative">
        <div class="text-center mb-10">
          <h2 class="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {{ $t('home.downloadSection.title') }}
          </h2>
          <p class="text-lg opacity-95 max-w-2xl mx-auto">
            {{ $t('home.downloadSection.description') }}
          </p>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-3 max-w-xl mx-auto">
          <a href="https://apps.apple.com/us/app/jeannot/id6749574145" target="_blank"
            class="flex-1 bg-white hover:bg-gray-50 font-semibold py-3.5 px-5 rounded-xl text-center inline-flex items-center justify-center gap-2 transition-all duration-300 ease-snappy hover:-translate-y-0.5 shadow-md"
            style="color: var(--color-primary-dark);">
            <svg viewBox="0 0 24 24" class="w-5 h-5">
              <path fill="currentColor"
                d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
            {{ $t('home.downloadSection.store.ios') }}
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.jeannot.app" target="_blank"
            class="flex-1 bg-white hover:bg-gray-50 font-semibold py-3.5 px-5 rounded-xl text-center inline-flex items-center justify-center gap-2 transition-all duration-300 ease-snappy hover:-translate-y-0.5 shadow-md"
            style="color: var(--color-primary-dark);">
            <svg viewBox="0 0 24 24" class="w-5 h-5">
              <path fill="currentColor"
                d="M16.61 15.15C16.15 15.15 15.77 14.78 15.77 14.32S16.15 13.5 16.61 13.5H16.61C17.07 13.5 17.45 13.86 17.45 14.32C17.45 14.78 17.07 15.15 16.61 15.15M7.41 15.15C6.95 15.15 6.57 14.78 6.57 14.32C6.57 13.86 6.95 13.5 7.41 13.5H7.41C7.87 13.5 8.24 13.86 8.24 14.32C8.24 14.78 7.87 15.15 7.41 15.15M16.91 10.14L18.58 7.26C18.67 7.09 18.61 6.88 18.45 6.79C18.28 6.69 18.07 6.75 18 6.92L16.29 9.83C14.95 9.22 13.5 8.9 12 8.91C10.47 8.91 9 9.24 7.73 9.82L6.04 6.91C5.95 6.74 5.74 6.68 5.57 6.78C5.4 6.87 5.35 7.08 5.44 7.25L7.1 10.13C4.25 11.69 2.29 14.58 2 18H22C21.72 14.59 19.77 11.7 16.91 10.14H16.91Z" />
            </svg>
            {{ $t('home.downloadSection.store.android') }}
          </a>
        </div>
      </div>
    </section>

    <!-- =====================  STICKY MOBILE CTA  ===================== -->
    <div class="mobile-cta-bar md:hidden px-4 py-3">
      <div class="flex gap-2">
        <a href="https://apps.apple.com/us/app/jeannot/id6749574145" target="_blank"
          class="flex-1 bg-black text-white font-semibold py-3 px-3 rounded-xl text-center inline-flex items-center justify-center gap-1.5 text-sm">
          <svg viewBox="0 0 24 24" class="w-4 h-4">
            <path fill="currentColor"
              d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
          </svg>
          App Store
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.jeannot.app" target="_blank"
          class="flex-1 text-white font-semibold py-3 px-3 rounded-xl text-center inline-flex items-center justify-center gap-1.5 text-sm"
          style="background-color: var(--color-primary);">
          <svg viewBox="0 0 24 24" class="w-4 h-4">
            <path fill="currentColor"
              d="M16.61 15.15C16.15 15.15 15.77 14.78 15.77 14.32S16.15 13.5 16.61 13.5H16.61C17.07 13.5 17.45 13.86 17.45 14.32C17.45 14.78 17.07 15.15 16.61 15.15M7.41 15.15C6.95 15.15 6.57 14.78 6.57 14.32C6.57 13.86 6.95 13.5 7.41 13.5H7.41C7.87 13.5 8.24 13.86 8.24 14.32C8.24 14.78 7.87 15.15 7.41 15.15M16.91 10.14L18.58 7.26C18.67 7.09 18.61 6.88 18.45 6.79C18.28 6.69 18.07 6.75 18 6.92L16.29 9.83C14.95 9.22 13.5 8.9 12 8.91C10.47 8.91 9 9.24 7.73 9.82L6.04 6.91C5.95 6.74 5.74 6.68 5.57 6.78C5.4 6.87 5.35 7.08 5.44 7.25L7.1 10.13C4.25 11.69 2.29 14.58 2 18H22C21.72 14.59 19.77 11.7 16.91 10.14H16.91Z" />
          </svg>
          Google Play
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
