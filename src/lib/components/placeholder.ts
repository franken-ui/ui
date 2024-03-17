import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-placeholder': {
		marginBottom: '20px',
		padding: '30px 30px',
		background: 'transparent',
		border: '1px dashed #e5e5e5'
	},
	'* + .uk-placeholder': { marginTop: '20px' },
	'.uk-placeholder > :last-child': { marginBottom: '0' }
};

export interface PlaceholderHooks {
	'hook-placeholder': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<PlaceholderHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: PlaceholderHooks = {
		'hook-placeholder': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-placeholder': {
			..._hooks['hook-placeholder']
		},
		..._hooks['hook-misc']
	};
};
