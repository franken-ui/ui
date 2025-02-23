export default {
	'.uk-leader': {
		overflow: 'hidden' // Fundamental - required for text truncation
	},

	'.uk-leader-fill::after': {
		// Layout
		display: 'inline-block', // Fundamental - required for content placement
		marginLeft: 'var(--uk-leader-spacing, 1rem)', // Keep as variable for spacing customization
		width: '0', // Fundamental - required for dynamic filling

		// Content
		content: 'attr(data-fill)', // Fundamental - required for leader dots
		whiteSpace: 'nowrap' // Fundamental - required for proper filling
	},

	'.uk-leader-fill.uk-leader-hide::after': {
		display: 'none' // Fundamental - required for hiding behavior
	}
};
