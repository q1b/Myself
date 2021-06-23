<template>
    <div class="scale-100 sm:scale-125 absolute top-[200px] sm:top-[250px] left-1/2 -translate-x-1/2 grid grid-cols-10 place-items-center" ref="wrapper"></div>
</template>

<script>
import { reactive, onMounted, ref } from 'vue'
export default {
  setup() {
    let entities = reactive([])
    let wrapper = ref(null)
    let checked = ref(true)
    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      var RES_Y = 10
      var RES_X = 10
      var SIZE = 28
      // console.log(wrapper.value) // <div>Reggistered Ref Element wrapper </div>
      wrapper.value.style.width = RES_X * SIZE + 'px'
      wrapper.value.style.height = RES_Y * SIZE + 'px'
      for (var x = 0; x < RES_X; x++) {
        for (var y = 0; y < RES_Y; y++) {
          var el = document.createElement('div')
			    el.id = 'tile'	
          el.setAttribute('role', 'button')
          wrapper.value.appendChild(el)
          var entity = {
            element: el,
            x: x * SIZE,
            y: y * SIZE,
          }
          console.log(entity)
          el.style.left = entity.x + 'px'
          el.style.top = entity.y  + 'px'
          el.style.width = 10 + 'px'
          el.style.height = 10 + 'px'
          el.addEventListener('click', toggle.bind(this, entity))
          entities.push(entity)
        }
      }
      setTimeout(function () {
        entities[0].element.checked = false
        toggle(entities[0])
      }, 500)
    })
    return {
      wrapper,
    }
  },
}
</script>

<style>

</style>