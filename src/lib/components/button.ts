export default {
	'.uk-btn': {
		// Base Layout
		display: 'var(--uk-btn-display, inline-flex)',
		alignItems: 'var(--uk-btn-align-items, center)',
		justifyContent: 'var(--uk-btn-justify-content, center)',
		gap: 'var(--uk-btn-gap, 0.5rem)',
		boxSizing: 'border-box', // obvious value
		width: 'var(--uk-btn-width, auto)',
		height: 'var(--uk-btn-height)',
		padding: 'var(--uk-btn-padding)',

		// Typography
		fontSize: 'var(--uk-btn-font-size)',
		lineHeight: 'var(--uk-btn-leading)',
		fontWeight: 'var(--uk-btn-font-weight, 500)',
		textAlign: 'var(--uk-btn-text-align, center)',
		whiteSpace: 'var(--uk-btn-white-space, nowrap)',

		// Visual
		borderRadius: 'var(--uk-btn-radius)',
		boxShadow: 'var(--uk-btn-shadow)',
		borderWidth: 'var(--uk-btn-border-width, 1px)',
		borderStyle: 'var(--uk-btn-border-style, solid)',
		borderColor: 'var(--uk-btn-border-color, transparent)',
		backgroundColor: 'var(--uk-btn-bg)',
		color: 'var(--uk-btn-color)'
	},

	'.uk-btn svg': {
		pointerEvents: 'none',
		width: 'var(--uk-btn-svg-size, 1rem)',
		height: 'var(--uk-btn-svg-size, 1rem)',
		flexShrink: 'var(--uk-btn-svg-flex-shrink, 0)'
	},

	'.uk-btn::-moz-focus-inner': {
		border: '0',
		padding: '0'
	},

	// Hover
	'.uk-btn:hover': {
		transitionProperty: 'var(--uk-btn-hover-transition-property, background-color)',
		transitionDuration: 'var(--uk-btn-hover-transition-duration, 150ms)',
		transitionTimingFunction: 'var(--uk-btn-hover-transition-timing, ease-in-out)'
	},

	// Disabled
	'.uk-btn:disabled': {
		opacity: 'var(--uk-btn-disabled-opacity, 0.5)',
		pointerEvents: 'none'
	},

	// Default
	'.uk-btn-default': {
		'--uk-btn-border-color': 'hsl(var(--border) / var(--border-alpha, 1))',
		'--uk-btn-bg': 'hsl(var(--background))',
		'--uk-btn-color': 'hsl(var(--foreground))'
	},
	'.uk-btn-default:hover, .uk-btn-default.uk-active, .uk-btn-ghost:not(:disabled):hover, .uk-btn-ghost.uk-active':
		{
			'--uk-btn-bg': 'hsl(var(--accent))',
			'--uk-btn-color': 'hsl(var(--accent-foreground))'
		},

	// Primary
	'.uk-btn-primary': {
		'--uk-btn-bg': 'hsl(var(--primary))',
		'--uk-btn-color': 'hsl(var(--primary-foreground))'
	},
	'.uk-btn-primary:hover, .uk-btn-primary.uk-active': {
		'--uk-btn-bg': 'var(--uk-btn-primary-hover-bg, hsl(var(--primary) / 0.9))',
		'--uk-btn-color': 'hsl(var(--primary-foreground))'
	},

	// Secondary
	'.uk-btn-secondary': {
		'--uk-btn-bg': 'hsl(var(--secondary))',
		'--uk-btn-color': 'hsl(var(--secondary-foreground))'
	},
	'.uk-btn-secondary:hover, .uk-btn-secondary.uk-active': {
		'--uk-btn-bg': 'var(--uk-btn-secondary-hover-bg, hsl(var(--secondary) / 0.8))',
		'--uk-btn-color': 'hsl(var(--secondary-foreground))'
	},

	// Destructive
	'.uk-btn-destructive': {
		'--uk-btn-bg': 'hsl(var(--destructive) / var(--destructive-alpha, 1))',
		'--uk-btn-color': 'hsl(var(--destructive-foreground))'
	},
	'.uk-btn-destructive:hover, .uk-btn-destructive.uk-active': {
		'--uk-btn-destructive-hover-alpha': 'calc(var(--destructive-alpha, 1) * 0.9)',
		'--uk-btn-bg':
			'var(--uk-btn-destructive-hover-bg, hsl(var(--destructive) / var(--uk-btn-destructive-hover-alpha)))',
		'--uk-btn-color': 'hsl(var(--destructive-foreground))'
	},

	// Text
	'.uk-btn-text': {
		height: 'var(--uk-btn-text-height, auto)',
		padding: 'var(--uk-btn-text-padding, 0)',
		position: 'var(--uk-btn-text-position, relative)',
		borderRadius: 'var(--uk-btn-text-radius, 0)',
		boxShadow: 'var(--uk-btn-text-shadow, none)'
	},
	'.uk-btn-text::before': {
		content: "''",
		position: 'absolute',
		bottom: '0',
		left: '0',
		right: '100%',
		borderBottom: 'var(--uk-btn-text-underline, 1px solid currentColor)',
		transition: 'var(--uk-btn-text-underline-transition, right 0.3s ease-out)'
	},
	'.uk-btn-text:hover::before': {
		right: '0'
	},
	'.uk-btn-text:disabled::before': {
		display: 'none'
	},

	// Ghost
	'.uk-btn-ghost': {
		boxShadow: 'none'
	},

	// Icon
	'.uk-btn-icon': {
		aspectRatio: 'var(--uk-btn-icon-aspect-ratio, 1)',
		padding: 'var(--uk-btn-icon-padding, 0)'
	},

	// Grouped
	'.uk-btn-group': {
		display: 'var(--uk-btn-group-display, inline-flex)',
		position: 'relative', // obvious value
		boxShadow: 'var(--uk-btn-shadow)',
		borderRadius: 'var(--uk-btn-radius)'
	},

	'.uk-btn-group .uk-btn': {
		borderRadius: '0', // obvious value
		boxShadow: 'none' // obvious value
	},

	'.uk-btn-group > .uk-btn:first-child': {
		borderTopLeftRadius: 'var(--uk-btn-radius)',
		borderBottomLeftRadius: 'var(--uk-btn-radius)'
	},

	'.uk-btn-group > .uk-btn:last-child, .uk-btn-group > .uk-inline:last-child > .uk-btn': {
		borderTopRightRadius: 'var(--uk-btn-radius)',
		borderBottomRightRadius: 'var(--uk-btn-radius)'
	},

	'.uk-btn-group > .uk-btn:nth-child(n + 2), .uk-btn-group > div:nth-child(n + 2) .uk-btn': {
		marginLeft: '-1px'
	},

	'.uk-btn-group .uk-btn:hover, .uk-btn-group .uk-btn:focus, .uk-btn-group .uk-btn:active, .uk-btn-group .uk-btn.uk-active':
		{
			position: 'relative',
			zIndex: '1'
		},
	'.uk-btn-xs': {
		'--uk-btn-height': '1.75rem',
		'--uk-btn-padding': '0.375rem 0.75rem',
		'--uk-btn-font-size': 'var(--uk-global-font-size-s)',
		'--uk-btn-leading': 'var(--uk-global-leading-s)'
	},
	'.uk-btn-sm': {
		'--uk-btn-height': '2rem',
		'--uk-btn-padding': '0.5rem 1rem',
		'--uk-btn-font-size': 'var(--uk-global-font-size-s)',
		'--uk-btn-leading': 'var(--uk-global-leading-s)'
	},
	'.uk-btn-md': {
		'--uk-btn-height': '3rem',
		'--uk-btn-padding': '0.75rem 1.5rem'
	},
	'.uk-btn-lg': {
		'--uk-btn-height': '3.5rem',
		'--uk-btn-padding': '0.875rem 1.75rem'
	}
};
