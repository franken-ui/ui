import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-lightbox': {
		display: 'none',
		position: 'fixed',
		top: '0',
		right: '0',
		bottom: '0',
		left: '0',
		zIndex: '1010',
		backgroundColor: '#000',
		opacity: '0',
		transition: 'opacity 0.15s linear',
		touchAction: 'pinch-zoom'
	},
	'.uk-lightbox.uk-open': { display: 'block', opacity: '1' },
	'.uk-lightbox :focus-visible': { outlineColor: 'rgba(255, 255, 255, 0.7)' },
	'.uk-lightbox-page': { overflow: 'hidden' },
	'.uk-lightbox-items > *': {
		position: 'absolute',
		top: '0',
		right: '0',
		bottom: '0',
		left: '0',
		display: 'none',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'rgba(255, 255, 255, 0.7)',
		willChange: 'transform, opacity'
	},
	'.uk-lightbox-items > * > *': { maxWidth: '100vw', maxHeight: '100vh' },
	'.uk-lightbox-items > * > :not(iframe)': { width: 'auto', height: 'auto' },
	'.uk-lightbox-items > .uk-active': { display: 'flex' },
	'.uk-lightbox-toolbar': {
		padding: '10px 10px',
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		color: 'rgba(255, 255, 255, 0.7)'
	},
	'.uk-lightbox-toolbar > *': { color: 'rgba(255, 255, 255, 0.7)' },
	'.uk-lightbox-toolbar-icon': {
		padding: '5px',
		color: 'rgba(255, 255, 255, 0.7)'
	},
	'.uk-lightbox-toolbar-icon:hover': { color: '#fff' },
	'.uk-lightbox-button': {
		boxSizing: 'border-box',
		width: '50px',
		height: '50px',
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		color: 'rgba(255, 255, 255, 0.7)',
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	'.uk-lightbox-button:hover': { color: '#fff' },
	'.uk-lightbox-caption:empty': { display: 'none' },
	'.uk-lightbox-iframe': { width: '80%', height: '80%' }
};

export interface LightboxHooks {
	'hook-lightbox': CSSRuleObject;
	'hook-item': CSSRuleObject;
	'hook-toolbar': CSSRuleObject;
	'hook-toolbar-icon': CSSRuleObject;
	'hook-toolbar-icon-hover': CSSRuleObject;
	'hook-button': CSSRuleObject;
	'hook-button-hover': CSSRuleObject;
	'hook-button-active': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<LightboxHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: LightboxHooks = {
		'hook-lightbox': {},
		'hook-item': {},
		'hook-toolbar': {},
		'hook-toolbar-icon': {},
		'hook-toolbar-icon-hover': {},
		'hook-button': {},
		'hook-button-hover': {},
		'hook-button-active': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-lightbox': {
			..._hooks['hook-lightbox']
		},
		'.uk-lightbox-items > *': {
			..._hooks['hook-item']
		},
		'.uk-lightbox-toolbar': {
			..._hooks['hook-toolbar']
		},
		'.uk-lightbox-toolbar-icon': {
			..._hooks['hook-toolbar-icon']
		},
		'.uk-lightbox-toolbar-icon:hover': {
			..._hooks['hook-toolbar-icon-hover']
		},
		'.uk-lightbox-button': {
			..._hooks['hook-button']
		},
		'.uk-lightbox-button:hover': {
			..._hooks['hook-button-hover']
		},
		'.uk-lightbox-button:active': {
			..._hooks['hook-button-active']
		},
		..._hooks['hook-misc']
	};
};
