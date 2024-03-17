import merge from 'lodash/merge.js';
import type { CSSRuleObject, PluginUtils } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-nav, .uk-nav ul': { margin: '0', padding: '0', listStyle: 'none' },
	'.uk-nav li > a': {
		display: 'flex',
		alignItems: 'center',
		columnGap: '0.25em',
		textDecoration: 'none'
	},
	'.uk-nav > li > a': { padding: '5px 0' },
	'ul.uk-nav-sub': { padding: '5px 0 5px 15px' },
	'.uk-nav-sub ul': { paddingLeft: '15px' },
	'.uk-nav-sub a': { padding: '2px 0' },
	'.uk-nav-parent-icon': {
		marginLeft: 'auto',
		transition: 'transform 0.3s ease-out'
	},
	'.uk-nav > li.uk-open > a .uk-nav-parent-icon': {
		transform: 'rotateX(180deg)'
	},
	'.uk-nav-header': {
		padding: '5px 0',
		textTransform: 'uppercase',
		fontSize: '0.875rem'
	},
	'.uk-nav-header:not(:first-child)': { marginTop: '20px' },
	'.uk-nav .uk-nav-divider': { margin: '5px 0' },
	'.uk-nav-default': { fontSize: '0.875rem', lineHeight: '1.5' },
	'.uk-nav-default > li > a': { color: '#999' },
	'.uk-nav-default > li > a:hover': { color: '#666' },
	'.uk-nav-default > li.uk-active > a': { color: '#333' },
	'.uk-nav-default .uk-nav-subtitle': { fontSize: '12px' },
	'.uk-nav-default .uk-nav-header': { color: '#333' },
	'.uk-nav-default .uk-nav-divider': { borderTop: '1px solid #e5e5e5' },
	'.uk-nav-default .uk-nav-sub': { fontSize: '0.875rem', lineHeight: '1.5' },
	'.uk-nav-default .uk-nav-sub a': { color: '#999' },
	'.uk-nav-default .uk-nav-sub a:hover': { color: '#666' },
	'.uk-nav-default .uk-nav-sub li.uk-active > a': { color: '#333' },
	'.uk-nav-primary': { fontSize: '1.5rem', lineHeight: '1.5' },
	'.uk-nav-primary > li > a': { color: '#999' },
	'.uk-nav-primary > li > a:hover': { color: '#666' },
	'.uk-nav-primary > li.uk-active > a': { color: '#333' },
	'.uk-nav-primary .uk-nav-subtitle': { fontSize: '1.25rem' },
	'.uk-nav-primary .uk-nav-header': { color: '#333' },
	'.uk-nav-primary .uk-nav-divider': { borderTop: '1px solid #e5e5e5' },
	'.uk-nav-primary .uk-nav-sub': { fontSize: '1.25rem', lineHeight: '1.5' },
	'.uk-nav-primary .uk-nav-sub a': { color: '#999' },
	'.uk-nav-primary .uk-nav-sub a:hover': { color: '#666' },
	'.uk-nav-primary .uk-nav-sub li.uk-active > a': { color: '#333' },
	'.uk-nav-secondary': { fontSize: '16px', lineHeight: '1.5' },
	'.uk-nav-secondary > :not(.uk-nav-divider) + :not(.uk-nav-header, .uk-nav-divider)': {
		marginTop: '0'
	},
	'.uk-nav-secondary > li > a': { color: '#333', padding: '10px 10px' },
	'.uk-nav-secondary > li > a:hover': {
		color: '#333',
		backgroundColor: '#f8f8f8'
	},
	'.uk-nav-secondary > li.uk-active > a': {
		color: '#333',
		backgroundColor: '#f8f8f8'
	},
	'.uk-nav-secondary .uk-nav-subtitle': { fontSize: '0.875rem', color: '#999' },
	'.uk-nav-secondary > li > a:hover .uk-nav-subtitle': { color: '#666' },
	'.uk-nav-secondary > li.uk-active > a .uk-nav-subtitle': { color: '#333' },
	'.uk-nav-secondary .uk-nav-header': { color: '#333' },
	'.uk-nav-secondary .uk-nav-divider': { borderTop: '1px solid #e5e5e5' },
	'.uk-nav-secondary .uk-nav-sub': { fontSize: '0.875rem', lineHeight: '1.5' },
	'.uk-nav-secondary .uk-nav-sub a': { color: '#999' },
	'.uk-nav-secondary .uk-nav-sub a:hover': { color: '#666' },
	'.uk-nav-secondary .uk-nav-sub li.uk-active > a': { color: '#333' },
	'.uk-nav-center': { textAlign: 'center' },
	'.uk-nav-center li > a': { justifyContent: 'center' },
	'.uk-nav-center .uk-nav-sub, .uk-nav-center .uk-nav-sub ul': {
		paddingLeft: '0'
	},
	'.uk-nav-center .uk-nav-parent-icon': { marginLeft: '0.25em' },
	'.uk-nav.uk-nav-divider> :not(.uk-nav-header, .uk-nav-divider)+ :not(.uk-nav-header, .uk-nav-divider)':
		{
			marginTop: '5px',
			paddingTop: '5px',
			borderTop: '1px solid #e5e5e5'
		}
};

