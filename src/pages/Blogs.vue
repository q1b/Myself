<template>
	<section class="w-full h-screen p-2 xss:p-3 xs:p-5 sm:p-10">
		<main class="text-5xl pt-5 pb-2 text-gray-500">Blog</main>
		<ul class="p-0.5 xss:p-1 xs:p-2 sm:p-3 p-5 flex flex-col gap-3">
			<li
				class="
					flex
					items-center
					hover:bg-gray-50
					cursor-pointer
					group
					sm:w-max
					sm:px-2
					xs:px-1
					px-0.5
					py-1
					rounded-md
					transition-colors
					duration-300
					ease-in-out
				"
			>
				<arrow-narrow-right-icon
					class="
						w-auto
						h-8
						group-hover:translate-x-1
						transition-transform
						duration-300
						ease-in-out
					"
				/>
				<h1 class="text-2xl text-blueGray-800 font-jetMono font-thin ml-2">
					How to become Productive&nbsp;?
				</h1>
			</li>
		</ul>
	</section>
</template>

<script>
import { ArrowNarrowRightIcon } from '@heroicons/vue/outline'
export default {
	components: { ArrowNarrowRightIcon },
}
</script>

<style></style>
