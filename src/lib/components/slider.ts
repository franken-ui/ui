import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-slider': { WebkitTapHighlightColor: 'transparent' },
	'.uk-slider-container': { overflow: ['hidden', 'clip'] },
	'.uk-slider-container-offset': {
		margin: '-11px -25px -39px -25px',
		padding: '11px 25px 39px 25px'
	},
	'.uk-slider-items': {
		willChange: 'transform',
		position: 'relative',
		touchAction: 'pan-y'
	},
	'.uk-slider-items:not(.uk-grid)': {
		display: 'flex',
		margin: '0',
		padding: '0',
		listStyle: 'none',
		WebkitTouchCallout: 'none'
	},
	'.uk-slider-items.uk-grid': { flexWrap: 'nowrap' },
	'.uk-slider-items > *': {
		flex: 'none !important',
		boxSizing: 'border-box',
		maxWidth: '100%',
		position: 'relative'
	}
};

export interface SliderHooks {
	'hook-slider': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<SliderHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: SliderHooks = {
		'hook-slider': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-slider': {
			..._hooks['hook-slider']
		},
		..._hooks['hook-misc']
	};
};
