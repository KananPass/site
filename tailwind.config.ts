import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00bfa6",
        primary15: "#00bfa6bd",
        primary25: "#00bfa6a5",
        primary50: "#00bfa680",
        github: "#8957E5",
        dark: "#0D1117",
        light: "#FCFCFC",
      },
      height: {
        "screen-size": "83vh",
      },
    },
  },
  plugins: [],
};
export default config;
