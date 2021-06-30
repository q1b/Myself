<template>
	<div>
		<canvas ref="canvas" width="200" height="200"></canvas>
	</div>
</template>

<script>
import { Rive } from 'rive-js'
export default {
	name: 'RiveElement',
	props: {
		artboard: String,
	},
	mounted() {
		new Rive({
			canvas: this.$refs.canvas,
			src: 'src/pages/SkillsComponents/Animations/loopAnimations.riv',
			artboard: this.$props.artboard,
			autoplay: true,
		})
	},
}
</script>

<style lang="css" scoped></style>
