import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-button': {
		margin: '0',
		border: 'none',
		overflow: 'visible',
		font: 'inherit',
		color: 'inherit',
		textTransform: ['none', 'uppercase'],
		WebkitAppearance: 'none',
		borderRadius: '0',
		display: 'inline-block',
		boxSizing: 'border-box',
		padding: '0 30px',
		verticalAlign: 'middle',
		fontSize: '0.875rem',
		lineHeight: '38px',
		textAlign: 'center',
		textDecoration: 'none',
		transition: '0.1s ease-in-out',
		transitionProperty: 'color, background-color, border-color'
	},
	'.uk-button:not(:disabled)': { cursor: 'pointer' },
	'.uk-button::-moz-focus-inner': { border: '0', padding: '0' },
	'.uk-button:hover': { textDecoration: 'none' },
	'.uk-button-default': {
		backgroundColor: 'transparent',
		color: '#333',
		border: '1px solid #e5e5e5'
	},
	'.uk-button-default:hover': {
		backgroundColor: 'transparent',
		color: '#333',
		borderColor: '#b2b2b2'
	},
	'.uk-button-default:active, .uk-button-default.uk-active': {
		backgroundColor: 'transparent',
		color: '#333',
		borderColor: '#999999'
	},
	'.uk-button-primary': {
		backgroundColor: '#1e87f0',
		color: '#fff',
		border: '1px solid transparent'
	},
	'.uk-button-primary:hover': { backgroundColor: '#0f7ae5', color: '#fff' },
	'.uk-button-primary:active, .uk-button-primary.uk-active': {
		backgroundColor: '#0e6dcd',
		color: '#fff'
	},
	'.uk-button-secondary': {
		backgroundColor: '#222',
		color: '#fff',
		border: '1px solid transparent'
	},
	'.uk-button-secondary:hover': { backgroundColor: '#151515', color: '#fff' },
	'.uk-button-secondary:active, .uk-button-secondary.uk-active': {
		backgroundColor: '#080808',
		color: '#fff'
	},
	'.uk-button-danger': {
		backgroundColor: '#f0506e',
		color: '#fff',
		border: '1px solid transparent'
	},
	'.uk-button-danger:hover': { backgroundColor: '#ee395b', color: '#fff' },
	'.uk-button-danger:active, .uk-button-danger.uk-active': {
		backgroundColor: '#ec2147',
		color: '#fff'
	},
	'.uk-button-default:disabled, .uk-button-primary:disabled, .uk-button-secondary:disabled, .uk-button-danger:disabled':
		{
			backgroundColor: 'transparent',
			color: '#999',
			borderColor: '#e5e5e5'
		},
	'.uk-button-small': {
		padding: '0 15px',
		lineHeight: '28px',
		fontSize: '0.875rem'
	},
	'.uk-button-large': {
		padding: '0 40px',
		lineHeight: '53px',
		fontSize: '0.875rem'
	},
	'.uk-button-text': {
		padding: '0',
		lineHeight: '1.5',
		background: 'none',
		color: '#333',
		position: 'relative'
	},
	'.uk-button-text::before': {
		content: "''",
		position: 'absolute',
		bottom: '0',
		left: '0',
		right: '100%',
		borderBottom: '1px solid currentColor',
		transition: 'right 0.3s ease-out'
	},
	'.uk-button-text:hover': { color: '#333' },
	'.uk-button-text:hover::before': { right: '0' },
	'.uk-button-text:disabled': { color: '#999' },
	'.uk-button-text:disabled::before': { display: 'none' },
	'.uk-button-link': {
		padding: '0',
		lineHeight: '1.5',
		background: 'none',
		color: '#333'
	},
	'.uk-button-link:hover': { color: '#999', textDecoration: 'none' },
	'.uk-button-link:disabled': { color: '#999', textDecoration: 'none' },
	'.uk-button-group': {
		display: 'inline-flex',
		verticalAlign: 'middle',
		position: 'relative'
	},
	'.uk-button-group > .uk-button:nth-child(n + 2), .uk-button-group > div:nth-child(n + 2) .uk-button':
		{
			marginLeft: '-1px'
		},
	'.uk-button-group .uk-button:hover, .uk-button-group .uk-button:focus, .uk-button-group .uk-button:active, .uk-button-group .uk-button.uk-active':
		{
			position: 'relative',
			zIndex: '1'
		}
};

