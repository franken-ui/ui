import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-badge': {
		boxSizing: 'border-box',
		minWidth: '18px',
		height: '18px',
		padding: '0 5px',
		borderRadius: '500px',
		verticalAlign: 'middle',
		backgroundColor: '#1e87f0',
		color: '#fff !important',
		fontSize: '11px',
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		lineHeight: '0'
	},
	'.uk-badge:hover': { textDecoration: 'none' }
};

export interface BadgeHooks {
	'hook-badge': CSSRuleObject;
	'hook-hover': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<BadgeHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: BadgeHooks = {
		'hook-badge': {},
		'hook-hover': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-badge': {
			..._hooks['hook-badge']
		},
		'.uk-badge:hover': {
			..._hooks['hook-hover']
		},
		..._hooks['hook-misc']
	};
};
