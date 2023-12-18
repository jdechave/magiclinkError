import type { Config } from "tailwindcss"

const config: Config = {
   safelist: [
      "grid-cols-1",
      "grid-cols-2",
      "grid-cols-3",
      "grid-cols-4",
      "grid-cols-5",
      "grid-cols-6",
      "grid-cols-7",
      "grid-cols-8",
      "grid-cols-9",
      "grid-cols-10",
      "grid-cols-11",
      "grid-cols-12",
      "w-1/2",
      "w-1/3",
      "w-2/3",
      "w-1/4",
      "w-2/4",
      "w-3/4",
      "w-1/5",
      "w-2/5",
      "w-3/5",
      "w-4/5",
      "w-1/6",
      "w-2/6",
      "w-3/6",
      "w-4/6",
      "w-5/6",
      "quest-input-side-by-side",
      "quest-values-vertical",
      "quest-values-horizontal",
      "quest-value-label-top",
      "quest-value-label-right",
      "quest-group-shared-values-right"
   ],
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./common/**/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/primereact/**/*.{js,ts,jsx,tsx}"
   ],
   // darkMode: "class",
   theme: {
      extend: {
         colors: {
            primary: "var(--primary)",
            secondary: "var(--secondary)",
            success: "var(--success)",
            info: "var(--info)",
            warning: "var(--warning)",
            danger: "var(--danger)",
            light: "var(--light)",
            dark: "var(--dark)",
            white: "var(--white)",
            black: "var(--black)",
            link: "var(--link)"
         }
      }
   },
   daisyui: {
      themes: false
   },
   plugins: [require("daisyui"), require("@tailwindcss/forms")]
}
export default config
