<template>
    <header :class="[ right ? 'absolute top-0 right-0':'','select-none flex flex-col justify-center items-center z-0 group min-w-[96px] h-screen bg-transparent']" >
    <section :class="[right ? 'static top-[190px] xss:top-[210px] xs:top-[260px] sm:top-[260px] ':'','w-12 flex flex-col justify-center items-center group-hover:justify-center z-10 bg-white/20 mb-20 px-1 max-h-[75%] rounded-3xl backdrop-blur-sm backdrop-hue-rotate-180 backdrop-brightness-200 backdrop-saturate-200 backdrop-contrast-200 shadow-md border transition-max-height ease-out duration-1000']">
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