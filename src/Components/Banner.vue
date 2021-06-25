<template>
	<teleport to="#BANNER">
		<section
			v-show="!IsPathHome"
			id="Banner"
			class="
				select-none
				h-10
				absolute
				top-0
				z-30
				flex
				items-center
				overflow-hidden
				p-4
				w-full
				bg-transparent
			"
		>
			<span
				id="BannerItem"
				v-for="i in 40"
				:key="i"
				class="
					font-jetMono
					text-white
					dark:text-blueGray-900
					flex-none
					italic
					w-max
					font-bold
				"
				style="transform: translateX(-100%)"
			>
				~ - Available For Hire --
			</span>
		</section>
		<router-link
			v-show="!IsPathHome"
			to="/Contacts"
			class="h-10 w-full z-30 absolute bg-white/10 backdrop-blur-[0.2px] top-0"
		>
		</router-link>
	</teleport>
</template>
<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
	created() {
		let value = 0
		setInterval(() => {
			value += 1
			const BannerItems = document.querySelectorAll('#BannerItem')
			BannerItems.forEach((BannerItem) => {
				BannerItem.style.transform = `translateX(${value - 3200}%)`
			})
		}, 100)
	},
	setup() {
		const router = useRouter()
		let IsPathHome = computed(() => {
			if (router.currentRoute.value.path === '/Contacts') {
				return true
			} else {
				return false
			}
		})
		return {
			IsPathHome,
		}
	},
}
</script>

<style></style>
