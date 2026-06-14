<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: { type: String, default: 'md' },
})

const padClass = computed(() =>
  props.size === 'sm' ? 'px-3 py-2 text-xs' : 'px-4 py-2.5 text-sm',
)
const iconClass = computed(() =>
  props.size === 'sm' ? 'h-5 w-5' : 'h-6 w-6',
)
const gapClass = computed(() => (props.size === 'sm' ? 'gap-2' : 'gap-3'))
</script>

<template>
  <div class="flex flex-wrap" :class="gapClass">
    <!-- App Store — dark badge -->
    <a
      href="#"
      class="inline-flex items-center gap-2.5 rounded-xl bg-[#0f172a] text-white transition hover:bg-[#1e293b]"
      :class="padClass"
    >
      <svg viewBox="0 0 24 24" class="shrink-0" :class="iconClass" fill="currentColor">
        <path
          d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
        />
      </svg>
      <span>
        <span class="block text-[10px] leading-none opacity-80">Download on the</span>
        <span class="font-semibold">App Store</span>
      </span>
    </a>

    <!-- Google Play — white badge + multicolor icon -->
    <a
      href="#"
      class="inline-flex items-center gap-2.5 rounded-xl border border-[#dadce0] bg-white text-[#3c4043] shadow-sm transition hover:bg-[#f8f9fa]"
      :class="padClass"
    >
      <svg viewBox="0 0 24 24" class="shrink-0" :class="iconClass" aria-hidden="true">
        <path fill="#EA4335" d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12 3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" />
        <path fill="#FBBC04" d="M16.81 15.12 6.05 21.34 14.54 12.85 16.81 15.12Z" />
        <path fill="#4285F4" d="M20.16 10.81c.34.27.59.68.59 1.19 0 .5-.25.92-.59 1.19L17.89 14.5 15.39 12l2.5-2.5 2.29-1.32Z" />
        <path fill="#34A853" d="M6.05 2.66 16.81 8.88 14.54 11.15 6.05 2.66Z" />
      </svg>
      <span>
        <span class="block text-[10px] leading-none text-[#5f6368]">Get it on</span>
        <span class="font-semibold text-[#202124]">Google Play</span>
      </span>
    </a>
  </div>
</template>
