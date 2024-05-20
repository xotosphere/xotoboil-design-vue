//@ts-ignore
import UIButtonComponent from "./UIButton.vue";
import {Meta, StoryFn} from "@storybook/vue3";
import {action} from "@storybook/addon-actions";

export default {
	title: "button/UIButton",
	component: UIButtonComponent as any,
} as Meta;

export const UIButton: StoryFn = (args: any) => ({
	components: {UIButton: UIButtonComponent},
	methods: {
		action,
	},
	setup() {
		return {args};
	},
	template: `<UIButton v-bind="args" @click="action('click')($event)">{{args.label}}</UIButton>`,
});

UIButton.args = {
	label: "Click me",
	disabled: false,
};

UIButton.decorators = [
	() => ({
		template: '<div style="margin: 1em 0;"><story /></div>',
	}),
];
