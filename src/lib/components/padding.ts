import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-padding': { padding: '30px' },
	'.uk-padding-small': { padding: '15px' },
	'.uk-padding-large': { padding: '40px' },
	'.uk-padding-remove': { padding: '0 !important' },
	'.uk-padding-remove-top': { paddingTop: '0 !important' },
	'.uk-padding-remove-bottom': { paddingBottom: '0 !important' },
	'.uk-padding-remove-left': { paddingLeft: '0 !important' },
	'.uk-padding-remove-right': { paddingRight: '0 !important' },
	'.uk-padding-remove-vertical': {
		paddingTop: '0 !important',
		paddingBottom: '0 !important'
	},
	'.uk-padding-remove-horizontal': {
		paddingLeft: '0 !important',
		paddingRight: '0 !important'
	}
};

export const media: CSSRuleObject = {
	'@media (min-width: 1200px)': {
		'.uk-padding': { padding: '40px' },
		'.uk-padding-large': { padding: '70px' }
	}
};

export interface PaddingHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<PaddingHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: PaddingHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
