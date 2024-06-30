import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-countdown-number': {
		fontVariantNumeric: 'tabular-nums',
		fontSize: '2rem',
		lineHeight: '0.8'
	},
	'.uk-countdown-separator': { fontSize: '1rem', lineHeight: '1.6' }
};

export const media: CSSRuleObject = {
	'@media (min-width: 640px)': {
		'.uk-countdown-number': { fontSize: '4rem' },
		'.uk-countdown-separator': { fontSize: '2rem' }
	},
	'@media (min-width: 768px)': {
		'.uk-countdown-number': { fontSize: '6rem' },
		'.uk-countdown-separator': { fontSize: '3rem' }
	}
};

export interface CountdownHooks {
	'hook-countdown': CSSRuleObject;
	'hook-item': CSSRuleObject;
	'hook-number': CSSRuleObject;
	'hook-separator': CSSRuleObject;
	'hook-label': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<CountdownHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: CountdownHooks = {
		'hook-countdown': {},
		'hook-item': {},
		'hook-number': {},
		'hook-separator': {},
		'hook-label': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-countdown': {
			..._hooks['hook-countdown']
		},
		'.uk-countdown-number, .uk-countdown-separator': {
			..._hooks['hook-item']
		},
		'.uk-countdown-number': {
			..._hooks['hook-number']
		},
		'.uk-countdown-separator': {
			..._hooks['hook-separator']
		},
		'.uk-countdown-label': {
			..._hooks['hook-label']
		},
		..._hooks['hook-misc']
	};
};
