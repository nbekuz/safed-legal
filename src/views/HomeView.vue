<script setup>
import { RouterLink } from 'vue-router'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import LegalSections from '../components/LegalSections.vue'
import StoreButtons from '../components/StoreButtons.vue'
import PhoneMockup from '../components/PhoneMockup.vue'

const features = [
  {
    title: 'Заказ в приложении',
    text: 'Выбирайте продукты из каталога, добавляйте в корзину и оформляйте доставку за пару минут.',
    icon: 'bag',
  },
  {
    title: 'Отслеживание доставки',
    text: 'Следите за статусом заказа — от сборки на складе до прибытия курьера.',
    icon: 'truck',
  },
  {
    title: 'Чат с поддержкой',
    text: 'Задайте вопрос оператору прямо в приложении, если нужна помощь с заказом.',
    icon: 'chat',
  },
  {
    title: 'Безопасная оплата',
    text: 'Оплачивайте удобным способом — картой или другими доступными методами.',
    icon: 'card',
  },
]

const steps = [
  {
    num: '01',
    title: 'Выберите товары',
    text: 'Откройте каталог Safet, добавьте нужные продукты в корзину.',
  },
  {
    num: '02',
    title: 'Оформите заказ',
    text: 'Укажите адрес, время доставки и способ оплаты.',
  },
  {
    num: '03',
    title: 'Курьер доставит',
    text: 'Мы соберём заказ и привезём его в выбранный интервал.',
  },
  {
    num: '04',
    title: 'Оплатите в приложении',
    text: 'Подтвердите получение и завершите оплату, если ещё не оплатили.',
  },
]
</script>

<template>
  <div class="flex min-h-screen flex-col bg-surface">
    <SiteHeader />

    <!-- Hero -->
    <section class="relative overflow-hidden border-b border-border/60">
      <div
        class="absolute inset-0 bg-gradient-to-br from-brand-soft/80 via-white to-surface"
      />
      <div
        class="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
      />
      <div class="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span
              class="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3.5 py-1.5 text-xs font-semibold text-brand-dark"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-brand" />
              Для покупателей
            </span>
            <h1
              class="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-[3.25rem]"
            >
              Продукты с доставкой,
              <span class="text-brand-dark"> где вы.</span>
            </h1>
            <p class="mt-5 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
              Safet — мобильное приложение для заказа продуктов с доставкой на дом.
              Свежие товары, удобное оформление и прозрачный статус каждого заказа.
            </p>
            <div class="mt-8 flex flex-wrap items-center gap-3">
              <StoreButtons />
              <RouterLink
                to="/contact"
                class="inline-flex items-center rounded-xl border border-border bg-white px-5 py-2.5 text-sm font-semibold text-text shadow-sm transition hover:border-brand/30 hover:bg-brand-soft/50"
              >
                Связаться с поддержкой
              </RouterLink>
            </div>
          </div>
          <div class="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-2xl font-extrabold tracking-tight text-text sm:text-3xl">
            Почему выбирают Safet
          </h2>
          <p class="mt-3 text-sm text-text-secondary sm:text-base">
            Всё необходимое для быстрой и удобной покупки продуктов онлайн.
          </p>
        </div>

        <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="f in features"
            :key="f.title"
            class="rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:border-brand/25 hover:shadow-md"
          >
            <div
              class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-dark"
            >
              <svg v-if="f.icon === 'bag'" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 6h18M16 10a4 4 0 01-8 0" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg v-else-if="f.icon === 'truck'" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 18V6a2 2 0 00-2-2H4a2 2 0 00-2 2v11a1 1 0 001 1h2M14 18H9M14 18h2a1 1 0 001-1v-3.65a1 1 0 00-.22-.624l-3.48-4.18A1 1 0 0012.52 9H14" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" />
              </svg>
              <svg v-else-if="f.icon === 'chat'" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg v-else viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20" stroke-linecap="round" />
              </svg>
            </div>
            <h3 class="text-base font-bold text-text">{{ f.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-text-secondary">{{ f.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="border-y border-border/60 bg-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-2xl font-extrabold tracking-tight text-text sm:text-3xl">
            Как это работает
          </h2>
          <p class="mt-3 text-sm text-text-secondary sm:text-base">
            От выбора продуктов до доставки — четыре простых шага.
          </p>
        </div>

        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="step in steps" :key="step.num" class="text-center lg:text-left">
            <p class="text-4xl font-extrabold text-brand/30">{{ step.num }}</p>
            <h3 class="mt-2 text-base font-bold text-text">{{ step.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-text-secondary">{{ step.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <LegalSections />

    <SiteFooter />
  </div>
</template>