export interface NavHooks {
	'hook-sub': CSSRuleObject;
	'hook-header': CSSRuleObject;
	'hook-divider': CSSRuleObject;
	'hook-default': CSSRuleObject;
	'hook-default-item': CSSRuleObject;
	'hook-default-item-hover': CSSRuleObject;
	'hook-default-item-active': CSSRuleObject;
	'hook-default-subtitle': CSSRuleObject;
	'hook-default-header': CSSRuleObject;
	'hook-default-divider': CSSRuleObject;
	'hook-default-sublist': CSSRuleObject;
	'hook-default-sublist-hover': CSSRuleObject;
	'hook-default-sublist-active': CSSRuleObject;
	'hook-primary': CSSRuleObject;
	'hook-primary-item': CSSRuleObject;
	'hook-primary-item-hover': CSSRuleObject;
	'hook-primary-item-active': CSSRuleObject;
	'hook-primary-subtitle': CSSRuleObject;
	'hook-primary-header': CSSRuleObject;
	'hook-primary-divider': CSSRuleObject;
	'hook-primary-sublist': CSSRuleObject;
	'hook-primary-sublist-hover': CSSRuleObject;
	'hook-primary-sublist-active': CSSRuleObject;
	'hook-secondary': CSSRuleObject;
	'hook-secondary-item': CSSRuleObject;
	'hook-secondary-item-hover': CSSRuleObject;
	'hook-secondary-item-active': CSSRuleObject;
	'hook-secondary-subtitle': CSSRuleObject;
	'hook-secondary-subtitle-hover': CSSRuleObject;
	'hook-secondary-subtitle-active': CSSRuleObject;
	'hook-secondary-header': CSSRuleObject;
	'hook-secondary-divider': CSSRuleObject;
	'hook-secondary-sublist': CSSRuleObject;
	'hook-secondary-sublist-hover': CSSRuleObject;
	'hook-secondary-sublist-active': CSSRuleObject;
	'hook-dividers': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<NavHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: NavHooks = {
		'hook-sub': {},
		'hook-header': {},
		'hook-divider': {},
		'hook-default': {},
		'hook-default-item': {},
		'hook-default-item-hover': {},
		'hook-default-item-active': {},
		'hook-default-subtitle': {},
		'hook-default-header': {},
		'hook-default-divider': {},
		'hook-default-sublist': {},
		'hook-default-sublist-hover': {},
		'hook-default-sublist-active': {},
		'hook-primary': {},
		'hook-primary-item': {},
		'hook-primary-item-hover': {},
		'hook-primary-item-active': {},
		'hook-primary-subtitle': {},
		'hook-primary-header': {},
		'hook-primary-divider': {},
		'hook-primary-sublist': {},
		'hook-primary-sublist-hover': {},
		'hook-primary-sublist-active': {},
		'hook-secondary': {},
		'hook-secondary-item': {},
		'hook-secondary-item-hover': {},
		'hook-secondary-item-active': {},
		'hook-secondary-subtitle': {},
		'hook-secondary-subtitle-hover': {},
		'hook-secondary-subtitle-active': {},
		'hook-secondary-header': {},
		'hook-secondary-divider': {},
		'hook-secondary-sublist': {},
		'hook-secondary-sublist-hover': {},
		'hook-secondary-sublist-active': {},
		'hook-dividers': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'ul.uk-nav-sub': {
			..._hooks['hook-sub']
		},
		'.uk-nav-header': {
			..._hooks['hook-header']
		},
		'.uk-nav .uk-nav-divider': {
			..._hooks['hook-divider']
		},
		'.uk-nav-default': {
			..._hooks['hook-default']
		},
		'.uk-nav-default > li > a': {
			..._hooks['hook-default-item']
		},
		'.uk-nav-default > li > a:hover': {
			..._hooks['hook-default-item-hover']
		},
		'.uk-nav-default > li.uk-active > a': {
			..._hooks['hook-default-item-active']
		},
		'.uk-nav-default .uk-nav-subtitle': {
			..._hooks['hook-default-subtitle']
		},
		'.uk-nav-default .uk-nav-header': {
			..._hooks['hook-default-header']
		},
		'.uk-nav-default .uk-nav-divider': {
			..._hooks['hook-default-divider']
		},
		'.uk-nav-default .uk-nav-sub a': {
			..._hooks['hook-default-sublist']
		},
		'.uk-nav-default .uk-nav-sub a:hover': {
			..._hooks['hook-default-sublist-hover']
		},
		'.uk-nav-default .uk-nav-sub li.uk-active > a': {
			..._hooks['hook-default-sublist-active']
		},
		'.uk-nav-primary': {
			..._hooks['hook-primary']
		},
		'.uk-nav-primary > li > a': {
			..._hooks['hook-primary-item']
		},
		'.uk-nav-primary > li > a:hover': {
			..._hooks['hook-primary-item-hover']
		},
		'.uk-nav-primary > li.uk-active > a': {
			..._hooks['hook-primary-item-active']
		},
		'.uk-nav-primary .uk-nav-subtitle': {
			..._hooks['hook-primary-subtitle']
		},
		'.uk-nav-primary .uk-nav-header': {
			..._hooks['hook-primary-header']
		},
		'.uk-nav-primary .uk-nav-divider': {
			..._hooks['hook-primary-divider']
		},
		'.uk-nav-primary .uk-nav-sub a': {
			..._hooks['hook-primary-sublist']
		},
		'.uk-nav-primary .uk-nav-sub a:hover': {
			..._hooks['hook-primary-sublist-hover']
		},
		'.uk-nav-primary .uk-nav-sub li.uk-active > a': {
			..._hooks['hook-primary-sublist-active']
		},
		'.uk-nav-secondary': {
			..._hooks['hook-secondary']
		},
		'.uk-nav-secondary > li > a': {
			..._hooks['hook-secondary-item']
		},
		'.uk-nav-secondary > li > a:hover': {
			..._hooks['hook-secondary-item-hover']
		},
		'.uk-nav-secondary > li.uk-active > a': {
			..._hooks['hook-secondary-item-active']
		},
		'.uk-nav-secondary .uk-nav-subtitle': {
			..._hooks['hook-secondary-subtitle']
		},
		'.uk-nav-secondary > li > a:hover .uk-nav-subtitle': {
			..._hooks['hook-secondary-subtitle-hover']
		},
		'.uk-nav-secondary > li.uk-active > a .uk-nav-subtitle': {
			..._hooks['hook-secondary-subtitle-active']
		},
		'.uk-nav-secondary .uk-nav-header': {
			..._hooks['hook-secondary-header']
		},
		'.uk-nav-secondary .uk-nav-divider': {
			..._hooks['hook-secondary-divider']
		},
		'.uk-nav-secondary .uk-nav-sub a': {
			..._hooks['hook-secondary-sublist']
		},
		'.uk-nav-secondary .uk-nav-sub a:hover': {
			..._hooks['hook-secondary-sublist-hover']
		},
		'.uk-nav-secondary .uk-nav-sub li.uk-active > a': {
			..._hooks['hook-secondary-sublist-active']
		},
		'.uk-nav.uk-nav-divider > :not(.uk-nav-header, .uk-nav-divider) + :not(.uk-nav-header, .uk-nav-divider)':
			{
				..._hooks['hook-dividers']
			},
		..._hooks['hook-misc']
	};
};
