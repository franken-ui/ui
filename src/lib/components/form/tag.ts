export default {
	'.uk-input-tag': {
		// Reset
		backgroundColor: 'transparent',

		// Layout
		display: 'var(--uk-input-tag-display, flex)',
		minHeight: 'var(--uk-input-tag-min-height, 2.5rem)',
		padding: 'var(--uk-input-tag-padding, 0.5rem)',
		gap: 'var(--uk-input-tag-gap, 0.25rem)',
		flexWrap: 'var(--uk-input-tag-wrap, wrap)',
		alignItems: 'var(--uk-input-tag-align, center)',

		// Visual
		boxShadow: 'var(--uk-input-tag-shadow, var(--uk-form-input-shadow))',
		borderRadius: 'var(--uk-input-tag-radius, var(--uk-form-input-radius))',
		borderWidth: 'var(--uk-input-tag-border-width, 1px)',
		borderStyle: 'var(--uk-input-tag-border-style, solid)',
		borderColor: 'var(--uk-input-tag-border-color, hsl(var(--input)))',

		// Theme
		'--focus-shadow-color': 'hsl(var(--ring))',

		// Focus state
		'&:has(input:focus)': {
			outlineWidth: 'var(--uk-input-tag-focus-outline-width, 2px)',
			outlineStyle: 'var(--uk-input-tag-focus-outline-style, solid)',
			outlineColor: 'var(--uk-input-tag-focus-outline-color, transparent)',
			outlineOffset: 'var(--uk-input-tag-focus-outline-offset, 2px)',
			boxShadow:
				'var(--uk-input-tag-focus-shadow, 0 0 0 0 transparent, 0 0 0 1px var(--focus-shadow-color), 0 0 #0000)'
		}
	},

	'.uk-input-tag.uk-disabled': {
		opacity: 'var(--uk-input-tag-disabled-opacity, 0.5)'
	},

	'.uk-input-tag input': {
		// Reset
		backgroundColor: 'transparent',
		outline: 'none',

		// Layout
		minHeight: 'var(--uk-input-tag-input-min-height, 1.75rem)',
		flex: 'var(--uk-input-tag-input-flex, 1)',
		padding: 'var(--uk-input-tag-input-padding, 0 0.25rem)',

		// Typography
		color: 'var(--uk-input-tag-input-color, hsl(var(--foreground)))',
		'&::placeholder': {
			color: 'var(--uk-input-tag-placeholder-color, hsl(var(--muted-foreground)))'
		}
	},

	'.uk-input-tag.uk-form-destructive': {
		'--focus-shadow-color': 'hsl(var(--destructive))'
	}
};
