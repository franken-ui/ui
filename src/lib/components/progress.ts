import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-progress': {
		verticalAlign: 'baseline',
		display: 'block',
		width: '100%',
		border: '0',
		backgroundColor: '#f8f8f8',
		marginBottom: '20px',
		height: '15px',
		borderRadius: '500px',
		overflow: 'hidden'
	},
	'* + .uk-progress': { marginTop: '20px' },
	'.uk-progress::-webkit-progress-bar': { backgroundColor: 'transparent' },
	'.uk-progress::-webkit-progress-value': {
		backgroundColor: '#1e87f0',
		transition: 'width 0.6s ease'
	},
	'.uk-progress::-moz-progress-bar': {
		backgroundColor: '#1e87f0',
		transition: 'width 0.6s ease'
	}
};

export interface ProgressHooks {
	'hook-progress': CSSRuleObject;
	'hook-bar': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<ProgressHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: ProgressHooks = {
		'hook-progress': {},
		'hook-bar': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-progress': {
			..._hooks['hook-progress']
		},
		'.uk-progress::-webkit-progress-value': {
			..._hooks['hook-bar']
		},
		'.uk-progress::-moz-progress-bar': {
			..._hooks['hook-bar']
		},
		..._hooks['hook-misc']
	};
};
