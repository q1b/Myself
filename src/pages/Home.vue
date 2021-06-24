<template>
  <section class="flex flex-col w-[calc(100vw+96px)] z-10">
    <div
      class="
        w-full
        select-none
        dark:bg-white dark:bg-dark-home
        bg-[#00202b] bg-light-home
        transition-colors
        duration-700
      "
      :style="{
        animation: `${patternImageAnimation}`,
      }"
    >
      <div
        class="
          px-4
          py-12
          mx-auto
          max-w-7xl
          sm:px-6
          md:py-16
          md:px-8
          md:flex
          md:items-center
          md:justify-between
        "
      >
        <h1
          class="
            text-6xl text-white
            xss:text-7xl
            xs:text-8xl
            lg:text-9xl
            font-round
          "
          style=""
        >
          <span
            class="
              block
              text-cyan-400
              dark:text-emerald-400 dark:text-shadow-dark-home-h1
              text-shadow-light-home-h1
              transition-colors
              duration-700
            "
            >Sukhpreet</span
          >
          <span
            class="
              block
              text-lightBlue-100
              dark:text-white dark:text-shadow-dark-home-p
              text-shadow-light-home-p
            "
            >Singh</span
          >
        </h1>
        <div class="flex mt-8 md:mt-0 md:flex-shrink-0">
          <div
            class="inline-flex rounded-md shadow"
            style="box-shadow: 0px 0px 10px 0.5px #1c90fe99"
          >
            <router-link
              to="/Projects"
              class="
                inline-flex
                items-center
                justify-center
                px-5
                py-3
                text-base
                font-medium
                text-white
                dark:text-teal-900
                bg-blue-600
                dark:bg-teal-300
                border border-transparent
                rounded-md
                hover:bg-blue-700
                dark:hover:bg-teal-100
                transition-colors
                duration-300
              "
            >
              Projects
            </router-link>
          </div>
          <div
            class="inline-flex ml-3 rounded-md shadow lg:ml-7"
            style="box-shadow: 0px 0px 10px 0.5px #fff"
          >
            <a
              href="#"
              class="
                inline-flex
                items-center
                justify-center
                px-5
                py-3
                text-base
                font-medium
                text-blue-600
                dark:text-teal-900
                dark:shadow
                bg-white/90
                rounded-md
                hover:bg-indigo-50
                dark:hover:bg-teal-50
                transition-colors
                duration-300
              "
            >
              Skills
            </a>
          </div>
        </div>
      </div>
    </div>
    <section
      class="
        lg:px-20
        lg:py-10
        sm:py-5
        sm:px-16
        xs:px-10
        xs:py-4
        xs:text-lg
        xss:px-8
        xss:py-4
        text-normal
        bg-gradient-to-br
        dark:bg-gradient-to-b
        from-blue-600
        dark:from-emerald-400
        via-sky-500
        dark:via-lime-200
        to-lightBlue-800
        dark:to-lime-300
        transition-colors
        duration-700
      "
    >
      <article
        class="
          bg-white
          dark:bg-teal-900
          p-4
          xss:rounded-lg
          font-bold
          minh100px]
          transition-colors
          duration-700
        "
      >
        <h1
          class="
            text-xl text-blue-500
            dark:text-emerald-500
            transition-colors
            duration-700
          "
        >
          I am a Web developer, along with learning and exploring things I am
          also very facinate about the upcomming web technologies like A.I,
          Cloud computing and Quantum Computers. I am self-taught developer and
          Check out What I am Doing!
        </h1>
      </article>
    </section>
    <section
      class="
        flex-shrink
        items-center
        flex
        py-10
        place-content-center
        max-h-96
        h-full
        bg-[hsl(220,40%,10%)]
        dark:bg-lime-300
        transition-colors
        duration-700
      "
    >
      <fieldset
        class="
          flex
          items-center
          justify-center
          p-2
          border-2 border-white
          dark:border-lime-200
          rounded-lg
          xss:p-3
          xs:p-4
          sm:p-5
          md:p-7
          lg:p-10
        "
      >
        <legend class="px-2 text-white xss:text-xl">
          You might like to know
        </legend>
        <router-link
          to="/Resources"
          class="h-auto transform -translate-y-1 w-max"
        >
          <h1
            class="
              text-center
              xs:px-10
              p-3
              xs:py-5
              rounded-lg
              xss:rounded-3xl
              bg-[#000716]
              text-blueGray-200
            "
            style="
              box-shadow: inset 0px 0px 10px 1px #ffffff22,
                0px 0px 50px 10px #00000077;
            "
          >
            My Resources
          </h1>
        </router-link>
      </fieldset>
    </section>
    <footer class="mt-auto">
      <div class="bg-[#000716] dark:bg-lime-200">
        <div
          class="
            container
            flex flex-col flex-wrap
            px-5
            py-4
            mx-auto
            sm:flex-row
          "
        >
          <p
            class="
              text-sm text-center
              dark:text-teal-900
              text-gray-500
              sm:text-left
            "
          >
            © 2021 Sukhpreet —
            <a
              href="https://twitter.com/Sukhpreet_LION"
              rel="noopener noreferrer"
              class="ml-1 text-gray-600"
              target="_blank"
              >@Sukhpreet_LION</a
            >
          </p>
          <span
            class="
              inline-flex
              justify-center
              mt-2
              sm:ml-auto
              sm:mt-0
              sm:justify-start
            "
          >
            <a class="dark:text-teal-900 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 dark:text-teal-900 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 dark:text-teal-900 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                ></path>
              </svg>
            </a>
            <a class="ml-3 dark:text-teal-900 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  setup() {
    const patternImageAnimation = 'gradient 15s ease infinite'
    return {
      patternImageAnimation,
    }
  },
}
</script>

<style>
@keyframes gradient {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 0%;
  }
}
</style>
