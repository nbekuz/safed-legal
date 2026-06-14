<script setup>
import { RouterLink } from 'vue-router'
import StoreButtons from './StoreButtons.vue'
</script>

<template>
  <section class="bg-brand px-4 py-14 sm:py-16">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
        Скачать Safet
      </h2>
      <p class="mt-2 text-sm text-white/85 sm:text-base">
        Доступно для iOS и Android
      </p>
      <div class="mt-8 flex justify-center">
        <StoreButtons />
      </div>
    </div>
  </section>

  <section class="bg-white px-4 py-14 sm:py-16">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-2xl font-extrabold tracking-tight text-text sm:text-3xl">
        Правовая информация
      </h2>
      <p class="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
        Политика конфиденциальности, условия использования и контакты службы
        поддержки приложения Safet.
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <RouterLink
          to="/privacy"
          class="rounded-full border border-border bg-white px-6 py-2.5 text-sm font-semibold text-text shadow-sm transition hover:border-brand/40 hover:bg-brand-soft"
        >
          Политика конфиденциальности
        </RouterLink>
        <RouterLink
          to="/terms"
          class="rounded-full border border-border bg-white px-6 py-2.5 text-sm font-semibold text-text shadow-sm transition hover:border-brand/40 hover:bg-brand-soft"
        >
          Условия использования
        </RouterLink>
      </div>
    </div>
  </section>
</template>
