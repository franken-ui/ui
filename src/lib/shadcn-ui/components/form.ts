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
	'.uk-input, .uk-select, .uk-textarea, .uk-input-fake': {
		maxWidth: '100%',
		width: '100%',
		borderRadius: 'var(--uk-form-input-radius)',
		boxShadow: 'var(--uk-form-input-shadow)',
		padding: 'var(--uk-form-input-padding)',
		fontSize: 'var(--uk-form-input-font-size)',
		lineHeight: 'var(--uk-form-input-line-height)',
		'@apply border border-input bg-transparent text-foreground': {}
	},
	'.uk-input, .uk-select:not([multiple]):not([size])': {
		verticalAlign: 'middle',
		display: 'inline-block',
		height: 'var(--uk-form-input-height)'
	},
	'.uk-select[multiple], .uk-select[size], .uk-textarea': {
		verticalAlign: 'top',
		minHeight: '4rem',
		'@apply py-2.5': {}
	},
	'.uk-select[multiple], .uk-select[size]': {
		resize: 'vertical'
	},
	'.uk-input:focus, .uk-select:focus, .uk-textarea:focus, .uk-input-fake:focus': {
		outline: 'none',
		'@apply outline-none ring-1 ring-ring': {}
	},
	'.uk-input:disabled, .uk-select:disabled, .uk-textarea:disabled, .uk-input-fake:disabled': {
		'@apply opacity-50': {}
	},
	'.uk-input::placeholder': {
		'@apply text-muted-foreground': {}
	},
	'.uk-textarea::placeholder': {
		'@apply text-muted-foreground': {}
	},
	'.uk-form-destructive, .uk-form-destructive:focus': {
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
		backgroundImage: 'var(--uk-form-list-image)',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'var(--uk-form-list-image-position)',
		'@apply pr-6': {}
	},
	'.uk-select:not([multiple]):not([size]) option': {
		color: '#18181b'
	},
	'.uk-input[list]': {
		paddingRight: '1.25rem',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'var(--uk-form-list-image-position)'
	},
	'.uk-input[list]:hover, .uk-input[list]:focus': {
		backgroundImage: 'var(--uk-form-list-image)'
	},
	'.uk-input[list]::-webkit-calendar-picker-indicator': {
		display: 'none !important'
	},
	'.uk-radio, .uk-checkbox': {
		display: 'inline-block',
		height: '1rem',
		width: '1rem',
		overflow: 'hidden',
		marginTop: '-4px',
		verticalAlign: 'middle',
		WebkitAppearance: 'none',
		MozAppearance: 'none',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50% 50%',
		borderRadius: 'var(--uk-form-radio-radius)',
		boxShadow: 'var(--uk-form-radio-shadow)',
		'@apply border border-primary': {}
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
	'.uk-form-label': {
		'@apply text-sm font-medium leading-none': {}
	},
	'.uk-form-label-required::after': {
		content: '" *"',
		'@apply text-destructive': {}
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
		width: '2.5rem',
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	'.uk-form-icon:not(a):not(button):not(input)': {
		pointerEvents: 'none'
	},
	'.uk-form-icon:not(.uk-form-icon-flip) ~ .uk-input': {
		paddingLeft: '2.5rem !important'
	},
	'.uk-form-icon-flip': {
		right: '0',
		left: 'auto'
	},
	'.uk-form-icon-flip ~ .uk-input': {
		paddingRight: '2.5rem !important'
	},
	'.uk-toggle-switch': {
		WebkitAppearance: 'none',
		MozAppearance: 'none',
		appearance: 'none',
		position: 'relative',
		boxSizing: 'border-box',
		borderRadius: '2rem',
		boxShadow: 'var(--uk-form-tswitch-shadow)',
		'@apply h-5 w-9 bg-input focus-visible:outline-dotted focus-visible:outline-ring': {}
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
	'.uk-toggle-switch-destructive:checked': {
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
	},
	'.uk-input-pin': {
		borderRadius: 'var(--uk-form-input-radius)',
		boxShadow: 'var(--uk-form-input-shadow)',
		'@apply inline-flex items-center': {}
	},
	'.uk-input-pin input': {
		height: 'var(--uk-form-input-height)',
		width: 'var(--uk-form-input-height)',
		fontSize: 'var(--uk-form-input-font-size)',
		lineHeight: 'var(--uk-form-input-line-height)',
		'@apply relative -mr-[1px] flex border border-input bg-transparent text-center placeholder-muted-foreground focus:z-10 focus:outline-none focus:ring-1 focus:ring-ring':
			{}
	},
	'.uk-input-pin.uk-form-destructive input': {
		'@apply ring-destructive': {}
	},
	'.uk-input-pin input:focus': {
		'@apply placeholder:text-background': {}
	},
	'.uk-input-pin.uk-disabled input, .uk-input-pin input:disabled': {
		'@apply opacity-50': {}
	},
	'.uk-input-pin input:first-child': {
		borderTopLeftRadius: 'var(--uk-form-input-radius)',
		borderBottomLeftRadius: 'var(--uk-form-input-radius)'
		// '@apply ml-[1px]': {}
	},
	'.uk-input-pin input:last-child': {
		borderTopRightRadius: 'var(--uk-form-input-radius)',
		borderBottomRightRadius: 'var(--uk-form-input-radius)'
	},
	'.uk-input-pin.uk-input-pin-separated': {
		'@apply gap-2 shadow-none': {}
	},
	'.uk-input-pin.uk-input-pin-separated input': {
		borderRadius: 'var(--uk-form-input-radius)',
		boxShadow: 'var(--uk-form-input-shadow)',

		'@apply -mr-0': {}
	},
	// '.uk-input-pin.uk-input-pin-separated input:first-child': {
	// 	'@apply ml-0': {}
	// },
	'.uk-input-tag': {
		boxShadow: 'var(--uk-form-input-shadow)',
		borderRadius: 'var(--uk-form-input-radius)',
		'@apply border-input bg-transparent has-[input:focus]:ring-ring flex min-h-10 flex-wrap items-center gap-1 border p-2 has-[input:focus]:ring-1':
			{}
	},
	'.uk-input-tag.uk-disabled': {
		'@apply opacity-50': {}
	},
	'.uk-input-tag input': {
		'@apply placeholder-muted-foreground text-foreground min-h-7 flex-1 bg-transparent px-1 focus:outline-none':
			{}
	},
	'.uk-input-tag.uk-form-destructive': {
		'@apply has-[input:focus]:ring-destructive': {}
	},
	'.uk-cs-search': { '@apply flex items-center px-3': {} },
	'.uk-cs-search svg': { '@apply mr-2 opacity-50': {} },
	'.uk-cs-search input': {
		'@apply placeholder-muted-foreground w-full bg-transparent py-3 focus:outline-none': {}
	},
	'.uk-cs-options': { '@apply max-h-40': {} },
	'.uk-cs-item-wrapper': { '@apply flex flex-1 items-center': {} },
	'.uk-cs-item-icon': { '@apply mr-2 flex-none': {} },
	'.uk-cs-item-text': { '@apply flex-1': {} },
	'.uk-cs-check': { '@apply ml-2 flex-none': {} },
	'.uk-input-fake': {
		height: 'var(--uk-form-input-height)',
		'@apply flex items-center': {}
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
	}
};
