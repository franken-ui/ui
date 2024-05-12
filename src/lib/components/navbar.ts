import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-navbar': {
		display: 'flex',
		position: 'relative',
		'--uk-navbar-dropbar-behind-color': 'dark'
	},
	'.uk-navbar-container:not(.uk-navbar-transparent)': { backgroundColor: '#f8f8f8' },
	".uk-navbar-left, .uk-navbar-right, [class*='uk-navbar-center']": {
		display: 'flex',
		gap: '15px',
		alignItems: 'center'
	},
	'.uk-navbar-right': { marginLeft: 'auto' },
	'.uk-navbar-center:only-child': {
		marginLeft: 'auto',
		marginRight: 'auto',
		position: 'relative'
	},
	'.uk-navbar-center:not(:only-child)': {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 'max-content',
		boxSizing: 'border-box',
		zIndex: '990'
	},
	'.uk-navbar-center-left, .uk-navbar-center-right': {
		position: 'absolute',
		top: '0'
	},
	'.uk-navbar-center-left': { right: 'calc(100% + 15px)' },
	'.uk-navbar-center-right': { left: 'calc(100% + 15px)' },
	"[class*='uk-navbar-center-']": {
		width: 'max-content',
		boxSizing: 'border-box'
	},
	'.uk-navbar-nav': {
		display: 'flex',
		gap: '15px',
		margin: '0',
		padding: '0',
		listStyle: 'none'
	},
	'.uk-navbar-left, .uk-navbar-right, .uk-navbar-center:only-child': {
		flexWrap: 'wrap'
	},
	'.uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		columnGap: '0.25em',
		boxSizing: 'border-box',
		minHeight: '80px',
		fontSize: '0.875rem',
		fontFamily:
			'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		textDecoration: 'none'
	},
	'.uk-navbar-nav > li > a': {
		padding: '0 0',
		color: '#999',
		textTransform: 'uppercase',
		transition: '0.1s ease-in-out',
		transitionProperty: 'color, background-color'
	},
	'.uk-navbar-nav > li:hover > a, .uk-navbar-nav > li > a[aria-expanded="true"]': {
		color: '#666'
	},
	'.uk-navbar-nav > li > a:active': { color: '#333' },
	'.uk-navbar-nav > li.uk-active > a': { color: '#333' },
	'.uk-navbar-parent-icon': {
		marginLeft: '4px',
		transition: 'transform 0.3s ease-out'
	},
	'.uk-navbar-nav > li > a[aria-expanded="true"] .uk-navbar-parent-icon': {
		transform: 'rotateX(180deg)'
	},
	'.uk-navbar-item': { padding: '0 0', color: '#666' },
	'.uk-navbar-item > :last-child': { marginBottom: '0' },
	'.uk-navbar-toggle': { padding: '0 0', color: '#999' },
	'.uk-navbar-toggle:hover, .uk-navbar-toggle[aria-expanded="true"]': {
		color: '#666',
		textDecoration: 'none'
	},
	'.uk-navbar-subtitle': { fontSize: '0.875rem' },
	'.uk-navbar-justify .uk-navbar-left, .uk-navbar-justify .uk-navbar-right, .uk-navbar-justify .uk-navbar-nav, .uk-navbar-justify .uk-navbar-nav > li, .uk-navbar-justify .uk-navbar-item, .uk-navbar-justify .uk-navbar-toggle':
		{
			flexGrow: '1'
		},
	'.uk-navbar-dropdown': {
		'--uk-position-offset': '15px',
		'--uk-position-shift-offset': '0',
		'--uk-position-viewport-offset': '15px',
		width: '200px',
		padding: '25px',
		backgroundColor: '#fff',
		color: '#666',
		boxShadow: '0 5px 12px rgba(0, 0, 0, 0.15)'
	},
	'.uk-navbar-dropdown > :last-child': { marginBottom: '0' },
	'.uk-navbar-dropdown :focus-visible': { outlineColor: '#333 !important' },
	'.uk-navbar-dropdown .uk-drop-grid': { marginLeft: '-30px' },
	'.uk-navbar-dropdown .uk-drop-grid > *': { paddingLeft: '30px' },
	'.uk-navbar-dropdown .uk-drop-grid > .uk-grid-margin': { marginTop: '30px' },
	'.uk-navbar-dropdown-width-2:not(.uk-drop-stack)': { width: '400px' },
	'.uk-navbar-dropdown-width-3:not(.uk-drop-stack)': { width: '600px' },
	'.uk-navbar-dropdown-width-4:not(.uk-drop-stack)': { width: '800px' },
	'.uk-navbar-dropdown-width-5:not(.uk-drop-stack)': { width: '1000px' },
	'.uk-navbar-dropdown-large': {
		'--uk-position-shift-offset': '0',
		padding: '40px'
	},
	'.uk-navbar-dropdown-dropbar': {
		width: 'auto',
		background: 'transparent',
		padding: '25px 0 25px 0',
		'--uk-position-offset': '0',
		'--uk-position-shift-offset': '0',
		'--uk-position-viewport-offset': '15px',
		boxShadow: 'none'
	},
	'.uk-navbar-dropdown-dropbar-large': {
		'--uk-position-shift-offset': '0',
		paddingTop: '40px',
		paddingBottom: '40px'
	},
	'.uk-navbar-dropdown-nav': { fontSize: '0.875rem' },
	'.uk-navbar-dropdown-nav > li > a': { color: '#999' },
	'.uk-navbar-dropdown-nav > li > a:hover': { color: '#666' },
	'.uk-navbar-dropdown-nav > li.uk-active > a': { color: '#333' },
	'.uk-navbar-dropdown-nav .uk-nav-subtitle': { fontSize: '12px' },
	'.uk-navbar-dropdown-nav .uk-nav-header': { color: '#333' },
	'.uk-navbar-dropdown-nav .uk-nav-divider': { borderTop: '1px solid #e5e5e5' },
	'.uk-navbar-dropdown-nav .uk-nav-sub a': { color: '#999' },
	'.uk-navbar-dropdown-nav .uk-nav-sub a:hover': { color: '#666' },
	'.uk-navbar-dropdown-nav .uk-nav-sub li.uk-active > a': { color: '#333' },
	'.uk-navbar-container': {
		transition: '0.1s ease-in-out',
		transitionProperty: 'background-color'
	}
};

