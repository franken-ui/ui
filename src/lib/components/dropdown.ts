import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-dropdown': {
		'--uk-position-offset': '10px',
		'--uk-position-viewport-offset': '15px',
		width: 'auto',
		minWidth: '200px',
		padding: '25px',
		backgroundColor: '#fff',
		color: '#666',
		boxShadow: '0 5px 12px rgba(0, 0, 0, 0.15)'
	},
	'.uk-dropdown > :last-child': { marginBottom: '0' },
	'.uk-dropdown :focus-visible': { outlineColor: '#333 !important' },
	'.uk-dropdown-large': { padding: '40px' },
	'.uk-dropdown-dropbar': {
		width: 'auto',
		background: 'transparent',
		padding: '5px 0 25px 0',
		'--uk-position-viewport-offset': '15px',
		boxShadow: 'none'
	},
	'.uk-dropdown-dropbar-large': { paddingTop: '40px', paddingBottom: '40px' },
	'.uk-dropdown-nav': { fontSize: '0.875rem' },
	'.uk-dropdown-nav > li > a': { color: '#999' },
	'.uk-dropdown-nav > li > a:hover, .uk-dropdown-nav > li.uk-active > a': {
		color: '#666'
	},
	'.uk-dropdown-nav .uk-nav-subtitle': { fontSize: '12px' },
	'.uk-dropdown-nav .uk-nav-header': { color: '#333' },
	'.uk-dropdown-nav .uk-nav-divider': { borderTop: '1px solid #e5e5e5' },
	'.uk-dropdown-nav .uk-nav-sub a': { color: '#999' },
	'.uk-dropdown-nav .uk-nav-sub a:hover, .uk-dropdown-nav .uk-nav-sub li.uk-active > a': {
		color: '#666'
	}
};

export const media: CSSRuleObject = {
	'@media (min-width: 640px)': {
		'.uk-dropdown-dropbar': { '--uk-position-viewport-offset': '30px' }
	},
	'@media (min-width: 960px)': {
		'.uk-dropdown-dropbar': { '--uk-position-viewport-offset': '40px' }
	}
};

export interface DropdownHooks {
	'hook-dropdown': CSSRuleObject;
	'hook-dropbar': CSSRuleObject;
	'hook-dropbar-large': CSSRuleObject;
	'hook-nav': CSSRuleObject;
	'hook-nav-item': CSSRuleObject;
	'hook-nav-item-hover': CSSRuleObject;
	'hook-nav-subtitle': CSSRuleObject;
	'hook-nav-header': CSSRuleObject;
	'hook-nav-divider': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<DropdownHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: DropdownHooks = {
		'hook-dropdown': {},
		'hook-dropbar': {},
		'hook-dropbar-large': {},
		'hook-nav': {},
		'hook-nav-item': {},
		'hook-nav-item-hover': {},
		'hook-nav-subtitle': {},
		'hook-nav-header': {},
		'hook-nav-divider': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-dropdown': {
			..._hooks['hook-dropdown']
		},
		'.uk-dropdown-dropbar': {
			..._hooks['hook-dropbar']
		},
		'.uk-dropdown-dropbar-large': {
			..._hooks['hook-dropbar-large']
		},
		'.uk-dropdown-nav': {
			..._hooks['hook-nav']
		},
		'.uk-dropdown-nav > li > a': {
			..._hooks['hook-nav-item']
		},
		'.uk-dropdown-nav > li > a:hover, .uk-dropdown-nav > li.uk-active > a': {
			..._hooks['hook-nav-item-hover']
		},
		'.uk-dropdown-nav .uk-nav-subtitle': {
			..._hooks['hook-nav-subtitle']
		},
		'.uk-dropdown-nav .uk-nav-header': {
			..._hooks['hook-nav-header']
		},
		'.uk-dropdown-nav .uk-nav-divider': {
			..._hooks['hook-nav-divider']
		},
		..._hooks['hook-misc']
	};
};
