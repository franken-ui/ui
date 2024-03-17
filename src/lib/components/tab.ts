import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-tab': {
		display: 'flex',
		flexWrap: 'wrap',
		marginLeft: '-20px',
		padding: '0',
		listStyle: 'none',
		position: 'relative'
	},
	'.uk-tab::before': {
		content: "''",
		position: 'absolute',
		bottom: '0',
		left: '20px',
		right: '0',
		borderBottom: '1px solid #e5e5e5'
	},
	'.uk-tab > *': { flex: 'none', paddingLeft: '20px', position: 'relative' },
	'.uk-tab > * > a': {
		display: 'flex',
		alignItems: 'center',
		columnGap: '0.25em',
		justifyContent: 'center',
		padding: '5px 10px',
		color: '#999',
		borderBottom: '1px solid transparent',
		fontSize: '0.875rem',
		textTransform: 'uppercase',
		transition: 'color 0.1s ease-in-out'
	},
	'.uk-tab > * > a:hover': { color: '#666', textDecoration: 'none' },
	'.uk-tab > .uk-active > a': { color: '#333', borderColor: '#1e87f0' },
	'.uk-tab > .uk-disabled > a': { color: '#999' },
	'.uk-tab-bottom::before': { top: '0', bottom: 'auto' },
	'.uk-tab-bottom > * > a': {
		borderTop: '1px solid transparent',
		borderBottom: 'none'
	},
	'.uk-tab-left, .uk-tab-right': { flexDirection: 'column', marginLeft: '0' },
	'.uk-tab-left > *, .uk-tab-right > *': { paddingLeft: '0' },
	'.uk-tab-left::before': {
		top: '0',
		bottom: '0',
		left: 'auto',
		right: '0',
		borderLeft: '1px solid #e5e5e5',
		borderBottom: 'none'
	},
	'.uk-tab-right::before': {
		top: '0',
		bottom: '0',
		left: '0',
		right: 'auto',
		borderLeft: '1px solid #e5e5e5',
		borderBottom: 'none'
	},
	'.uk-tab-left > * > a': {
		justifyContent: 'left',
		borderRight: '1px solid transparent',
		borderBottom: 'none'
	},
	'.uk-tab-right > * > a': {
		justifyContent: 'left',
		borderLeft: '1px solid transparent',
		borderBottom: 'none'
	},
	'.uk-tab .uk-dropdown': { marginLeft: '30px' }
};

export interface TabHooks {
	'hook-tab': CSSRuleObject;
	'hook-tab-before': CSSRuleObject;
	'hook-item': CSSRuleObject;
	'hook-item-hover': CSSRuleObject;
	'hook-item-active': CSSRuleObject;
	'hook-item-disabled': CSSRuleObject;
	'hook-bottom': CSSRuleObject;
	'hook-bottom-before': CSSRuleObject;
	'hook-bottom-item': CSSRuleObject;
	'hook-left': CSSRuleObject;
	'hook-left-before': CSSRuleObject;
	'hook-left-item': CSSRuleObject;
	'hook-right': CSSRuleObject;
	'hook-right-before': CSSRuleObject;
	'hook-right-item': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<TabHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: TabHooks = {
		'hook-tab': {},
		'hook-tab-before': {},
		'hook-item': {},
		'hook-item-hover': {},
		'hook-item-active': {},
		'hook-item-disabled': {},
		'hook-bottom': {},
		'hook-bottom-before': {},
		'hook-bottom-item': {},
		'hook-left': {},
		'hook-left-before': {},
		'hook-left-item': {},
		'hook-right': {},
		'hook-right-before': {},
		'hook-right-item': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-tab': {
			..._hooks['hook-tab']
		},
		'.uk-tab::before': {
			..._hooks['hook-tab-before']
		},
		'.uk-tab > * > a': {
			..._hooks['hook-item']
		},
		'.uk-tab > * > a:hover': {
			..._hooks['hook-item-hover']
		},
		'.uk-tab > .uk-active > a': {
			..._hooks['hook-item-active']
		},
		'.uk-tab > .uk-disabled > a': {
			..._hooks['hook-item-disabled']
		},
		'.uk-tab-bottom': {
			..._hooks['hook-bottom']
		},
		'.uk-tab-bottom::before': {
			..._hooks['hook-bottom-before']
		},
		'.uk-tab-bottom > * > a': {
			..._hooks['hook-bottom-item']
		},
		'.uk-tab-left': {
			..._hooks['hook-left']
		},
		'.uk-tab-left::before': {
			..._hooks['hook-left-before']
		},
		'.uk-tab-right': {
			..._hooks['hook-right']
		},
		'.uk-tab-right::before': {
			..._hooks['hook-right-before']
		},
		'.uk-tab-left > * > a': {
			..._hooks['hook-left-item']
		},
		'.uk-tab-right > * > a': {
			..._hooks['hook-right-item']
		},
		..._hooks['hook-misc']
	};
};
