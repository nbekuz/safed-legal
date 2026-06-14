<script setup>
import SiteHeader from './SiteHeader.vue'
import SiteFooter from './SiteFooter.vue'
import LegalSections from './LegalSections.vue'

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  showLegalBand: { type: Boolean, default: true },
})
</script>

<template>
  <div class="flex min-h-screen flex-col bg-surface">
    <SiteHeader />

    <main class="flex-1">
      <div class="border-b border-border/60 bg-white">
        <div class="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <h1 class="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
            {{ title }}
          </h1>
          <p v-if="subtitle" class="mt-3 text-base text-text-secondary">
            {{ subtitle }}
          </p>
        </div>
      </div>

      <div class="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <article class="prose-content">
          <slot />
        </article>
      </div>

      <LegalSections v-if="showLegalBand" />
    </main>

    <SiteFooter />
  </div>
</template>
