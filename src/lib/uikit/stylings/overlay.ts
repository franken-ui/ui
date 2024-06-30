import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-overlay': { padding: '30px 30px' },
	'.uk-overlay > :last-child': { marginBottom: '0' },
	'.uk-overlay-default': { backgroundColor: 'rgba(255, 255, 255, 0.8)' },
	'.uk-overlay-primary': { backgroundColor: 'rgba(34, 34, 34, 0.8)' }
};

export interface OverlayHooks {
	'hook-overlay': CSSRuleObject;
	'hook-icon': CSSRuleObject;
	'hook-default': CSSRuleObject;
	'hook-primary': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<OverlayHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: OverlayHooks = {
		'hook-overlay': {},
		'hook-icon': {},
		'hook-default': {},
		'hook-primary': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-overlay': {
			..._hooks['hook-overlay']
		},
		'.uk-overlay-icon': {
			..._hooks['hook-icon']
		},
		'.uk-overlay-default': {
			..._hooks['hook-default']
		},
		'.uk-overlay-primary': {
			..._hooks['hook-primary']
		},
		..._hooks['hook-misc']
	};
};
