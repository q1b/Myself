<template>
  <!--   <teleport to="#BackgroundBlur">
    <section
      :class="[
        show ? 'bg-transparent' : 'bg-black/25 backdrop-blur-[0.5px] !z-50',
        'block z-0 min-w-full absolute transition-colors ease-out duration-1000',
      ]"
      :style="{ height: `${windowHeight}px` }"
    ></section>
  </teleport>
 -->
  <header
    :class="[
      right ? 'absolute' : '',
      IsPathHome && right
        ? 'top-0 right-0 h-[400px] xsss:h-[450px] xss:h-[500px] xs:h-[590px]'
        : 'top-0 right-0 h-[400px] xsss:h-[450px] xss:h-[500px] xs:h-[590px]',
      'select-none flex flex-col justify-center md:justify-end items-center group min-w-[96px] md:h-screen md:pb-10 bg-transparent',
    ]"
  >
    <!--h1 class=" top-[190px] xss:top-[210px] xs:top-[260px] sm:top-[260px] "></h1-->
    <section
      :class="[
        right ? 'static' : '',
        'w-12 flex flex-col justify-center items-center z-10 bg-blueGray-900/90 dark:bg-orange-400/90 px-1 max-h-[75%] rounded-3xl backdrop-blur-sm md:mb-10 backdrop-contrast-200 shadow-md border transition-max-height ease-out duration-1000',
      ]"
    >
      <functionality v-model:show="show" v-model:isDarkTheme="isDarkTheme">
        <template #icon>
          <moon-icon
            v-show="!isDarkTheme"
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
          <sun-icon
            v-show="isDarkTheme"
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
        <template #icon>
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
import {
  MoonIcon,
  SunIcon,
  NewspaperIcon,
  HomeIcon,
} from '@heroicons/vue/solid'
import NavToggleButton from './components/NavToggleButton.vue'
import Functionality from './components/Functionality.vue'
import BlogNavigationButton from './components/BlogNavigationButton.vue'
export default {
  components: {
    SunIcon,
    MoonIcon,
    HomeIcon,
    NewspaperIcon,
    NavToggleButton,
    Functionality,
    BlogNavigationButton,
  },
  props: ['right'],
  setup() {
    const router = useRouter()
    const windowHeight = document.body.offsetHeight
    let show = ref(false)
    let IsPathHome = computed(() => {
      if (router.currentRoute.value.path === '/') {
        return true
      } else {
        return false
      }
    })
    //For Instially Light Theme Change THis
    // let isDarkTheme = ref(false)
    let isDarkTheme = ref(true)
    return {
      show,
      IsPathHome,
      windowHeight,
      isDarkTheme,
    }
  },
}
</script>

<style></style>
