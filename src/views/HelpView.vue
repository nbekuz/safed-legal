<script setup>
import PageLayout from '../components/PageLayout.vue'
import { RouterLink } from 'vue-router'

const faq = [
  {
    q: 'Как оформить заказ в Safed?',
    a: 'Откройте каталог, добавьте товары в корзину, укажите адрес и время доставки, выберите способ оплаты и подтвердите заказ.',
  },
  {
    q: 'Как отменить или изменить заказ?',
    a: 'Пока заказ не передан в сборку, отмена доступна в приложении. После начала сборки свяжитесь с поддержкой.',
  },
  {
    q: 'Не приходит SMS с кодом входа',
    a: 'Проверьте номер телефона и качество связи. Подождите 1–2 минуты и запросите код повторно.',
  },
  {
    q: 'Курьер не может найти адрес',
    a: 'Уточните адрес в профиле, добавьте ориентир в комментарий к заказу и будьте на связи по телефону.',
  },
  {
    q: 'Как оплатить заказ?',
    a: 'Доступные способы оплаты отображаются при оформлении — карта, Click или другие методы в вашем регионе.',
  },
  {
    q: 'Как связаться с поддержкой?',
    a: 'Напишите через чат в приложении или используйте раздел «Контакты» на этом сайте.',
  },
]
</script>

<template>
  <PageLayout
    title="Помощь"
    subtitle="Ответы на частые вопросы о приложении Safed."
    :show-legal-band="false"
  >
    <div class="space-y-3">
      <details
        v-for="(item, i) in faq"
        :key="i"
        class="group rounded-2xl border border-border bg-white open:border-brand/30 open:shadow-sm"
      >
        <summary
          class="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-text marker:content-none sm:text-base"
        >
          <span class="flex items-start justify-between gap-3">
            {{ item.q }}
            <span
              class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-dark transition-transform group-open:rotate-45"
            >
              +
            </span>
          </span>
        </summary>
        <p class="border-t border-border/60 px-5 pb-4 pt-3 text-sm leading-relaxed text-text-secondary">
          {{ item.a }}
        </p>
      </details>
    </div>

    <p class="mt-8 text-sm text-text-secondary">
      Не нашли ответ?
      <RouterLink to="/contact" class="font-semibold text-brand-dark underline">
        Напишите нам
      </RouterLink>.
    </p>
  </PageLayout>
</template>
