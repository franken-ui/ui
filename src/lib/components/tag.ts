export default {
	// Tags
	'.uk-tag': {
		// Layout
		display: 'var(--uk-tag-display, inline-flex)',
		alignItems: 'var(--uk-tag-align, center)',
		minHeight: 'var(--uk-tag-height, 1.75rem)',
		padding: 'var(--uk-tag-padding, 0.25rem 0.5rem)',
		gap: 'var(--uk-tag-gap, 0.5rem)',

		// Typography
		fontSize: 'var(--uk-tag-font-size, var(--uk-global-font-size-s))',
		lineHeight: 'var(--uk-tag-leading, var(--uk-global-leading-s))',

		// Visual
		borderRadius: 'var(--uk-tag-radius, var(--uk-global-radius-s))',
		backgroundColor: 'var(--uk-tag-bg, transparent)',
		color: 'var(--uk-tag-color, hsl(var(--foreground)))',

		// Reset transition
		transition: 'none'
	},

	'.uk-tag:hover': {
		transitionProperty: 'background-color', // Removed variable - fundamental transition
		transitionDuration: 'var(--uk-tag-hover-duration, 150ms)',
		transitionTimingFunction: 'ease-in-out', // Removed variable - fundamental timing
		opacity: 'var(--uk-tag-hover-opacity, 0.8)'
	},

	// Variants
	'.uk-tag-primary': {
		'--uk-tag-bg': 'hsl(var(--primary))',
		'--uk-tag-color': 'hsl(var(--primary-foreground))'
	},
	'.uk-tag-primary:hover': {
		'--uk-tag-bg': 'hsl(var(--primary) / 0.8)'
	},
	'.uk-tag-secondary': {
		'--uk-tag-bg': 'hsl(var(--secondary))',
		'--uk-tag-color': 'hsl(var(--secondary-foreground))'
	},
	'.uk-tag-secondary:hover': {
		'--uk-tag-bg': 'hsl(var(--secondary) / 0.8)'
	},
	'.uk-tag-destructive': {
		'--uk-tag-bg': 'hsl(var(--destructive))',
		'--uk-tag-color': 'hsl(var(--destructive-foreground))'
	},
	'.uk-tag-destructive:hover': {
		'--uk-tag-bg': 'hsl(var(--destructive) / 0.8)'
	}
};
