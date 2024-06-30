import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-range': {
		WebkitAppearance: 'none',
		boxSizing: 'border-box',
		margin: '0',
		verticalAlign: 'middle',
		maxWidth: '100%',
		width: '100%',
		background: 'transparent'
	},
	'.uk-range:focus': { outline: 'none' },
	'.uk-range::-moz-focus-outer': { border: 'none' },
	'.uk-range:not(:disabled)::-webkit-slider-thumb': { cursor: 'pointer' },
	'.uk-range:not(:disabled)::-moz-range-thumb': { cursor: 'pointer' },
	'.uk-range::-webkit-slider-runnable-track': {
		height: '3px',
		backgroundColor: '#ebebeb',
		borderRadius: '500px'
	},
	'.uk-range:focus::-webkit-slider-runnable-track, .uk-range:active::-webkit-slider-runnable-track':
		{
			backgroundColor: '#dedede'
		},
	'.uk-range::-moz-range-track': {
		height: '3px',
		backgroundColor: '#ebebeb',
		borderRadius: '500px'
	},
	'.uk-range:focus::-moz-range-track': { backgroundColor: '#dedede' },
	'.uk-range::-webkit-slider-thumb': {
		WebkitAppearance: 'none',
		marginTop: '-7px',
		height: '15px',
		width: '15px',
		borderRadius: '500px',
		backgroundColor: '#fff',
		border: '1px solid #cccccc'
	},
	'.uk-range::-moz-range-thumb': {
		border: ['none', '1px solid #cccccc'],
		height: '15px',
		width: '15px',
		marginTop: '-7px',
		borderRadius: '500px',
		backgroundColor: '#fff'
	}
};

export interface FormRangeHooks {
	'hook-form-range': CSSRuleObject;
	'hook-track': CSSRuleObject;
	'hook-track-focus': CSSRuleObject;
	'hook-thumb': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<FormRangeHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: FormRangeHooks = {
		'hook-form-range': {},
		'hook-track': {},
		'hook-track-focus': {},
		'hook-thumb': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-range': {
			..._hooks['hook-form-range']
		},
		'.uk-range::-webkit-slider-runnable-track': {
			..._hooks['hook-track']
		},
		'.uk-range:focus::-webkit-slider-runnable-track, .uk-range:active::-webkit-slider-runnable-track':
			{
				..._hooks['hook-track-focus']
			},
		'.uk-range::-moz-range-track': {
			..._hooks['hook-track']
		},
		'.uk-range:focus::-moz-range-track': {
			..._hooks['hook-track-focus']
		},
		'.uk-range::-webkit-slider-thumb': {
			..._hooks['hook-thumb']
		},
		'.uk-range::-moz-range-thumb': {
			..._hooks['hook-thumb']
		},
		..._hooks['hook-misc']
	};
};
