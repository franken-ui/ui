import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-sortable': { position: 'relative' },
	'.uk-sortable > :last-child': { marginBottom: '0' },
	'.uk-sortable-drag': {
		position: 'fixed !important',
		zIndex: '1050 !important',
		pointerEvents: 'none'
	},
	'.uk-sortable-placeholder': { opacity: '0', pointerEvents: 'none' },
	'.uk-sortable-empty': { minHeight: '50px' },
	'.uk-sortable-handle:hover': { cursor: 'move' }
};

export interface SortableHooks {
	'hook-sortable': CSSRuleObject;
	'hook-drag': CSSRuleObject;
	'hook-placeholder': CSSRuleObject;
	'hook-empty': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<SortableHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: SortableHooks = {
		'hook-sortable': {},
		'hook-drag': {},
		'hook-placeholder': {},
		'hook-empty': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-sortable': {
			..._hooks['hook-sortable']
		},
		'.uk-sortable-drag': {
			..._hooks['hook-drag']
		},
		'.uk-sortable-placeholder': {
			..._hooks['hook-placeholder']
		},
		'.uk-sortable-empty': {
			..._hooks['hook-empty']
		},
		..._hooks['hook-misc']
	};
};
