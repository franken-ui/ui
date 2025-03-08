export default {
	'.uk-custom-select-search': {
		// Layout
		display: 'var(--uk-custom-select-search-display, flex)',
		alignItems: 'var(--uk-custom-select-search-align, center)',
		padding: 'var(--uk-custom-select-search-padding, 0 0.75rem)'
	},

	'.uk-custom-select-search svg': {
		// Layout
		margin: 'var(--uk-custom-select-search-icon-margin, 0 0.5rem 0 0)',
		// Visual
		opacity: 'var(--uk-custom-select-search-icon-opacity, 0.5)'
	},

	'.uk-custom-select-search input': {
		// Layout
		width: 'var(--uk-custom-select-search-input-width, 100%)',
		padding: 'var(--uk-custom-select-search-input-padding, 0.75rem 0)',
		// Visual
		backgroundColor: 'transparent',
		outline: 'none',

		'&::placeholder': {
			color: 'var(--uk-custom-select-search-placeholder-color, hsl(var(--muted-foreground)))'
		}
	},

	'.uk-custom-select-options': {
		// Layout
		maxHeight: 'var(--uk-custom-select-options-max-height, 10rem)'
	},

	'.uk-custom-select-item-wrapper': {
		// Layout
		display: 'var(--uk-custom-select-item-wrapper-display, flex)',
		flex: 'var(--uk-custom-select-item-wrapper-flex, 1)',
		alignItems: 'var(--uk-custom-select-item-wrapper-align, center)'
	},

	'.uk-custom-select-item-icon': {
		// Layout
		margin: 'var(--uk-custom-select-item-icon-margin, 0 0.5rem 0 0)',
		flexShrink: 'var(--uk-custom-select-item-icon-shrink, 0)'
	},

	'.uk-custom-select-item-text': {
		// Layout
		flex: 'var(--uk-custom-select-item-text-flex, 1)'
	},

	'.uk-custom-select-item-check': {
		// Layout
		margin: 'var(--uk-custom-select-item-check-margin, 0 0 0 0.5rem)',
		flexShrink: 'var(--uk-custom-select-item-check-shrink, 0)'
	}
};
