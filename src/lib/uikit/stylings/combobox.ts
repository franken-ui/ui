import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-combobox': { position: 'relative' },
	'.uk-combobox-input': {
		display: 'flex',
		height: '2.25rem',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: '0.375rem',
		borderWidth: '1px',
		borderColor: 'hsl(var(--input))',
		backgroundColor: 'transparent',
		paddingLeft: '0.75rem',
		paddingRight: '0.75rem',
		paddingTop: '0.25rem',
		paddingBottom: '0.25rem',
		fontSize: '0.875rem',
		lineHeight: '1.25rem',
		color: 'hsl(var(--foreground))',
		'--tw-shadow': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
		'--tw-shadow-colored': '0 1px 2px 0 var(--tw-shadow-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
		'--tw-ring-color': 'hsl(var(--ring))'
	},
	'.uk-combobox-input:focus': {
		outline: '2px solid transparent',
		outlineOffset: '2px',
		'--tw-ring-offset-shadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'--tw-ring-shadow':
			'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)'
	},
	'.uk-combobox-input:disabled': { opacity: '0.5' },
	'.uk-combobox-search': {
		display: 'flex',
		alignItems: 'center',
		borderBottomWidth: '1px',
		borderColor: 'hsl(var(--border))',
		paddingLeft: '0.75rem',
		paddingRight: '0.75rem'
	},
	'.uk-combobox-search svg': { marginRight: '0.5rem', opacity: '0.5' },
	'.uk-combobox-search input': {
		width: '100%',
		backgroundColor: 'transparent',
		paddingTop: '0.75rem',
		paddingBottom: '0.75rem',
		fontSize: '0.875rem',
		lineHeight: '1.25rem'
	},
	'.uk-combobox-search input::placeholder': {
		color: 'hsl(var(--muted-foreground))'
	},
	'.uk-combobox-search input:focus': {
		outline: '2px solid transparent',
		outlineOffset: '2px'
	},
	'.uk-combobox-input svg': { opacity: '0.5' },
	'.uk-combobox .uk-dropdown': { marginTop: '0.25rem', width: '100%' },
	'.uk-combobox .uk-dropdown-nav': { maxHeight: '160px', overflow: 'auto' },
	'.uk-combobox .uk-dropdown-nav a': {
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	'.uk-combobox .uk-disabled': { opacity: '0.5' }
};

export interface ComboboxHooks {
	'hook-combobox': {};
	'hook-misc': {};
}

export interface Args {
	hooks: Partial<ComboboxHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: ComboboxHooks = {
		'hook-combobox': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-combobox': {
			..._hooks['hook-combobox']
		},
		..._hooks['hook-misc']
	};
};
