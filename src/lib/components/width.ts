import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'[class*="uk-child-width"] > *': { boxSizing: 'border-box', width: '100%' },
	'.uk-child-width-1-2 > *': { width: '50%' },
	'.uk-child-width-1-3 > *': { width: 'calc(100% / 3)' },
	'.uk-child-width-1-4 > *': { width: '25%' },
	'.uk-child-width-1-5 > *': { width: '20%' },
	'.uk-child-width-1-6 > *': { width: 'calc(100% / 6)' },
	'.uk-child-width-auto > *': { width: 'auto' },
	'.uk-child-width-expand > :not([class*="uk-width"])': {
		flex: '1',
		minWidth: '1px'
	},
	'[class*="uk-width"]': {
		boxSizing: 'border-box',
		width: '100%',
		maxWidth: '100%'
	},
	'.uk-width-1-2': { width: '50%' },
	'.uk-width-1-3': { width: 'calc(100% / 3)' },
	'.uk-width-2-3': { width: 'calc(200% / 3)' },
	'.uk-width-1-4': { width: '25%' },
	'.uk-width-3-4': { width: '75%' },
	'.uk-width-1-5': { width: '20%' },
	'.uk-width-2-5': { width: '40%' },
	'.uk-width-3-5': { width: '60%' },
	'.uk-width-4-5': { width: '80%' },
	'.uk-width-1-6': { width: 'calc(100% / 6)' },
	'.uk-width-5-6': { width: 'calc(500% / 6)' },
	'.uk-width-small': { width: '150px' },
	'.uk-width-medium': { width: '300px' },
	'.uk-width-large': { width: '450px' },
	'.uk-width-xlarge': { width: '600px' },
	'.uk-width-2xlarge': { width: '750px' },
	'.uk-width-auto': { width: 'auto' },
	'.uk-width-expand': { flex: '1', minWidth: '1px' },
	'.uk-width-max-content': { width: 'max-content' },
	'.uk-width-min-content': { width: 'min-content' }
};

