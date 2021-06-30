<template>
	<section class="w-full bg-[#000716] flex items-center flex-col">
		<article id="Parralax" class="w-full flex justify-center sticky top-0">
			<span
				class="
					py-20
					text-white text-8xl text-lightBlue-100 text-shadow-light-home-p
					sm:text-9xl
					dark:text-white dark:text-shadow-dark-home-p
					font-jetMono
				"
				>Skills</span
			>
		</article>
		<section class="relative bg-white w-full sm:w-[95%] rounded-t-3xl p-4">
			<div id="SugarTopics" class="flex items-center">
				<IdentificationIcon class="w-12 h-12 text-sky-600" />
				<span class="ml-3 font-mono font-bold first-letter:text-4xl text-3xl"
					>Identification Card</span
				>
			</div>
			<section
				id="CardsStack"
				class="
					relative
					bg-white
					grid
					place-items-center
					sm:grid-cols-3
					grid-cols-1
					rounded-t-3xl
					pt-5
					px-10
				"
			>
				<Card v-for="(card, index) in CardList" :key="index" :list="card.list">
					<template #mainIcon>
						<rive-element :artboard="card.artboard" />
					</template>
					<template #heading> {{ card.heading }} </template>
				</Card>
			</section>
		</section>
	</section>
</template>

<script>
import Card from './SkillsComponents/Card.vue'
import RiveElement from './SkillsComponents/RiveElement.vue'

import { IdentificationIcon, CheckCircleIcon } from '@heroicons/vue/outline'

export default {
	components: { Card, IdentificationIcon, RiveElement },
	name: 'Skills',
	data() {
		return {
			CardList: [
				{
					heading: 'Design-Tool',
					artboard: 'Design',
					iconColor: 'text-indigo-600',
					list: ['Figma', 'Rivejs', 'KeyNotes'],
				},
				{
					heading: 'Js-Framework',
					artboard: 'Framework',
					iconColor: 'text-orange-600',
					list: ['Nuxt', 'SvelteKit', 'Reactjs', 'Vuejs'],
				},
				{
					heading: 'Css-Framework',
					artboard: 'ThunderBolt',
					iconColor: 'text-sky-600',
					list: ['Tailwindcss'],
				},
				{
					heading: 'dev-lang',
					artboard: 'Code',
					iconColor: 'text-black',
					list: ['Python', 'javascript', 'html', 'css'],
				},
				{
					heading: 'Libraries',
					artboard: 'Resources',
					iconColor: 'text-rose-600',
					list: ['headlessUI', 'Reactjs', 'HeroIcon'],
				},
				{
					heading: 'BackEnd',
					artboard: 'Hardware',
					iconColor: 'text-green-400',
					list: ['Firebase'],
				},
			],
		}
	},
	methods: {
		icon() {
			return IdentificationIcon
		},
	},
}
</script>
section
<style lang="css" scoped></style>
