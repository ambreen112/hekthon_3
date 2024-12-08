import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Montserrat:["Montserrat"]
      },
       
      colors: {
      'custom-blue': ['rgba(35, 166, 240, 1)'],
      'custom-green':[ 'rgba(45, 192, 113, 1)'],
      },
      
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  };
  plugins: [];

