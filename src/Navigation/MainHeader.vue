<template>
  <teleport to="#BackgroundBlur">
        <section v-if="right" :class="[show ?'bg-transparent':'bg-black/25 backdrop-blur-[0.5px]','z-40 w-full h-screen absolute transition-colors ease-out duration-1000']">
        </section>
        <section v-if="!right" :class="[show ?'bg-transparent':'bg-black/25 backdrop-blur-[0.5px]','z-40 w-full h-screen absolute transition-colors ease-out duration-1000']">
        </section>
  </teleport>
    <header :class="[ right ? 'absolute top-0 right-0':'','select-none flex flex-col justify-center md:justify-end items-center group min-w-[96px] h-[450px] xss:h-[500px] xs:h-[590px] md:h-screen md:pb-10 bg-transparent']" >
    <!--h1 class=" top-[190px] xss:top-[210px] xs:top-[260px] sm:top-[260px] "></h1-->
    <section :class="[right ? 'static':'',
    'w-12 flex flex-col justify-center items-center z-10 bg-blueGray-900/90 dark:bg-orange-400/90 px-1 max-h-[75%] rounded-3xl backdrop-blur-sm md:mb-10 backdrop-contrast-200 shadow-md border transition-max-height ease-out duration-1000']">
      <functionality v-model:show="show">
     <template v-slot:icon>
        <sun-icon class="text-white w-full h-auto flex transition-opacity delay-1000 duration-700 ease-out"/>
     </template>
      </functionality>
      <nav-toggle-button v-model:show="show"/>
    <functionality v-model:show="show" >
     <template v-slot:icon>
        <newspaper-icon class="text-white w-full h-auto flex transition-opacity delay-1000 duration-700 ease-out"></newspaper-icon>
     </template>
    </functionality>
    </section>
  </header>
</template>

<script>
import { SunIcon,NewspaperIcon } from '@heroicons/vue/solid'
import NavToggleButton from './components/NavToggleButton.vue'
import Functionality from './components/Functionality.vue';
export default {
  components: {
    SunIcon,NewspaperIcon,NavToggleButton,
    Functionality
  },
  props:['right'],
  data(){
      return{
        show:true,
      }
  },

};
</script>

<style>

</style>