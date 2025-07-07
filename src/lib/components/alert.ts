export default {
	'.uk-alert': {
		// Layout
		position: 'var(--uk-alert-position, relative)',
		padding: 'var(--uk-alert-padding, 1rem 2rem 1rem 1rem)',

		// Visual
		backgroundColor: 'var(--uk-alert-bg, hsl(var(--muted) / .5))',
		color: 'var(--uk-alert-color, hsl(var(--foreground)))',
		borderRadius: 'var(--uk-alert-radius, var(--uk-global-radius))',
		borderWidth: 'var(--uk-alert-border-width, 1px)',
		borderStyle: 'var(--uk-alert-border-style, solid)',
		borderColor: 'var(--uk-alert-border-color, hsl(var(--border) / var(--border-alpha, 1)))'
	},
	'.uk-alert-close': {
		// Layout
		position: 'var(--uk-alert-close-position, absolute)',
		inset: 'var(--uk-alert-close-inset, 1rem 1rem auto auto)'
	},
	'.uk-alert-destructive': {
		'--uk-alert-bg': 'hsl(var(--destructive) / var(--destructive-alpha, 1))',
		'--uk-alert-color': 'hsl(var(--destructive-foreground))',
		'--uk-alert-border-color': 'hsl(var(--destructive) / var(--destructive-alpha, 1))'
	},
	'.uk-alert a:not([class])': {
		// Typography
		fontWeight: 'var(--uk-alert-link-font-weight, 500)',
		textDecorationLine: 'var(--uk-alert-link-decoration-line, underline)',
		textUnderlineOffset: 'var(--uk-alert-link-underline-offset, 4px)'
	},
	'.uk-alert-title': {
		// Typography
		fontWeight: 'var(--uk-alert-title-font-weight, 500)',
		lineHeight: 'var(--uk-alert-title-leading, none)',
		letterSpacing: 'var(--uk-alert-title-tracking, -0.025em)' // Using Tailwind-like naming
	}
};
