import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-close': {
		color: '#999',
		transition: '0.1s ease-in-out',
		transitionProperty: 'color, opacity'
	},
	'.uk-close:hover': { color: '#666' }
};

export interface CloseHooks {
	'hook-close': CSSRuleObject;
	'hook-hover': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<CloseHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: CloseHooks = {
		'hook-close': {},
		'hook-hover': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-close': {
			..._hooks['hook-close']
		},
		'.uk-close:hover': {
			..._hooks['hook-hover']
		},
		..._hooks['hook-misc']
	};
};
