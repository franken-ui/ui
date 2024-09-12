import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	"[class*='uk-column-']": { columnGap: '30px' },
	'.uk-column-span': { columnSpan: 'all' },
	"[class*='uk-column-'] img": { transform: 'translate3d(0, 0, 0)' },
	'.uk-column-divider': { columnRule: '1px solid #e5e5e5', columnGap: '60px' },
	'.uk-column-1-2': { columnCount: '2' },
	'.uk-column-1-3': { columnCount: '3' },
	'.uk-column-1-4': { columnCount: '4' },
	'.uk-column-1-5': { columnCount: '5' },
	'.uk-column-1-6': { columnCount: '6' }
};

export const media: CSSRuleObject = {
	'@screen lg': {
		"[class*='uk-column-']": { columnGap: '40px' },
		'.uk-column-divider': { columnGap: '80px' },

		'.uk-column-1-2\\@l': { columnCount: '2' },
		'.uk-column-1-3\\@l': { columnCount: '3' },
		'.uk-column-1-4\\@l': { columnCount: '4' },
		'.uk-column-1-5\\@l': { columnCount: '5' },
		'.uk-column-1-6\\@l': { columnCount: '6' }
	},
	'@screen sm': {
		'.uk-column-1-2\\@s': { columnCount: '2' },
		'.uk-column-1-3\\@s': { columnCount: '3' },
		'.uk-column-1-4\\@s': { columnCount: '4' },
		'.uk-column-1-5\\@s': { columnCount: '5' },
		'.uk-column-1-6\\@s': { columnCount: '6' }
	},
	'@screen md': {
		'.uk-column-1-2\\@m': { columnCount: '2' },
		'.uk-column-1-3\\@m': { columnCount: '3' },
		'.uk-column-1-4\\@m': { columnCount: '4' },
		'.uk-column-1-5\\@m': { columnCount: '5' },
		'.uk-column-1-6\\@m': { columnCount: '6' }
	},
	'@screen xl': {
		'.uk-column-1-2\\@xl': { columnCount: '2' },
		'.uk-column-1-3\\@xl': { columnCount: '3' },
		'.uk-column-1-4\\@xl': { columnCount: '4' },
		'.uk-column-1-5\\@xl': { columnCount: '5' },
		'.uk-column-1-6\\@xl': { columnCount: '6' }
	}
};

export interface ColumnHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<ColumnHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: ColumnHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
