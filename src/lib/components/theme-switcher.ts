export default {
	'.uk-theme-switcher': {
		display: 'flex', // Removed variable - fundamental layout
		flex: '1 1 auto', // Removed variable - fundamental layout
		flexDirection: 'column', // Removed variable - fundamental layout
		gap: 'var(--uk-theme-switcher-gap, 1rem)'
	},
	'.uk-theme-switcher-key': {
		gap: 'var(--uk-theme-switcher-key-gap, 0.5rem)',
		display: 'flex', // Removed variable - fundamental layout
		flexDirection: 'column', // Removed variable - fundamental layout
		margin: 'var(--uk-theme-switcher-key-margin, 1rem 0 0 0)'
	},
	'.uk-theme-switcher-value': {
		display: 'grid', // Removed variable - fundamental layout
		gridTemplateColumns: 'var(--uk-theme-switcher-columns, repeat(3, minmax(0, 1fr)))',
		gap: 'var(--uk-theme-switcher-value-gap, 0.5rem)'
	},
	'.uk-theme-switcher-value button': {
		// Layout
		display: 'inline-flex', // Removed variable - fundamental layout
		height: 'var(--uk-theme-switcher-button-height, 2rem)',
		alignItems: 'center', // Removed variable - fundamental layout
		justifyContent: 'start', // Removed variable - fundamental layout
		padding: 'var(--uk-theme-switcher-button-padding, 0 0.75rem)',

		// Typography
		fontSize: 'var(--uk-theme-switcher-button-font-size, var(--uk-global-font-size-s))',
		lineHeight: 'var(--uk-theme-switcher-button-leading, var(--uk-global-leading-s))',
		fontWeight: 'var(--uk-theme-switcher-button-font-weight, 500)',

		// Visual
		borderRadius: 'var(--uk-theme-switcher-button-radius, var(--uk-global-radius))',
		boxShadow: 'var(--uk-theme-switcher-button-shadow, var(--uk-global-shadow-s))',
		border: 'var(--uk-theme-switcher-button-border, 1px solid hsl(var(--input)))',
		backgroundColor: 'var(--uk-theme-switcher-button-bg, hsl(var(--background)))',
		color: 'var(--uk-theme-switcher-button-color, hsl(var(--foreground)))'
	},
	'.uk-theme-switcher-value button:hover': {
		transitionProperty: 'background-color', // Removed variable - fundamental transition
		transitionDuration: 'var(--uk-theme-switcher-button-hover-duration, 150ms)',
		transitionTimingFunction: 'ease-in-out', // Removed variable - fundamental timing
		backgroundColor: 'var(--uk-theme-switcher-button-hover-bg, hsl(var(--accent)))',
		color: 'var(--uk-theme-switcher-button-hover-color, hsl(var(--accent-foreground)))'
	},

	'.uk-theme-switcher-value button.uk-active': {
		border: 'var(--uk-theme-switcher-button-active-border, 1px solid hsl(var(--primary)))',
		outline: 'var(--uk-theme-switcher-button-active-outline, 1px solid hsl(var(--primary)))'
	},
	'.uk-theme-switcher-hex': {
		display: 'flex', // Removed variable - fundamental layout
		height: 'var(--uk-theme-switcher-hex-size, 1rem)',
		width: 'var(--uk-theme-switcher-hex-size, 1rem)', // Combined into single size variable
		flexShrink: '0', // Removed variable - fundamental layout
		transform: 'var(--uk-theme-switcher-hex-transform, translateX(-0.25rem))',
		alignItems: 'center', // Removed variable - fundamental layout
		justifyContent: 'center', // Removed variable - fundamental layout
		borderRadius: '9999px', // Removed variable - fundamental shape for color preview
		color: 'var(--uk-theme-switcher-hex-color, white)'
	},
	'.uk-theme-switcher-text:not(:first-child)': {
		overflow: 'hidden', // Removed variable - fundamental text behavior
		textOverflow: 'ellipsis', // Removed variable - fundamental text behavior
		marginLeft: 'var(--uk-theme-switcher-text-margin, 0.5rem)'
	}
};
