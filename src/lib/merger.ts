import merge from 'lodash/merge.js';
import type { Components, CSSRuleObject } from './types.js';

export default (options: { palettes: CSSRuleObject; components: Components }): CSSRuleObject => {
	const { palettes, components } = options;

	const rules: CSSRuleObject = {};

	for (const key in components) {
		if (Object.prototype.hasOwnProperty.call(components, key)) {
			merge(rules, components[key]);
		}
	}

	return { ...palettes, ...rules };
};