export const media: CSSRuleObject = {
	'@media (min-width: 640px)': {
		'.uk-navbar-dropdown-dropbar': { '--uk-position-viewport-offset': '30px' }
	},
	'@media (min-width: 768px)': {
		'.uk-navbar-dropdown-dropbar': {
			'--uk-position-viewport-offset': '40px'
		},
		".uk-navbar-left,.uk-navbar-right,[class*='uk-navbar-center']": {
			gap: '30px'
		},
		'.uk-navbar-center-left': { right: 'calc(100% + 30px)' },
		'.uk-navbar-center-right': { left: 'calc(100% + 30px)' },
		'.uk-navbar-nav': { gap: '30px' }
	}
};

export interface NavbarHooks {
	'hook-navbar': CSSRuleObject;
	'hook-container': CSSRuleObject;
	'hook-nav-item': CSSRuleObject;
	'hook-nav-item-hover': CSSRuleObject;
	'hook-nav-item-onclick': CSSRuleObject;
	'hook-nav-item-active': CSSRuleObject;
	'hook-item': CSSRuleObject;
	'hook-toggle': CSSRuleObject;
	'hook-toggle-hover': CSSRuleObject;
	'hook-toggle-icon': CSSRuleObject;
	'hook-toggle-icon-hover': CSSRuleObject;
	'hook-subtitle': CSSRuleObject;
	'hook-primary': CSSRuleObject;
	'hook-transparent': CSSRuleObject;
	'hook-sticky': CSSRuleObject;
	'hook-dropdown': CSSRuleObject;
	'hook-dropdown-large': CSSRuleObject;
	'hook-dropdown-dropbar': CSSRuleObject;
	'hook-dropdown-dropbar-large': CSSRuleObject;
	'hook-dropdown-nav': CSSRuleObject;
	'hook-dropdown-nav-item': CSSRuleObject;
	'hook-dropdown-nav-item-hover': CSSRuleObject;
	'hook-dropdown-nav-item-active': CSSRuleObject;
	'hook-dropdown-nav-subtitle': CSSRuleObject;
	'hook-dropdown-nav-header': CSSRuleObject;
	'hook-dropdown-nav-divider': CSSRuleObject;
	'hook-dropbar': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<NavbarHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: NavbarHooks = {
		'hook-navbar': {},
		'hook-container': {},
		'hook-nav-item': {},
		'hook-nav-item-hover': {},
		'hook-nav-item-onclick': {},
		'hook-nav-item-active': {},
		'hook-item': {},
		'hook-toggle': {},
		'hook-toggle-hover': {},
		'hook-toggle-icon': {},
		'hook-toggle-icon-hover': {},
		'hook-subtitle': {},
		'hook-primary': {},
		'hook-transparent': {},
		'hook-sticky': {},
		'hook-dropdown': {},
		'hook-dropdown-large': {},
		'hook-dropdown-dropbar': {},
		'hook-dropdown-dropbar-large': {},
		'hook-dropdown-nav': {},
		'hook-dropdown-nav-item': {},
		'hook-dropdown-nav-item-hover': {},
		'hook-dropdown-nav-item-active': {},
		'hook-dropdown-nav-subtitle': {},
		'hook-dropdown-nav-header': {},
		'hook-dropdown-nav-divider': {},
		'hook-dropbar': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-navbar': {
			..._hooks['hook-navbar']
		},
		'.uk-navbar-container:not(.uk-navbar-transparent)': {
			..._hooks['hook-container']
		},
		'.uk-navbar-nav > li > a': {
			..._hooks['hook-nav-item']
		},
		'.uk-navbar-nav > li:hover > a, .uk-navbar-nav > li > a[aria-expanded="true"]': {
			..._hooks['hook-nav-item-hover']
		},
		'.uk-navbar-nav > li > a:active': {
			..._hooks['hook-nav-item-onclick']
		},
		'.uk-navbar-nav > li.uk-active > a': {
			..._hooks['hook-nav-item-active']
		},
		'.uk-navbar-item': {
			..._hooks['hook-item']
		},
		'.uk-navbar-toggle': {
			..._hooks['hook-toggle']
		},
		'.uk-navbar-toggle:hover, .uk-navbar-toggle[aria-expanded="true"]': {
			..._hooks['hook-toggle-hover']
		},
		'.uk-navbar-toggle-icon': {
			..._hooks['hook-toggle-icon']
		},
		':hover > .uk-navbar-toggle-icon': {
			..._hooks['hook-toggle-icon-hover']
		},
		'.uk-navbar-subtitle': {
			..._hooks['hook-subtitle']
		},
		'.uk-navbar-primary': {
			..._hooks['hook-primary']
		},
		'.uk-navbar-transparent': {
			..._hooks['hook-transparent']
		},
		'.uk-navbar-sticky': {
			..._hooks['hook-sticky']
		},
		'.uk-navbar-dropdown': {
			..._hooks['hook-dropdown']
		},
		'.uk-navbar-dropdown-large': {
			..._hooks['hook-dropdown-large']
		},
		'.uk-navbar-dropdown-dropbar': {
			..._hooks['hook-dropdown-dropbar']
		},
		'.uk-navbar-dropdown-dropbar-large': {
			..._hooks['hook-dropdown-dropbar-large']
		},
		'.uk-navbar-dropdown-nav': {
			..._hooks['hook-dropdown-nav']
		},
		'.uk-navbar-dropdown-nav > li > a': {
			..._hooks['hook-dropdown-nav-item']
		},
		'.uk-navbar-dropdown-nav > li > a:hover': {
			..._hooks['hook-dropdown-nav-item-hover']
		},
		'.uk-navbar-dropdown-nav > li.uk-active > a': {
			..._hooks['hook-dropdown-nav-item-active']
		},
		'.uk-navbar-dropdown-nav .uk-nav-subtitle': {
			..._hooks['hook-subtitle']
		},
		'.uk-navbar-dropdown-nav .uk-nav-header': {
			..._hooks['hook-dropdown-nav-header']
		},
		'.uk-navbar-dropdown-nav .uk-nav-divider': {
			..._hooks['hook-dropdown-nav-divider']
		},
		'.uk-navbar-dropbar': {
			..._hooks['hook-dropbar']
		},
		..._hooks['hook-misc']
	};
};
