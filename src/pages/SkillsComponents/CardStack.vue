<template>
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
						{{ icon }}
					</template>
					<template #heading> {{ card.heading }} </template>
				</Card>
			</section>
		</section>
	</section>
</template>

<script>
import Card from './Card.vue'

import { IdentificationIcon, CheckCircleIcon } from '@heroicons/vue/outline'

import { LightningBoltIcon } from '@heroicons/vue/solid'

export default {
	components: { Card, IdentificationIcon, LightningBoltIcon, CheckCircleIcon },
	name: 'Skills',
	data() {
		return {
			CardList: [
				{
					heading: 'Design',
					icon: LightningBoltIcon(),
					list: ['Figma', 'Rivejs', 'Apple'],
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
