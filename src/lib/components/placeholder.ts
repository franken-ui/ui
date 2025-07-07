export default {
	// Placeholder
	'.uk-placeholder': {
		marginBottom: 'var(--uk-placeholder-margin-bottom, 1.25rem)',
		padding: 'var(--uk-placeholder-padding, 2rem 2rem)',
		background: 'var(--uk-placeholder-background, transparent)',
		border: 'var(--uk-placeholder-border, 1px dashed)', // Shorthand variable for border
		borderColor: 'var(--uk-placeholder-border-color, hsl(var(--border) / var(--border-alpha, 1)))' // borderColor is already using a variable, encapsulate it too for component level customization
	},
	'.uk-placeholder > :last-child': {
		marginBottom: '0' // obvious value, keep static
	}
};
