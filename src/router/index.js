import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/pages/Home.vue'
import Resources from '/src/pages/Resources.vue'
import Projects from '/src/pages/Projects.vue'
import Typewriter from '/src/pages/Projects/Typewriter.vue'
import Tiles from '/src/pages/Projects/Tiles.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Projects',
        name: 'Projects',
        component: Projects,
    },
    {
        path: '/Resources',
        name: 'Resources',
        component: Resources,
    },
    {
        path: '/Projects/Tiles',
        name: 'Tiles',
        component: Tiles,
    },
    {
        path: '/Projects/Typewriter',
        name: 'Typewriter',
        component: Typewriter,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
