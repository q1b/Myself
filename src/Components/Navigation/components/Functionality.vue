<template>
  <button
    @click="dismiss(), changeIcon(), changeTheme()"
    class="flex flex-col place-items-center focus:outline-none"
    :class="[
      'transition-max-height',
      !show
        ? 'z-40 max-h-11 h-11 py-2 gap-y-2 focus:outline-none '
        : '!max-h-0',
    ]"
  >
    <slot name="icon"></slot>
  </button>
</template>

<script>
export default {
  props: {
    show: { required: true },
    isDarkTheme: { required: true },
  },
  methods: {
    dismiss() {
      this.$emit('update:show', !this.show)
    },
    changeIcon() {
      this.$emit('update:isDarkTheme', !this.isDarkTheme)
    },
    changeTheme() {
      if (this.isDarkTheme) {
        document.body.classList.remove('light')
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
        document.body.classList.add('light')
      }
    },
  },
}
</script>

<style></style>
