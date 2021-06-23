<template>
  <teleport to="#BackgroundBlur">
    <section
      :class="[
        show ? 'bg-transparent' : 'bg-black/25 backdrop-blur-[0.5px] !z-40',
        'block z-0 min-w-full h-screen absolute transition-colors ease-out duration-1000',
      ]"
    ></section>
  </teleport>

  <header
    ref="draggableContainer"
    id="draggable-container"
    :class="[
      right ? 'absolute top-0 right-0' : 'absolute',
      'select-none flex flex-col justify-center md:justify-end items-center group min-w-[96px] h-[450px] xss:h-[500px] xs:h-[590px] md:h-screen md:pb-10 bg-transparent',
    ]"
  >
    <!--h1 class=" top-[190px] xss:top-[210px] xs:top-[260px] sm:top-[260px] "></h1-->
    <section
      @mousedown="dragMouseDown"
      :class="[
        right ? 'static' : '',
        'w-12 flex flex-col justify-center items-center z-10 bg-blueGray-900/90 dark:bg-orange-400/90 px-1 max-h-[75%] rounded-3xl backdrop-blur-sm md:mb-10 backdrop-contrast-200 shadow-md border transition-max-height ease-out duration-1000',
      ]"
    >
      <functionality v-model:show="show">
        <template v-slot:icon>
          <sun-icon
            class="
              text-white
              hover:text-yellow-400
              w-full
              h-auto
              flex
              transition-opacity
              delay-1000
              duration-700
              ease-out
            "
          />
        </template>
      </functionality>
      <nav-toggle-button v-model:show="show" />
      <BlogNavigationButton v-model:show="show" tag="button">
        <template v-slot:icon>
          <home-icon
            v-show="!IsPathHome"
            class="
              text-white
              hover:text-yellow-400
              w-full
              h-auto
              flex
              transition-opacity
              delay-1000
              duration-700
              ease-out
            "
          ></home-icon>
          <newspaper-icon
            v-show="IsPathHome"
            class="
              text-white
              hover:text-yellow-400
              w-full
              h-auto
              flex
              transition-opacity
              delay-1000
              duration-700
              ease-out
            "
          ></newspaper-icon>
        </template>
      </BlogNavigationButton>
    </section>
  </header>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { SunIcon, NewspaperIcon, HomeIcon } from '@heroicons/vue/solid'
import NavToggleButton from './components/NavToggleButton.vue'
import Functionality from './components/Functionality.vue'
import BlogNavigationButton from './components/BlogNavigationButton.vue'
export default {
  components: {
    SunIcon,
    HomeIcon,
    NewspaperIcon,
    NavToggleButton,
    Functionality,
    BlogNavigationButton,
  },
  props: ['right'],
  setup() {
    const router = useRouter()
    let show = ref(true)
    let IsPathHome = computed(() => {
      if (router.currentRoute.value.path === '/') {
        return true
      } else {
        return false
      }
    })
    // console.log(IsPathHome)
    return {
      show,
      IsPathHome,
    }
  },
  data() {
    return {
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0,
      },
    }
  },
  methods: {
    dragMouseDown: function (event) {
      event.preventDefault()
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      document.onmousemove = this.elementDrag
      document.onmouseup = this.closeDragElement
    },
    elementDrag: function (event) {
      event.preventDefault()
      this.positions.movementX = this.positions.clientX - event.clientX
      this.positions.movementY = this.positions.clientY - event.clientY
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      // set the element's new position:
      this.$refs.draggableContainer.style.top =
        this.$refs.draggableContainer.offsetTop -
        this.positions.movementY +
        'px'
      this.$refs.draggableContainer.style.left =
        this.$refs.draggableContainer.offsetLeft -
        this.positions.movementX +
        'px'
    },
    closeDragElement() {
      document.onmouseup = null
      document.onmousemove = null
    },
  },
}
</script>
<style></style>
