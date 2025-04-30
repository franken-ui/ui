export default {
	'.uk-input-pin': {
		// Layout
		display: 'var(--uk-input-pin-display, inline-flex)',
		alignItems: 'var(--uk-input-pin-align, center)',

		// Visual
		borderRadius: 'var(--uk-input-pin-radius, var(--uk-form-input-radius))',
		boxShadow: 'var(--uk-input-pin-shadow, var(--uk-form-input-shadow))',
		'--focus-shadow-color': 'hsl(var(--ring))'
	},

	'.uk-input-pin input': {
		// Layout
		height: 'var(--uk-input-pin-input-height, var(--uk-form-input-height))',
		width: 'var(--uk-input-pin-input-width, var(--uk-form-input-height))',
		position: 'var(--uk-input-pin-input-position, relative)',
		margin: 'var(--uk-input-pin-input-margin, 0 -1px 0 0)',
		display: 'var(--uk-input-pin-input-display, flex)',

		// Typography
		fontSize: 'var(--uk-input-pin-input-font-size, var(--uk-form-input-font-size))',
		lineHeight: 'var(--uk-input-pin-input-leading, var(--uk-form-input-leading))',
		textAlign: 'var(--uk-input-pin-input-align, center)',

		// Visual
		backgroundColor: 'transparent',
		outline: 'none',
		borderWidth: 'var(--uk-input-pin-input-border-width, 1px)',
		borderStyle: 'var(--uk-input-pin-input-border-style, solid)',
		borderColor: 'var(--uk-input-pin-input-border-color, hsl(var(--input)))',

		'&::placeholder': {
			color: 'var(--uk-input-pin-placeholder-color, hsl(var(--muted-foreground)))'
		},

		'&:focus': {
			// Visual
			zIndex: 'var(--uk-input-pin-input-focus-z, 10)',
			outlineWidth: 'var(--uk-input-pin-input-focus-outline-width, 2px)',
			outlineStyle: 'var(--uk-input-pin-input-focus-outline-style, solid)',
			outlineColor: 'var(--uk-input-pin-input-focus-outline-color, transparent)',
			outlineOffset: 'var(--uk-input-pin-input-focus-outline-offset, 2px)',
			boxShadow:
				'var(--uk-input-pin-input-focus-shadow, 0 0 0 0 transparent, 0 0 0 1px var(--focus-shadow-color))',

			'&::placeholder': {
				color: 'var(--uk-input-pin-focus-placeholder-color, hsl(var(--background)))'
			}
		}
	},

	'.uk-input-pin.uk-form-destructive': {
		'--focus-shadow-color': 'hsl(var(--destructive))'
	},

	'.uk-input-pin.uk-disabled input, .uk-input-pin input:disabled': {
		opacity: 'var(--uk-input-pin-disabled-opacity, 0.5)'
	},

	'.uk-input-pin input:first-child': {
		borderRadius:
			'var(--uk-input-pin-first-radius, var(--uk-form-input-radius) 0 0 var(--uk-form-input-radius))'
		// @note: removed ml-[1px] as it's commented out in original
	},

	'.uk-input-pin input:last-child': {
		borderRadius:
			'var(--uk-input-pin-last-radius, 0 var(--uk-form-input-radius) var(--uk-form-input-radius) 0)'
	},

	'.uk-input-pin.uk-input-pin-separated': {
		gap: 'var(--uk-input-pin-separated-gap, 0.5rem)',
		boxShadow: 'none'
	},

	'.uk-input-pin.uk-input-pin-separated input': {
		margin: 'var(--uk-input-pin-separated-input-margin, 0)',
		borderRadius: 'var(--uk-input-pin-separated-input-radius, var(--uk-form-input-radius))',
		boxShadow: 'var(--uk-input-pin-separated-input-shadow, var(--uk-form-input-shadow))'
	}
	// @note: removed commented out code for separated input first-child
};
