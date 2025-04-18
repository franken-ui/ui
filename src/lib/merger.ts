import merge from 'lodash/merge.js';
import type { Components, CSSRuleObject, ComponentKey, Options } from './types.js';

export default (options: {
	palettes: CSSRuleObject;
	components: Components;
	layer?: boolean;
	options?: Options;
}): CSSRuleObject => {
	const { palettes, components, layer = false } = options;

	// Define exception components that should not be in the layer
	let exceptions: ComponentKey[] = ['utility'];

	// Initialize rule objects
	const rules: CSSRuleObject = {};
	const layers: { [key: string]: CSSRuleObject } = {
		components: {}
	};

	// Process components
	for (const key in components) {
		if (Object.prototype.hasOwnProperty.call(components, key)) {
			// Check if component is not in exceptions
			if (!exceptions.includes(key)) {
				merge(layers.components, components[key]);
			}

			// TODO: Refactor to include check for user-defined exceptions, handle user-defined exceptions
		}
	}

	// Combine rules based on layer option
	if (layer) {
		// Structure for layered output
		rules['@layer theme'] = palettes;
		rules['@layer components'] = layers.components;
		rules['@layer utilities'] = components.utility;

		return rules;
	} else {
		// No layering - use original behavior
		return { ...palettes, ...layers.components, ...components.utility };
	}
};
