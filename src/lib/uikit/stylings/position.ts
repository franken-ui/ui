import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	"[class*='uk-position-top'], [class*='uk-position-bottom'], [class*='uk-position-left'], [class*='uk-position-right'], [class*='uk-position-center']":
		{
			position: 'absolute !important',
			maxWidth: 'calc(100% - (var(--uk-position-margin-offset) * 2))',
			boxSizing: 'border-box'
		},
	'.uk-position-top': { top: '0', left: '0', right: '0' },
	'.uk-position-bottom': { bottom: '0', left: '0', right: '0' },
	'.uk-position-left': { top: '0', bottom: '0', left: '0' },
	'.uk-position-right': { top: '0', bottom: '0', right: '0' },
	'.uk-position-top-left': { top: '0', left: '0' },
	'.uk-position-top-right': { top: '0', right: '0' },
	'.uk-position-bottom-left': { bottom: '0', left: '0' },
	'.uk-position-bottom-right': { bottom: '0', right: '0' },
	'.uk-position-center': {
		top: 'calc(50% - var(--uk-position-margin-offset))',
		left: 'calc(50% - var(--uk-position-margin-offset))',
		'--uk-position-translate-x': '-50%',
		'--uk-position-translate-y': '-50%',
		transform: 'translate(var(--uk-position-translate-x), var(--uk-position-translate-y))',
		width: 'max-content'
	},
	"[class*='uk-position-center-left'], [class*='uk-position-center-right']": {
		top: 'calc(50% - var(--uk-position-margin-offset))',
		'--uk-position-translate-y': '-50%',
		transform: 'translate(0, var(--uk-position-translate-y))'
	},
	'.uk-position-center-left': { left: '0' },
	'.uk-position-center-right': { right: '0' },
	'.uk-position-center-left-out': { right: '100%', width: 'max-content' },
	'.uk-position-center-right-out': { left: '100%', width: 'max-content' },
	'.uk-position-top-center, .uk-position-bottom-center': {
		left: 'calc(50% - var(--uk-position-margin-offset))',
		'--uk-position-translate-x': '-50%',
		transform: 'translate(var(--uk-position-translate-x), 0)',
		width: 'max-content'
	},
	'.uk-position-top-center': { top: '0' },
	'.uk-position-bottom-center': { bottom: '0' },
	'.uk-position-cover': {
		position: 'absolute',
		top: '0',
		bottom: '0',
		left: '0',
		right: '0'
	},
	'.uk-position-small': {
		margin: '15px',
		'--uk-position-margin-offset': '15px'
	},
	'.uk-position-medium': {
		margin: '30px',
		'--uk-position-margin-offset': '30px'
	},
	'.uk-position-large': {
		margin: '30px',
		'--uk-position-margin-offset': '30px'
	},
	'.uk-position-relative': { position: 'relative !important' },
	'.uk-position-absolute': { position: 'absolute !important' },
	'.uk-position-fixed': { position: 'fixed !important' },
	'.uk-position-sticky': { position: 'sticky !important' },
	'.uk-position-z-index': { zIndex: '1' },
	'.uk-position-z-index-zero': { zIndex: '0' },
	'.uk-position-z-index-negative': { zIndex: '-1' },
	'.uk-position-z-index-high': { zIndex: '990' }
};

export const media: CSSRuleObject = {
	'@media (min-width: 1024px)': {
		'.uk-position-large': {
			margin: '50px',
			'--uk-position-margin-offset': '50px'
		}
	}
};

export interface PositionHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<PositionHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: PositionHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
