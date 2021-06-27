<template>
	<section
		class="
			bg-blueGray-700
			dark:bg-pink-200
			lg:w-[80%]
			md:w-[90%]
			sm:w-[95%]
			-ml-4
			pb-10
			pt-5
			my-10
			sm:rounded-lg
			flex flex-col
			items-center
			place-content-around
		"
	>
		<article
			class="
				projectElement
				opacity-0
				mt-5
				bg-white
				rounded-lg
				px-6
				w-[95%]
				sm:w-[80%]
				py-4
				transition-opacity
				duration-1000
				ease-out
			"
		>
			<slot name="date"></slot>
			<slot name="heading"></slot>
			<slot name="details"></slot>
			<footer class="flex mt-3 items-center -pr-2">
				<button
					class="
						hidden
						ml-2
						px-3
						py-1
						hover:bg-blueGray-900
						rounded-full
						bg-blueGray-200
						text-white
						transition-colors
						duration-300
					"
				>
					Read more !
				</button>
				<a
					:href="navigateTo"
					target="_blank"
					class="
						ml-2
						px-3
						py-1
						hover:bg-blueGray-900
						dark:hover:bg-rose-600
						rounded-full
						bg-blueGray-200
						dark:bg-rose-300
						text-white
						transition-colors
						duration-300
					"
				>
					{{ webLinkName }}
				</a>
			</footer>
		</article>
	</section>
</template>
<script>
import { onMounted } from 'vue'
export default {
	name: 'Card',
	props: {
		navigateTo: {
			type: String,
			default: '#',
		},
		webLinkName: {
			type: String,
			default: 'website Link !',
		},
	},
	setup() {
		const numSteps = 20.0
		let projectElements
		let prevRatio = 0.0

		function handleIntersect(entries, observer) {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('!opacity-100')
				} else {
					entry.target.classList.remove('!opacity-100')
				}
			}
		}

		function buildThresholdList() {
			let thresholds = []
			let numSteps = 20

			for (let i = 1.0; i <= numSteps; i++) {
				let ratio = i / numSteps
				thresholds.push(ratio)
			}

			thresholds.push(0)
			return thresholds
		}

		function createObserver(b) {
			let options = {
				root: null,
				rootMargin: '0px',
				threshold: buildThresholdList(),
			}
			let observer = new IntersectionObserver(handleIntersect, options)
			observer.observe(b)
		}

		onMounted(() => {
			projectElements = document.getElementsByClassName('projectElement')
			Array.from(projectElements).forEach((e) => {
				createObserver(e)
			})
		})
	},
}
</script>

<style></style>
