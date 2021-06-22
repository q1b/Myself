<template>
  <section
    class="
      min-h-[120vh]
      bg-blueGray-900
      flex flex-col
      justify-center
      place-items-center
      w-full
    "
  >
    <button
      type="button"
      class="
        focus:outline-none
        focus:ring-4
        ring-blueGray-700
        focus:border-none
        border-2
        px-3
        py-1.5
        rounded-lg
        bg-blueGray-900
        text-blueGray-400
        focus:bg-blueGray-500
        hover:bg-blueGray-500
        focus:text-white
        hover:text-white
        transition-colors
        duration-300
        ease-in-out
        mb-2
      "
      @click="modelOpen = true"
    >
      Open Model
    </button>
    <teleport to="body">
      <anouncement-model
        v-model:show="modelOpen"
        :preventBackgroundScrolling="preventBackgroundScrolling"
      >
        <template v-slot:header>
          {{ header }}
        </template>
        <template v-slot:content>
          {{ content }}
        </template>
      </anouncement-model>
    </teleport>
    <h1 class="mb-2 text-xl text-white">Prevent Background Scrolling</h1>
    <toggle-button
      v-model:preventBackgroundScrolling="preventBackgroundScrolling"
    ></toggle-button>
  </section>
</template>

<script>
import AnouncementModel from './components/AnouncementModel.vue'
import ToggleButton from './components/toggleScrolling.vue'

export default {
  props: ['header', 'content'],
  components: {
    AnouncementModel,
    ToggleButton,
  },
  data() {
    return {
      modelOpen: false,
      preventBackgroundScrolling: true,
    }
  },
}
</script>

<style></style>
