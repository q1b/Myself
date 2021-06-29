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
						<component
							:class="[`${card.iconColor}`, 'w-20 h-auto']"
							:is="card.icon"
						></component>
					</template>
					<template #heading> {{ card.heading }} </template>
				</Card>
			</section>
		</section>
	</section>
</template>

<script>
import Card from './SkillsComponents/Card.vue'

import { IdentificationIcon, CheckCircleIcon } from '@heroicons/vue/outline'

import {
	LightningBoltIcon,
	FireIcon,
	PencilIcon,
	ServerIcon,
	ChipIcon,
	CodeIcon,
	ColorSwatchIcon,
} from '@heroicons/vue/solid'

export default {
	components: { Card, IdentificationIcon },
	name: 'Skills',
	data() {
		return {
			CardList: [
				{
					heading: 'Design-Tool',
					icon: PencilIcon(),
					iconColor: 'text-indigo-600',
					list: ['Figma', 'Rivejs', 'KeyNotes'],
				},
				{
					heading: 'Js-Framework',
					icon: FireIcon(),
					iconColor: 'text-orange-600',
					list: ['Nuxt', 'SvelteKit', 'Reactjs', 'Vuejs'],
				},
				{
					heading: 'Css-Framework',
					icon: LightningBoltIcon(),
					iconColor: 'text-sky-600',
					list: ['Tailwindcss'],
				},
				{
					heading: 'dev-lang',
					icon: CodeIcon(),
					iconColor: 'text-black',
					list: ['Python', 'javascript', 'html', 'css'],
				},
				{
					heading: 'Libraries',
					icon: ColorSwatchIcon(),
					iconColor: 'text-rose-600',
					list: ['headlessUI', 'Reactjs', 'HeroIcon'],
				},
				{
					heading: 'BackEnd',
					icon: ServerIcon(),
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
