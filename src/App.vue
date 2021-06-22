<template>
  <div class="flex ">
  <header class="sticky hidden md:flex top-0 left-0 z-0 w-0 h-screen">
    <main-header :right="false" ></main-header>
  </header>
    <router-view />
  <header class="sticky md:hidden top-0 left-0 z-0 w-0 h-screen">
    <main-header :right="true" ></main-header>
  </header>
  </div>
</template>
<script>
import  MainHeader  from "./Navigation/MainHeader.vue";
export default {
  components:{MainHeader}
}
</script>

<style>
</style>
