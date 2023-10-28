import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {

        bgbody:  "#F8F9FA",
        bgnavbar: "#D9D9D9",
        bgfooter: "#495057",
        bgicons: "#70E000",
        bgicons2: "#BD1F36",
        bgcards: "#DEDEDE",
        bgcontact: "#ADB5BD",


        text:  "#000000",
        textnavbar: "#ADB5BD",
        text2: "#",
        text3: "#",
        text4: "#",



      }
    },
  },
  plugins: [],
}
export default config
