import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-subnav': {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		marginLeft: '-20px',
		padding: '0',
		listStyle: 'none'
	},
	'.uk-subnav > *': { flex: 'none', paddingLeft: '20px', position: 'relative' },
	'.uk-subnav > * > :first-child': {
		display: 'flex',
		alignItems: 'center',
		columnGap: '0.25em',
		color: '#999',
		fontSize: '0.875rem',
		textTransform: 'uppercase',
		transition: '0.1s ease-in-out',
		transitionProperty: 'color, background-color'
	},
	'.uk-subnav > * > a:hover': { color: '#666', textDecoration: 'none' },
	'.uk-subnav > .uk-active > a': { color: '#333' },
	'.uk-subnav-divider': { marginLeft: '-41px' },
	'.uk-subnav-divider > *': { display: 'flex', alignItems: 'center' },
	'.uk-subnav-divider > ::before': {
		content: "''",
		height: '1.5em',
		marginLeft: '0px',
		marginRight: '20px',
		borderLeft: '1px solid transparent'
	},
	'.uk-subnav-divider > :nth-child(n + 2):not(.uk-first-column)::before': {
		borderLeftColor: '#e5e5e5'
	},
	'.uk-subnav-pill > * > :first-child': {
		padding: '5px 10px',
		background: 'transparent',
		color: '#999'
	},
	'.uk-subnav-pill > * > a:hover': {
		backgroundColor: '#f8f8f8',
		color: '#666'
	},
	'.uk-subnav-pill > * > a:active': {
		backgroundColor: '#f8f8f8',
		color: '#666'
	},
	'.uk-subnav-pill > .uk-active > a': {
		backgroundColor: '#1e87f0',
		color: '#fff'
	},
	'.uk-subnav > .uk-disabled > a': { color: '#999' }
};

export interface SubnavHooks {
	'hook-subnav': CSSRuleObject;
	'hook-item': CSSRuleObject;
	'hook-item-hover': CSSRuleObject;
	'hook-item-active': CSSRuleObject;
	'hook-divider': CSSRuleObject;
	'hook-pill-item': CSSRuleObject;
	'hook-pill-item-hover': CSSRuleObject;
	'hook-pill-item-onclick': CSSRuleObject;
	'hook-pill-item-active': CSSRuleObject;
	'hook-item-disabled': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<SubnavHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: SubnavHooks = {
		'hook-subnav': {},
		'hook-item': {},
		'hook-item-hover': {},
		'hook-item-active': {},
		'hook-divider': {},
		'hook-pill-item': {},
		'hook-pill-item-hover': {},
		'hook-pill-item-onclick': {},
		'hook-pill-item-active': {},
		'hook-item-disabled': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-subnav': {
			..._hooks['hook-subnav']
		},
		'.uk-subnav > * > :first-child': {
			..._hooks['hook-item']
		},
		'.uk-subnav > * > a:hover': {
			..._hooks['hook-item-hover']
		},
		'.uk-subnav > .uk-active > a': {
			..._hooks['hook-item-active']
		},
		'.uk-subnav-divider > :nth-child(n + 2):not(.uk-first-column)::before': {
			..._hooks['hook-divider']
		},
		'.uk-subnav-pill > * > :first-child': {
			..._hooks['hook-pill-item']
		},
		'.uk-subnav-pill > * > a:hover': {
			..._hooks['hook-pill-item-hover']
		},
		'.uk-subnav-pill > * > a:active': {
			..._hooks['hook-pill-item-onclick']
		},
		'.uk-subnav-pill > .uk-active > a': {
			..._hooks['hook-pill-item-active']
		},
		'.uk-subnav > .uk-disabled > a': {
			..._hooks['hook-item-disabled']
		},
		..._hooks['hook-misc']
	};
};
