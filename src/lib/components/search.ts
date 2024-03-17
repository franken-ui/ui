import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-search': {
		display: 'inline-block',
		position: 'relative',
		maxWidth: '100%',
		margin: '0'
	},
	'.uk-search-input::-webkit-search-cancel-button, .uk-search-input::-webkit-search-decoration': {
		WebkitAppearance: 'none'
	},
	'.uk-search-input::-moz-placeholder': { opacity: '1' },
	'.uk-search-input': {
		boxSizing: 'border-box',
		margin: '0',
		borderRadius: '0',
		font: 'inherit',
		overflow: 'visible',
		WebkitAppearance: 'none',
		verticalAlign: 'middle',
		width: '100%',
		border: 'none',
		color: '#666'
	},
	'.uk-search-input:focus': { outline: 'none' },
	'.uk-search-input::placeholder': { color: '#999' },
	'.uk-search .uk-search-icon': {
		position: 'absolute',
		top: '0',
		bottom: '0',
		left: '0',
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#999'
	},
	'.uk-search .uk-search-icon:hover': { color: '#999' },
	'.uk-search .uk-search-icon:not(a):not(button):not(input)': {
		pointerEvents: 'none'
	},
	'.uk-search .uk-search-icon-flip': { right: '0', left: 'auto' },
	'.uk-search-default': { width: '240px' },
	'.uk-search-default .uk-search-input': {
		height: '40px',
		paddingLeft: '10px',
		paddingRight: '10px',
		background: 'transparent',
		border: '1px solid #e5e5e5'
	},
	'.uk-search-default .uk-search-input:focus': {
		backgroundColor: 'rgba(0, 0, 0, 0)',
		borderColor: '#1e87f0'
	},
	'.uk-search-default .uk-search-icon': { width: '40px' },
	'.uk-search-default .uk-search-icon:not(.uk-search-icon-flip) ~ .uk-search-input': {
		paddingLeft: '40px'
	},
	'.uk-search-default .uk-search-icon-flip ~ .uk-search-input': {
		paddingRight: '40px'
	},
	'.uk-search-navbar': { width: '400px' },
	'.uk-search-navbar .uk-search-input': {
		height: '40px',
		background: 'transparent',
		fontSize: '1.5rem'
	},
	'.uk-search-navbar .uk-search-icon': { width: '40px' },
	'.uk-search-navbar .uk-search-icon:not(.uk-search-icon-flip) ~ .uk-search-input': {
		paddingLeft: '40px'
	},
	'.uk-search-navbar .uk-search-icon-flip ~ .uk-search-input': {
		paddingRight: '40px'
	},
	'.uk-search-large': { width: '500px' },
	'.uk-search-large .uk-search-input': {
		height: '80px',
		background: 'transparent',
		fontSize: '2.625rem'
	},
	'.uk-search-large .uk-search-icon': { width: '80px' },
	'.uk-search-large .uk-search-icon:not(.uk-search-icon-flip) ~ .uk-search-input': {
		paddingLeft: '80px'
	},
	'.uk-search-large .uk-search-icon-flip ~ .uk-search-input': {
		paddingRight: '80px'
	},
	'.uk-search-toggle': { color: '#999' },
	'.uk-search-toggle:hover': { color: '#666' }
};

export interface SearchHooks {
	'hook-input': CSSRuleObject;
	'hook-icon': CSSRuleObject;
	'hook-default-input': CSSRuleObject;
	'hook-default-input-focus': CSSRuleObject;
	'hook-navbar-input': CSSRuleObject;
	'hook-navbar-input-focus': CSSRuleObject;
	'hook-large-input': CSSRuleObject;
	'hook-large-input-focus': CSSRuleObject;
	'hook-toggle': CSSRuleObject;
	'hook-toggle-hover': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<SearchHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: SearchHooks = {
		'hook-input': {},
		'hook-icon': {},
		'hook-default-input': {},
		'hook-default-input-focus': {},
		'hook-navbar-input': {},
		'hook-navbar-input-focus': {},
		'hook-large-input': {},
		'hook-large-input-focus': {},
		'hook-toggle': {},
		'hook-toggle-hover': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-search-input': {
			..._hooks['hook-input']
		},
		'.uk-search .uk-search-icon': {
			..._hooks['hook-icon']
		},
		'.uk-search-default .uk-search-input': {
			..._hooks['hook-default-input']
		},
		'.uk-search-default .uk-search-input:focus': {
			..._hooks['hook-default-input-focus']
		},
		'.uk-search-navbar .uk-search-input': {
			..._hooks['hook-navbar-input']
		},
		'.uk-search-navbar .uk-search-input:focus': {
			..._hooks['hook-navbar-input-focus']
		},
		'.uk-search-large .uk-search-input': {
			..._hooks['hook-large-input']
		},
		'.uk-search-large .uk-search-input:focus': {
			..._hooks['hook-large-input-focus']
		},
		'.uk-search-toggle': {
			..._hooks['hook-toggle']
		},
		'.uk-search-toggle:hover': {
			..._hooks['hook-toggle-hover']
		},
		..._hooks['hook-misc']
	};
};
