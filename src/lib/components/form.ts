import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-input, .uk-select, .uk-textarea, .uk-radio, .uk-checkbox': {
		boxSizing: 'border-box',
		margin: '0',
		borderRadius: '0',
		font: 'inherit'
	},
	'.uk-input': { overflow: 'visible' },
	'.uk-select': { textTransform: 'none' },
	'.uk-select optgroup': { font: 'inherit', fontWeight: 'bold' },
	'.uk-textarea': { overflow: 'auto' },
	'.uk-input[type="search"]::-webkit-search-cancel-button, .uk-input[type="search"]::-webkit-search-decoration':
		{
			WebkitAppearance: 'none'
		},
	'.uk-input[type="number"]::-webkit-inner-spin-button, .uk-input[type="number"]::-webkit-outer-spin-button':
		{
			height: 'auto'
		},
	'.uk-input::-moz-placeholder, .uk-textarea::-moz-placeholder': {
		opacity: '1'
	},
	'.uk-radio:not(:disabled), .uk-checkbox:not(:disabled)': {
		cursor: 'pointer'
	},
	'.uk-fieldset': { border: 'none', margin: '0', padding: '0', minWidth: '0' },
	'.uk-input, .uk-textarea': { WebkitAppearance: 'none' },
	'.uk-input, .uk-select, .uk-textarea': {
		maxWidth: '100%',
		width: '100%',
		border: ['0 none', '1px solid #e5e5e5'],
		padding: '0 10px',
		backgroundColor: '#fff',
		color: '#666',
		transition: '0.2s ease-in-out',
		transitionProperty: 'color, background-color, border'
	},
	'.uk-input, .uk-select:not([multiple]):not([size])': {
		height: '40px',
		verticalAlign: 'middle',
		display: 'inline-block'
	},
	'.uk-input:not(input), .uk-select:not(select)': { lineHeight: '38px' },
	'.uk-select[multiple], .uk-select[size], .uk-textarea': {
		paddingTop: '6px',
		paddingBottom: '6px',
		verticalAlign: 'top'
	},
	'.uk-select[multiple], .uk-select[size]': { resize: 'vertical' },
	'.uk-input:focus, .uk-select:focus, .uk-textarea:focus': {
		outline: 'none',
		backgroundColor: '#fff',
		color: '#666',
		borderColor: '#1e87f0'
	},
	'.uk-input:disabled, .uk-select:disabled, .uk-textarea:disabled': {
		backgroundColor: '#f8f8f8',
		color: '#999',
		borderColor: '#e5e5e5'
	},
	'.uk-input::placeholder': { color: '#999' },
	'.uk-textarea::placeholder': { color: '#999' },
	'.uk-form-small': { fontSize: '0.875rem' },
	'.uk-form-small:not(textarea):not([multiple]):not([size])': {
		height: '30px',
		paddingLeft: '8px',
		paddingRight: '8px'
	},
	'textarea.uk-form-small, [multiple].uk-form-small, [size].uk-form-small': {
		padding: '5px 8px'
	},
	'.uk-form-small:not(select):not(input):not(textarea)': { lineHeight: '28px' },
	'.uk-form-large': { fontSize: '1.25rem' },
	'.uk-form-large:not(textarea):not([multiple]):not([size])': {
		height: '55px',
		paddingLeft: '12px',
		paddingRight: '12px'
	},
	'textarea.uk-form-large, [multiple].uk-form-large, [size].uk-form-large': {
		padding: '7px 12px'
	},
	'.uk-form-large:not(select):not(input):not(textarea)': { lineHeight: '53px' },
	'.uk-form-danger, .uk-form-danger:focus': {
		color: '#f0506e',
		borderColor: '#f0506e'
	},
	'.uk-form-success, .uk-form-success:focus': {
		color: '#32d296',
		borderColor: '#32d296'
	},
	'.uk-form-blank': { background: 'none', borderColor: 'transparent' },
	'.uk-form-blank:focus': { borderColor: '#e5e5e5', borderStyle: 'solid' },
	'input.uk-form-width-xsmall': { width: '50px' },
	'select.uk-form-width-xsmall': { width: '75px' },
	'.uk-form-width-small': { width: '130px' },
	'.uk-form-width-medium': { width: '200px' },
	'.uk-form-width-large': { width: '500px' },
	'.uk-select:not([multiple]):not([size])': {
		WebkitAppearance: 'none',
		MozAppearance: 'none',
		paddingRight: '20px',
		backgroundImage:
			'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%201%209%206%2015%206%22%20%2F%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%2013%209%208%2015%208%22%20%2F%3E%0A%3C%2Fsvg%3E%0A")',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '100% 50%'
	},
	'.uk-select:not([multiple]):not([size]) option': { color: '#666' },
	'.uk-select:not([multiple]):not([size]):disabled': {
		backgroundImage:
			'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%201%209%206%2015%206%22%20%2F%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%2013%209%208%2015%208%22%20%2F%3E%0A%3C%2Fsvg%3E%0A")'
	},
	'.uk-input[list]': {
		paddingRight: '20px',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '100% 50%'
	},
	'.uk-input[list]:hover, .uk-input[list]:focus': {
		backgroundImage:
			'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%2012%208%206%2016%206%22%20%2F%3E%0A%3C%2Fsvg%3E%0A")'
	},
	'.uk-input[list]::-webkit-calendar-picker-indicator': {
		display: 'none !important'
	},
	'.uk-radio, .uk-checkbox': {
		display: 'inline-block',
		height: '16px',
		width: '16px',
		overflow: 'hidden',
		marginTop: '-4px',
		verticalAlign: 'middle',
		WebkitAppearance: 'none',
		MozAppearance: 'none',
		backgroundColor: 'transparent',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50% 50%',
		border: '1px solid #cccccc',
		transition: '0.2s ease-in-out',
		transitionProperty: 'background-color, border'
	},
	'.uk-radio': { borderRadius: '50%' },
	'.uk-radio:focus, .uk-checkbox:focus': {
		backgroundColor: 'rgba(0, 0, 0, 0)',
		outline: 'none',
		borderColor: '#1e87f0'
	},
	'.uk-radio:checked, .uk-checkbox:checked, .uk-checkbox:indeterminate': {
		backgroundColor: '#1e87f0',
		borderColor: 'transparent'
	},
	'.uk-radio:checked:focus, .uk-checkbox:checked:focus, .uk-checkbox:indeterminate:focus': {
		backgroundColor: '#0e6dcd'
	},
	'.uk-radio:checked': {
		backgroundImage:
			'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23fff%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E")'
	},
	'.uk-checkbox:checked': {
		backgroundImage:
			'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A")'
	},
	'.uk-checkbox:indeterminate': {
		backgroundImage:
			'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23fff%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E")'
	},
	'.uk-radio:disabled, .uk-checkbox:disabled': {
		backgroundColor: '#f8f8f8',
		borderColor: '#e5e5e5'
	},
	'.uk-radio:disabled:checked': {
		backgroundImage:
			'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23999%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E")'
	},
	'.uk-checkbox:disabled:checked': {
		backgroundImage:
			'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A")'
	},
	'.uk-checkbox:disabled:indeterminate': {
		backgroundImage:
			'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23999%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E")'
	},
	'.uk-legend': {
		width: '100%',
		color: 'inherit',
		padding: '0',
		fontSize: '1.5rem',
		lineHeight: '1.4'
	},
	'.uk-form-custom': {
		display: 'inline-block',
		position: 'relative',
		maxWidth: '100%',
		verticalAlign: 'middle'
	},
	'.uk-form-custom select, .uk-form-custom input[type="file"]': {
		position: 'absolute',
		top: '0',
		zIndex: '1',
		width: '100%',
		height: '100%',
		left: '0',
		WebkitAppearance: 'none',
		opacity: '0',
		cursor: 'pointer'
	},
	'.uk-form-custom input[type="file"]': {
		fontSize: '500px',
		overflow: 'hidden'
	},
	'.uk-form-label': { color: '#333', fontSize: '0.875rem' },
	'.uk-form-stacked .uk-form-label': { display: 'block', marginBottom: '5px' },
	'.uk-form-icon': {
		position: 'absolute',
		top: '0',
		bottom: '0',
		left: '0',
		width: '40px',
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#999'
	},
	'.uk-form-icon:hover': { color: '#666' },
	'.uk-form-icon:not(a):not(button):not(input)': { pointerEvents: 'none' },
	'.uk-form-icon:not(.uk-form-icon-flip) ~ .uk-input': {
		paddingLeft: '40px !important'
	},
	'.uk-form-icon-flip': { right: '0', left: 'auto' },
	'.uk-form-icon-flip ~ .uk-input': { paddingRight: '40px !important' },
	'.uk-toggle-switch': {
		WebkitAppearance: 'none',
		MozAppearance: 'none',
		appearance: 'none',
		position: 'relative',
		width: '3.5rem',
		height: '2rem',
		boxSizing: 'border-box',
		borderRadius: '2rem',
		backgroundColor: '#e5e5e5'
	},
	'.uk-toggle-switch::before': {
		content: '""',
		position: 'absolute',
		top: '50%',
		left: '0',
		transform: 'translate(0, -50%)',
		boxSizing: 'border-box',
		width: '1.75rem',
		height: '1.75rem',
		borderRadius: '50%',
		backgroundColor: '#fff',
		transitionProperty: 'left, background-color',
		transitionDuration: '.3s',
		transitionTimingFunction: 'ease-in-out',
		marginLeft: '0.125rem'
	},
	'.uk-toggle-switch:checked::before': {
		left: '1.5rem'
	},
	'.uk-toggle-switch:disabled': { opacity: '0.5' },
	'.uk-toggle-switch-primary:checked': {
		backgroundColor: '#1e87f0'
	},
	'.uk-toggle-switch-secondary:checked': {
		backgroundColor: '#222222'
	},
	'.uk-toggle-switch-danger:checked': {
		backgroundColor: '#f0506e'
	}
};

