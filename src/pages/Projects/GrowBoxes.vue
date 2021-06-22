<template>
  <section class="flex items-center">
    <div class="relative w-[100px] h-[100px] sm:w-[268px] sm:h-[268px]" ref="wrapper">
      <div
        role="button"
        :id="`${index}${unique_id}`"
        v-for="(entity, index) in x_yArray"
        :key="index"
        :class="[
          shape === 'circle' ? 'rounded-full w-4 h-4 sm:w-6 sm:h-6' : 'rounded-none w-4 h-4 sm:w-8 sm:h-8',
          `${lineColor} absolute bg-rose-600 w-4 h-4 sm:w-6 sm:h-6 h-calc(100%/100)`,
        ]"
        :style="{
          top: entity.x + 'px',
          left: entity.y + 'px',
          transitionProperty: 'background-color',
          transitionDuration: '500ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 1, 1)',
        }"
        @click="toggle"
      ></div>
    </div>
  </section>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  props: ['lineColor','unique_id','shape','colors'],
  setup(props) {
    let wrapper = ref(null)
    let checked = ref(true)
    let x_yArray = reactive([])
	 let colorIndex = ref(null)
	 colorIndex = 0
    let resX = 10
    let resY = 10
    let size = 28
	 if(window.innerWidth<623){
			resX = 5
    		resY = 5
    		size = 22

	 }
    var index = 0
    for (let i = 0; i < resX; i++) {
      for (let j = 0; j < resY; j++) {
        index++
        x_yArray = [
          { id: `${index + 1}${props.unique_id}`, x: i * size, y: j * size },
          ...x_yArray,
        ]
      }
    }
    function toggle(targetEntity) {
      checked = !checked
      let targetEntityID = `${targetEntity.path[0].id}`
		if(colorIndex>= 0 && colorIndex < props.colors.length-1 ) {
			colorIndex++
		}else{
			colorIndex = 0
		}
      // console.log(targetEntityID)
      x_yArray.forEach(function (entity) {
        //  var dx = x_yArray[targetEntityID.split('a')[0]].x - entity.x
        var dx = x_yArray[targetEntityID.split(props.unique_id)[0]].x - entity.x
        //  var dy = x_yArray[targetEntityID.split(props.unique_id)[0]].y - entity.y
        var dy = x_yArray[targetEntityID.split(props.unique_id)[0]].y - entity.y
        var distance = Math.sqrt(dx * dx + dy * dy)
        var elementID = `${entity.id.split(props.unique_id)[0] - 2}${
          props.unique_id
        }`
		  console.log(props.colors[colorIndex])
        var element = document.getElementById(elementID)
			let  startColor = props.colors[colorIndex].start
			let	endColor = props.colors[colorIndex].end				
        setTimeout(function () {
          if (checked === true) {
            element.className = 'tile'
            element.offsetWidth;
            props.shape === 'circle'
              ? (element.className =
                  `absolute rounded-full tile w-4 h-4 sm:w-4 sm:h-4 grow ` + endColor)
              : (element.className =
                  `absolute tile w-4 h-4 sm:w-4 sm:h-4 grow ` + endColor)
            // element.className = `absolute w-4 h-4 tile grow ` + props.startColor
          } else {
            element.className = 'tile'
            element.offsetWidth
            props.shape === 'circle'
              ? (element.className =
                  `absolute rounded-full tile w-4 h-4 sm:w-4 sm:h-4 grow ` + startColor)
              : (element.className =
                  `absolute tile w-4 h-4 sm:w-4 sm:h-4 grow ` + startColor)
          }
        }, Math.round(window.innerWidth>600?(distance * 1.8):(distance*5)))
      })
    }
     x_yArray.reverse()
    return {
      wrapper,
      x_yArray,
      toggle,
    }
  },
}
</script>

<style>
div .tile.grow {
  animation:grow 2s cubic-bezier(0.9, 1.1, 0, 1) 0s;
}

@keyframes grow {
    0.0%{
        width: 20px;
        height: 20px;
    }
    30%{
	     width: 200px;
        height: 200px;
		  /* box-shadow: 0px 0px 10px 10px #FF0060; */
    }
    100%{
	     width: 20px;
        height: 20px;
    }
}
</style>