export const media: CSSRuleObject = {
	'@media (min-width: 640px)': {
		'.uk-child-width-1-1\\@s > *': { width: '100%' },
		'.uk-child-width-1-2\\@s > *': { width: '50%' },
		'.uk-child-width-1-3\\@s > *': { width: 'calc(100% / 3)' },
		'.uk-child-width-1-4\\@s > *': { width: '25%' },
		'.uk-child-width-1-5\\@s > *': { width: '20%' },
		'.uk-child-width-1-6\\@s > *': { width: 'calc(100% / 6)' },
		'.uk-child-width-auto\\@s > *': { width: 'auto' },
		'.uk-child-width-expand\\@s > :not([class*="uk-width"])': {
			flex: '1',
			minWidth: '1px'
		},
		'.uk-child-width-1-1\\@s > :not([class*="uk-width"]), .uk-child-width-1-2\\@s > :not([class*="uk-width"]), .uk-child-width-1-3\\@s > :not([class*="uk-width"]), .uk-child-width-1-4\\@s > :not([class*="uk-width"]), .uk-child-width-1-5\\@s > :not([class*="uk-width"]), .uk-child-width-1-6\\@s > :not([class*="uk-width"]), .uk-child-width-auto\\@s > :not([class*="uk-width"])':
			{
				flex: 'initial'
			},
		'.uk-width-1-1\\@s': { width: '100%' },
		'.uk-width-1-2\\@s': { width: '50%' },
		'.uk-width-1-3\\@s': { width: 'calc(100% / 3)' },
		'.uk-width-2-3\\@s': { width: 'calc(200% / 3)' },
		'.uk-width-1-4\\@s': { width: '25%' },
		'.uk-width-3-4\\@s': { width: '75%' },
		'.uk-width-1-5\\@s': { width: '20%' },
		'.uk-width-2-5\\@s': { width: '40%' },
		'.uk-width-3-5\\@s': { width: '60%' },
		'.uk-width-4-5\\@s': { width: '80%' },
		'.uk-width-1-6\\@s': { width: 'calc(100% / 6)' },
		'.uk-width-5-6\\@s': { width: 'calc(500% / 6)' },
		'.uk-width-small\\@s': { width: '150px' },
		'.uk-width-medium\\@s': { width: '300px' },
		'.uk-width-large\\@s': { width: '450px' },
		'.uk-width-xlarge\\@s': { width: '600px' },
		'.uk-width-2xlarge\\@s': { width: '750px' },
		'.uk-width-auto\\@s': { width: 'auto' },
		'.uk-width-expand\\@s': { flex: '1', minWidth: '1px' },
		'.uk-width-1-1\\@s, .uk-width-1-2\\@s, .uk-width-1-3\\@s, .uk-width-2-3\\@s, .uk-width-1-4\\@s, .uk-width-3-4\\@s, .uk-width-1-5\\@s, .uk-width-2-5\\@s, .uk-width-3-5\\@s, .uk-width-4-5\\@s, .uk-width-1-6\\@s, .uk-width-5-6\\@s, .uk-width-small\\@s, .uk-width-medium\\@s, .uk-width-large\\@s, .uk-width-xlarge\\@s, .uk-width-2xlarge\\@s, .uk-width-auto\\@s':
			{
				flex: 'initial'
			}
	},
	'@media (min-width: 960px)': {
		'.uk-child-width-1-1\\@m > *': { width: '100%' },
		'.uk-child-width-1-2\\@m > *': { width: '50%' },
		'.uk-child-width-1-3\\@m > *': { width: 'calc(100% / 3)' },
		'.uk-child-width-1-4\\@m > *': { width: '25%' },
		'.uk-child-width-1-5\\@m > *': { width: '20%' },
		'.uk-child-width-1-6\\@m > *': { width: 'calc(100% / 6)' },
		'.uk-child-width-auto\\@m > *': { width: 'auto' },
		'.uk-child-width-expand\\@m > :not([class*="uk-width"])': {
			flex: '1',
			minWidth: '1px'
		},
		'.uk-child-width-1-1\\@m > :not([class*="uk-width"]), .uk-child-width-1-2\\@m > :not([class*="uk-width"]), .uk-child-width-1-3\\@m > :not([class*="uk-width"]), .uk-child-width-1-4\\@m > :not([class*="uk-width"]), .uk-child-width-1-5\\@m > :not([class*="uk-width"]), .uk-child-width-1-6\\@m > :not([class*="uk-width"]), .uk-child-width-auto\\@m > :not([class*="uk-width"])':
			{
				flex: 'initial'
			},
		'.uk-width-1-1\\@m': { width: '100%' },
		'.uk-width-1-2\\@m': { width: '50%' },
		'.uk-width-1-3\\@m': { width: 'calc(100% / 3)' },
		'.uk-width-2-3\\@m': { width: 'calc(200% / 3)' },
		'.uk-width-1-4\\@m': { width: '25%' },
		'.uk-width-3-4\\@m': { width: '75%' },
		'.uk-width-1-5\\@m': { width: '20%' },
		'.uk-width-2-5\\@m': { width: '40%' },
		'.uk-width-3-5\\@m': { width: '60%' },
		'.uk-width-4-5\\@m': { width: '80%' },
		'.uk-width-1-6\\@m': { width: 'calc(100% / 6)' },
		'.uk-width-5-6\\@m': { width: 'calc(500% / 6)' },
		'.uk-width-small\\@m': { width: '150px' },
		'.uk-width-medium\\@m': { width: '300px' },
		'.uk-width-large\\@m': { width: '450px' },
		'.uk-width-xlarge\\@m': { width: '600px' },
		'.uk-width-2xlarge\\@m': { width: '750px' },
		'.uk-width-auto\\@m': { width: 'auto' },
		'.uk-width-expand\\@m': { flex: '1', minWidth: '1px' },
		'.uk-width-1-1\\@m, .uk-width-1-2\\@m, .uk-width-1-3\\@m, .uk-width-2-3\\@m, .uk-width-1-4\\@m, .uk-width-3-4\\@m, .uk-width-1-5\\@m, .uk-width-2-5\\@m, .uk-width-3-5\\@m, .uk-width-4-5\\@m, .uk-width-1-6\\@m, .uk-width-5-6\\@m, .uk-width-small\\@m, .uk-width-medium\\@m, .uk-width-large\\@m, .uk-width-xlarge\\@m, .uk-width-2xlarge\\@m, .uk-width-auto\\@m':
			{
				flex: 'initial'
			}
	},
	'@media (min-width: 1200px)': {
		'.uk-child-width-1-1\\@l > *': { width: '100%' },
		'.uk-child-width-1-2\\@l > *': { width: '50%' },
		'.uk-child-width-1-3\\@l > *': { width: 'calc(100% / 3)' },
		'.uk-child-width-1-4\\@l > *': { width: '25%' },
		'.uk-child-width-1-5\\@l > *': { width: '20%' },
		'.uk-child-width-1-6\\@l > *': { width: 'calc(100% / 6)' },
		'.uk-child-width-auto\\@l > *': { width: 'auto' },
		'.uk-child-width-expand\\@l > :not([class*="uk-width"])': {
			flex: '1',
			minWidth: '1px'
		},
		'.uk-child-width-1-1\\@l > :not([class*="uk-width"]), .uk-child-width-1-2\\@l > :not([class*="uk-width"]), .uk-child-width-1-3\\@l > :not([class*="uk-width"]), .uk-child-width-1-4\\@l > :not([class*="uk-width"]), .uk-child-width-1-5\\@l > :not([class*="uk-width"]), .uk-child-width-1-6\\@l > :not([class*="uk-width"]), .uk-child-width-auto\\@l > :not([class*="uk-width"])':
			{
				flex: 'initial'
			},
		'.uk-width-1-1\\@l': { width: '100%' },
		'.uk-width-1-2\\@l': { width: '50%' },
		'.uk-width-1-3\\@l': { width: 'calc(100% / 3)' },
		'.uk-width-2-3\\@l': { width: 'calc(200% / 3)' },
		'.uk-width-1-4\\@l': { width: '25%' },
		'.uk-width-3-4\\@l': { width: '75%' },
		'.uk-width-1-5\\@l': { width: '20%' },
		'.uk-width-2-5\\@l': { width: '40%' },
		'.uk-width-3-5\\@l': { width: '60%' },
		'.uk-width-4-5\\@l': { width: '80%' },
		'.uk-width-1-6\\@l': { width: 'calc(100% / 6)' },
		'.uk-width-5-6\\@l': { width: 'calc(500% / 6)' },
		'.uk-width-small\\@l': { width: '150px' },
		'.uk-width-medium\\@l': { width: '300px' },
		'.uk-width-large\\@l': { width: '450px' },
		'.uk-width-xlarge\\@l': { width: '600px' },
		'.uk-width-2xlarge\\@l': { width: '750px' },
		'.uk-width-auto\\@l': { width: 'auto' },
		'.uk-width-expand\\@l': { flex: '1', minWidth: '1px' },
		'.uk-width-1-1\\@l, .uk-width-1-2\\@l, .uk-width-1-3\\@l, .uk-width-2-3\\@l, .uk-width-1-4\\@l, .uk-width-3-4\\@l, .uk-width-1-5\\@l, .uk-width-2-5\\@l, .uk-width-3-5\\@l, .uk-width-4-5\\@l, .uk-width-1-6\\@l, .uk-width-5-6\\@l, .uk-width-small\\@l, .uk-width-medium\\@l, .uk-width-large\\@l, .uk-width-xlarge\\@l, .uk-width-2xlarge\\@l, .uk-width-auto\\@l':
			{
				flex: 'initial'
			}
	},
	'@media (min-width: 1600px)': {
		'.uk-child-width-1-1\\@xl > *': { width: '100%' },
		'.uk-child-width-1-2\\@xl > *': { width: '50%' },
		'.uk-child-width-1-3\\@xl > *': { width: 'calc(100% / 3)' },
		'.uk-child-width-1-4\\@xl > *': { width: '25%' },
		'.uk-child-width-1-5\\@xl > *': { width: '20%' },
		'.uk-child-width-1-6\\@xl > *': { width: 'calc(100% / 6)' },
		'.uk-child-width-auto\\@xl > *': { width: 'auto' },
		'.uk-child-width-expand\\@xl > :not([class*="uk-width"])': {
			flex: '1',
			minWidth: '1px'
		},
		'.uk-child-width-1-1\\@xl > :not([class*="uk-width"]), .uk-child-width-1-2\\@xl > :not([class*="uk-width"]), .uk-child-width-1-3\\@xl > :not([class*="uk-width"]), .uk-child-width-1-4\\@xl > :not([class*="uk-width"]), .uk-child-width-1-5\\@xl > :not([class*="uk-width"]), .uk-child-width-1-6\\@xl > :not([class*="uk-width"]), .uk-child-width-auto\\@xl > :not([class*="uk-width"])':
			{
				flex: 'initial'
			},
		'.uk-width-1-1\\@xl': { width: '100%' },
		'.uk-width-1-2\\@xl': { width: '50%' },
		'.uk-width-1-3\\@xl': { width: 'calc(100% / 3)' },
		'.uk-width-2-3\\@xl': { width: 'calc(200% / 3)' },
		'.uk-width-1-4\\@xl': { width: '25%' },
		'.uk-width-3-4\\@xl': { width: '75%' },
		'.uk-width-1-5\\@xl': { width: '20%' },
		'.uk-width-2-5\\@xl': { width: '40%' },
		'.uk-width-3-5\\@xl': { width: '60%' },
		'.uk-width-4-5\\@xl': { width: '80%' },
		'.uk-width-1-6\\@xl': { width: 'calc(100% / 6)' },
		'.uk-width-5-6\\@xl': { width: 'calc(500% / 6)' },
		'.uk-width-small\\@xl': { width: '150px' },
		'.uk-width-medium\\@xl': { width: '300px' },
		'.uk-width-large\\@xl': { width: '450px' },
		'.uk-width-xlarge\\@xl': { width: '600px' },
		'.uk-width-2xlarge\\@xl': { width: '750px' },
		'.uk-width-auto\\@xl': { width: 'auto' },
		'.uk-width-expand\\@xl': { flex: '1', minWidth: '1px' },
		'.uk-width-1-1\\@xl, .uk-width-1-2\\@xl, .uk-width-1-3\\@xl, .uk-width-2-3\\@xl, .uk-width-1-4\\@xl, .uk-width-3-4\\@xl, .uk-width-1-5\\@xl, .uk-width-2-5\\@xl, .uk-width-3-5\\@xl, .uk-width-4-5\\@xl, .uk-width-1-6\\@xl, .uk-width-5-6\\@xl, .uk-width-small\\@xl, .uk-width-medium\\@xl, .uk-width-large\\@xl, .uk-width-xlarge\\@xl, .uk-width-2xlarge\\@xl, .uk-width-auto\\@xl':
			{
				flex: 'initial'
			}
	}
};

export interface WidthHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<WidthHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: WidthHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
