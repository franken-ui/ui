import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-kbd': {
		'@apply pointer-events-none inline-flex select-none items-center rounded border border-border bg-muted px-1.5 font-mono text-[0.8rem] font-medium text-muted-foreground':
			{}
	},
	'.uk-hr': {
		'@apply border-border': {}
	},
	'.uk-input-tag': {
		'@apply border-input bg-background has-[input:focus]:ring-ring flex min-h-9 flex-wrap items-center gap-1 rounded-md border p-2 has-[input:focus]:ring-1':
			{}
	},
	'.uk-input-tag.uk-disabled': {
		'@apply opacity-50': {}
	},
	'.uk-input-tag input': {
		'@apply placeholder-muted-foreground text-foreground min-h-7 flex-1 bg-transparent px-1 text-sm focus:outline-none':
			{}
	},
	'.uk-input-tag.uk-form-danger': {
		'@apply has-[input:focus]:ring-destructive': {}
	},
	'.uk-tag': {
		'@apply inline-flex min-h-7 items-center gap-2 rounded px-2 py-1 text-sm': {}
	},
	'.uk-tag-primary': {
		'@apply bg-primary text-primary-foreground hover:bg-primary/80': {}
	},
	'.uk-tag-secondary': {
		'@apply bg-secondary text-secondary-foreground hover:bg-secondary/80': {}
	},
	'.uk-tag-danger': {
		'@apply bg-destructive text-destructive-foreground hover:bg-destructive/80': {}
	},
	'.uk-input-pin': {
		'@apply inline-flex items-center shadow-sm': {}
	},
	'.uk-input-pin input': {
		'@apply relative -mr-[1px] flex h-9 w-9 border border-input bg-transparent text-center text-sm placeholder-muted-foreground focus:z-10 focus:outline-none focus:ring-1 focus:ring-ring':
			{}
	},
	'.uk-input-pin.uk-form-danger input': {
		'@apply ring-destructive': {}
	},
	'.uk-input-pin input:focus': {
		'@apply placeholder:text-background': {}
	},
	'.uk-input-pin.uk-disabled input, .uk-input-pin input:disabled': {
		'@apply opacity-50': {}
	},
	'.uk-input-pin input:first-child': {
		'@apply ml-[1px] rounded-l-md': {}
	},
	'.uk-input-pin input:last-child': {
		'@apply rounded-r-md': {}
	},
	'.uk-input-pin.uk-input-pin-separated': {
		'@apply gap-2 shadow-none': {}
	},
	'.uk-input-pin.uk-input-pin-separated input': {
		'@apply -mr-0 rounded-md shadow-sm': {}
	},
	'.uk-input-pin.uk-input-pin-separated input:first-child': {
		'@apply ml-0': {}
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
