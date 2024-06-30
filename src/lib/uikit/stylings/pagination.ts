import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-pagination': {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		marginLeft: '0',
		padding: '0',
		listStyle: 'none'
	},
	'.uk-pagination > *': {
		flex: 'none',
		paddingLeft: '0',
		position: 'relative'
	},
	'.uk-pagination > * > *': {
		display: 'flex',
		alignItems: 'center',
		columnGap: '0.25em',
		padding: '5px 10px',
		color: '#999',
		transition: 'color 0.1s ease-in-out'
	},
	'.uk-pagination > * > :hover': { color: '#666', textDecoration: 'none' },
	'.uk-pagination > .uk-active > *': { color: '#666' },
	'.uk-pagination > .uk-disabled > *': { color: '#999' }
};

export interface PaginationHooks {
	'hook-pagination': CSSRuleObject;
	'hook-item': CSSRuleObject;
	'hook-item-hover': CSSRuleObject;
	'hook-item-active': CSSRuleObject;
	'hook-item-disabled': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<PaginationHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: PaginationHooks = {
		'hook-pagination': {},
		'hook-item': {},
		'hook-item-hover': {},
		'hook-item-active': {},
		'hook-item-disabled': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-pagination': {
			..._hooks['hook-pagination']
		},
		'.uk-pagination > * > *': {
			..._hooks['hook-item']
		},
		'.uk-pagination > * > :hover': {
			..._hooks['hook-item-hover']
		},
		'.uk-pagination > .uk-active > *': {
			..._hooks['hook-item-active']
		},
		'.uk-pagination > .uk-disabled > *': {
			..._hooks['hook-item-disabled']
		},
		..._hooks['hook-misc']
	};
};
