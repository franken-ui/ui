import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-leader': { overflow: 'hidden' },
	'.uk-leader-fill::after': {
		display: 'inline-block',
		marginLeft: '15px',
		width: '0',
		content: 'attr(data-fill)',
		whiteSpace: 'nowrap'
	},
	'.uk-leader-fill.uk-leader-hide::after': { display: 'none' },
	':root': { '--uk-leader-fill-content': '.' }
};

export interface LeaderHooks {
	'hook-leader': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<LeaderHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: LeaderHooks = {
		'hook-leader': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-leader': {
			..._hooks['hook-leader']
		},
		..._hooks['hook-misc']
	};
};
