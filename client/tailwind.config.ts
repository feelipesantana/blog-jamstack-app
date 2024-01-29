import type { Config } from "tailwindcss";
import VideoStack from '@vidstack/react/tailwind.cjs'
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        "base": '1fr minmax(0, 4fr) 1fr' 
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    VideoStack({
      // Optimize output by specifying player selector.
      selector: '.media-player',
      // Change the media variants prefix.
      prefix: 'media',
    })
  ],
};
export default config;
