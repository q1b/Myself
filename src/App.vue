<template>
  <banner />
  <div class="flex">
    <div
      ref="draggableContainer"
      class="h-screen hidden md:flex relative"
      id="draggable-container"
    >
      <header
        @mousedown="dragMouseDown"
        class="md:sticky hidden md:flex top-0 left-0 z-40 w-0 h-screen"
      >
        <main-header :right="false"></main-header>
      </header>
    </div>
    <router-view />
    <header class="sticky md:hidden top-0 left-0 z-40 w-0 h-screen">
      <div class="">
        <main-header :right="true"></main-header>
      </div>
    </header>
  </div>
</template>
<script>
import MainHeader from './Components/Navigation/MainHeader.vue'
import banner from './Components/Banner.vue'
export default {
  components: { MainHeader, banner },
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
