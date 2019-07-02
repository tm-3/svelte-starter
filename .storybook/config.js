import { configure, addParameters } from '@storybook/svelte';
import { create } from '@storybook/theming';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  options: {
    theme: create({
      base: 'dark',
      brandTitle: 'LCL Component Library',
    }),
    isFullscreen: false,
    panelPosition: 'right',
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
