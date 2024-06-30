import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'a.uk-link-muted, .uk-link-muted a, .uk-link-toggle .uk-link-muted': {
		color: '#999'
	},
	'a.uk-link-muted:hover, .uk-link-muted a:hover, .uk-link-toggle:hover .uk-link-muted': {
		color: '#666'
	},
	'a.uk-link-text, .uk-link-text a, .uk-link-toggle .uk-link-text': {
		color: 'inherit'
	},
	'a.uk-link-text:hover, .uk-link-text a:hover, .uk-link-toggle:hover .uk-link-text': {
		color: '#999'
	},
	'a.uk-link-heading, .uk-link-heading a, .uk-link-toggle .uk-link-heading': {
		color: 'inherit'
	},
	'a.uk-link-heading:hover, .uk-link-heading a:hover, .uk-link-toggle:hover .uk-link-heading': {
		color: '#1e87f0',
		textDecoration: 'none'
	},
	'a.uk-link-reset, .uk-link-reset a': {
		color: 'inherit !important',
		textDecoration: 'none !important'
	},
	'.uk-link-toggle': {
		color: 'inherit !important',
		textDecoration: 'none !important'
	}
};

export interface LinkHooks {
	'hook-muted': CSSRuleObject;
	'hook-muted-hover': CSSRuleObject;
	'hook-text': CSSRuleObject;
	'hook-text-hover': CSSRuleObject;
	'hook-heading': CSSRuleObject;
	'hook-heading-hover': CSSRuleObject;
	'hook-reset': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<LinkHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: LinkHooks = {
		'hook-muted': {},
		'hook-muted-hover': {},
		'hook-text': {},
		'hook-text-hover': {},
		'hook-heading': {},
		'hook-heading-hover': {},
		'hook-reset': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'a.uk-link-muted, .uk-link-muted a, .uk-link-toggle .uk-link-muted': {
			..._hooks['hook-muted']
		},
		'a.uk-link-muted:hover, .uk-link-muted a:hover, .uk-link-toggle:hover .uk-link-muted': {
			..._hooks['hook-muted-hover']
		},
		'a.uk-link-text, .uk-link-text a, .uk-link-toggle .uk-link-text': {
			..._hooks['hook-text']
		},
		'a.uk-link-text:hover, .uk-link-text a:hover, .uk-link-toggle:hover .uk-link-text': {
			..._hooks['hook-text-hover']
		},
		'a.uk-link-heading, .uk-link-heading a, .uk-link-toggle .uk-link-heading': {
			..._hooks['hook-heading']
		},
		'a.uk-link-heading:hover, .uk-link-heading a:hover, .uk-link-toggle:hover .uk-link-heading': {
			..._hooks['hook-heading-hover']
		},
		'a.uk-link-reset, .uk-link-reset a': {
			..._hooks['hook-reset']
		},
		..._hooks['hook-misc']
	};
};
