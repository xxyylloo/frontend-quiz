/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [ {
      light: {
        ...require("daisyui/src/theming/themes")["light"],
        primary: "#065a60",
      },
    },{
      dark: {  
        "primary": "#065a60",          
        "secondary": "#84ca00",                  
        "accent": "#001dff",                  
        "neutral": "#242424",                  
        "base-100": "#0e2f41",                  
        
        },
    }],
  }
  };


