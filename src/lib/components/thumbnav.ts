import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-thumbnav': {
		display: 'flex',
		flexWrap: 'wrap',
		margin: '0',
		padding: '0',
		listStyle: 'none',
		marginLeft: '-15px'
	},
	'.uk-thumbnav > *': { paddingLeft: '15px' },
	'.uk-thumbnav > * > *': { display: 'inline-block', position: 'relative' },
	'.uk-thumbnav > * > *::after': {
		content: "''",
		position: 'absolute',
		top: '0',
		bottom: '0',
		left: '0',
		right: '0',
		backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4))',
		transition: 'opacity 0.1s ease-in-out'
	},
	'.uk-thumbnav > * > :hover::after': { opacity: '0' },
	'.uk-thumbnav > .uk-active > *::after': { opacity: '0' },
	'.uk-thumbnav-vertical': {
		flexDirection: 'column',
		marginLeft: '0',
		marginTop: '-15px'
	},
	'.uk-thumbnav-vertical > *': { paddingLeft: '0', paddingTop: '15px' }
};

export interface ThumbnavHooks {
	'hook-thumbnav': CSSRuleObject;
	'hook-item': CSSRuleObject;
	'hook-item-hover': CSSRuleObject;
	'hook-item-active': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<ThumbnavHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: ThumbnavHooks = {
		'hook-thumbnav': {},
		'hook-item': {},
		'hook-item-hover': {},
		'hook-item-active': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-thumbnav': {
			..._hooks['hook-thumbnav']
		},
		'.uk-thumbnav > * > *': {
			..._hooks['hook-item']
		},
		'.uk-thumbnav > * > :hover': {
			..._hooks['hook-item-hover']
		},
		'.uk-thumbnav > .uk-active > *': {
			..._hooks['hook-item-active']
		},
		..._hooks['hook-misc']
	};
};
