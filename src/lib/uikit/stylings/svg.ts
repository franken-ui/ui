import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	".uk-svg, .uk-svg:not(.uk-preserve) [fill*='#']:not(.uk-preserve)": {
		fill: 'currentcolor'
	},
	".uk-svg:not(.uk-preserve) [stroke*='#']:not(.uk-preserve)": {
		stroke: 'currentcolor'
	},
	'.uk-svg': { transform: 'translate(0, 0)' }
};

export interface SvgHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<SvgHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: SvgHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
