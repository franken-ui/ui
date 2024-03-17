import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-slidenav': {
		padding: '5px 10px',
		color: 'rgba(102, 102, 102, 0.5)',
		transition: 'color 0.1s ease-in-out'
	},
	'.uk-slidenav:hover': { color: 'rgba(102, 102, 102, 0.9)' },
	'.uk-slidenav:active': { color: 'rgba(102, 102, 102, 0.5)' },
	'.uk-slidenav-large': { padding: '10px 10px' },
	'.uk-slidenav-container': { display: 'flex' }
};

export interface SlidenavHooks {
	'hook-slidenav': CSSRuleObject;
	'hook-hover': CSSRuleObject;
	'hook-active': CSSRuleObject;
	'hook-previous': CSSRuleObject;
	'hook-next': CSSRuleObject;
	'hook-large': CSSRuleObject;
	'hook-container': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<SlidenavHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: SlidenavHooks = {
		'hook-slidenav': {},
		'hook-hover': {},
		'hook-active': {},
		'hook-previous': {},
		'hook-next': {},
		'hook-large': {},
		'hook-container': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-slidenav': {
			..._hooks['hook-slidenav']
		},
		'.uk-slidenav:hover': {
			..._hooks['hook-hover']
		},
		'.uk-slidenav:active': {
			..._hooks['hook-active']
		},
		'.uk-slidenav-previous': {
			..._hooks['hook-previous']
		},
		'.uk-slidenav-next': {
			..._hooks['hook-next']
		},
		'.uk-slidenav-large': {
			..._hooks['hook-large']
		},
		'.uk-slidenav-container': {
			..._hooks['hook-container']
		},
		..._hooks['hook-misc']
	};
};
