import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-dropbar': {
		'--uk-position-offset': '0',
		'--uk-position-shift-offset': '0',
		'--uk-position-viewport-offset': '0',
		width: 'auto',
		padding: '25px 15px 25px 15px',
		backgroundColor: '#fff',
		color: '#666'
	},
	'.uk-dropbar > :last-child': { marginBottom: '0' },
	'.uk-dropbar :focus-visible': { outlineColor: '#333 !important' },
	'.uk-dropbar-large': { paddingTop: '40px', paddingBottom: '40px' },
	'.uk-dropbar-top': { boxShadow: '0 12px 7px -6px rgba(0, 0, 0, 0.05)' },
	'.uk-dropbar-bottom': { boxShadow: '0 -12px 7px -6px rgba(0, 0, 0, 0.05)' },
	'.uk-dropbar-left': { boxShadow: '12px 0 7px -6px rgba(0, 0, 0, 0.05)' },
	'.uk-dropbar-right': { boxShadow: '-12px 0 7px -6px rgba(0, 0, 0, 0.05)' }
};

export const media: CSSRuleObject = {
	'@media (min-width: 640px)': {
		'.uk-dropbar': { paddingLeft: '30px', paddingRight: '30px' }
	},
	'@media (min-width: 960px)': {
		'.uk-dropbar': { paddingLeft: '40px', paddingRight: '40px' }
	}
};

export interface DropbarHooks {
	'hook-dropbar': CSSRuleObject;
	'hook-top': CSSRuleObject;
	'hook-bottom': CSSRuleObject;
	'hook-left': CSSRuleObject;
	'hook-right': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<DropbarHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: DropbarHooks = {
		'hook-dropbar': {},
		'hook-top': {},
		'hook-bottom': {},
		'hook-left': {},
		'hook-right': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-dropbar': {
			..._hooks['hook-dropbar']
		},
		'.uk-dropbar-top': {
			..._hooks['hook-top']
		},
		'.uk-dropbar-bottom': {
			..._hooks['hook-bottom']
		},
		'.uk-dropbar-left': {
			..._hooks['hook-left']
		},
		'.uk-dropbar-right': {
			..._hooks['hook-right']
		},
		..._hooks['hook-misc']
	};
};
