import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-modal': {
		display: 'none',
		position: 'fixed',
		top: '0',
		right: '0',
		bottom: '0',
		left: '0',
		zIndex: '1010',
		overflowY: 'auto',
		padding: '15px 15px',
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		opacity: '0',
		transition: 'opacity 0.15s linear'
	},
	'.uk-modal.uk-open': { opacity: '1' },
	'.uk-modal-page': { overflow: 'hidden' },
	'.uk-modal-dialog': {
		position: 'relative',
		boxSizing: 'border-box',
		margin: '0 auto',
		width: '600px',
		maxWidth: '100% !important',
		backgroundColor: '#fff',
		opacity: '0',
		transform: 'translateY(-100px)',
		transition: '0.3s linear',
		transitionProperty: 'opacity, transform'
	},
	'.uk-open > .uk-modal-dialog': { opacity: '1', transform: 'translateY(0)' },
	'.uk-modal-container .uk-modal-dialog': { width: '1200px' },
	'.uk-modal-full': { padding: '0', background: 'none' },
	'.uk-modal-full .uk-modal-dialog': {
		margin: '0',
		width: '100%',
		maxWidth: '100%',
		transform: 'translateY(0)'
	},
	'.uk-modal-body': { display: 'flow-root', padding: '20px 20px' },
	'.uk-modal-header': {
		display: 'flow-root',
		padding: '10px 20px',
		backgroundColor: '#fff',
		borderBottom: '1px solid #e5e5e5'
	},
	'.uk-modal-footer': {
		display: 'flow-root',
		padding: '10px 20px',
		backgroundColor: '#fff',
		borderTop: '1px solid #e5e5e5'
	},
	'.uk-modal-body > :last-child, .uk-modal-header > :last-child, .uk-modal-footer > :last-child': {
		marginBottom: '0'
	},
	'.uk-modal-title': { fontSize: '2rem', lineHeight: '1.3' },
	"[class*='uk-modal-close-']": {
		position: 'absolute',
		zIndex: '1010',
		top: '10px',
		right: '10px',
		padding: '5px'
	},
	"[class*='uk-modal-close-']:first-child + *": { marginTop: '0' },
	'.uk-modal-close-outside': {
		top: '0',
		right: '-5px',
		transform: 'translate(0, -100%)',
		color: '#ffffff'
	},
	'.uk-modal-close-outside:hover': { color: '#fff' },
	'.uk-modal-close-full': {
		top: '0',
		right: '0',
		padding: '10px',
		backgroundColor: '#fff'
	}
};

export const media: CSSRuleObject = {
	'@media (min-width: 640px)': {
		'.uk-modal': { padding: '50px 30px' },
		'.uk-modal-body': { padding: '30px 30px' },
		'.uk-modal-header': { padding: '15px 30px' },
		'.uk-modal-footer': { padding: '15px 30px' }
	},
	'@media (min-width: 960px)': {
		'.uk-modal': { paddingLeft: '40px', paddingRight: '40px' },
		'.uk-modal-close-outside': {
			right: '0',
			transform: 'translate(100%, -100%)'
		},
		'.uk-modal-close-full': { padding: '20px' }
	}
};

export interface ModalHooks {
	'hook-modal': CSSRuleObject;
	'hook-dialog': CSSRuleObject;
	'hook-full': CSSRuleObject;
	'hook-header': CSSRuleObject;
	'hook-body': CSSRuleObject;
	'hook-footer': CSSRuleObject;
	'hook-title': CSSRuleObject;
	'hook-close': CSSRuleObject;
	'hook-close-hover': CSSRuleObject;
	'hook-close-default': CSSRuleObject;
	'hook-close-default-hover': CSSRuleObject;
	'hook-close-outside': CSSRuleObject;
	'hook-close-outside-hover': CSSRuleObject;
	'hook-close-full': CSSRuleObject;
	'hook-close-full-hover': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<ModalHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: ModalHooks = {
		'hook-modal': {},
		'hook-dialog': {},
		'hook-full': {},
		'hook-header': {},
		'hook-body': {},
		'hook-footer': {},
		'hook-title': {},
		'hook-close': {},
		'hook-close-hover': {},
		'hook-close-default': {},
		'hook-close-default-hover': {},
		'hook-close-outside': {},
		'hook-close-outside-hover': {},
		'hook-close-full': {},
		'hook-close-full-hover': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-modal': {
			..._hooks['hook-modal']
		},
		'.uk-modal-dialog': {
			..._hooks['hook-dialog']
		},
		'.uk-modal-full .uk-modal-dialog': {
			..._hooks['hook-full']
		},
		'.uk-modal-body': {
			..._hooks['hook-body']
		},
		'.uk-modal-header': {
			..._hooks['hook-header']
		},
		'.uk-modal-footer': {
			..._hooks['hook-footer']
		},
		'.uk-modal-title': {
			..._hooks['hook-title']
		},
		"[class*='uk-modal-close-']": {
			..._hooks['hook-close']
		},
		"[class*='uk-modal-close-']:hover": {
			..._hooks['hook-close-hover']
		},
		'.uk-modal-close-default': {
			..._hooks['hook-close-default']
		},
		'.uk-modal-close-default:hover': {
			..._hooks['hook-close-default-hover']
		},
		'.uk-modal-close-outside': {
			..._hooks['hook-close-outside']
		},
		'.uk-modal-close-outside:hover': {
			..._hooks['hook-close-outside-hover']
		},
		'.uk-modal-close-full': {
			..._hooks['hook-close-full']
		},
		'.uk-modal-close-full:hover': {
			..._hooks['hook-close-full-hover']
		},
		..._hooks['hook-misc']
	};
};
