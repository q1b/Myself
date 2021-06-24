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
		<article class="mt-5 bg-white rounded-lg px-6 w-[95%] sm:w-[80%] py-4">
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
}
</script>

<style></style>
