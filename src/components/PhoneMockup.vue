<template>
  <div class="relative mx-auto w-[260px] sm:w-[280px]">
    <div
      class="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand/20 via-brand-soft to-transparent blur-2xl"
    />
    <div class="relative overflow-hidden rounded-[2rem] border-[6px] border-text bg-text shadow-2xl">
      <div class="bg-brand-soft px-4 pb-2 pt-3">
        <div class="mx-auto h-1 w-16 rounded-full bg-text/20" />
      </div>
      <div class="bg-surface px-4 pb-5 pt-3">
        <div class="flex items-center justify-between">
          <img
            :src="logoSrc"
            alt="Safet"
            class="h-7 w-7 rounded-lg object-cover"
          />
          <div class="h-7 w-7 rounded-full bg-brand-soft" />
        </div>
        <p class="mt-3 text-xs font-semibold text-text">Свежие продукты</p>
        <p class="text-[10px] text-text-secondary">Доставка сегодня · 14:00–16:00</p>

        <div class="mt-4 space-y-2">
          <div
            v-for="item in items"
            :key="item.name"
            class="flex items-center gap-2.5 rounded-xl border border-border bg-white p-2.5"
          >
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg"
              :class="item.bg"
            >
              {{ item.emoji }}
            </div>
            <div class="min-w-0 flex-1">
              <p class="truncate text-[11px] font-semibold text-text">{{ item.name }}</p>
              <p class="text-[10px] text-text-secondary">{{ item.price }}</p>
            </div>
            <div class="rounded-md bg-brand px-2 py-0.5 text-[10px] font-bold text-white">
              +1
            </div>
          </div>
        </div>

        <div class="mt-4 rounded-xl bg-brand px-3 py-2.5 text-center text-xs font-bold text-white">
          Оформить · 87 500 сум
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const logoSrc = `${import.meta.env.BASE_URL}app.png`

const items = [
  { name: 'Молоко 1 л', price: '12 000 сум', emoji: '🥛', bg: 'bg-blue-50' },
  { name: 'Хлеб белый', price: '5 500 сум', emoji: '🍞', bg: 'bg-amber-50' },
  { name: 'Яблоки 1 кг', price: '18 000 сум', emoji: '🍎', bg: 'bg-red-50' },
]
</script>
