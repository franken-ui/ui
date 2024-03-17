import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-drop': {
		display: 'none',
		position: 'absolute',
		zIndex: '1020',
		'--uk-position-offset': '20px',
		'--uk-position-viewport-offset': '15px',
		boxSizing: 'border-box',
		width: '300px'
	},
	'.uk-drop.uk-open': { display: 'block' },
	'.uk-drop-stack .uk-drop-grid > *': { width: '100% !important' },
	'.uk-drop-parent-icon': {
		marginLeft: '0.25em',
		transition: 'transform 0.3s ease-out'
	},
	"[aria-expanded='true'] > .uk-drop-parent-icon": {
		transform: 'rotateX(180deg)'
	}
};

export interface DropHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<DropHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: DropHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
