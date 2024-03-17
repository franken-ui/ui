import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-spinner > *': { animation: 'uk-spinner-rotate 1.4s linear infinite' },
	'@keyframes uk-spinner-rotate': {
		'0%': { transform: 'rotate(0deg)' },
		'100%': { transform: 'rotate(270deg)' }
	},
	'.uk-spinner > * > *': {
		strokeDasharray: '88px',
		strokeDashoffset: '0',
		transformOrigin: 'center',
		animation: 'uk-spinner-dash 1.4s ease-in-out infinite',
		strokeWidth: '1',
		strokeLinecap: 'round'
	},
	'@keyframes uk-spinner-dash': {
		'0%': { strokeDashoffset: '88px' },
		'50%': { strokeDashoffset: '22px', transform: 'rotate(135deg)' },
		'100%': { strokeDashoffset: '88px', transform: 'rotate(450deg)' }
	}
};

export interface SpinnerHooks {
	'hook-spinner': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<SpinnerHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: SpinnerHooks = {
		'hook-spinner': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-spinner': {
			..._hooks['hook-spinner']
		},
		..._hooks['hook-misc']
	};
};
