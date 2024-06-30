import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-description-list > dt': {
		color: '#333',
		fontSize: '0.875rem',
		fontWeight: 'normal',
		textTransform: 'uppercase'
	},
	'.uk-description-list > dt:nth-child(n + 2)': { marginTop: '20px' },
	'.uk-description-list-divider > dt:nth-child(n + 2)':{
		marginTop: '20px',
		paddingTop: '20px',
		borderTop: '1px solid #e5e5e5'
	}
};

export interface DescriptionListHooks {
	'hook-term': CSSRuleObject;
	'hook-description': CSSRuleObject;
	'hook-divider-term': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<DescriptionListHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: DescriptionListHooks = {
		'hook-term': {},
		'hook-description': {},
		'hook-divider-term': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-description-list > dt': {
			..._hooks['hook-term']
		},
		'.uk-description-list > dd': {
			..._hooks['hook-description']
		},
		'.uk-description-list-divider > dt:nth-child(n + 2)': {
			..._hooks['hook-divider-term']
		},
		..._hooks['hook-misc']
	};
};
