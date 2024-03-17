import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-breadcrumb': { padding: '0', listStyle: 'none' },
	'.uk-breadcrumb > *': { display: 'contents' },
	'.uk-breadcrumb > * > *': { fontSize: '0.875rem', color: '#999' },
	'.uk-breadcrumb > * > :hover': { color: '#666', textDecoration: 'none' },
	'.uk-breadcrumb > :last-child > span, .uk-breadcrumb > :last-child > a:not([href])': {
		color: '#666'
	},
	'.uk-breadcrumb > :nth-child(n + 2):not(.uk-first-column)::before': {
		content: "'/'",
		display: 'inline-block',
		margin: '0 20px 0 calc(20px - 4px)',
		fontSize: '0.875rem',
		color: '#999'
	}
};

export interface BreadcrumbHooks {
	'hook-breadcrumb': CSSRuleObject;
	'hook-breadcrumb-solid': CSSRuleObject;
	'hook-item': CSSRuleObject;
	'hook-item-hover': CSSRuleObject;
	'hook-item-disabled': CSSRuleObject;
	'hook-item-active': CSSRuleObject;
	'hook-divider': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<BreadcrumbHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: BreadcrumbHooks = {
		'hook-breadcrumb': {},
		'hook-breadcrumb-solid': {},
		'hook-item': {},
		'hook-item-hover': {},
		'hook-item-disabled': {},
		'hook-item-active': {},
		'hook-divider': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-breadcrumb': {
			..._hooks['hook-breadcrumb']
		},
		'.uk-breadcrumb-solid': {
			..._hooks['hook-breadcrumb-solid']
		},
		'.uk-breadcrumb > * > *': {
			..._hooks['hook-item']
		},
		'.uk-breadcrumb > * > :hover': {
			..._hooks['hook-item-hover']
		},
		'.uk-breadcrumb > :last-child > span, .uk-breadcrumb > :last-child > a:not([href])': {
			..._hooks['hook-item-active']
		},
		'.uk-breadcrumb > :nth-child(n + 2):not(.uk-first-column)::before': {
			..._hooks['hook-divider']
		},
		'.uk-breadcrumb > .uk-disabled > *': {
			..._hooks['hook-item-disabled']
		},
		..._hooks['hook-misc']
	};
};
