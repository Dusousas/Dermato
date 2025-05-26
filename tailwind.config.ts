import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        BrowP: "#663130",
        BrowS: "#9c6463",
        WhiteD: "#fff7f1",
      },
    },
  },
  plugins: [],
} satisfies Config;
