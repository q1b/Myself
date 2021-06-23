<template>
  <div class="flex">
    <header
      @mousedown="dragMouseDown"
      class="md:sticky hidden md:flex top-0 left-0 z-40 w-0 h-screen"
    >
      <main-header :right="false"></main-header>
    </header>
    <router-view />

    <header class="md:sticky md:hidden top-0 left-0 z-40 w-0 h-screen">
      <main-header :right="true"></main-header>
    </header>
  </div>
</template>
<script>
import MainHeader from './Navigation/MainHeader.vue'
export default {
  components: { MainHeader },
}
</script>

<style>
/* backgroundImage: {
        'logo': "url('https://play.tailwindcss.com/img/logo.svg')"
      }, */
</style>