export interface ButtonHooks {
	'hook-button': CSSRuleObject;
	'hook-disabled': CSSRuleObject;
	'hook-default': CSSRuleObject;
	'hook-default-hover': CSSRuleObject;
	'hook-default-focus': CSSRuleObject;
	'hook-default-active': CSSRuleObject;
	'hook-default-disabled': CSSRuleObject;
	'hook-primary': CSSRuleObject;
	'hook-primary-hover': CSSRuleObject;
	'hook-primary-focus': CSSRuleObject;
	'hook-primary-active': CSSRuleObject;
	'hook-primary-disabled': CSSRuleObject;
	'hook-secondary': CSSRuleObject;
	'hook-secondary-hover': CSSRuleObject;
	'hook-secondary-focus': CSSRuleObject;
	'hook-secondary-active': CSSRuleObject;
	'hook-secondary-disabled': CSSRuleObject;
	'hook-danger': CSSRuleObject;
	'hook-danger-hover': CSSRuleObject;
	'hook-danger-focus': CSSRuleObject;
	'hook-danger-active': CSSRuleObject;
	'hook-danger-disabled': CSSRuleObject;
	'hook-link': CSSRuleObject;
	'hook-link-hover': CSSRuleObject;
	'hook-link-disabled': CSSRuleObject;
	'hook-text': CSSRuleObject;
	'hook-text-hover': CSSRuleObject;
	'hook-text-disabled': CSSRuleObject;
	'hook-small': CSSRuleObject;
	'hook-large': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<ButtonHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: ButtonHooks = {
		'hook-button': {},
		'hook-disabled': {},
		'hook-default': {},
		'hook-default-hover': {},
		'hook-default-focus': {},
		'hook-default-active': {},
		'hook-default-disabled': {},
		'hook-primary': {},
		'hook-primary-hover': {},
		'hook-primary-focus': {},
		'hook-primary-active': {},
		'hook-primary-disabled': {},
		'hook-secondary': {},
		'hook-secondary-hover': {},
		'hook-secondary-focus': {},
		'hook-secondary-active': {},
		'hook-secondary-disabled': {},
		'hook-danger': {},
		'hook-danger-hover': {},
		'hook-danger-focus': {},
		'hook-danger-active': {},
		'hook-danger-disabled': {},
		'hook-link': {},
		'hook-link-hover': {},
		'hook-link-disabled': {},
		'hook-text': {},
		'hook-text-hover': {},
		'hook-text-disabled': {},
		'hook-small': {},
		'hook-large': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-button': {
			..._hooks['hook-button']
		},
		'.uk-button-default': {
			..._hooks['hook-default']
		},
		'.uk-button-default:hover': {
			..._hooks['hook-default-hover']
		},
		'.uk-button-default:focus': {
			..._hooks['hook-default-focus']
		},
		'.uk-button-default:active, .uk-button-default.uk-active': {
			..._hooks['hook-default-active']
		},
		'.uk-button-primary': {
			..._hooks['hook-primary']
		},
		'.uk-button-primary:hover': {
			..._hooks['hook-primary-hover']
		},
		'.uk-button-primary:focus': {
			..._hooks['hook-primary-focus']
		},
		'.uk-button-primary:active, .uk-button-primary.uk-active': {
			..._hooks['hook-primary-active']
		},
		'.uk-button-secondary': {
			..._hooks['hook-secondary']
		},
		'.uk-button-secondary:hover': {
			..._hooks['hook-secondary-hover']
		},
		'.uk-button-secondary:focus': {
			..._hooks['hook-secondary-focus']
		},
		'.uk-button-secondary:active, .uk-button-secondary.uk-active': {
			..._hooks['hook-secondary-active']
		},
		'.uk-button-danger': {
			..._hooks['hook-danger']
		},
		'.uk-button-danger:hover': {
			..._hooks['hook-danger-hover']
		},
		'.uk-button-danger:focus': {
			..._hooks['hook-danger-focus']
		},
		'.uk-button-danger:active, .uk-button-danger.uk-active': {
			..._hooks['hook-danger-active']
		},
		'.uk-button-default:disabled, .uk-button-primary:disabled, .uk-button-secondary:disabled, .uk-button-danger:disabled':
			{
				..._hooks['hook-disabled']
			},
		'.uk-button-default:disabled': {
			..._hooks['hook-default-disabled']
		},
		'.uk-button-primary:disabled': {
			..._hooks['hook-primary-disabled']
		},
		'.uk-button-secondary:disabled': {
			..._hooks['hook-secondary-disabled']
		},
		'.uk-button-danger:disabled': {
			..._hooks['hook-danger-disabled']
		},
		'.uk-button-small': {
			..._hooks['hook-small']
		},
		'.uk-button-large': {
			..._hooks['hook-large']
		},
		'.uk-button-link': {
			..._hooks['hook-link']
		},
		'.uk-button-text': {
			..._hooks['hook-text']
		},
		'.uk-button-link:hover': {
			..._hooks['hook-link-hover']
		},
		'.uk-button-link:disabled': {
			..._hooks['hook-link-disabled']
		},
		'.uk-button-text:hover': {
			..._hooks['hook-text-hover']
		},
		'.uk-button-text:disabled': {
			..._hooks['hook-text-disabled']
		},
		..._hooks['hook-misc']
	};
};
