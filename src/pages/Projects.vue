<template>
  <section
    class="
      bg-[#000716]
      dark:bg-pink-400
      w-full
      flex flex-col
      items-center
      pt-10
      pb-10
      pl-4
      transition-colors
      duration-700
    "
  >
    <h1
      class="
        text-2xl
        xss:text-3xl
        xs:text-4xl
        sm:text-5xl
        md:text-6xl
        my-10
        hover:border-blueGray-200
        transition-colors
        duration-700
        dark:selection:bg-white
        bg-white
        dark:bg-pink-600
      "
    >
      <span
        class="
          text-gray-50
          bg-blueGray-900
          dark:bg-pink-500
          dark:text-white
          dark:selection:text-rose-600
          dark:selection:bg-white
          ml-1
        "
      >
        Some Self ho</span
      >
      <span
        class="
          bg-gray-50
          text-blueGray-900
          selection:text-gray-50
          selection:bg-blueGray-900
          dark:text-pink-500
          dark:bg-pink-200
          dark:selection:bg-pink-500
          dark:selection:text-white
        "
        >sted Projects
      </span>
    </h1>
    <project-card
      :navigateTo="Project.url"
      :key="index"
      :webLinkName="
        Project.index === 3 ? Project.webLinkName : Project.webLinkName
      "
      v-for="(Project, index) in Projects"
    >
      <template #date>
        <p
          class="
            text-blueGray-600
            dark:text-rose-400
            selection:bg-blueGray-900
            dark:selection:bg-rose-900
            dark:selection:text-white
            ml-2
          "
        >
          {{ Project.date }}
        </p>
      </template>
      <template #heading>
        <h1
          class="
            text-3xl
            xs:text-4xl
            sm:text-5xl
            dark:text-[#FF0030]
            mt-1
            font-round font-bold
            transition-colors
            duration-700
            dark:selection:bg-rose-900
          "
        >
          {{ Project.heading }}
        </h1>
      </template>
      <template #details>
        <main
          class="
            text-blueGray-700
            dark:text-rose-900
            mt-2
            text-base
            xss:text-lg
            sm:text-xl
            transition-colors
            duration-700
            selection:bg-blueGray-200
            dark:selection:bg-rose-200
          "
        >
          {{ Project.details }}
        </main>
      </template>
    </project-card>

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
        lineColor="bg-rose-600 dark:bg-yellow-400"
        :colors="ColorStack"
      />
      <grow-boxes
        unique_id="b"
        :shape="selectedShape"
        lineColor="bg-sky-100 dark:bg-sky-900"
        :colors="ColorStack"
      />
      <grow-boxes
        unique_id="c"
        :shape="selectedShape"
        lineColor="bg-teal-500 dark:bg-white"
        :colors="ColorStack"
      />
      <grow-boxes
        unique_id="d"
        :shape="selectedShape"
        lineColor="bg-sky-900 dark:bg-red-500"
        :colors="ColorStack"
      />
    </section>
    <section class="mt-28 -ml-5 w-[99vw]">
      <custom-model
        header="Default Exciting new features are here"
        content="New feauture like Mega Pro and Super disco are availabel here,
      You can COntact Us through any means of network NOW!"
      />
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
import ProjectCard from './ProjectComponents/Card.vue'
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
    ProjectCard,
  },
  setup() {
    const Shapes = ['circle', 'rectangle']
    const selectedShape = ref(Shapes[0])
    const ColorStack = [
      { start: 'bg-amber-500', end: 'bg-orange-500' },
      { start: 'bg-white', end: 'bg-lime-400' },
      { start: 'bg-blueGray-900', end: 'bg-green-500' },
      { start: 'bg-amber-300', end: 'bg-emerald-500' },
      { start: 'bg-yellow-500', end: 'bg-cyan-500' },
      { start: 'bg-indigo-500', end: 'bg-blue-500' },
      { start: 'bg-green-500', end: 'bg-indigo-500' },
      { start: 'bg-orange-500', end: 'bg-purple-500' },
      { start: 'bg-emerald-500', end: 'bg-pink-500' },
      { start: 'bg-indigo-500', end: 'bg-white' },
      { start: 'bg-white', end: 'bg-blue-500' },
    ]
    const Projects = [
      {
        index: 0,
        url: 'https://tailboxshadow.vercel.app',
        date: '29th June 2021',
        heading: 'My First Plugin',
        details:
          "I created a tailwindcss plugin, And lunch it's official site to help others too. It's awesome experience level button without background color but with shadows it's can be act as next trend if someone give sometime to these button and make them more live. I feel grateful to have such mind which give me inspiration to what i should do . I love you all my friends .",
      },
      {
        index: 1,
        url: 'https://tailhelper.netlify.app',
        date: '13th June 2021',
        heading: 'Color Pallete Generator',
        details:
          "I create this tool for developers who are using tailwindcss in their project and wanted to use custom color pallete in their website. This tool is created with love and Give Full customisation to you as a developer to create use it in your project. I know it's seems a small project to many of us but I feel that Even if I came up with a small idea, atleast in this process of making this project working I learn a lot about Vuejs as a beginner in Vue environment I used Vuejs Tailwindcss and Vitejs for this Single page website.",
      },
      {
        index: 2,
        url: '#',
        date: '1st July 2021',
        heading: 'An Spiritual Vite Book',
        details:
          "I write the knowledge that my head recieved from the experience and intution. I know it's not a topic related to developers or science but it's more than that it's about Life,Mind and Our mind. It give deeper knowledge of Universal consiousness. It's my thought but I will also thought of some of the great people in this book, I write this book with the help of documentation tool like vitepress which make the process of writing more exclusive .",
      },
      {
        index: 3,
        url: 'https://marketplace.visualstudio.com/items?itemName=divyamrit.calm',
        date: '1st April 2021',
        webLinkName: 'Check it Out !',
        heading: 'An VsCode Dark Theme',
        details:
          "I was from last year, looking for a great theme for my VsCode developer environment which In which I feel as home and clam. So, I started change my vsCode theme settings from setting.json And those confrigation become large one then, I want to make my own theme You can Visit it And try it's very Dark.",
      },
    ]

    return {
      Shapes,
      selectedShape,
      ColorStack,
      Projects,
    }
  },
}
</script>

<style></style>
