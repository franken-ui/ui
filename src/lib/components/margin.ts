import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-margin': { marginBottom: '20px' },
	'* + .uk-margin': { marginTop: '20px !important' },
	'.uk-margin-top': { marginTop: '20px !important' },
	'.uk-margin-bottom': { marginBottom: '20px !important' },
	'.uk-margin-left': { marginLeft: '20px !important' },
	'.uk-margin-right': { marginRight: '20px !important' },
	'.uk-margin-small': { marginBottom: '10px' },
	'* + .uk-margin-small': { marginTop: '10px !important' },
	'.uk-margin-small-top': { marginTop: '10px !important' },
	'.uk-margin-small-bottom': { marginBottom: '10px !important' },
	'.uk-margin-small-left': { marginLeft: '10px !important' },
	'.uk-margin-small-right': { marginRight: '10px !important' },
	'.uk-margin-medium': { marginBottom: '40px' },
	'* + .uk-margin-medium': { marginTop: '40px !important' },
	'.uk-margin-medium-top': { marginTop: '40px !important' },
	'.uk-margin-medium-bottom': { marginBottom: '40px !important' },
	'.uk-margin-medium-left': { marginLeft: '40px !important' },
	'.uk-margin-medium-right': { marginRight: '40px !important' },
	'.uk-margin-large': { marginBottom: '40px' },
	'* + .uk-margin-large': { marginTop: '40px !important' },
	'.uk-margin-large-top': { marginTop: '40px !important' },
	'.uk-margin-large-bottom': { marginBottom: '40px !important' },
	'.uk-margin-large-left': { marginLeft: '40px !important' },
	'.uk-margin-large-right': { marginRight: '40px !important' },
	'.uk-margin-xlarge': { marginBottom: '70px' },
	'* + .uk-margin-xlarge': { marginTop: '70px !important' },
	'.uk-margin-xlarge-top': { marginTop: '70px !important' },
	'.uk-margin-xlarge-bottom': { marginBottom: '70px !important' },
	'.uk-margin-xlarge-left': { marginLeft: '70px !important' },
	'.uk-margin-xlarge-right': { marginRight: '70px !important' },
	'.uk-margin-auto': {
		marginLeft: 'auto !important',
		marginRight: 'auto !important'
	},
	'.uk-margin-auto-top': { marginTop: 'auto !important' },
	'.uk-margin-auto-bottom': { marginBottom: 'auto !important' },
	'.uk-margin-auto-left': { marginLeft: 'auto !important' },
	'.uk-margin-auto-right': { marginRight: 'auto !important' },
	'.uk-margin-auto-vertical': {
		marginTop: 'auto !important',
		marginBottom: 'auto !important'
	},
	'.uk-margin-remove': { margin: '0 !important' },
	'.uk-margin-remove-top': { marginTop: '0 !important' },
	'.uk-margin-remove-bottom': { marginBottom: '0 !important' },
	'.uk-margin-remove-left': { marginLeft: '0 !important' },
	'.uk-margin-remove-right': { marginRight: '0 !important' },
	'.uk-margin-remove-vertical': {
		marginTop: '0 !important',
		marginBottom: '0 !important'
	},
	'.uk-margin-remove-adjacent + *, .uk-margin-remove-first-child > :first-child': {
		marginTop: '0 !important'
	},
	'.uk-margin-remove-last-child > :last-child': {
		marginBottom: '0 !important'
	}
};

export const media: CSSRuleObject = {
	'@media (min-width: 640px)': {
		'.uk-margin-auto\\@s': {
			marginLeft: 'auto !important',
			marginRight: 'auto !important'
		},
		'.uk-margin-auto-left\\@s': { marginLeft: 'auto !important' },
		'.uk-margin-auto-right\\@s': { marginRight: 'auto !important' },
		'.uk-margin-remove-left\\@s': { marginLeft: '0 !important' },
		'.uk-margin-remove-right\\@s': { marginRight: '0 !important' }
	},
	'@media (min-width: 768px)': {
		'.uk-margin-auto\\@m': {
			marginLeft: 'auto !important',
			marginRight: 'auto !important'
		},
		'.uk-margin-auto-left\\@m': { marginLeft: 'auto !important' },
		'.uk-margin-auto-right\\@m': { marginRight: 'auto !important' },
		'.uk-margin-remove-left\\@m': { marginLeft: '0 !important' },
		'.uk-margin-remove-right\\@m': { marginRight: '0 !important' }
	},
	'@media (min-width: 1024px)': {
		'.uk-margin-large': { marginBottom: '70px' },
		'* + .uk-margin-large': { marginTop: '70px !important' },
		'.uk-margin-large-top': { marginTop: '70px !important' },
		'.uk-margin-large-bottom': { marginBottom: '70px !important' },
		'.uk-margin-large-left': { marginLeft: '70px !important' },
		'.uk-margin-large-right': { marginRight: '70px !important' },
		'.uk-margin-xlarge': { marginBottom: '140px' },
		'* + .uk-margin-xlarge': { marginTop: '140px !important' },
		'.uk-margin-xlarge-top': { marginTop: '140px !important' },
		'.uk-margin-xlarge-bottom': { marginBottom: '140px !important' },
		'.uk-margin-xlarge-left': { marginLeft: '140px !important' },
		'.uk-margin-xlarge-right': { marginRight: '140px !important' },
		'.uk-margin-auto\\@l': {
			marginLeft: 'auto !important',
			marginRight: 'auto !important'
		},
		'.uk-margin-auto-left\\@l': { marginLeft: 'auto !important' },
		'.uk-margin-auto-right\\@l': { marginRight: 'auto !important' },
		'.uk-margin-remove-left\\@l': { marginLeft: '0 !important' },
		'.uk-margin-remove-right\\@l': { marginRight: '0 !important' }
	},
	'@media (min-width: 1280px)': {
		'.uk-margin-auto\\@xl': {
			marginLeft: 'auto !important',
			marginRight: 'auto !important'
		},
		'.uk-margin-auto-left\\@xl': { marginLeft: 'auto !important' },
		'.uk-margin-auto-right\\@xl': { marginRight: 'auto !important' },
		'.uk-margin-remove-left\\@xl': { marginLeft: '0 !important' },
		'.uk-margin-remove-right\\@xl': { marginRight: '0 !important' }
	}
};

export interface MarginHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<MarginHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: MarginHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
