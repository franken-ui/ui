import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-dropnav-dropbar': {
		position: 'absolute',
		zIndex: '980',
		padding: '0',
		left: '0',
		right: '0'
	}
};

export interface DropnavHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<DropnavHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: DropnavHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
