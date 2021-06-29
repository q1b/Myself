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
				<Card :list="list">
					<template #mainIcon>
						<LightningBoltIcon class="text-indigo-600 w-20 h-20" />
					</template>
					<template #heading> DesignTools </template>
				</Card>
				<Card :list="list">
					<template #mainIcon>
						<LightningBoltIcon class="text-indigo-600 w-20 h-20" />
					</template>
					<template #heading> Languages </template>
				</Card>
			</section>
		</section>
	</section>
</template>

<script>
import { IdentificationIcon, CheckCircleIcon } from '@heroicons/vue/outline'
import { LightningBoltIcon } from '@heroicons/vue/solid'
import Card from './SkillsComponents/Card.vue'
export default {
	components: { Card, IdentificationIcon, LightningBoltIcon, CheckCircleIcon },
	name: 'Skills',
	data() {
		return {
			list: ['Figma', 'Rivejs', 'Apple'],
		}
	},
}
</script>
section
<style lang="css" scoped></style>
