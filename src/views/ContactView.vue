<script setup>
import PageLayout from '../components/PageLayout.vue'
</script>

<template>
  <PageLayout title="Контакты" subtitle="Служба поддержки Safet" :show-legal-band="false">
    <div class="grid gap-4 sm:grid-cols-2">
      <div class="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-dark">
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <p class="text-xs font-semibold uppercase tracking-wide text-text-muted">Телефон</p>
        <a href="tel:+998901234567" class="mt-1 block text-lg font-bold text-brand-dark">
          +998 90 123 45 67
        </a>
        <p class="mt-1 text-sm text-text-secondary">Ежедневно, 09:00–21:00 (GMT+5)</p>
      </div>

      <div class="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-dark">
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 6l-10 7L2 6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <p class="text-xs font-semibold uppercase tracking-wide text-text-muted">Email</p>
        <a href="mailto:support@safet.uz" class="mt-1 block text-base font-semibold text-brand-dark">
          support@safet.uz
        </a>
      </div>

      <div class="rounded-2xl border border-border bg-white p-6 shadow-sm sm:col-span-2">
        <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-dark">
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
          </svg>
        </div>
        <p class="text-xs font-semibold uppercase tracking-wide text-text-muted">Telegram</p>
        <a
          href="https://t.me/safet_support"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-1 block text-base font-semibold text-brand-dark"
        >
          @safet_support
        </a>
      </div>
    </div>

    <p class="mt-6 text-sm leading-relaxed text-text-secondary">
      При обращении укажите номер телефона аккаунта и, если возможно, номер заказа —
      так мы быстрее поможем.
    </p>
  </PageLayout>
</template>
