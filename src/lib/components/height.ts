import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	"[class*='uk-height']": { boxSizing: 'border-box' },
	'.uk-height-1-1': { height: '100%' },
	'.uk-height-viewport': { minHeight: '100vh' },
	'.uk-height-viewport-2': { minHeight: '200vh' },
	'.uk-height-viewport-3': { minHeight: '300vh' },
	'.uk-height-viewport-4': { minHeight: '400vh' },
	'.uk-height-small': { height: '150px' },
	'.uk-height-medium': { height: '300px' },
	'.uk-height-large': { height: '450px' },
	'.uk-height-max-small': { maxHeight: '150px' },
	'.uk-height-max-medium': { maxHeight: '300px' },
	'.uk-height-max-large': { maxHeight: '450px' }
};

export interface HeightHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<HeightHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: HeightHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