export const media: CSSRuleObject = {
	'@media (max-width: 768px)': {
		'.uk-form-horizontal .uk-form-label': {
			display: 'block',
			marginBottom: '5px'
		}
	},
	'@media (min-width: 768px)': {
		'.uk-form-horizontal .uk-form-label': {
			width: '200px',
			marginTop: '7px',
			cssFloat: 'left'
		},
		'.uk-form-horizontal .uk-form-controls': { marginLeft: '215px' },
		'.uk-form-horizontal .uk-form-controls-text': { paddingTop: '7px' }
	}
};

export interface FormHooks {
	'hook-form': CSSRuleObject;
	'hook-single-line': CSSRuleObject;
	'hook-multi-line': CSSRuleObject;
	'hook-focus': CSSRuleObject;
	'hook-disabled': CSSRuleObject;
	'hook-placeholder': CSSRuleObject;
	'hook-danger': CSSRuleObject;
	'hook-danger-focus': CSSRuleObject;
	'hook-success': CSSRuleObject;
	'hook-success-focus': CSSRuleObject;
	'hook-blank': CSSRuleObject;
	'hook-blank-focus': CSSRuleObject;
	'hook-radio': CSSRuleObject;
	'hook-radio-focus': CSSRuleObject;
	'hook-radio-checked': CSSRuleObject;
	'hook-radio-checked-focus': CSSRuleObject;
	'hook-radio-disabled': CSSRuleObject;
	'hook-legend': CSSRuleObject;
	'hook-label': CSSRuleObject;
	'hook-stacked-label': CSSRuleObject;
	'hook-horizontal-label': CSSRuleObject;
	'hook-icon': CSSRuleObject;
	'hook-icon-hover': CSSRuleObject;
	'hook-toggle-switch': CSSRuleObject;
	'hook-toggle-switch-before': CSSRuleObject;
	'hook-toggle-switch-checked-before': CSSRuleObject;
	'hook-toggle-switch-disabled': CSSRuleObject;
	'hook-toggle-switch-primary': CSSRuleObject;
	'hook-toggle-switch-secondary': CSSRuleObject;
	'hook-toggle-switch-danger': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<FormHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: FormHooks = {
		'hook-form': {},
		'hook-single-line': {},
		'hook-multi-line': {},
		'hook-focus': {},
		'hook-disabled': {},
		'hook-placeholder': {},
		'hook-danger': {},
		'hook-danger-focus': {},
		'hook-success': {},
		'hook-success-focus': {},
		'hook-blank': {},
		'hook-blank-focus': {},
		'hook-radio': {},
		'hook-radio-focus': {},
		'hook-radio-checked': {},
		'hook-radio-checked-focus': {},
		'hook-radio-disabled': {},
		'hook-legend': {},
		'hook-label': {},
		'hook-stacked-label': {},
		'hook-horizontal-label': {},
		'hook-icon': {},
		'hook-icon-hover': {},
		'hook-toggle-switch': {},
		'hook-toggle-switch-before': {},
		'hook-toggle-switch-checked-before': {},
		'hook-toggle-switch-disabled': {},
		'hook-toggle-switch-primary': {},
		'hook-toggle-switch-secondary': {},
		'hook-toggle-switch-danger': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-input, .uk-select, .uk-textarea': {
			..._hooks['hook-form']
		},
		'.uk-input, .uk-select:not([multiple]):not([size])': {
			..._hooks['hook-single-line']
		},
		'.uk-select[multiple], .uk-select[size], .uk-textarea': {
			..._hooks['hook-multi-line']
		},
		'.uk-input:focus, .uk-select:focus, .uk-textarea:focus': {
			..._hooks['hook-focus']
		},
		'.uk-input:disabled, .uk-select:disabled, .uk-textarea:disabled': {
			..._hooks['hook-disabled']
		},
		'.uk-input::placeholder': {
			..._hooks['hook-placeholder']
		},
		'.uk-textarea::placeholder': {
			..._hooks['hook-placeholder']
		},
		'.uk-form-danger, .uk-form-danger:focus': {
			..._hooks['hook-danger']
		},
		'.uk-form-danger:focus': {
			..._hooks['hook-danger-focus']
		},
		'.uk-form-success, .uk-form-success:focus': {
			..._hooks['hook-success']
		},
		'.uk-form-success:focus': {
			..._hooks['hook-success-focus']
		},
		'.uk-form-blank': {
			..._hooks['hook-blank']
		},
		'.uk-form-blank:focus': {
			..._hooks['hook-blank-focus']
		},
		'.uk-radio, .uk-checkbox': {
			..._hooks['hook-radio']
		},
		'.uk-radio:focus, .uk-checkbox:focus': {
			..._hooks['hook-radio-focus']
		},
		'.uk-radio:checked, .uk-checkbox:checked, .uk-checkbox:indeterminate': {
			..._hooks['hook-radio-checked']
		},
		'.uk-radio:checked:focus, .uk-checkbox:checked:focus, .uk-checkbox:indeterminate:focus': {
			..._hooks['hook-radio-checked-focus']
		},
		'.uk-radio:disabled, .uk-checkbox:disabled': {
			..._hooks['hook-radio-disabled']
		},
		'.uk-legend': {
			..._hooks['hook-legend']
		},
		'.uk-form-label': {
			..._hooks['hook-label']
		},
		'.uk-form-stacked .uk-form-label': {
			..._hooks['hook-stacked-label']
		},
		'.uk-form-horizontal .uk-form-label': {
			..._hooks['hook-horizontal-label']
		},
		'.uk-form-icon': {
			..._hooks['hook-icon']
		},
		'.uk-form-icon:hover': {
			..._hooks['hook-icon-hover']
		},
		'.uk-toggle-switch': {
			..._hooks['hook-toggle-switch']
		},
		'.uk-toggle-switch::before': {
			..._hooks['hook-toggle-switch-before']
		},
		'.uk-toggle-switch:checked::before': {
			..._hooks['hook-toggle-switch-checked-before']
		},
		'.uk-toggle-switch:disabled': {
			..._hooks['hook-toggle-switch-disabled']
		},
		'.uk-toggle-switch-primary:checked': {
			..._hooks['hook-toggle-switch-primary']
		},
		'.uk-toggle-switch-secondary:checked': {
			..._hooks['hook-toggle-switch-secondary']
		},
		'.uk-toggle-switch-danger:checked': {
			..._hooks['hook-toggle-switch-danger']
		},
		..._hooks['hook-misc']
	};
};
