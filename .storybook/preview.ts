import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f0f0f0' },
        { name: 'dark', value: '#0a0a0a' },
        { name: 'white', value: '#ffffff' },
      ],
    },
    a11y: {
      test: 'todo'
    }
  },
};

export default preview;