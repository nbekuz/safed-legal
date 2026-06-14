<script setup>
import { RouterLink, useRoute } from 'vue-router'
import AppLogo from './AppLogo.vue'

const route = useRoute()

const nav = [
  { to: '/', label: 'Главная', exact: true },
  { to: '/privacy', label: 'Конфиденциальность' },
  { to: '/terms', label: 'Условия' },
  { to: '/contact', label: 'Контакты' },
]

function isActive(item) {
  return item.exact ? route.path === '/' : route.path === item.to
}
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-border/80 bg-white/90 backdrop-blur-lg">
    <div
      class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8"
    >
      <RouterLink to="/">
        <AppLogo />
      </RouterLink>

      <nav class="hidden items-center gap-1 md:flex">
        <RouterLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="rounded-full px-4 py-2 text-sm font-medium transition-all"
          :class="
            isActive(item)
              ? 'bg-brand-soft text-brand-dark'
              : 'text-text-secondary hover:bg-surface-grey hover:text-text'
          "
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <RouterLink
        to="/contact"
        class="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
      >
        Поддержка
      </RouterLink>
    </div>

    <nav class="flex gap-1.5 overflow-x-auto border-t border-border/60 px-4 py-2 md:hidden">
      <RouterLink
        v-for="item in nav"
        :key="item.to"
        :to="item.to"
        class="shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors"
        :class="
          isActive(item) ? 'bg-brand text-white' : 'bg-surface-grey text-text-secondary'
        "
      >
        {{ item.label }}
      </RouterLink>
    </nav>
  </header>
</template>
