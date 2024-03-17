import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-alert': {
		position: 'relative',
		marginBottom: '20px',
		padding: '15px 29px 15px 15px',
		backgroundColor: '#f8f8f8',
		color: '#666'
	},
	'* + .uk-alert': { marginTop: '20px' },
	'.uk-alert > :last-child': { marginBottom: '0' },
	'.uk-alert-close': {
		position: 'absolute',
		top: '20px',
		right: '15px',
		color: 'inherit',
		opacity: '0.4'
	},
	'.uk-alert-close:first-child + *': { marginTop: '0' },
	'.uk-alert-close:hover': { color: 'inherit', opacity: '0.8' },
	'.uk-alert-primary': { backgroundColor: '#d8eafc', color: '#1e87f0' },
	'.uk-alert-success': { backgroundColor: '#edfbf6', color: '#32d296' },
	'.uk-alert-warning': { backgroundColor: '#fff6ee', color: '#faa05a' },
	'.uk-alert-danger': { backgroundColor: '#fef4f6', color: '#f0506e' },
	'.uk-alert h1, .uk-alert h2, .uk-alert h3, .uk-alert h4, .uk-alert h5, .uk-alert h6': {
		color: 'inherit'
	},
	'.uk-alert a:not([class])': { color: 'inherit', textDecoration: 'underline' },
	'.uk-alert a:not([class]):hover': {
		color: 'inherit',
		textDecoration: 'underline'
	}
};

export interface AlertHooks {
	'hook-alert': CSSRuleObject;
	'hook-close': CSSRuleObject;
	'hook-close-hover': CSSRuleObject;
	'hook-close-focus': CSSRuleObject;
	'hook-default': CSSRuleObject;
	'hook-primary': CSSRuleObject;
	'hook-success': CSSRuleObject;
	'hook-warning': CSSRuleObject;
	'hook-danger': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<AlertHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: AlertHooks = {
		'hook-alert': {},
		'hook-close': {},
		'hook-close-hover': {},
		'hook-close-focus': {},
		'hook-default': {},
		'hook-primary': {},
		'hook-success': {},
		'hook-warning': {},
		'hook-danger': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-alert': {
			..._hooks['hook-alert']
		},
		'.uk-alert-close': {
			..._hooks['hook-close']
		},
		'.uk-alert-close:hover': {
			..._hooks['hook-close-hover']
		},
		'.uk-alert-close:focus': {
			..._hooks['hook-close-focus']
		},
		'.uk-alert-default': {
			..._hooks['hook-default']
		},
		'.uk-alert-primary': {
			..._hooks['hook-primary']
		},
		'.uk-alert-success': {
			..._hooks['hook-success']
		},
		'.uk-alert-warning': {
			..._hooks['hook-warning']
		},
		'.uk-alert-danger': {
			..._hooks['hook-danger']
		},
		..._hooks['hook-misc']
	};
};
