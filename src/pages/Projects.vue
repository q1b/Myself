<template>
  <section
    class="bg-[#000716] w-full flex flex-col items-center pt-10 pb-96 pl-4"
  >
    <article
      class="
        group
        bg-white
        rounded-l-full
        w-full
        h-20
        xss:h-24
        sm:h-28
        flex
        items-center
      "
    >
      <div
        class="
          h-16
          w-16
          xss:h-20
          xss:w-20
          sm:h-24
          sm:w-24
          rounded-full
          bg-[#000716]
          ml-4
          flex
          items-center
        "
      >
        <div
          class="
            h-4
            xss:h-6
            pl-1
            xss:pl-2
            ml-1
            xss:ml-2
            sm:h-8
            sm:pl-4
            sm:ml-4
            rounded-l-full
            bg-white
            flex
            items-center
            justify-center
          "
        >
          <span
            class="
              w-max
              font-bold
              text-base
              xss:text-base
              sm:text-lg
              text-sky-400
            "
          >
            Tiles Project
          </span>
        </div>
      </div>
      <div
        class="
          h-24
          sm:h-24
          sm:pl-28
          pl-10
          w-full
          font-jetMono font-extrabold
          text-[#ff0030]
          xss:text-xl
          xs:text-2xl
          sm:text-4xl
          flex
          items-center
        "
      >
        <span class="hidden sm:flex">Don't Click These Boxes</span>
      </div>
    </article>
    <Listbox v-model="selectedShape">
      <div class="relative z-10 mt-10 self-start ml-10">
        <ListboxButton
          class="
            relative
            w-max
            py-2
            pl-3
            pr-10
            border-2
            rounded-lg
            text-left
            bg-transparent
            cursor-default
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-opacity-75
            focus-visible:ring-white
            focus-visible:ring-offset-orange-300
            focus-visible:ring-offset-2
            focus-visible:border-indigo-500
          "
        >
          <span class="block text-white truncate">{{ selectedShape }}</span>
          <span
            class="
              absolute
              inset-y-0
              right-0
              flex
              items-center
              pr-2
              pointer-events-none
            "
          >
            <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>
        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            as="ul"
            class="
              absolute
              max-w-[300px]
              py-1
              mt-1
              overflow-auto
              text-base
              bg-white
              rounded-md
              shadow-lg
              max-h-96
              ring-1 ring-black ring-opacity-5
              focus:outline-none
            "
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="(shape, index) in Shapes"
              :key="index"
              :value="shape"
              as="template"
            >
              <li
                :class="[
                  active ? 'text-amber-900 bg-amber-100' : 'text-blueGray-800',
                  'cursor-default select-none relative py-2 pl-10 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ shape }}</span
                >
                <span
                  v-if="selected"
                  class="
                    absolute
                    inset-y-0
                    left-0
                    flex
                    items-center
                    pl-3
                    text-amber-600
                  "
                >
                  <CheckIcon class="w-5 h-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
    <section
      class="
        grid
        z-0
        sm:scale-100
        grid-cols-2
        gap-4
        mt-10
        sm:mt-16
        scale-125
        md:scale-125
      "
    >
      <grow-boxes
        unique_id="a"
        :shape="selectedShape"
        lineColor="!bg-sky-100"
        :colors="ColorStack"
      />
      <grow-boxes
        unique_id="b"
        :shape="selectedShape"
        lineColor="!bg-sky-100"
		   :colors="shuffle(ColorStack)"
      />
      <grow-boxes
        unique_id="c"
        :shape="selectedShape"
        lineColor="!bg-teal-500"
			:colors="shuffle(ColorStack)"
      />
      <grow-boxes
        unique_id="d"
        :shape="selectedShape"
        lineColor="!bg-sky-900"
		   :colors="shuffle(ColorStack)"
      />
    </section>
    <section class="mt-28 -ml-5 w-full">
      <custom-model header='Default Exciting new features are here'  content="New feauture like Mega Pro and Super disco are availabel here,
			You can COntact Us through any means of network NOW!" />
    </section>
  </section>
</template>

<script>
import { ref } from 'vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
import GrowBoxes from './Projects/GrowBoxes.vue'
import customModel from './Projects/anouncementModelEx/index.vue'
import {
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Listbox,
  ListboxLabel,
} from '@headlessui/vue'
export default {
  components: {
    GrowBoxes,
    customModel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    Listbox,
    CheckIcon,
    SelectorIcon,
  },
  setup() {
    const Shapes = ['circle', 'rectangle']
    const selectedShape = ref(Shapes[0])
    const ColorStack = [
      { start: 'bg-amber-500', end: 'bg-orange-500' },
      { start: 'bg-orange-500', end: 'bg-lime-400' },
      { start: 'bg-lime-400', end: 'bg-green-500' },
      { start: 'bg-green-500', end: 'bg-emerald-500' },
      { start: 'bg-emerald-500', end: 'bg-cyan-500' },
      { start: 'bg-cyan-500', end: 'bg-blue-500' },
      { start: 'bg-blue-500', end: 'bg-indigo-500' },
      { start: 'bg-indigo-500', end: 'bg-purple-500' },
      { start: 'bg-purple-500', end: 'bg-pink-500' },
      { start: 'bg-rose-500', end: 'bg-white' },
      { start: 'bg-white', end: 'bg-amber-500' },
    ]
	function shuffle(array) {
  		for (let i = array.length - 1; i > 0; i--) {
   		 let j = Math.floor(Math.random() * (i + 1));
   	 	[array[i], array[j]] = [array[j], array[i]];
  			}
		return array
	}

    return {
      Shapes,
      selectedShape,
		ColorStack,
		shuffle
    }
  },
}
</script>

<style></style>
