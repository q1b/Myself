<template>
      <button @click="dismiss" class="flex flex-col text-blueGray-900 place-items-center "
		:class="[
		'transition-max-height', !show ? 'max-h-11 h-11 py-2 gap-y-2' : '!max-h-0'
		]">
		<slot name="icon"></slot>
      </button>
</template>

<script>
import {SunIcon,ArrowCircleLeftIcon} from '@heroicons/vue/solid';

export default {
	components: {
		SunIcon,ArrowCircleLeftIcon
	},
  props: {
    show: { required: true },
  },
  methods: {
    dismiss() {
      this.$emit('update:show', !this.show)
    },
  },
};
</script>

<style>

</style>