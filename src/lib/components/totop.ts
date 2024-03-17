import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-totop': {
		padding: '5px',
		color: '#999',
		transition: 'color 0.1s ease-in-out'
	},
	'.uk-totop:hover': { color: '#666' },
	'.uk-totop:active': { color: '#333' }
};

export interface ToTopHooks {
	'hook-totop': CSSRuleObject;
	'hook-hover': CSSRuleObject;
	'hook-active': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<ToTopHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: ToTopHooks = {
		'hook-totop': {},
		'hook-hover': {},
		'hook-active': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-totop': {
			..._hooks['hook-totop']
		},
		'.uk-totop:hover': {
			..._hooks['hook-hover']
		},
		'.uk-totop:active': {
			..._hooks['hook-active']
		},
		..._hooks['hook-misc']
	};
};
