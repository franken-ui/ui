export default {
	'.uk-input': {
		overflow: 'var(--uk-form-input-overflow, visible)'
	},
	'.uk-select': {
		textTransform: 'var(--uk-form-select-text-transform, none)'
	},
	'.uk-select optgroup': {
		font: 'var(--uk-form-select-optgroup-font, inherit)',
		fontWeight: 'var(--uk-form-select-optgroup-font-weight, bold)'
	},
	'.uk-textarea': {
		overflow: 'var(--uk-form-textarea-overflow, auto)'
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
		cursor: 'var(--uk-form-radio-cursor, pointer)'
	},
	'.uk-fieldset': {
		minWidth: 'var(--uk-form-fieldset-min-width, 0)' // Keep for flexibility
	},
	'.uk-input, .uk-textarea': {
		WebkitAppearance: 'none'
	},
	'.uk-input, .uk-select, .uk-textarea, .uk-input-fake': {
		maxWidth: 'var(--uk-form-input-max-width, 100%)',
		width: 'var(--uk-form-input-width, 100%)',
		borderRadius: 'var(--uk-form-input-radius)',
		boxShadow: 'var(--uk-form-input-shadow)',
		padding: 'var(--uk-form-input-padding)',
		fontSize: 'var(--uk-form-input-font-size)',
		lineHeight: 'var(--uk-form-input-leading)',
		borderWidth: 'var(--uk-form-input-border-width, 1px)',
		borderStyle: 'var(--uk-form-input-border-style, solid)',
		borderColor: 'var(--uk-form-input-border-color, hsl(var(--input)))',
		backgroundColor: 'var(--uk-form-input-bg, transparent)',
		color: 'var(--uk-form-input-color, hsl(var(--foreground)))'
	},
	'.uk-input, .uk-select:not([multiple]):not([size])': {
		verticalAlign: 'var(--uk-form-input-select-vertical-align, middle)',
		display: 'var(--uk-form-input-select-display, inline-block)',
		height: 'var(--uk-form-input-height)'
	},
	'.uk-select[multiple], .uk-select[size], .uk-textarea': {
		verticalAlign: 'var(--uk-form-textarea-select-multi-vertical-align, top)',
		minHeight: 'var(--uk-form-textarea-select-multi-min-height, 4rem)',
		paddingTop: 'var(--uk-form-textarea-select-multi-padding-y, 0.625rem)', //py-2.5 conversion
		paddingBottom: 'var(--uk-form-textarea-select-multi-padding-y, 0.625rem)' //py-2.5 conversion
	},
	'.uk-select[multiple], .uk-select[size]': {
		resize: 'var(--uk-form-select-multi-resize, vertical)'
	},
	'.uk-input:focus, .uk-select:focus, .uk-textarea:focus, .uk-input-fake:focus': {
		outlineWidth: 'var(--uk-form-focus-outline-width, 0)',
		outlineStyle: 'var(--uk-form-focus-outline-style, none)',
		outlineOffset: 'var(--uk-form-focus-outline-offset, 0px)',
		boxShadow:
			'var(--uk-form-focus-shadow, 0 0 0 0 transparent, 0 0 0 1px hsl(var(--ring)), 0 0 #0000)',
		transitionProperty: 'var(--uk-form-focus-transition-property, box-shadow)',
		transitionDuration: 'var(--uk-form-focus-transition-duration, 150ms)',
		transitionTimingFunction: 'var(--uk-form-focus-transition-timing, ease-in-out)'
	},
	'.uk-input:disabled, .uk-select:disabled, .uk-textarea:disabled, .uk-input-fake:disabled': {
		opacity: 'var(--uk-form-disabled-opacity, 0.5)'
	},
	'.uk-input::placeholder': {
		color: 'var(--uk-form-placeholder-color, hsl(var(--muted-foreground)))'
	},
	'.uk-textarea::placeholder': {
		color: 'var(--uk-form-placeholder-color, hsl(var(--muted-foreground)))'
	},
	'.uk-form-destructive:focus': {
		boxShadow:
			'var(--uk-form-destructive-shadow, 0 0 0 0 transparent, 0 0 0 1px hsl(var(--destructive)), 0 0 #0000)', //ring-destructive conversion
		transition: 'box-shadow 150ms' //Added transition
	},
	'.uk-form-blank': {
		background: 'var(--uk-form-blank-bg, none)',
		borderColor: 'var(--uk-form-blank-border-color, transparent)',
		boxShadow: 'var(--uk-form-blank-shadow, none)' //shadow-none conversion
	},
	'.uk-form-blank:focus': {
		boxShadow:
			'var(--uk-form-blank-focus-shadow, 0 0 0 0 transparent, 0 0 0 0 transparent, 0 0 #0000)' //ring-0 conversion
	},
	'.uk-select:not([multiple]):not([size])': {
		WebkitAppearance: 'none',
		MozAppearance: 'none',
		backgroundImage: 'var(--uk-form-list-image)',
		backgroundRepeat: 'var(--uk-form-select-single-bg-repeat, no-repeat)',
		backgroundPosition: 'var(--uk-form-list-image-position)',
		paddingRight: 'var(--uk-form-select-single-padding-right, 1.5rem)' //pr-6 conversion
	},
	'.uk-select:not([multiple]):not([size]) option': {
		color: 'var(--uk-form-select-single-option-color, #18181b)'
	},
	'.uk-input[list]': {
		paddingRight: 'var(--uk-form-input-list-padding-right, 1.25rem)',
		backgroundRepeat: 'var(--uk-form-input-list-bg-repeat, no-repeat)',
		backgroundPosition: 'var(--uk-form-list-image-position)'
	},
	'.uk-input[list]:hover, .uk-input[list]:focus': {
		backgroundImage: 'var(--uk-form-list-image)'
	},
	'.uk-input[list]::-webkit-calendar-picker-indicator': {
		display: 'var(--uk-form-input-list-webkit-calendar-display, none !important)'
	},
	'.uk-radio, .uk-checkbox': {
		display: 'var(--uk-form-radio-display, inline-block)',
		height: 'var(--uk-form-radio-height, 1rem)',
		width: 'var(--uk-form-radio-width, 1rem)',
		overflow: 'var(--uk-form-radio-overflow, hidden)',
		marginTop: 'var(--uk-form-radio-margin-top, -4px)',
		verticalAlign: 'var(--uk-form-radio-vertical-align, middle)',
		WebkitAppearance: 'none',
		MozAppearance: 'none',
		backgroundRepeat: 'var(--uk-form-radio-bg-repeat, no-repeat)',
		backgroundPosition: 'var(--uk-form-radio-bg-position, 50% 50%)',
		borderRadius: 'var(--uk-form-radio-radius)',
		boxShadow: 'var(--uk-form-radio-shadow)',
		border: 'var(--uk-form-radio-border, 1px solid hsl(var(--primary)))'
	},
	'.uk-radio': {
		borderRadius: 'var(--uk-form-radio-radio-radius, 50%)'
	},
	'.uk-radio:focus, .uk-checkbox:focus': {
		outline: 'var(--uk-form-radio-focus-outline, none)',
		outlineOffset: 'var(--uk-form-radio-focus-outline-offset, 0px)',
		boxShadow:
			'var(--uk-form-radio-focus-shadow, 0 0 0 0 transparent, 0 0 0 1px hsl(var(--ring)), 0 0 #0000)', //ring-1 ring-ring conversion
		transition: 'box-shadow 150ms' //Added transition
	},
	'.uk-radio:checked:focus, .uk-checkbox:checked:focus, .uk-checkbox:indeterminate:focus': {
		boxShadow:
			'var(--uk-form-radio-checked-focus-shadow, 0 0 0 0 transparent, 0 0 0 1px hsl(var(--ring)), 0 0 #0000)', //ring-1 ring-ring conversion
		transition: 'box-shadow 150ms' //Added transition
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
		fontSize: 'var(--uk-form-label-font-size, 0.875rem)', //text-sm conversion
		fontWeight: 'var(--uk-form-label-font-weight, 500)', //font-medium conversion
		lineHeight: 'var(--uk-form-label-line-height, 1)' //leading-none conversion
	},
	'.uk-form-label-required::after': {
		content: '" *"',
		color: 'var(--uk-form-label-required-color, hsl(var(--destructive)))' //text-destructive conversion
	},
	'.uk-form-stacked .uk-form-label': {
		display: 'var(--uk-form-stacked-label-display, block)',
		marginBottom: 'var(--uk-form-stacked-label-margin-bottom, 5px)'
	},
	'.uk-form-icon': {
		position: 'var(--uk-form-icon-position, absolute)',
		top: 'var(--uk-form-icon-top, 0)',
		bottom: 'var(--uk-form-icon-bottom, 0)',
		left: 'var(--uk-form-icon-left, 0)',
		width: 'var(--uk-form-icon-width, 2.5rem)',
		display: 'var(--uk-form-icon-display, inline-flex)',
		justifyContent: 'var(--uk-form-icon-justify-content, center)',
		alignItems: 'var(--uk-form-icon-align-items, center)'
	},
	'.uk-form-icon:not(a):not(button):not(input)': {
		pointerEvents: 'var(--uk-form-icon-pointer-events, none)'
	},
	'.uk-form-icon:not(.uk-form-icon-flip) ~ .uk-input': {
		'--uk-form-input-padding': '0.375rem 0.75rem 0.375rem 2.5rem'
	},
	'.uk-form-icon-flip': {
		right: 'var(--uk-form-icon-flip-right, 0)',
		left: 'var(--uk-form-icon-flip-left, auto)'
	},
	'.uk-form-icon-flip ~ .uk-input': {
		'--uk-form-input-padding': '0.375rem 2.5rem 0.375rem 0.75rem'
	},
	'.uk-toggle-switch': {
		WebkitAppearance: 'none',
		MozAppearance: 'none',
		appearance: 'var(--uk-toggle-switch-appearance, none)',
		position: 'var(--uk-toggle-switch-position, relative)',
		boxSizing: 'var(--uk-toggle-switch-box-sizing, border-box)',
		borderRadius: 'var(--uk-toggle-switch-radius, 2rem)',
		boxShadow: 'var(--uk-form-toggle-switch-shadow)',
		height: 'var(--uk-toggle-switch-height, 1.25rem)', //h-5 conversion
		width: 'var(--uk-toggle-switch-width, 2.25rem)', //w-9 conversion
		backgroundColor: 'var(--uk-toggle-switch-bg, hsl(var(--input)))', //bg-input conversion
		'&:focus-visible': {
			outline: 'var(--uk-toggle-switch-focus-outline, dotted hsl(var(--ring)))' //focus-visible:outline-dotted focus-visible:outline-ring conversion
		}
	},
	'.uk-toggle-switch::before': {
		content: 'var(--uk-toggle-switch-before-content, "")',
		position: 'var(--uk-toggle-switch-before-position, absolute)',
		top: 'var(--uk-toggle-switch-before-top, 50%)',
		left: 'var(--uk-toggle-switch-before-left, 0)',
		transform: 'var(--uk-toggle-switch-before-transform, translate(0, -50%))',
		boxSizing: 'var(--uk-toggle-switch-before-box-sizing, border-box)',
		borderRadius: 'var(--uk-toggle-switch-before-radius, 50%)',
		transitionProperty: 'var(--uk-toggle-switch-before-transition-property, left)',
		transitionDuration: 'var(--uk-toggle-switch-before-transition-duration, .3s)',
		transitionTimingFunction:
			'var(--uk-toggle-switch-before-transition-timing-function, ease-in-out)',
		marginLeft: 'var(--uk-toggle-switch-before-margin-left, 0.125rem)',
		height: 'var(--uk-toggle-switch-before-height, 1rem)', //h-4 conversion
		width: 'var(--uk-toggle-switch-before-width, 1rem)', //w-4 conversion
		backgroundColor: 'var(--uk-toggle-switch-before-bg, hsl(var(--background)))' //bg-background conversion
	},
	'.uk-toggle-switch:checked::before': {
		left: 'var(--uk-toggle-switch-checked-before-left, 1rem)' //left-4 conversion
	},
	'.uk-toggle-switch:disabled': {
		opacity: 'var(--uk-toggle-switch-disabled-opacity, 0.5)'
	},
	'.uk-toggle-switch-primary:checked': {
		backgroundColor: 'var(--uk-toggle-switch-primary-checked-bg, hsl(var(--primary)))' //bg-primary conversion
	},
	'.uk-toggle-switch-destructive:checked': {
		backgroundColor: 'var(--uk-toggle-switch-destructive-checked-bg, hsl(var(--destructive)))' //bg-destructive conversion
	},
	'.uk-form-help': {
		fontSize: 'var(--uk-form-help-font-size, 0.8rem)',
		fontWeight: 'var(--uk-form-help-font-weight, 500)' //font-medium conversion
	},
	"[class*='uk-inline']": {
		display: 'inline-block',
		position: 'relative',
		maxWidth: '100%',
		verticalAlign: 'middle',
		WebkitBackfaceVisibility: 'hidden'
	},
	'.uk-input-fake': {
		height: 'var(--uk-form-input-height)',
		display: 'var(--uk-input-fake-display, flex)',
		alignItems: 'var(--uk-input-fake-align-items, center)' //flex items-center conversion
	},
	'.uk-form-custom': {
		display: 'var(--uk-form-custom-display, inline-block)',
		position: 'var(--uk-form-custom-position, relative)',
		maxWidth: 'var(--uk-form-custom-max-width, 100%)',
		verticalAlign: 'var(--uk-form-custom-vertical-align, middle)'
	},
	'.uk-form-custom select, .uk-form-custom input[type="file"]': {
		position: 'var(--uk-form-custom-select-position, absolute)',
		top: 'var(--uk-form-custom-select-top, 0)',
		zIndex: 'var(--uk-form-custom-select-z-index, 1)',
		width: 'var(--uk-form-custom-select-width, 100%)',
		height: 'var(--uk-form-custom-select-height, 100%)',
		left: 'var(--uk-form-custom-select-left, 0)',
		WebkitAppearance: 'none',
		opacity: 'var(--uk-form-custom-select-opacity, 0)',
		cursor: 'var(--uk-form-custom-select-cursor, pointer)'
	},
	'.uk-form-custom input[type="file"]': {
		fontSize: 'var(--uk-form-custom-file-font-size, 500px)',
		overflow: 'var(--uk-form-custom-file-overflow, hidden)'
	}
};
