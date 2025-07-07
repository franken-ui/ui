export default {
	'.uk-pgn': {
		display: 'flex', // Static - core flex behavior
		flexWrap: 'wrap', // Static - core responsive behavior
		alignItems: 'center', // Static - core alignment
		gap: 'var(--uk-pgn-gap, 0.25rem)'
	},

	'.uk-pgn > *': {
		position: 'relative', // Static - core positioning
		flex: 'none' // Static - core flex behavior
	},

	'.uk-pgn > * > *': {
		display: 'inline-flex', // Static - core flex behavior
		alignItems: 'center', // Static - core alignment
		justifyContent: 'center', // Static - core alignment
		gap: 'var(--uk-pgn-item-gap, 0.5rem)',
		boxSizing: 'border-box', // Static - core sizing
		width: 'var(--uk-pgn-item-width, auto)',
		height: 'var(--uk-pgn-item-height, 2.5rem)',
		padding: 'var(--uk-pgn-item-padding, 0.625rem 1.25rem)',
		fontSize: 'var(--uk-pgn-item-font-size, var(--uk-global-font-size))',
		lineHeight: 'var(--uk-pgn-item-line-height, var(--uk-global-leading))',
		fontWeight: 'var(--uk-pgn-item-font-weight, 500)',
		textAlign: 'center', // Static - core text alignment
		whiteSpace: 'nowrap', // Static - core text behavior
		borderRadius: 'var(--uk-pgn-item-radius, var(--uk-global-radius))',
		boxShadow: 'var(--uk-pgn-item-shadow, var(--uk-global-shadow-s))',
		borderWidth: 'var(--uk-pgn-item-border-width, 1px)',
		borderStyle: 'solid', // Static - core border style
		borderColor: 'var(--uk-pgn-item-border-color, transparent)',
		backgroundColor: 'var(--uk-pgn-item-bg, transparent)',
		color: 'var(--uk-pgn-item-color, inherit)'
	},

	'.uk-pgn > * > * svg': {
		pointerEvents: 'none', // Static - core interaction behavior
		width: 'var(--uk-pgn-item-svg-size, 1rem)',
		height: 'var(--uk-pgn-item-svg-size, 1rem)',
		flexShrink: '0' // Static - core flex behavior
	},

	// Static Firefox reset
	'.uk-pgn > * > *::-moz-focus-inner': {
		border: '0',
		padding: '0'
	},

	// Hover state
	'.uk-pgn > * > *:hover': {
		transitionProperty: 'background-color', // Static - core transition
		transitionDuration: 'var(--uk-pgn-item-hover-duration, 150ms)',
		transitionTimingFunction: 'ease-in-out' // Static - core transition
	},

	// States
	'.uk-pgn > .uk-active > *': {
		opacity: 'var(--uk-pgn-active-opacity, 0.8)'
	},

	'.uk-pgn > .uk-disabled > *, .uk-pgn > * > *:disabled': {
		opacity: 'var(--uk-pgn-disabled-opacity, 0.5)',
		pointerEvents: 'none' // Static - core interaction behavior
	},

	// Size variants
	'.uk-pgn-xs > * > *': {
		'--uk-pgn-item-height': 'var(--uk-pgn-xs-item-height, 1.75rem)',
		'--uk-pgn-item-padding': 'var(--uk-pgn-xs-item-padding, 0.375rem 0.75rem)',
		'--uk-pgn-item-font-size': 'var(--uk-pgn-xs-item-font-size, var(--uk-global-font-size-s))',
		'--uk-pgn-item-line-height': 'var(--uk-pgn-xs-item-line-height, var(--uk-global-leading-s))'
	},
	'.uk-pgn-sm > * > *': {
		'--uk-pgn-item-height': 'var(--uk-pgn-sm-item-height, 2rem)',
		'--uk-pgn-item-padding': 'var(--uk-pgn-sm-item-padding, 0.5rem 1rem)',
		'--uk-pgn-item-font-size': 'var(--uk-pgn-sm-item-font-size, var(--uk-global-font-size-s))',
		'--uk-pgn-item-line-height': 'var(--uk-pgn-sm-item-line-height, var(--uk-global-leading-s))'
	},
	'.uk-pgn-md > * > *': {
		'--uk-pgn-item-height': 'var(--uk-pgn-md-item-height, 3rem)',
		'--uk-pgn-item-padding': 'var(--uk-pgn-md-item-padding, 0.75rem 1.5rem)'
	},
	'.uk-pgn-lg > * > *': {
		'--uk-pgn-item-height': 'var(--uk-pgn-lg-item-height, 3.5rem)',
		'--uk-pgn-item-padding': 'var(--uk-pgn-lg-item-padding, 0.875rem 1.75rem)'
	},
	'.uk-pgn-default > * > *': {
		'--uk-pgn-item-border-color':
			'var(--uk-pgn-default-item-border-color, hsl(var(--border) / var(--border-alpha, 1)))',
		'--uk-pgn-item-bg': 'var(--uk-pgn-default-item-bg, hsl(var(--background)))',
		'--uk-pgn-item-color': 'var(--uk-pgn-default-item-color, hsl(var(--foreground)))'
	},
	'.uk-pgn-default > * > *:hover,.uk-pgn-default > * > *.uk-active': {
		'--uk-pgn-item-bg': 'var(--uk-pgn-default-item-hover-bg, hsl(var(--accent)))',
		'--uk-pgn-item-color': 'var(--uk-pgn-default-item-hover-color, hsl(var(--accent-foreground)))'
	},
	'.uk-pgn-primary > * > *': {
		'--uk-pgn-item-bg': 'var(--uk-pgn-primary-item-bg, hsl(var(--primary)))',
		'--uk-pgn-item-color': 'var(--uk-pgn-primary-item-color, hsl(var(--primary-foreground)))'
	},
	'.uk-pgn-primary > * > *:hover,.uk-pgn-primary > * > *.uk-active': {
		'--uk-pgn-item-bg': 'var(--uk-pgn-primary-item-hover-bg, hsl(var(--primary) / 0.9))',
		'--uk-pgn-item-color': 'var(--uk-pgn-primary-item-hover-color, hsl(var(--primary-foreground)))'
	},
	'.uk-pgn-secondary > * > *': {
		'--uk-pgn-item-bg': 'var(--uk-pgn-secondary-item-bg, hsl(var(--secondary)))',
		'--uk-pgn-item-color': 'var(--uk-pgn-secondary-item-color, hsl(var(--secondary-foreground)))'
	},
	'.uk-pgn-secondary > * > *:hover,.uk-pgn-secondary > * > *.uk-active': {
		'--uk-pgn-item-bg': 'var(--uk-pgn-secondary-item-hover-bg, hsl(var(--secondary) / 0.8))',
		'--uk-pgn-item-color':
			'var(--uk-pgn-secondary-item-hover-color, hsl(var(--secondary-foreground)))'
	},
	'.uk-pgn-ghost > * > *:not(:disabled):hover,.uk-pgn-ghost > * > *.uk-active': {
		'--uk-pgn-item-bg': 'var(--uk-pgn-ghost-item-hover-bg, hsl(var(--accent)))',
		'--uk-pgn-item-color': 'var(--uk-pgn-ghost-item-hover-color, hsl(var(--accent-foreground)))'
	},
	'.uk-pgn-ghost > * > *': { boxShadow: 'var(--uk-pgn-ghost-item-shadow, none)' },
	'.uk-pgn-destructive > * > *': {
		'--uk-pgn-item-bg':
			'var(--uk-pgn-destructive-item-bg, hsl(var(--destructive) / var(--destructive-alpha, 1)))',
		'--uk-pgn-item-color':
			'var(--uk-pgn-destructive-item-color, hsl(var(--destructive-foreground)))'
	},
	'.uk-pgn-destructive > * > *:hover,.uk-pgn-destructive > * > *.uk-active': {
		'--uk-pgn-destructive-item-hover-alpha': 'calc(var(--destructive-alpha, 1) * 0.9)',
		'--uk-pgn-item-bg':
			'var(--uk-pgn-destructive-item-hover-bg, hsl(var(--destructive) / var(--uk-pgn-destructive-item-hover-alpha)))',
		'--uk-pgn-item-color':
			'var(--uk-pgn-destructive-item-hover-color, hsl(var(--destructive-foreground)))'
	}
};
