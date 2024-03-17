import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-card': {
		position: 'relative',
		boxSizing: 'border-box',
		transition: 'box-shadow 0.1s ease-in-out'
	},
	'.uk-card-body': { display: 'flow-root', padding: '30px 30px' },
	'.uk-card-header': { display: 'flow-root', padding: '15px 30px' },
	'.uk-card-footer': { display: 'flow-root', padding: '15px 30px' },
	'.uk-card-body > :last-child, .uk-card-header > :last-child, .uk-card-footer > :last-child': {
		marginBottom: '0'
	},
	'.uk-card-title': { fontSize: '1.5rem', lineHeight: '1.4' },
	'.uk-card-badge': {
		position: 'absolute',
		top: '15px',
		right: '15px',
		zIndex: '1',
		height: '22px',
		padding: '0 10px',
		backgroundColor: '#1e87f0',
		color: '#fff',
		fontSize: '0.875rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		lineHeight: '0',
		borderRadius: '2px',
		textTransform: 'uppercase'
	},
	'.uk-card-badge:first-child + *': { marginTop: '0' },
	'.uk-card-hover:not(.uk-card-default):not(.uk-card-primary):not(.uk-card-secondary):hover': {
		backgroundColor: '#fff',
		boxShadow: '0 14px 25px rgba(0, 0, 0, 0.16)'
	},
	'.uk-card-default': {
		backgroundColor: '#fff',
		color: '#666',
		boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)'
	},
	'.uk-card-default .uk-card-title': { color: '#333' },
	'.uk-card-default.uk-card-hover:hover': {
		backgroundColor: '#fff',
		boxShadow: '0 14px 25px rgba(0, 0, 0, 0.16)'
	},
	'.uk-card-default .uk-card-header': { borderBottom: '1px solid #e5e5e5' },
	'.uk-card-default .uk-card-footer': { borderTop: '1px solid #e5e5e5' },
	'.uk-card-primary': {
		backgroundColor: '#1e87f0',
		color: '#fff',
		boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)'
	},
	'.uk-card-primary .uk-card-title': { color: '#fff' },
	'.uk-card-primary.uk-card-hover:hover': {
		backgroundColor: '#1e87f0',
		boxShadow: '0 14px 25px rgba(0, 0, 0, 0.16)'
	},
	'.uk-card-secondary': {
		backgroundColor: '#222',
		color: '#fff',
		boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)'
	},
	'.uk-card-secondary .uk-card-title': { color: '#fff' },
	'.uk-card-secondary.uk-card-hover:hover': {
		backgroundColor: '#222',
		boxShadow: '0 14px 25px rgba(0, 0, 0, 0.16)'
	},
	'.uk-card-small.uk-card-body, .uk-card-small .uk-card-body': {
		padding: '20px 20px'
	},
	'.uk-card-small .uk-card-header': { padding: '13px 20px' },
	'.uk-card-small .uk-card-footer': { padding: '13px 20px' },
	'.uk-card-body > .uk-nav-default': {
		marginLeft: '-30px',
		marginRight: '-30px'
	},
	'.uk-card-body > .uk-nav-default:only-child': {
		marginTop: '-15px',
		marginBottom: '-15px'
	},
	'.uk-card-body > .uk-nav-default > li > a, .uk-card-body > .uk-nav-default .uk-nav-header, .uk-card-body > .uk-nav-default .uk-nav-divider':
		{
			paddingLeft: '30px',
			paddingRight: '30px'
		},
	'.uk-card-body > .uk-nav-default .uk-nav-sub': { paddingLeft: '45px' },
	'.uk-card-small > .uk-nav-default': {
		marginLeft: '-20px',
		marginRight: '-20px'
	},
	'.uk-card-small > .uk-nav-default:only-child': {
		marginTop: '-5px',
		marginBottom: '-5px'
	},
	'.uk-card-small > .uk-nav-default > li > a, .uk-card-small > .uk-nav-default .uk-nav-header, .uk-card-small > .uk-nav-default .uk-nav-divider':
		{
			paddingLeft: '20px',
			paddingRight: '20px'
		},
	'.uk-card-small > .uk-nav-default .uk-nav-sub': { paddingLeft: '35px' }
};

