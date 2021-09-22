import { defineConfig } from 'vite-plugin-windicss';
import typography from 'windicss/plugin/typography';

export default defineConfig({
  darkMode: 'class',
  plugins: [typography()],
  shortcuts: {
    'glass-morphism': '!bg-clip-padding !backdrop-filter !backdrop-blur-xl bg-opacity-60 border border-gray-200 !dark:border-black-800'
  },
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
      serif: ['Montserrat', 'ui-serif', 'Georgia'],
      mono: ['Fira Sans', 'ui-monospace', 'SFMono-Regular'],
    },
  },
});
