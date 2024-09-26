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
		borderRadius: 'var(--uk-border-radius)',
		boxShadow: 'var(--uk-box-shadow-s)',
		'@apply border border-input bg-transparent px-3 py-1.5 text-foreground': {}
	},
	'.uk-input, .uk-select:not([multiple]):not([size])': {
		verticalAlign: 'middle',
		display: 'inline-block',
		'@apply h-10': {}
	},
	'.uk-select[multiple], .uk-select[size], .uk-textarea': {
		verticalAlign: 'top',
		minHeight: '4rem',
		'@apply py-2.5': {}
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
		backgroundImage: 'var(--uk-form-list-image)',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'right center',
		'@apply pr-6': {}
	},
	'.uk-select:not([multiple]):not([size]) option': {
		color: '#18181b'
	},
	'.uk-input[list]': {
		paddingRight: '1.25rem',
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
		height: '1rem',
		width: '1rem',
		overflow: 'hidden',
		marginTop: '-4px',
		verticalAlign: 'middle',
		WebkitAppearance: 'none',
		MozAppearance: 'none',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50% 50%',
		borderRadius: 'var(--uk-border-radius-s)',
		boxShadow: 'var(--uk-box-shadow)',
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
		boxShadow: 'var(--uk-box-shadow-s)',
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
	},
	'.uk-input.uk-form-xs, .uk-input-fake.uk-form-xs, .uk-select:not([multiple]):not([size]).uk-form-xs':
		{
			'@apply h-7 px-2 py-1 text-xs': {}
		},
	'.uk-input[list].uk-form-xs, .uk-select:not([multiple]):not([size]).uk-form-xs': {
		backgroundPosition: 'right center',
		'@apply pr-4': {}
	},
	'.uk-input.uk-form-sm, .uk-input-fake.uk-form-sm, .uk-select:not([multiple]):not([size]).uk-form-sm':
		{
			'@apply h-8 px-2 py-1 text-sm': {}
		},
	'.uk-input[list].uk-form-sm, .uk-select:not([multiple]):not([size]).uk-form-sm': {
		backgroundPosition: 'right center',
		'@apply pr-4': {}
	},
	'.uk-input.uk-form-lg, .uk-input-fake.uk-form-lg, .uk-select:not([multiple]):not([size]).uk-form-lg':
		{
			'@apply h-12 px-4 py-2': {}
		},
	'.uk-input[list].uk-form-lg, .uk-select:not([multiple]):not([size]).uk-form-lg': {
		backgroundPosition: 'right 4px center',
		'@apply pr-8': {}
	},
	'.uk-input.uk-form-xl, .uk-input-fake.uk-form-xl, .uk-select:not([multiple]):not([size]).uk-form-xl':
		{
			'@apply h-14 px-4 py-2': {}
		},
	'.uk-input[list].uk-form-xl, .uk-select:not([multiple]):not([size]).uk-form-xl': {
		backgroundPosition: 'right 8px center',
		'@apply pr-8': {}
	},
	'.uk-input-pin': {
		'@apply inline-flex items-center': {}
	},
	'.uk-input-pin input': {
		'@apply relative -mr-[1px] flex h-10 w-10 border border-input bg-transparent text-center text-sm placeholder-muted-foreground focus:z-10 focus:outline-none focus:ring-1 focus:ring-ring':
			{}
	},
	'.uk-input-pin.uk-form-danger input': {
		'@apply ring-destructive': {}
	},
	'.uk-input-pin input:focus': {
		'@apply placeholder:text-background': {}
	},
	'.uk-input-pin.uk-disabled input, .uk-input-pin input:disabled': {
		'@apply opacity-50': {}
	},
	'.uk-input-pin input:first-child': {
		borderTopLeftRadius: 'var(--uk-border-radius)',
		borderBottomLeftRadius: 'var(--uk-border-radius)',
		'@apply ml-[1px]': {}
	},
	'.uk-input-pin input:last-child': {
		borderTopRightRadius: 'var(--uk-border-radius)',
		borderBottomRightRadius: 'var(--uk-border-radius)'
	},
	'.uk-input-pin.uk-input-pin-separated': {
		'@apply gap-2 shadow-none': {}
	},
	'.uk-input-pin.uk-input-pin-separated input': {
		borderRadius: 'var(--uk-border-radius)',
		boxShadow: 'var(--uk-box-shadow-s)',

		'@apply -mr-0': {}
	},
	'.uk-input-pin.uk-input-pin-separated input:first-child': {
		'@apply ml-0': {}
	},
	'.uk-input-pin.uk-form-xs input': {
		'@apply h-7 w-7 text-xs': {}
	},
	'.uk-input-pin.uk-form-sm input': {
		'@apply h-8 w-8 text-sm': {}
	},
	'.uk-input-pin.uk-form-lg input': {
		'@apply h-12 w-12': {}
	},
	'.uk-input-pin.uk-form-xl input': {
		'@apply h-14 w-14': {}
	},
	'.uk-input-tag': {
		borderRadius: 'var(--uk-border-radius)',
		'@apply border-input bg-background has-[input:focus]:ring-ring flex min-h-10 flex-wrap items-center gap-1 border p-2 has-[input:focus]:ring-1':
			{}
	},
	'.uk-input-tag.uk-disabled': {
		'@apply opacity-50': {}
	},
	'.uk-input-tag input': {
		'@apply placeholder-muted-foreground text-foreground min-h-7 flex-1 bg-transparent px-1 focus:outline-none':
			{}
	},
	'.uk-input-tag.uk-form-danger': {
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
		borderRadius: 'var(--uk-border-radius)',
		boxShadow: 'var(--uk-box-shadow-s)',
		'@apply flex h-10 items-center border border-input bg-transparent px-3 py-1.5 text-foreground':
			{}
	},
	'.uk-input-fake-focus, .uk-input-fake:focus': {
		'@apply ring-ring outline-none ring-1': {}
	},
	'.uk-input-fake-focus.uk-form-danger, .uk-input-fake.uk-form-danger:focus': {
		'@apply ring-destructive': {}
	},
	'.uk-input-fake-disabled, .uk-input-fake:disabled': {
		'@apply opacity-50': {}
	}
};
