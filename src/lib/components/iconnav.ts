import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-iconnav': {
		display: 'flex',
		flexWrap: 'wrap',
		margin: '0',
		padding: '0',
		listStyle: 'none',
		marginLeft: '-10px'
	},
	'.uk-iconnav > *': { paddingLeft: '10px' },
	'.uk-iconnav > * > a': {
		display: 'flex',
		alignItems: 'center',
		columnGap: '0.25em',
		lineHeight: '0',
		color: '#999',
		textDecoration: 'none',
		fontSize: '0.875rem',
		transition: '0.1s ease-in-out',
		transitionProperty: 'color, background-color'
	},
	'.uk-iconnav > * > a:hover': { color: '#666' },
	'.uk-iconnav > .uk-active > a': { color: '#666' },
	'.uk-iconnav-vertical': {
		flexDirection: 'column',
		marginLeft: '0',
		marginTop: '-10px'
	},
	'.uk-iconnav-vertical > *': { paddingLeft: '0', paddingTop: '10px' }
};

export interface IconnavHooks {
	'hook-iconnav': CSSRuleObject;
	'hook-item': CSSRuleObject;
	'hook-item-hover': CSSRuleObject;
	'hook-item-active': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<IconnavHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: IconnavHooks = {
		'hook-iconnav': {},
		'hook-item': {},
		'hook-item-hover': {},
		'hook-item-active': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-iconnav': {
			..._hooks['hook-iconnav']
		},
		'.uk-iconnav > * > a': {
			..._hooks['hook-item']
		},
		'.uk-iconnav > * > a:hover': {
			..._hooks['hook-item-hover']
		},
		'.uk-iconnav > .uk-active > a': {
			..._hooks['hook-item-active']
		},
		..._hooks['hook-misc']
	};
};
