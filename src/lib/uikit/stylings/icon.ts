import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-icon': {
		margin: '0',
		border: 'none',
		borderRadius: '0',
		overflow: 'visible',
		font: 'inherit',
		color: 'inherit',
		textTransform: 'none',
		padding: '0',
		backgroundColor: 'transparent',
		display: 'inline-block',
		fill: 'currentcolor',
		lineHeight: '0'
	},
	'button.uk-icon:not(:disabled)': { cursor: 'pointer' },
	'.uk-icon::-moz-focus-inner': { border: '0', padding: '0' },
	".uk-icon:not(.uk-preserve) [fill*='#']:not(.uk-preserve)": {
		fill: 'currentcolor'
	},
	".uk-icon:not(.uk-preserve) [stroke*='#']:not(.uk-preserve)": {
		stroke: 'currentcolor'
	},
	'.uk-icon > *': { transform: 'translate(0, 0)' },
	'.uk-icon-image': {
		width: '20px',
		height: '20px',
		backgroundPosition: '50% 50%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		verticalAlign: 'middle',
		objectFit: 'scale-down',
		maxWidth: 'none'
	},
	'.uk-icon-link': { color: '#999', textDecoration: 'none !important' },
	'.uk-icon-link:hover': { color: '#666' },
	'.uk-icon-link:active, .uk-active > .uk-icon-link': { color: '#595959' },
	'.uk-icon-button': {
		boxSizing: 'border-box',
		width: '36px',
		height: '36px',
		borderRadius: '500px',
		backgroundColor: '#f8f8f8',
		color: '#999',
		verticalAlign: 'middle',
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		transition: '0.1s ease-in-out',
		transitionProperty: 'color, background-color'
	},
	'.uk-icon-button:hover': { backgroundColor: '#ebebeb', color: '#666' },
	'.uk-icon-button:active, .uk-active > .uk-icon-button': {
		backgroundColor: '#dfdfdf',
		color: '#666'
	}
};

export interface IconHooks {
	'hook-icon': CSSRuleObject;
	'hook-link': CSSRuleObject;
	'hook-link-hover': CSSRuleObject;
	'hook-link-active': CSSRuleObject;
	'hook-button': CSSRuleObject;
	'hook-button-hover': CSSRuleObject;
	'hook-button-active': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<IconHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: IconHooks = {
		'hook-icon': {},
		'hook-link': {},
		'hook-link-hover': {},
		'hook-link-active': {},
		'hook-button': {},
		'hook-button-hover': {},
		'hook-button-active': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-icon': {
			..._hooks['hook-icon']
		},
		'.uk-icon-link': {
			..._hooks['hook-link']
		},
		'.uk-icon-link:hover': {
			..._hooks['hook-link-hover']
		},
		'.uk-icon-link:active, .uk-active > .uk-icon-link': {
			..._hooks['hook-link-active']
		},
		'.uk-icon-button': {
			..._hooks['hook-button']
		},
		'.uk-icon-button:hover': {
			..._hooks['hook-button-hover']
		},
		'.uk-icon-button:active, .uk-active > .uk-icon-button': {
			..._hooks['hook-button-active']
		},
		..._hooks['hook-misc']
	};
};
