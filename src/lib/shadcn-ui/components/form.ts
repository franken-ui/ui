export default {
	'.uk-input, .uk-select, .uk-textarea, .uk-radio, .uk-checkbox': {
		boxSizing: 'border-box',
		margin: '0',
		borderRadius: '0',
		font: 'inherit'
	},
	'.uk-input': {
		overflow: 'visible'
	},
	'.uk-select': {
		textTransform: 'none'
	},
	'.uk-select optgroup': {
		font: 'inherit',
		fontWeight: 'bold'
	},
	'.uk-textarea': {
		overflow: 'auto'
	},
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
	'.uk-fieldset': {
		border: 'none',
		margin: '0',
		padding: '0',
		minWidth: '0'
	},
	'.uk-input, .uk-textarea': {
		WebkitAppearance: 'none'
	},
	'.uk-input, .uk-select, .uk-textarea': {
		maxWidth: '100%',
		width: '100%',
		'@apply rounded-md border border-input bg-transparent px-3 py-1 text-sm text-foreground shadow-sm':
			{}
	},
	'.uk-input, .uk-select:not([multiple]):not([size])': {
		verticalAlign: 'middle',
		display: 'inline-block',
		'@apply h-9': {}
	},
	'.uk-input:not(input), .uk-select:not(select)': {
		lineHeight: '38px'
	},
	'.uk-select[multiple], .uk-select[size], .uk-textarea': {
		paddingTop: '6px',
		paddingBottom: '6px',
		verticalAlign: 'top',
		'@apply min-h-[60px] py-2': {}
	},
	'.uk-select[multiple], .uk-select[size]': {
		resize: 'vertical'
	},
	'.uk-input:focus, .uk-select:focus, .uk-textarea:focus': {
		outline: 'none',
		'@apply outline-none ring-1 ring-ring': {}
	},
	'.uk-input:disabled, .uk-select:disabled, .uk-textarea:disabled': {
		'@apply opacity-50': {}
	},
	'.uk-input::placeholder': {
		'@apply text-muted-foreground': {}
	},
	'.uk-textarea::placeholder': {
		'@apply text-muted-foreground': {}
	},
	'.uk-form-small': {
		'@apply text-xs': {}
	},
	'.uk-form-small:not(textarea):not([multiple]):not([size])': {
		'@apply h-8 px-3 py-0': {}
	},
	'.uk-form-danger, .uk-form-danger:focus': {
		'@apply ring-destructive': {}
	},
	'.uk-form-blank': {
		background: 'none',
		borderColor: 'transparent',
		'@apply shadow-none': {}
	},
	'.uk-form-blank:focus': {
		'@apply ring-0': {}
	},
	'.uk-select:not([multiple]):not([size])': {
		WebkitAppearance: 'none',
		MozAppearance: 'none',
		paddingRight: '20px',
		backgroundImage: 'var(--uk-form-list-image)',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '100% 50%'
	},
	'.uk-select:not([multiple]):not([size]) option': {
		color: '#18181b'
	},
	// '.uk-select:not([multiple]):not([size]):disabled': {
	// 	backgroundImage: 'var(--uk-form-list-image)',
	// },
	'.uk-input[list]': {
		paddingRight: '20px',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '100% 50%'
	},
	'.uk-input[list]:hover, .uk-input[list]:focus': {
		backgroundImage: 'var(--uk-form-list-image)'
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
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50% 50%',
		'@apply rounded-sm border border-primary shadow': {}
	},
	'.uk-radio': {
		borderRadius: '50%'
	},
	'.uk-radio:focus, .uk-checkbox:focus': {
		outline: 'none',
		'@apply outline-none ring-1 ring-ring': {}
	},
	'.uk-radio:checked:focus, .uk-checkbox:checked:focus, .uk-checkbox:indeterminate:focus': {
		'@apply outline-none ring-1 ring-ring': {}
	},
	'.uk-radio:checked': {
		backgroundImage: 'var(--uk-form-radio-image)'
	},
	'.uk-checkbox:checked': {
		backgroundImage: 'var(--uk-form-checkbox-image)'
	},
	'.uk-checkbox:indeterminate': {
		backgroundImage: 'var(--uk-form-checkbox-image-indeterminate)'
	},
	// '.uk-radio:disabled:checked': {
	// 	backgroundImage: 'var(--uk-form-checkbox-image)'
	// },
	// '.uk-checkbox:disabled:checked': {
	// 	backgroundImage: 'var(--uk-form-checkbox-image)'
	// },
	// '.uk-checkbox:disabled:indeterminate': {
	// 	backgroundImage: 'var(--uk-form-checkbox-image-indeterminate)'
	// },
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
	'.uk-form-label': {
		fontSize: '0.875rem',
		'@apply text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70':
			{}
	},
	'.uk-form-stacked .uk-form-label': {
		display: 'block',
		marginBottom: '5px'
	},
	'.uk-form-icon': {
		position: 'absolute',
		top: '0',
		bottom: '0',
		left: '0',
		width: '40px',
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	'.uk-form-icon:not(a):not(button):not(input)': {
		pointerEvents: 'none'
	},
	'.uk-form-icon:not(.uk-form-icon-flip) ~ .uk-input': {
		paddingLeft: '40px !important'
	},
	'.uk-form-icon-flip': {
		right: '0',
		left: 'auto'
	},
	'.uk-form-icon-flip ~ .uk-input': {
		paddingRight: '40px !important'
	},
	'.uk-toggle-switch': {
		WebkitAppearance: 'none',
		MozAppearance: 'none',
		appearance: 'none',
		position: 'relative',
		boxSizing: 'border-box',
		borderRadius: '2rem',
		'@apply h-5 w-9 bg-input shadow-sm': {}
	},
	'.uk-toggle-switch::before': {
		content: '""',
		position: 'absolute',
		top: '50%',
		left: '0',
		transform: 'translate(0, -50%)',
		boxSizing: 'border-box',
		borderRadius: '50%',
		transitionProperty: 'left',
		transitionDuration: '.3s',
		transitionTimingFunction: 'ease-in-out',
		marginLeft: '0.125rem',
		'@apply h-4 w-4 bg-background': {}
	},
	'.uk-toggle-switch:checked::before': {
		'@apply left-4': {}
	},
	'.uk-toggle-switch:disabled': {
		opacity: '0.5'
	},
	'.uk-toggle-switch-primary:checked': {
		'@apply bg-primary': {}
	},
	'.uk-toggle-switch-danger:checked': {
		'@apply bg-destructive': {}
	},
	'.uk-form-help': {
		fontSize: '0.8rem',
		'@apply font-medium': {}
	},
	"[class*='uk-inline']": {
		display: 'inline-block',
		position: 'relative',
		maxWidth: '100%',
		verticalAlign: 'middle',
		WebkitBackfaceVisibility: 'hidden'
	}
};
