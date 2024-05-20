//@ts-ignore
import UIButton from "./UIButton.vue";

import {mount} from "@vue/test-utils";

test("displays message", () => {
	const component = mount(UIButton, {
		slots: {
			default: "Hello world",
		},
	});

	expect(component.text()).toBe("Hello world");
});

test("emits event on click", () => {
	const component = mount(UIButton, {
		slots: {
			default: "Hello world",
		},
	});

	component.trigger("click");

	expect(component.emitted()).toHaveProperty("click");
});
