import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-slideshow': { WebkitTapHighlightColor: 'transparent' },
	'.uk-slideshow-items': {
		position: 'relative',
		zIndex: '0',
		margin: '0',
		padding: '0',
		listStyle: 'none',
		overflow: 'hidden',
		WebkitTouchCallout: 'none',
		touchAction: 'pan-y'
	},
	'.uk-slideshow-items > *': {
		position: 'absolute',
		top: '0',
		left: '0',
		right: '0',
		bottom: '0',
		overflow: 'hidden',
		willChange: 'transform, opacity'
	},
	'.uk-slideshow-items > :not(.uk-active)': { display: 'none' }
};

export interface SlideshowHooks {
	'hook-slideshow': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<SlideshowHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: SlideshowHooks = {
		'hook-slideshow': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-slideshow': {
			..._hooks['hook-slideshow']
		},
		..._hooks['hook-misc']
	};
};
