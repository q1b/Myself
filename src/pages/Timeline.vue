<template>
  <section
    class="
      w-full
      flex
      place-content-center
      p-5
      py-20
      bg-blueGray-900
      dark:bg-lime-200
      overflow-hidden
    "
  >
    <ul class="p-2 max-w-[600px] rounded-3xl">
      <li v-for="(Now_Data, index) in reverseArr(Impact_Data)" :key="index">
        <article>
          <div
            class="
              boxElement
              translate-x-72
              relative
              grid
              items-start
              px-3
              pt-2
              pb-3
              my-4
              overflow-hidden
              rounded-xl
              transition-translate-color
              duration-700
            "
            style="transition-timing-function: cubic-bezier(0.4, 0.6, 0.5, 0.9)"
          >
            <h3
              class="
                mb-1
                dark:text-shadow-hi
                text-xl text-blueGray-500
                dark:text-teal-900
                ml-8
              "
            >
              {{ Now_Data.Event }}
            </h3>
            <time
              :dateTime="Now_Data.Date.toISOString()"
              class="
                flex
                items-center
                text-cyan-600
                dark:text-green-400
                row-start-1
                mb-1
                font-medium
              "
            >
              <span v-html="index === 0 ? ActiveCircle() : InActiveCircle()" />
              {{
                Now_Data.StringDate.replace(
                  Now_Data.StringDate.charAt(0),
                  Now_Data.StringDate.charAt(0).toUpperCase()
                )
              }}
            </time>
            <p class="text-[1.05rem] text-blueGray-900 dark:text-lime-900 ml-8">
              {{ Now_Data.inDetail }}
            </p>
          </div>
        </article>
      </li>
    </ul>
  </section>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'Timeline',
  data() {
    return {
      Impact_Data: [
        {
          Event: 'Starting my Journey to become developer',
          Place: ' Little town',
          Date: new Date(2020, 20),
          StringDate: '2020,Augest',
          // Active
          inDetail:
            'Durning Lockdown in the pandamic, I was scrolling youtube and while scrolling I see the a flutter video And Got influenced by what it can do So, I buy a course on Udemy and continue it but after few lecture I feel I am lacking something . ',
        },
        {
          Event: 'An old willingness in heart',
          Place: 'Home',
          Date: new Date(2020),
          StringDate: '2020,september',
          inDetail: `In our school, I learned python which already created my base of learning any programming language. But although dart,syntax takes time to understand over time. Mordern Programming Concepts is what I am learning throughout my journey. Still Dart was easy , I was not a good designer as no one ever taught me but I am artist So, I experiment with Flutter but it wasn't that easy as first thing to do for any person So, I change my path and started learning about WEB.`,
        },
        {
          Event: 'Fear of new Languages .',
          Place: 'Internet',
          Date: new Date(2020, 19),
          StringDate: '2020,October',
          inDetail: `Until this time I learn a lot about Html and Css but afraid of javascript as I know that I can do this with css and html only as a beginner I wasn't familiar with power that javascript give us over websites . So, I am still skipping learning it . Now my father take my laptop with him`,
        },
        {
          Event: 'How I come to tailwindcss',
          Place: 'Internet',
          Date: new Date(2020, 11),
          StringDate: '2020,Nov',
          inDetail: `Now, I am missing my laptop and my mind is searching a way to do something related to it. So I have a iPad but it can't run VsCode but while I was searching for a solution I find out a playground called itSelf tailwindcss to write html and css which are my tools So, over next one I am making designs like Card navigation animation. Which lead me to adopt tailwindcss as my css framework.`,
        },
        {
          Event: 'The Sorrow',
          Place: '',
          Date: new Date(2020),
          StringDate: '2020,December',
          inDetail: `Now, I get my laptop again As my father is back home, So I setup my dev enviroment which was now tailwindcss,html Nothing. Then I make a big thing using only these, for my teacher Naresh Sir And as to install tailwindcss I am going to npm which was very unfamiliar in starting. `,
        },
        {
          Event: 'Learning about pwa ',
          Place: 'Internet(Home)',
          Date: new Date(2021),
          StringDate: '2021,Jan',
          inDetail: `Now I am lerning about pwa wow , but not funny It's wasn't easy as I had to write service worker That I learned from Net Ninja and Giving it a try which was full of bugs That I resolve over next 13days. But in those 13days I remember that I was full of happiness after completing this project without javascript again.`,
        },
        {
          Event: 'Confused btw frameworks',
          Place: 'Internet(Home)',
          Date: new Date(2021),
          StringDate: '2021,Feb',
          inDetail: `As a person can also get confused between things, Myself get Confused between Svelte,Vue,React And My Final Term Exams. Now, I know that Final term exams are important still I go Vuejs to learn but later I get to know that there are not as many resourses to learn, But I make a complete project with it Using Dynamic Routing as well with firebase but Becoming wrost .`,
        },
        {
          Event: 'But After that I Go for Sveltejs',
          Place: 'Internet',
          Date: new Date(2021),
          StringDate: '2021,Feb',
          inDetail: `After that I go for svelte because it was easy but still I am a nobe not expert in javascript. Developed a Blog music player with it,but get hearing about popularity of Reactjs I now thinking constantly about learning react.So, As started learning it, Managing file system as nobe get wrost but Now atleast I am familiar with React .`,
        },
        {
          Event: 'Now Again Vuejs',
          Place: 'Internet',
          Date: new Date(2021),
          StringDate: '2021,June',
          inDetail: `Now, I am shifting to Vue js because it is both easy to learn and quite young framework. So, I started making this website which is here .`,
        },
      ],
    }
  },
  setup() {
    function reverseArr(input) {
      var ret = new Array()
      for (var i = input.length - 1; i >= 0; i--) {
        ret.push(input[i])
      }
      return ret
    }
    const numSteps = 20.0
    let boxElements
    let prevRatio = 0.0
    // Set things up
    // window.addEventListener(
    //   'load',
    //   (event) => {
    //   },
    //   false
    // )
    function ActiveCircle() {
      return '<svg viewBox="0 0 12 12" class="w-3 h-3 mr-6 overflow-visible text-cyan-400 dark:text-teal-900 "> <circle cx="6" cy="6" r="6" fill="currentColor"></circle> <circle cx="6" cy="6" r="11" fill="none" stroke="currentColor" strokeWidth="2"></circle> <path d="M 6 18 V 500" fill="none" strokeWidth="2" stroke="currentColor"class="text-gray-200 dark:text-teal-50"></path></svg>'
    }
    function InActiveCircle() {
      return '<svg viewBox="0 0 12 12" class ="w-3 h-3 mr-6 overflow-visible text-gray-300 dark:text-teal-100"> <circle cx="6" cy="6" r="6" fill="currentColor"></circle> <path d="M 6 18 V 500" fill="none" strokeWidth="2" stroke="currentColor" class="text-gray-200 dark:text-teal-50" ></path></svg>'
    }

    function handleIntersect(entries, observer) {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('!translate-x-0')
        } else {
          entry.target.classList.remove('!translate-x-0')
        }
      }
    }
    function buildThresholdList() {
      let thresholds = []
      let numSteps = 20

      for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps
        thresholds.push(ratio)
      }

      thresholds.push(0)
      return thresholds
    }

    function createObserver(b) {
      let options = {
        root: null,
        rootMargin: '0px',
        threshold: buildThresholdList(),
      }
      let observer = new IntersectionObserver(handleIntersect, options)
      observer.observe(b)
    }

    onMounted(() => {
      boxElements = document.getElementsByClassName('boxElement')
      Array.from(boxElements).forEach((e) => {
        createObserver(e)
      })
    })

    return {
      reverseArr,
      ActiveCircle,
      InActiveCircle,
    }
  },
}
</script>

<style lang="css" scoped></style>
