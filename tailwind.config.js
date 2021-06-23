const colors = require('tailwindcss/colors')
module.exports = {
    mode: 'jit',
    purge: {content:['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}','./Navigation/**/*.{vue,js,ts,jsx,tsx}'],
    safelist: [
      ],
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        screens: {
            // => @media (min-width: XXXXpx) { ... }
            'xss':'400px',
            'xs':'500px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },      
        extend: {
            colors:{
                ...colors
            },
            fontFamily:{
                jetMono:'JetBrains Mono, monospace',
                round:'Nova Round, cursive'
            },
            transitionProperty:{
                'backdrop-filter':'backdrop-filter',
                'max-height':'max-height'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
