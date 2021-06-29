<template>
	<article id="card" class="p-10 hover:bg-blueGray-100 rounded-lg">
		<!--Icon,Heading,List,-->
		<div id="icon" class="w-full flex justify-center py-2">
			<!-- <LightningBoltIcon class="text-indigo-600 w-20 h-20" /> -->
			<slot name="mainIcon"> </slot>
		</div>
		<div
			id="heading"
			class="w-full flex justify-center text-3xl py-2 font-jetMono"
		>
			<slot name="heading"></slot>
		</div>
		<div
			id="list"
			class="w-full h-full flex py-2 justify-center text-xl font-jetMono"
		>
			<ul class="w-40 h-full">
				<li
					v-for="(item, index) in list"
					:key="index"
					class="w-max flex items-center justify-center h-10"
				>
					<span class="inline-block mr-3">
						<CheckCircleIcon class="text-sky-900 w-6 h-6" /> </span
					>{{ item }}
				</li>
			</ul>
		</div>
	</article>
</template>

<script>
import { IdentificationIcon, CheckCircleIcon } from '@heroicons/vue/outline'
import { LightningBoltIcon } from '@heroicons/vue/solid'
export default {
	components: { IdentificationIcon, LightningBoltIcon, CheckCircleIcon },
	name: 'Card',
	props: ['list'],
	data() {
		return {}
	},
}
</script>

<style lang="css" scoped></style>