export const media: CSSRuleObject = {
	'@media (min-width: 1200px)': {
		'.uk-card-body': { padding: '40px 40px' },
		'.uk-card-header': { padding: '20px 40px' },
		'.uk-card-footer': { padding: '20px 40px' },
		'.uk-card-large.uk-card-body,.uk-card-large .uk-card-body': {
			padding: '70px 70px'
		},
		'.uk-card-large .uk-card-header': { padding: '35px 70px' },
		'.uk-card-large .uk-card-footer': { padding: '35px 70px' },

		'.uk-card-body > .uk-nav-default': {
			marginLeft: '-40px',
			marginRight: '-40px'
		},
		'.uk-card-body > .uk-nav-default:only-child': {
			marginTop: '-25px',
			marginBottom: '-25px'
		},
		'.uk-card-body > .uk-nav-default > li > a,.uk-card-body > .uk-nav-default .uk-nav-header,.uk-card-body > .uk-nav-default .uk-nav-divider':
			{
				paddingLeft: '40px',
				paddingRight: '40px'
			},
		'.uk-card-body > .uk-nav-default .uk-nav-sub': { paddingLeft: '55px' },

		'.uk-card-large > .uk-nav-default': { margin: '0' },
		'.uk-card-large > .uk-nav-default:only-child': { margin: '0' },
		'.uk-card-large > .uk-nav-default > li > a,.uk-card-large > .uk-nav-default .uk-nav-header,.uk-card-large > .uk-nav-default .uk-nav-divider':
			{
				paddingLeft: '0',
				paddingRight: '0'
			},
		'.uk-card-large > .uk-nav-default .uk-nav-sub': { paddingLeft: '15px' }
	}
};

export interface CardHooks {
	'hook-card': CSSRuleObject;
	'hook-body': CSSRuleObject;
	'hook-header': CSSRuleObject;
	'hook-footer': CSSRuleObject;
	'hook-media': CSSRuleObject;
	'hook-media-top': CSSRuleObject;
	'hook-media-bottom': CSSRuleObject;
	'hook-media-left': CSSRuleObject;
	'hook-media-right': CSSRuleObject;
	'hook-title': CSSRuleObject;
	'hook-badge': CSSRuleObject;
	'hook-hover': CSSRuleObject;
	'hook-default': CSSRuleObject;
	'hook-default-title': CSSRuleObject;
	'hook-default-hover': CSSRuleObject;
	'hook-default-header': CSSRuleObject;
	'hook-default-footer': CSSRuleObject;
	'hook-primary': CSSRuleObject;
	'hook-primary-title': CSSRuleObject;
	'hook-primary-hover': CSSRuleObject;
	'hook-secondary': CSSRuleObject;
	'hook-secondary-title': CSSRuleObject;
	'hook-secondary-hover': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<CardHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: CardHooks = {
		'hook-card': {},
		'hook-body': {},
		'hook-header': {},
		'hook-footer': {},
		'hook-media': {},
		'hook-media-top': {},
		'hook-media-bottom': {},
		'hook-media-left': {},
		'hook-media-right': {},
		'hook-title': {},
		'hook-badge': {},
		'hook-hover': {},
		'hook-default': {},
		'hook-default-title': {},
		'hook-default-hover': {},
		'hook-default-header': {},
		'hook-default-footer': {},
		'hook-primary': {},
		'hook-primary-title': {},
		'hook-primary-hover': {},
		'hook-secondary': {},
		'hook-secondary-title': {},
		'hook-secondary-hover': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-card': {
			..._hooks['hook-card']
		},
		'.uk-card-body': {
			..._hooks['hook-body']
		},
		'.uk-card-header': {
			..._hooks['hook-header']
		},
		'.uk-card-footer': {
			..._hooks['hook-footer']
		},
		"[class*='uk-card-media']": {
			..._hooks['hook-media']
		},

		'.uk-card-media-top, .uk-grid-stack > .uk-card-media-left, .uk-grid-stack > .uk-card-media-right':
			{
				..._hooks['hook-media-top']
			},
		'.uk-card-media-bottom': {
			..._hooks['hook-media-bottom']
		},
		':not(.uk-grid-stack) > .uk-card-media-left': {
			..._hooks['hook-media-left']
		},
		':not(.uk-grid-stack) > .uk-card-media-right': {
			..._hooks['hook-media-right']
		},
		'.uk-card-title': {
			..._hooks['hook-title']
		},
		'.uk-card-badge': {
			..._hooks['hook-badge']
		},
		'.uk-card-hover:not(.uk-card-default):not(.uk-card-primary):not(.uk-card-secondary):hover': {
			..._hooks['hook-hover']
		},
		'.uk-card-default': {
			..._hooks['hook-default']
		},
		'.uk-card-default .uk-card-title': {
			..._hooks['hook-default-title']
		},
		'.uk-card-default.uk-card-hover:hover': {
			..._hooks['hook-default-hover']
		},
		'.uk-card-default .uk-card-header': {
			..._hooks['hook-default-header']
		},
		'.uk-card-default .uk-card-footer': {
			..._hooks['hook-default-footer']
		},
		'.uk-card-primary': {
			..._hooks['hook-primary']
		},
		'.uk-card-primary .uk-card-title': {
			..._hooks['hook-primary-title']
		},
		'.uk-card-primary.uk-card-hover:hover': {
			..._hooks['hook-primary-hover']
		},
		'.uk-card-secondary': {
			..._hooks['hook-secondary']
		},
		'.uk-card-secondary .uk-card-title': {
			..._hooks['hook-secondary-title']
		},
		'.uk-card-secondary.uk-card-hover:hover': {
			..._hooks['hook-secondary-hover']
		},
		..._hooks['hook-misc']
	};
};
