<script setup lang="ts">
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const toUppercase = (locale: string) => locale.toUpperCase();
</script>

<template>
  <div class="font-sans min-h-screen w-full mx-auto" style="background-color: var(--color-background); color: var(--color-ink);">
    <!-- Navigation -->
    <nav class="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--color-background)]/80 border-b border-[color:var(--color-primary)]/15">
      <div class="mx-auto px-5 md:px-8 py-4 flex justify-between items-center w-full max-w-7xl">
        <a href="/" class="flex items-center group">
          <img src="/assets/icon-only.png" alt="Jeannot Logo" class="h-10 w-auto transition-transform duration-300 ease-fluid group-hover:rotate-[-4deg]" />
          <span class="ml-3 text-xl md:text-2xl font-semibold font-display tracking-tight" style="color: var(--color-ink);">Jeannot</span>
          <span class="ml-2 hidden sm:inline-flex items-center text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full" style="background-color: var(--color-secondary); color: var(--color-primary-dark);">v2.0</span>
        </a>

        <div class="hidden md:flex items-center space-x-7">
          <a href="/#whats-new" class="text-sm font-medium hover:text-[color:var(--color-primary)] ease-fluid transition-colors" style="color: var(--color-ink-soft);">{{ $t('nav.whatsNew') }}</a>
          <a href="/#features" class="text-sm font-medium hover:text-[color:var(--color-primary)] ease-fluid transition-colors" style="color: var(--color-ink-soft);">{{ $t('nav.features') }}</a>
          <a href="/#identity" class="text-sm font-medium hover:text-[color:var(--color-primary)] ease-fluid transition-colors" style="color: var(--color-ink-soft);">{{ $t('nav.identity') }}</a>
          <a href="/support" class="text-sm font-medium hover:text-[color:var(--color-primary)] ease-fluid transition-colors" style="color: var(--color-ink-soft);" v-if="$i18n.locale === 'en'">{{ $t('nav.support') }}</a>
          <a href="/fr/support" class="text-sm font-medium hover:text-[color:var(--color-primary)] ease-fluid transition-colors" style="color: var(--color-ink-soft);" v-if="$i18n.locale === 'fr'">{{ $t('nav.support') }}</a>

          <div class="locale-changer">
            <select v-model="$i18n.locale" aria-label="Language">
              <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
                {{ toUppercase(locale) }}
              </option>
            </select>
          </div>

          <a href="/#download" class="inline-flex items-center gap-1.5 text-sm font-semibold py-2 px-4 rounded-full text-white shadow-sm hover:shadow-md transition-all duration-300 ease-snappy hover:-translate-y-0.5"
             style="background-color: var(--color-primary);">
            <!-- Phosphor: Download -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"/></svg>
            {{ $t('nav.download') }}
          </a>
        </div>

        <div class="md:hidden flex items-center gap-3">
          <div class="locale-changer">
            <select v-model="$i18n.locale" aria-label="Language">
              <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
                {{ toUppercase(locale) }}
              </option>
            </select>
          </div>
          <button @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Menu"
                  class="p-2 rounded-lg" style="color: var(--color-ink);">
            <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/></svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden px-5 py-4 shadow-lg border-b border-[color:var(--color-primary)]/15" style="background-color: var(--color-background);">
      <div class="flex flex-col space-y-1">
        <a href="/#whats-new" class="py-2 text-base font-medium" @click="mobileMenuOpen = false" style="color: var(--color-ink-soft);">{{ $t('nav.whatsNew') }}</a>
        <a href="/#features" class="py-2 text-base font-medium" @click="mobileMenuOpen = false" style="color: var(--color-ink-soft);">{{ $t('nav.features') }}</a>
        <a href="/#identity" class="py-2 text-base font-medium" @click="mobileMenuOpen = false" style="color: var(--color-ink-soft);">{{ $t('nav.identity') }}</a>
        <a v-if="$i18n.locale === 'en'" href="/support" class="py-2 text-base font-medium" @click="mobileMenuOpen = false" style="color: var(--color-ink-soft);">{{ $t('nav.support') }}</a>
        <a v-if="$i18n.locale === 'fr'" href="/fr/support" class="py-2 text-base font-medium" @click="mobileMenuOpen = false" style="color: var(--color-ink-soft);">{{ $t('nav.support') }}</a>
        <a href="/#download" class="mt-2 inline-flex items-center justify-center gap-1.5 text-sm font-semibold py-3 px-4 rounded-full text-white" style="background-color: var(--color-primary);" @click="mobileMenuOpen = false">
          {{ $t('nav.download') }}
        </a>
      </div>
    </div>

    <router-view />

    <!-- Footer -->
    <footer class="text-white py-14 w-full" style="background-color: #2f3a32;">
      <div class="max-w-7xl mx-auto px-5 md:px-8">
        <div class="grid md:grid-cols-4 gap-10">
          <div class="md:col-span-1">
            <div class="flex items-center mb-4">
              <img src="/assets/logo-jeannot.png" alt="Jeannot Logo" class="h-10 w-auto" />
              <span class="ml-3 text-xl font-semibold font-display">Jeannot</span>
            </div>
            <p class="text-sm leading-relaxed" style="color: #c9d1c5;">
              {{ $t('footer.description') }}
            </p>
          </div>

          <div>
            <h3 class="text-base font-semibold mb-4 font-display">{{ $t('footer.quickLinks') }}</h3>
            <ul class="space-y-2.5">
              <li><a href="/#features" class="text-sm hover:text-white transition-colors" style="color: #c9d1c5;">{{ $t('footer.features') }}</a></li>
              <li><a href="/#whats-new" class="text-sm hover:text-white transition-colors" style="color: #c9d1c5;">{{ $t('nav.whatsNew') }}</a></li>
              <li><a href="/#download" class="text-sm hover:text-white transition-colors" style="color: #c9d1c5;">{{ $t('footer.download') }}</a></li>
              <li><a href="/support" class="text-sm hover:text-white transition-colors" style="color: #c9d1c5;">{{ $t('footer.support') }}</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-base font-semibold mb-4 font-display">{{ $t('footer.legal') }}</h3>
            <ul class="space-y-2.5">
              <li><a href="privacy-policies.html" class="text-sm hover:text-white transition-colors" style="color: #c9d1c5;">{{ $t('footer.privacyPolicies') }}</a></li>
              <li v-if="$i18n.locale === 'en'"><a href="/support" class="text-sm hover:text-white transition-colors" style="color: #c9d1c5;">{{ $t('footer.support') }}</a></li>
              <li v-if="$i18n.locale === 'fr'"><a href="/fr/support" class="text-sm hover:text-white transition-colors" style="color: #c9d1c5;">{{ $t('footer.support') }} (fr)</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-base font-semibold mb-4 font-display">{{ $t('footer.contact') }}</h3>
            <ul class="space-y-2.5">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" fill="currentColor" class="mr-2 mt-0.5" style="color: #c9d1c5;">
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,16v.91l-88,79.59L40,64.91V64ZM40,192V86.66L122.62,162a8,8,0,0,0,10.76,0L216,86.66V192Z"/>
                </svg>
                <a href="mailto:contact@jeannot.app" class="text-sm hover:text-white transition-colors" style="color: #c9d1c5;">contact@jeannot.app</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center" style="border-color: rgba(201, 209, 197, 0.18);">
          <p class="text-xs" style="color: #a8b0a5;">
            &copy; {{ new Date().getFullYear() }} Jeannot. Gaiadet SAS — {{ $t('footer.allRightsReserved') }}.
          </p>
          <p class="text-xs mt-2 md:mt-0" style="color: #a8b0a5;">
            Made with care for gardeners · v2.0
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
