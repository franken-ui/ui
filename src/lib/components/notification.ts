import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-notification': {
		position: 'fixed',
		top: '10px',
		left: '10px',
		zIndex: '1040',
		boxSizing: 'border-box',
		width: '350px'
	},
	'.uk-notification-top-right, .uk-notification-bottom-right': {
		left: 'auto',
		right: '10px'
	},
	'.uk-notification-top-center, .uk-notification-bottom-center': {
		left: '50%',
		marginLeft: '-175px'
	},
	'.uk-notification-bottom-left, .uk-notification-bottom-right, .uk-notification-bottom-center': {
		top: 'auto',
		bottom: '10px'
	},
	'.uk-notification-message': {
		position: 'relative',
		padding: '15px',
		backgroundColor: '#f8f8f8',
		color: '#666',
		fontSize: '1.25rem',
		lineHeight: '1.4',
		cursor: 'pointer'
	},
	'* + .uk-notification-message': { marginTop: '10px' },
	'.uk-notification-close': {
		display: 'none',
		position: 'absolute',
		top: '20px',
		right: '15px'
	},
	'.uk-notification-message:hover .uk-notification-close': { display: 'block' },
	'.uk-notification-message-primary': { color: '#1e87f0' },
	'.uk-notification-message-success': { color: '#32d296' },
	'.uk-notification-message-warning': { color: '#faa05a' },
	'.uk-notification-message-danger': { color: '#f0506e' }
};

export interface NotificationHooks {
	'hook-notification': CSSRuleObject;
	'hook-close': CSSRuleObject;
	'hook-close-hover': CSSRuleObject;
	'hook-message': CSSRuleObject;
	'hook-primary': CSSRuleObject;
	'hook-success': CSSRuleObject;
	'hook-warning': CSSRuleObject;
	'hook-danger': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<NotificationHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: NotificationHooks = {
		'hook-notification': {},
		'hook-close': {},
		'hook-close-hover': {},
		'hook-message': {},
		'hook-primary': {},
		'hook-success': {},
		'hook-warning': {},
		'hook-danger': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-notification': {
			..._hooks['hook-notification']
		},
		'.uk-notification-message': {
			..._hooks['hook-message']
		},
		'.uk-notification-close': {
			..._hooks['hook-close']
		},
		'.uk-notification-message:hover .uk-notification-close': {
			..._hooks['hook-close-hover']
		},
		'.uk-notification-message-primary': {
			..._hooks['hook-primary']
		},
		'.uk-notification-message-success': {
			..._hooks['hook-success']
		},
		'.uk-notification-message-warning': {
			..._hooks['hook-warning']
		},
		'.uk-notification-message-danger': {
			..._hooks['hook-danger']
		},
		..._hooks['hook-misc']
	};
};

export const media: CSSRuleObject = {
	'@media (max-width: 640px)': {
		'.uk-notification': {
			left: '10px',
			right: '10px',
			width: 'auto',
			margin: '0'
		}
	}
};
