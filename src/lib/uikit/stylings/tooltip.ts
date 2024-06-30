import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-tooltip': {
		display: 'none',
		position: 'absolute',
		zIndex: '1030',
		'--uk-position-offset': '10px',
		'--uk-position-viewport-offset': '10',
		top: '0',
		boxSizing: 'border-box',
		maxWidth: '200px',
		padding: '3px 6px',
		backgroundColor: '#666',
		borderRadius: '2px',
		color: '#fff',
		fontSize: '12px'
	},
	'.uk-tooltip.uk-active': { display: 'block' }
};

export interface TooltipHooks {
	'hook-tooltip': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<TooltipHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: TooltipHooks = {
		'hook-tooltip': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-tooltip': {
			..._hooks['hook-tooltip']
		},
		..._hooks['hook-misc']
	};
};
