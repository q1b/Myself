<template>
    <section class="w-full h-screen bg-[#000716] p-10">
        <!-- Random Quote Which is not random For Now. -->
      <article class="p-5">
            <p class="text-2xl" ref="contq"></p>
      </article>
        <!-- Text Area -->
		  <button class="px-3 py-1.5 bg-white rounded-lg"
		  @click="focusElement" >Click to Focus Again</button>
        <article class="p-5">
		<FocusTrap>
            <textarea
                v-model="typedValue"
                class="
                    text-black
                    w-0
                    h-0
                    absolute
                    -top-96
                    font-semibold
                    text-lg
                    p-4
                "
            ></textarea>
		</FocusTrap>

        </article>
        <h1 class="text-yellow-400 underline"></h1>
    </section>
</template>

<script>
import { FocusTrap } from "@headlessui/vue";
export default {
	components:{FocusTrap},
    data() {
        return {
            quoteData:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, adipisci veritatis autem ad sunt atque accusamus cupiditate, maxime deserunt obcaecati neque veniam vitae facilis voluptates harum alias quod in. Facilis!',
            typedValue: '',
        }
    },
    mounted() {
        this.$watch(
            'quoteData',
            () => {
                return this.quoteData.split('').forEach((ch) => {
                    const chSpan = document.createElement('span')
                    chSpan.classList.add('text-white')
                    chSpan.innerText = ch
                    this.$refs.contq.appendChild(chSpan)
                })
            },
            { immediate: true }
        )
    },
    watch: {
        typedValue() {
            const ArrayOfCh = document.querySelectorAll('span')
            const ArrayOfTypedCh = this.typedValue.split('')
            ArrayOfCh.forEach((chSpan, index) => {
                const chTyped = ArrayOfTypedCh[index]
                if (chTyped == null) {
                    chSpan.classList.add('text-white', 'underline')
                    chSpan.classList.remove('text-rose-600')
                    chSpan.classList.remove('text-yellow-400')
                } else if (chTyped === chSpan.innerText) {
                    chSpan.classList.add('text-yellow-400', 'underline')
                    chSpan.classList.remove('text-rose-600', 'underline')
                } else if (chTyped !== chSpan.innerText) {
                    chSpan.classList.add('text-rose-600', 'underline')
                    chSpan.classList.remove('text-yellow-400', 'underline')
                }
            })
        },
    },
	 methods:{
		 focusElement(){
			 document.querySelector('textarea')
		 }
	 }
}
</script>

<style></style>
