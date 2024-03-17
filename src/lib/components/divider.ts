import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	"[class*='uk-divider']": { border: 'none', marginBottom: '20px' },
	"* + [class*='uk-divider']": { marginTop: '20px' },
	'.uk-divider-icon': {
		position: 'relative',
		height: '20px',
		backgroundImage:
			"url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22none%22%20stroke%3D%22%23e5e5e5%22%20stroke-width%3D%222%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%227%22%20%2F%3E%0A%3C%2Fsvg%3E%0A')",
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50% 50%'
	},
	'.uk-divider-icon::before, .uk-divider-icon::after': {
		content: "''",
		position: 'absolute',
		top: '50%',
		maxWidth: 'calc(50% - (50px / 2))',
		borderBottom: '1px solid #e5e5e5'
	},
	'.uk-divider-icon::before': {
		right: 'calc(50% + (50px / 2))',
		width: '100%'
	},
	'.uk-divider-icon::after': { left: 'calc(50% + (50px / 2))', width: '100%' },
	'.uk-divider-small': { lineHeight: '0' },
	'.uk-divider-small::after': {
		content: "''",
		display: 'inline-block',
		width: '100px',
		maxWidth: '100%',
		borderTop: '1px solid #e5e5e5',
		verticalAlign: 'top'
	},
	'.uk-divider-vertical': {
		width: 'max-content',
		height: '100px',
		marginLeft: 'auto',
		marginRight: 'auto',
		borderLeft: '1px solid #e5e5e5'
	}
};

export interface DividerHooks {
	'hook-icon': CSSRuleObject;
	'hook-icon-line': CSSRuleObject;
	'hook-icon-line-left': CSSRuleObject;
	'hook-icon-line-right': CSSRuleObject;
	'hook-small': CSSRuleObject;
	'hook-vertical': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<DividerHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: DividerHooks = {
		'hook-icon': {},
		'hook-icon-line': {},
		'hook-icon-line-left': {},
		'hook-icon-line-right': {},
		'hook-small': {},
		'hook-vertical': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-divider-icon': {
			..._hooks['hook-icon']
		},
		'.uk-divider-icon::before, .uk-divider-icon::after': {
			..._hooks['hook-icon-line']
		},
		'.uk-divider-icon::before': {
			..._hooks['hook-icon-line-left']
		},
		'.uk-divider-icon::after': {
			..._hooks['hook-icon-line-right']
		},
		'.uk-divider-small::after': {
			..._hooks['hook-small']
		},
		'.uk-divider-vertical': {
			..._hooks['hook-vertical']
		},
		..._hooks['hook-misc']
	};
};
