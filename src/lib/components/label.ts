import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-label': {
		display: 'inline-block',
		padding: '0 10px',
		backgroundColor: '#1e87f0',
		lineHeight: '1.5',
		fontSize: '0.875rem',
		color: '#fff',
		verticalAlign: 'middle',
		whiteSpace: 'nowrap',
		borderRadius: '2px',
		textTransform: 'uppercase'
	},
	'.uk-label-success': { backgroundColor: '#32d296', color: '#fff' },
	'.uk-label-warning': { backgroundColor: '#faa05a', color: '#fff' },
	'.uk-label-danger': { backgroundColor: '#f0506e', color: '#fff' }
};

export interface LabelHooks {
	'hook-label': CSSRuleObject;
	'hook-success': CSSRuleObject;
	'hook-warning': CSSRuleObject;
	'hook-danger': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<LabelHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: LabelHooks = {
		'hook-label': {},
		'hook-success': {},
		'hook-warning': {},
		'hook-danger': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-label': {
			..._hooks['hook-label']
		},
		'.uk-label-success': {
			..._hooks['hook-success']
		},
		'.uk-label-warning': {
			..._hooks['hook-warning']
		},
		'.uk-label-danger': {
			..._hooks['hook-danger']
		},
		..._hooks['hook-misc']
	};
};
