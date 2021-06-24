<template>
  <button
    @click="dismiss"
    class="
      w-11
      h-auto
      flex flex-col
      items-center
      p-0
      focus:outline-none
      rounded-full
      ring-1 ring-sky-500 ring-offset-1 ring-offset-white
    "
  >
    <selector-icon
      :class="[
        'text-white w-auto transition-max-height',
        show ? 'h-16 max-h-16 py-2' : 'max-h-2'
      ]"
    />
  </button>
</template>

<script>
import { SelectorIcon } from '@heroicons/vue/outline'
export default {
  components: { SelectorIcon },
  props: {
    show: { required: true },
  },
  methods: {
    dismiss() {
      this.$emit('update:show',!this.show)
    },
  },
}
</script>

<style></style>
