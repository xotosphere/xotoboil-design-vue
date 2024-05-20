export const parameters = {
	actions: {argTypesRegex: "^on[A-Z].*"},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

import {useArgs} from "@storybook/client-api";

export const decorators = [
	(story, context) => {
		const [_, updateArgs] = useArgs();
		return story({...context, updateArgs});
	},
];
