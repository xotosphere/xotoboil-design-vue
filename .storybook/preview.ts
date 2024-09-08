import type { Preview, StoryContext } from "@storybook/vue3";

import "./style/style.css";

const preview: Preview = {
  parameters: {
    actions: {
    argTypes: (argType) => argType.name.match(/^on[A-Z].*/)
  },    
  controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["intro", ["readme", "changelog", "style"], "plugins", "atoms"],
        locale: "en-US",
      },
    },
  },

  tags: ["autodocs", "autodocs", "autodocs"]
};

export default preview;

export const decorators = [
  (StoryFn, context) => {
    const storyContext: StoryContext = context;
    return StoryFn({ ...context, storyContext });
  },
];