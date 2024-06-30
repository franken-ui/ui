import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-text-lead': { fontSize: '1.5rem', lineHeight: '1.5', color: '#333' },
	'.uk-text-meta': { fontSize: '0.875rem', lineHeight: '1.4', color: '#999' },
	'.uk-text-meta > a': { color: '#999' },
	'.uk-text-meta > a:hover': { color: '#666', textDecoration: 'none' },
	'.uk-text-small': { fontSize: '0.875rem', lineHeight: '1.5' },
	'.uk-text-large': { fontSize: '1.5rem', lineHeight: '1.5' },
	'.uk-text-default': { fontSize: '16px', lineHeight: '1.5' },
	'.uk-text-light': { fontWeight: '300' },
	'.uk-text-normal': { fontWeight: '400' },
	'.uk-text-bold': { fontWeight: '700' },
	'.uk-text-lighter': { fontWeight: 'lighter' },
	'.uk-text-bolder': { fontWeight: 'bolder' },
	'.uk-text-italic': { fontStyle: 'italic' },
	'.uk-text-capitalize': { textTransform: 'capitalize !important' },
	'.uk-text-uppercase': { textTransform: 'uppercase !important' },
	'.uk-text-lowercase': { textTransform: 'lowercase !important' },
	'.uk-text-decoration-none': { textDecoration: 'none !important' },
	'.uk-text-muted': { color: '#999 !important' },
	'.uk-text-emphasis': { color: '#333 !important' },
	'.uk-text-primary': { color: '#1e87f0 !important' },
	'.uk-text-secondary': { color: '#222 !important' },
	'.uk-text-success': { color: '#32d296 !important' },
	'.uk-text-warning': { color: '#faa05a !important' },
	'.uk-text-danger': { color: '#f0506e !important' },
	'.uk-text-background': {
		WebkitBackgroundClip: 'text',
		color: 'transparent !important',
		display: 'inline-block',
		backgroundColor: '#1e87f0',
		backgroundImage: 'linear-gradient(90deg, #1e87f0 0%, #411ef0 100%)'
	},
	'.uk-text-left': { textAlign: 'left !important' },
	'.uk-text-right': { textAlign: 'right !important' },
	'.uk-text-center': { textAlign: 'center !important' },
	'.uk-text-justify': { textAlign: 'justify !important' },
	'.uk-text-top': { verticalAlign: 'top !important' },
	'.uk-text-middle': { verticalAlign: 'middle !important' },
	'.uk-text-bottom': { verticalAlign: 'bottom !important' },
	'.uk-text-baseline': { verticalAlign: 'baseline !important' },
	'.uk-text-nowrap': { whiteSpace: 'nowrap' },
	'.uk-text-truncate': {
		maxWidth: '100%',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap'
	},
	'th.uk-text-truncate, td.uk-text-truncate': { maxWidth: '0' },
	'.uk-text-break': { overflowWrap: 'break-word' },
	'th.uk-text-break, td.uk-text-break': { wordBreak: 'break-word' }
};

export const media: CSSRuleObject = {
	'@media (min-width: 640px)': {
		'.uk-text-left\\@s': { textAlign: 'left !important' },
		'.uk-text-right\\@s': { textAlign: 'right !important' },
		'.uk-text-center\\@s': { textAlign: 'center !important' }
	},
	'@media (min-width: 768px)': {
		'.uk-text-left\\@m': { textAlign: 'left !important' },
		'.uk-text-right\\@m': { textAlign: 'right !important' },
		'.uk-text-center\\@m': { textAlign: 'center !important' }
	},
	'@media (min-width: 1024px)': {
		'.uk-text-left\\@l': { textAlign: 'left !important' },
		'.uk-text-right\\@l': { textAlign: 'right !important' },
		'.uk-text-center\\@l': { textAlign: 'center !important' }
	},
	'@media (min-width: 1280px)': {
		'.uk-text-left\\@xl': { textAlign: 'left !important' },
		'.uk-text-right\\@xl': { textAlign: 'right !important' },
		'.uk-text-center\\@xl': { textAlign: 'center !important' }
	}
};

export interface TextHooks {
	'hook-lead': CSSRuleObject;
	'hook-meta': CSSRuleObject;
	'hook-small': CSSRuleObject;
	'hook-large': CSSRuleObject;
	'hook-background': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<TextHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: TextHooks = {
		'hook-lead': {},
		'hook-meta': {},
		'hook-small': {},
		'hook-large': {},
		'hook-background': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-text-lead': {
			..._hooks['hook-lead']
		},
		'.uk-text-meta': {
			..._hooks['hook-meta']
		},
		'.uk-text-small': {
			..._hooks['hook-small']
		},
		'.uk-text-large': {
			..._hooks['hook-large']
		},
		'.uk-text-background': {
			..._hooks['hook-background']
		},
		..._hooks['hook-misc']
	};
};
