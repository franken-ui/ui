import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-sticky': {
		position: 'relative',
		zIndex: '980',
		boxSizing: 'border-box'
	},
	'.uk-sticky-fixed': {
		margin: '0 !important',
		WebkitBackfaceVisibility: 'hidden',
		backfaceVisibility: 'hidden'
	},
	".uk-sticky[class*='uk-animation-']": { animationDuration: '0.2s' },
	'.uk-sticky.uk-animation-reverse': { animationDuration: '0.2s' },
	'.uk-sticky-placeholder': { pointerEvents: 'none' }
};

export interface StickyHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<StickyHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: StickyHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
