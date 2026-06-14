<script setup>
import { RouterLink } from 'vue-router'
import StoreButtons from './StoreButtons.vue'
import AppLogo from './AppLogo.vue'
</script>

<template>
  <footer class="border-t border-border bg-white">
    <div class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <RouterLink to="/">
            <AppLogo name-class="text-base font-bold text-text" />
          </RouterLink>
          <p class="mt-3 text-sm font-medium text-brand-dark">
            Safet © {{ new Date().getFullYear() }}. Все права защищены.
          </p>
        </div>

        <div class="flex flex-col items-start gap-4 sm:items-end">
          <StoreButtons size="sm" />
          <div class="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-secondary">
            <RouterLink to="/help" class="hover:text-brand-dark">Помощь</RouterLink>
            <span class="text-border">|</span>
            <RouterLink to="/privacy" class="hover:text-brand-dark">Конфиденциальность</RouterLink>
            <span class="text-border">|</span>
            <RouterLink to="/terms" class="hover:text-brand-dark">Условия</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
