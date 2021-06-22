<template>
<TransitionRoot
		as="div"
		class="
			h-screen
			fixed
			top-0
			w-full
			bg-[#00000099]
			backdrop-filter backdrop-blur-sm
			flex flex-col
			justify-center
			place-items-center
			xss:p-2
			p-1
		"
		:show="show"
	enter="transition-opacity ease-linear duration-300"
   enter-from="opacity-0"
   enter-to="opacity-100"
   leave="transition-opacity ease-linear duration-200 delay-300"
   leave-from="opacity-100"
   leave-to="opacity-0"
	> <TransitionChild
		as="div"
		:unmount="true"
		class="max-w-[30rem] flex-shrink bg-white shadow-2xl xss:px-4 xss:py-6 py-4 rounded-lg"
    	  enter="transform transition duration-[400ms]"
        enter-from="opacity-0 scale-50"
        enter-to="opacity-100 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leave-from="opacity-100 scale-100 "
        leave-to="opacity-0 scale-95 "	
		  >
				<h1 class="mb-4 text-center text-lg xss:text-xl xs:text-2xl sm:text-3xl text-blueGray-600 font-bold">
					<!-- Default Exciting new features are here -->
					<slot name="header"></slot>
				</h1>
				<p class="mb-4 px-2 xss:px-4 font-medium text-justify">
					<!-- New feauture like Mega Pro and Super disco are availabel here,
					You can COntact Us through any means of network NOW! -->
					<slot name="content"></slot>
				</p>
				<button
					class="
						focus:outline-none
						focus:ring-2
						ring-cyan-300
						bg-lightBlue-500
						px-3
						py-1.5
						text-white
						ml-3
						rounded-lg
					"
					@click="dismiss"
				>
					Dismiss
				</button>
			</TransitionChild>
</TransitionRoot>
</template>

<script>
import {TransitionRoot,TransitionChild} from '@headlessui/vue'
export default {
	components:{
		TransitionRoot,TransitionChild
	},
	props: {
		show: { required: true },
		preventBackgroundScrolling: { default: true },
	},
	methods: {
		dismiss() {
			this.$emit('update:show', !this.show)
		},
	},
	// props:["value"],
	watch: {
		show(show) {
			if (show) {
				this.preventBackgroundScrolling &&
					document.body.style.setProperty('overflow', 'hidden')
			} else {
				document.body.style.setProperty('overflow', '')
			}
		},
	},
}
</script>

<style>
</style>
