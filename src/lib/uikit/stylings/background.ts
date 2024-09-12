import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-background-default': { backgroundColor: '#fff' },
	'.uk-background-muted': { backgroundColor: '#f8f8f8' },
	'.uk-background-primary': { backgroundColor: '#1e87f0' },
	'.uk-background-secondary': { backgroundColor: '#222' },
	'.uk-background-cover, .uk-background-contain, .uk-background-width-1-1, .uk-background-height-1-1':
		{
			backgroundPosition: '50% 50%',
			backgroundRepeat: 'no-repeat'
		},
	'.uk-background-cover': { backgroundSize: 'cover' },
	'.uk-background-contain': { backgroundSize: 'contain' },
	'.uk-background-width-1-1': { backgroundSize: '100%' },
	'.uk-background-height-1-1': { backgroundSize: 'auto 100%' },
	'.uk-background-top-left': { backgroundPosition: '0 0' },
	'.uk-background-top-center': { backgroundPosition: '50% 0' },
	'.uk-background-top-right': { backgroundPosition: '100% 0' },
	'.uk-background-center-left': { backgroundPosition: '0 50%' },
	'.uk-background-center-center': { backgroundPosition: '50% 50%' },
	'.uk-background-center-right': { backgroundPosition: '100% 50%' },
	'.uk-background-bottom-left': { backgroundPosition: '0 100%' },
	'.uk-background-bottom-center': { backgroundPosition: '50% 100%' },
	'.uk-background-bottom-right': { backgroundPosition: '100% 100%' },
	'.uk-background-norepeat': { backgroundRepeat: 'no-repeat' },
	'.uk-background-fixed': {
		backgroundAttachment: 'fixed',
		backfaceVisibility: 'hidden'
	},
	'@media (pointer: coarse)': {
		'.uk-background-fixed': { backgroundAttachment: 'scroll' }
	},
	'.uk-background-blend-multiply': { backgroundBlendMode: 'multiply' },
	'.uk-background-blend-screen': { backgroundBlendMode: 'screen' },
	'.uk-background-blend-overlay': { backgroundBlendMode: 'overlay' },
	'.uk-background-blend-darken': { backgroundBlendMode: 'darken' },
	'.uk-background-blend-lighten': { backgroundBlendMode: 'lighten' },
	'.uk-background-blend-color-dodge': { backgroundBlendMode: 'color-dodge' },
	'.uk-background-blend-color-burn': { backgroundBlendMode: 'color-burn' },
	'.uk-background-blend-hard-light': { backgroundBlendMode: 'hard-light' },
	'.uk-background-blend-soft-light': { backgroundBlendMode: 'soft-light' },
	'.uk-background-blend-difference': { backgroundBlendMode: 'difference' },
	'.uk-background-blend-exclusion': { backgroundBlendMode: 'exclusion' },
	'.uk-background-blend-hue': { backgroundBlendMode: 'hue' },
	'.uk-background-blend-saturation': { backgroundBlendMode: 'saturation' },
	'.uk-background-blend-color': { backgroundBlendMode: 'color' },
	'.uk-background-blend-luminosity': { backgroundBlendMode: 'luminosity' }
};

export const media: CSSRuleObject = {
	'@screen max-sm': {
		'.uk-background-image\\@s': { backgroundImage: 'none !important' }
	},
	'@screen max-md': {
		'.uk-background-image\\@m': { backgroundImage: 'none !important' }
	},
	'@screen max-lg': {
		'.uk-background-image\\@l': { backgroundImage: 'none !important' }
	},
	'@screen max-xl': {
		'.uk-background-image\\@xl': { backgroundImage: 'none !important' }
	}
};

export interface BackgroundHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<BackgroundHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: BackgroundHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
