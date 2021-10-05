import { defineConfig } from 'vite-plugin-windicss';
import typography from 'windicss/plugin/typography';

export default defineConfig({
  darkMode: 'class',
  plugins: [typography()],
  shortcuts: {
    'glass-morphism': '!bg-clip-padding !backdrop-filter !backdrop-blur-xl bg-opacity-80',
    'glass-border': 'border !dark:border-gray-700 border-gray-200',
  },
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
      serif: ['Montserrat', 'ui-serif', 'Georgia'],
      mono: ['Fira Sans', 'ui-monospace', 'SFMono-Regular'],
      title: ['Rouge Script', 'Open Sans'],
      heading: ['Pacifico', 'Open Sans'],
      monofett: ['monofett', 'Open Sans']
    },
  },
});
