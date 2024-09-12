import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	"[class*='uk-align']": { display: 'block', marginBottom: '30px' },
	"* + [class*='uk-align']": { marginTop: '30px' },
	'.uk-align-center': { marginLeft: 'auto', marginRight: 'auto' },
	'.uk-align-left': { marginTop: '0', marginRight: '30px', cssFloat: 'left' },
	'.uk-align-right': { marginTop: '0', marginLeft: '30px', cssFloat: 'right' }
};

export const media: CSSRuleObject = {
	'@screen sm': {
		'.uk-align-left\\@s': {
			marginTop: '0',
			marginRight: '30px',
			cssFloat: 'left'
		},
		'.uk-align-right\\@s': {
			marginTop: '0',
			marginLeft: '30px',
			cssFloat: 'right'
		}
	},
	'@screen md': {
		'.uk-align-left\\@m': {
			marginTop: '0',
			marginRight: '30px',
			cssFloat: 'left'
		},
		'.uk-align-right\\@m': {
			marginTop: '0',
			marginLeft: '30px',
			cssFloat: 'right'
		}
	},
	'@screen lg': {
		'.uk-align-left\\@l': { marginTop: '0', cssFloat: 'left' },
		'.uk-align-right\\@l': { marginTop: '0', cssFloat: 'right' },
		'.uk-align-left,.uk-align-left\\@s,.uk-align-left\\@m,.uk-align-left\\@l': {
			marginRight: '40px'
		},
		'.uk-align-right,.uk-align-right\\@s,.uk-align-right\\@m,.uk-align-right\\@l': {
			marginLeft: '40px'
		}
	},
	'@screen xl': {
		'.uk-align-left\\@xl': {
			marginTop: '0',
			marginRight: '40px',
			cssFloat: 'left'
		},
		'.uk-align-right\\@xl': {
			marginTop: '0',
			marginLeft: '40px',
			cssFloat: 'right'
		}
	}
};

export interface AlignHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<AlignHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: AlignHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
