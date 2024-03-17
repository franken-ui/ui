import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'[hidden], .uk-hidden': { display: 'none !important' },
	'.uk-invisible': { visibility: 'hidden !important' },
	'.uk-hidden-visually:not(:focus):not(:active):not(:focus-within), .uk-visible-toggle:not(:hover):not(:focus) .uk-hidden-hover:not(:focus-within)':
		{
			position: 'absolute !important',
			width: '1px !important',
			height: '1px !important',
			padding: '0 !important',
			border: '0 !important',
			margin: '0 !important',
			overflow: 'hidden !important',
			clipPath: 'inset(50%) !important',
			whiteSpace: 'nowrap !important'
		},
	'.uk-visible-toggle:not(:hover):not(:focus) .uk-invisible-hover:not(:focus-within)': {
		opacity: '0 !important'
	},
	'@media (hover: none)': {
		'.uk-hidden-touch': { display: 'none !important' }
	},
	'@media (hover)': { '.uk-hidden-notouch': { display: 'none !important' } }
};

export const media: CSSRuleObject = {
	'@media (min-width: 640px)': {
		'.uk-hidden\\@s': { display: 'none !important' }
	},
	'@media (min-width: 960px)': {
		'.uk-hidden\\@m': { display: 'none !important' }
	},
	'@media (min-width: 1200px)': {
		'.uk-hidden\\@l': { display: 'none !important' }
	},
	'@media (min-width: 1600px)': {
		'.uk-hidden\\@xl': { display: 'none !important' }
	},
	'@media (max-width: 639px)': {
		'.uk-visible\\@s': { display: 'none !important' }
	},
	'@media (max-width: 959px)': {
		'.uk-visible\\@m': { display: 'none !important' }
	},
	'@media (max-width: 1199px)': {
		'.uk-visible\\@l': { display: 'none !important' }
	},
	'@media (max-width: 1599px)': {
		'.uk-visible\\@xl': { display: 'none !important' }
	}
};

export interface VisibilityHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<VisibilityHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: VisibilityHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
