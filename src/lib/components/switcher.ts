import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-switcher': { margin: '0', padding: '0', listStyle: 'none' },
	'.uk-switcher > :not(.uk-active)': { display: 'none' },
	'.uk-switcher > * > :last-child': { marginBottom: '0' }
};

export interface SwitcherHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<SwitcherHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: SwitcherHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
