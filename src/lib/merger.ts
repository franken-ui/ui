import merge from 'lodash/merge.js';
import type { Components, CSSRuleObject, ComponentKey } from './types.js';

export default (options: {
	palettes: CSSRuleObject;
	components: Components;
	layer?: boolean;
}): CSSRuleObject => {
	const { palettes, components, layer = false } = options;

	// Define exception components that should not be in the layer
	const exceptions: ComponentKey[] = ['chart'];

	// Initialize rule objects
	const rules: CSSRuleObject = {};
	const exceptionRules: CSSRuleObject = {};
	const layerRules: CSSRuleObject = {};

	// Process components
	for (const key in components) {
		if (Object.prototype.hasOwnProperty.call(components, key)) {
			// Check if component is an exception
			if (exceptions.includes(key)) {
				merge(exceptionRules, components[key]);
			} else {
				merge(layerRules, components[key]);
			}
		}
	}

	// Combine rules based on layer option
	if (layer) {
		// Structure for layered output
		rules['@layer components'] = layerRules;
		return { ...palettes, ...exceptionRules, ...rules };
	} else {
		// No layering - use original behavior
		return { ...palettes, ...exceptionRules, ...layerRules };
	}
};
