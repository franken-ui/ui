import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-kbd': {
		'@apply pointer-events-none inline-flex select-none items-center rounded border border-border bg-muted px-1.5 font-mono text-[0.8rem] font-medium text-muted-foreground':
			{}
	},
	'.uk-hr': {
		'@apply border-border': {}
	}
};

export const media: CSSRuleObject = {};

export interface ExtensionsHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<ExtensionsHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: ExtensionsHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
