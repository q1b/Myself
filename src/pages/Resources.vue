<template>
    <section class="bg-[#000716] w-full sm:p-10 p-4 h-[900px]">
        <Listbox v-model="selectedResource">
            <div class="relative mt-1">
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
                    <span class="block text-white truncate">{{
                        selectedResource.type.name
                    }}</span>
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
                        <SelectorIcon
                            class="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                        />
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
                            v-for="resource in resources"
                            :key="resource.type.name"
                            :value="resource"
                            as="template"
                        >
                            <li
                                :class="[
                                    active
                                        ? 'text-amber-900 bg-amber-100'
                                        : 'text-blueGray-800',
                                    'cursor-default select-none relative py-2 pl-10 pr-4',
                                ]"
                            >
                                <span
                                    :class="[
                                        selected
                                            ? 'font-medium'
                                            : 'font-normal',
                                        'block truncate',
                                    ]"
                                    >{{ resource.type.name }}</span
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
                                    <CheckIcon
                                        class="w-5 h-5"
                                        aria-hidden="true"
                                    />
                                </span>
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>
        <hr class="mt-5" />
        <ul
            class="py-4 flex w-full flex-col place-content-center items-center"
            v-for="(resource, index) in selectedResource.type.items"
            :key="{ index }"
        >
            <li
                :class="[resource.name === 'Vue Js' ? '!bg-contain' : '',
                resource.name === 'Tailwind css' ? '!bg-contain' : '',
                'max-w-[700px] px-4 bg-cover bg-no-repeat bg-center rounded-lg']"
                :style="{ backgroundImage: `url(${resource.imageURL})` }"
            >
                <figure class="flex h-[150px] items-end mb-2 justify-center">
                    <div
                        class="
                            font-jetMono
                            rounded-r-lg
                            flex flex-col
                            justify-center
                        "
                    >
                        <blockquote
                            class="flex flex-col items-center justify-center"
                        >
                            <p
                                class="
                                    sm:text-lg
                                    xss:text-base
                                    text-xs text-center text-white
                                    font-semibold
                                "
                            >
                                {{ resource.speciality }}
                            </p>
                        </blockquote>
                    </div>
                </figure>
            </li>
        </ul>
    </section>
</template>

<script>
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    ListboxLabel,
} from '@headlessui/vue'
import { ref } from 'vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
export default {
    components: {
        Listbox,
        ListboxLabel,
        ListboxButton,
        ListboxOptions,
        ListboxOption,
        CheckIcon,
        SelectorIcon,
    },
    setup() {
        let resources = [
            {
                type: {
                    name: 'Icons-Library',
                    items: [
                        {
                            name: 'heroIcons',
                            imageURL:'https://heroicons.com/_next/static/media/social-card.c623b199d043ddf168d67e9b98a21a24.jpg',
                            speciality:"It's Open Source, MIT Licensed Icon library",
                        },
                    ],
                },
            },

            {
                type: {
                    name: 'CSS-Framework',
                    items: [
                        {
                            name: 'Tailwind css',
                            imageURL: 'https://camo.githubusercontent.com/53b9876cd8e38928387c6824043b0e2772b15b1bfdb7f42d0864216abbf3dfe8/68747470733a2f2f7265666163746f72696e6775692e6e7963332e63646e2e6469676974616c6f6365616e7370616365732e636f6d2f7461696c77696e642d6c6f676f2e737667',
                            speciality:'It is a mobile first utility based css framework.',
                        },
                    ],
                },
            },

            {
                type: {
                    name: 'Js-Framework',
                    items: [
                        {
                            name: 'Vue Js',
                            imageURL: 'https://elepass.io/wp-content/uploads/2018/05/Vue-logo-001.svg',
                            speciality:'It is a framework which gives best of React and Angular .',
                        },
                    ],
                },
            },

            {
                type: {
                    name: 'UI-Librabry',
                    items: [
                        {
                            name: 'headlessUI',
                            imageURL:'https://headlessui.dev/_next/static/media/social-card.3e0b1ed1aac3c1db62a0a1e7023d250b.jpg',
                            speciality:'UI library which is based on best practises of web .',
                        },
                    ],
                },
            },
        ]
        let allItem = resources.map(e=>{return e.type.items})
        resources = [
                    {
                        type:{ 
                            name:'All',
                            items:allItem.flat()
                            }
                    },
                    ...resources
                    ]
        const selectedResource = ref(resources[0])
        return {
            resources,
            selectedResource,
        }
    },
}
</script>
<style></style>
