import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-marker': {
		padding: '5px',
		backgroundColor: '#222',
		color: '#fff',
		borderRadius: '500px'
	},
	'.uk-marker:hover': { color: '#fff' }
};

export interface MarkerHooks {
	'hook-marker': CSSRuleObject;
	'hook-hover': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<MarkerHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: MarkerHooks = {
		'hook-marker': {},
		'hook-hover': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-marker': {
			..._hooks['hook-marker']
		},
		'.uk-marker:hover': {
			..._hooks['hook-hover']
		},
		..._hooks['hook-misc']
	};
};
