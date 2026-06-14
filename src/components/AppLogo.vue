<script setup>
defineProps({
  size: { type: Number, default: 36 },
  showName: { type: Boolean, default: true },
  nameClass: { type: String, default: 'text-lg font-bold tracking-tight text-text' },
})

const logoSrc = `${import.meta.env.BASE_URL}app.png`
</script>

<template>
  <div class="flex items-center gap-2.5 shrink-0">
    <img
      :src="logoSrc"
      alt="Safet"
      class="rounded-xl object-cover shadow-sm"
      :style="{ width: `${size}px`, height: `${size}px` }"
    />
    <span v-if="showName" :class="nameClass">Safet</span>
  </div>
</template>
