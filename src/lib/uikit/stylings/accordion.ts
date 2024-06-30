import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-accordion': { padding: '0', listStyle: 'none' },
	'.uk-accordion > :nth-child(n + 2)': { marginTop: '20px' },
	'.uk-accordion-title': {
		display: 'flex',
		justifyContent: 'space-between',
		fontSize: '1.25rem',
		lineHeight: '1.4',
		color: '#333',
		overflow: 'hidden'
	},
	// ".uk-accordion-title::before": {
	//   content: "''",
	//   width: "1.4em",
	//   height: "1.4em",
	//   marginLeft: "10px",
	//   cssFloat: "right",
	//   backgroundImage:
	//     "url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%20%2F%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%221%22%20height%3D%2213%22%20x%3D%226%22%20y%3D%220%22%20%2F%3E%0A%3C%2Fsvg%3E')",
	//   backgroundRepeat: "no-repeat",
	//   backgroundPosition: "50% 50%",
	// },
	'.uk-accordion-icon': {
		flex: 'none',
		transition: '0.3s transform'
	},
	// ".uk-open > .uk-accordion-title::before": {
	//   backgroundImage:
	//     "url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%20%2F%3E%0A%3C%2Fsvg%3E')",
	// },
	'.uk-open > .uk-accordion-title > .uk-accordion-icon': {
		transform: 'rotate(180deg)'
	},
	'.uk-accordion-title:hover': { color: '#666', textDecoration: 'none' },
	'.uk-accordion-content': {
		display: 'flow-root',
		marginTop: '20px'
	},
	'.uk-accordion-content[hidden]': {
		display: 'none'
	},
	'.uk-accordion-content > :last-child': { marginBottom: '0' }
};

export interface AccordionHooks {
	'hook-accordion': CSSRuleObject;
	'hook-item': CSSRuleObject;
	'hook-title': CSSRuleObject;
	'hook-title-hover': CSSRuleObject;
	'hook-title-focus': CSSRuleObject;
	'hook-title-active': CSSRuleObject;
	'hook-content': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<AccordionHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: AccordionHooks = {
		'hook-accordion': {},
		'hook-item': {},
		'hook-title': {},
		'hook-title-hover': {},
		'hook-title-focus': {},
		'hook-title-active': {},
		'hook-content': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-accordion': {
			..._hooks['hook-accordion']
		},
		'.uk-accordion > :nth-child(n + 2)': {
			..._hooks['hook-item']
		},
		'.uk-accordion-title': {
			..._hooks['hook-title']
		},
		'.uk-accordion-title:focus': {
			..._hooks['hook-title-focus']
		},
		'.uk-open > .uk-accordion-title': {
			..._hooks['hook-title-active']
		},
		'.uk-accordion-title:hover': {
			..._hooks['hook-title-hover']
		},
		'.uk-accordion-content': {
			..._hooks['hook-content']
		},
		..._hooks['hook-misc']
	};
};
