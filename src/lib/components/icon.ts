export default {
	// Base icon styles
	'.uk-icon': {
		display: 'inline-flex', // Removed variable - fundamental layout
		color: 'var(--uk-icon-color, inherit)',
		fill: 'var(--uk-icon-fill, currentcolor)'
	},

	// Button behavior
	'button.uk-icon:not(:disabled)': {
		cursor: 'pointer' // Removed variable - fundamental button behavior
	},

	// Browser reset - keep static vendor prefix rule as is
	'.uk-icon::-moz-focus-inner': {
		border: '0',
		padding: '0'
	},

	// SVG fill and stroke handling
	".uk-icon:not(.uk-preserve) [fill*='#']:not(.uk-preserve)": {
		fill: 'var(--uk-icon-fill-color, currentcolor)'
	},

	".uk-icon:not(.uk-preserve) [stroke*='#']:not(.uk-preserve)": {
		stroke: 'var(--uk-icon-stroke-color, currentcolor)'
	},

	// Icon positioning
	'.uk-icon > *': {
		transform: 'var(--uk-icon-transform, translate(0, 0))'
	},

	// Image icons
	'.uk-icon-image': {
		// Dimensions
		width: 'var(--uk-icon-image-size, 1.25rem)',
		height: 'var(--uk-icon-image-size, 1.25rem)', // Using same variable for consistent sizing

		// Keep static properties that don't need customization
		backgroundPosition: '50% 50%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		verticalAlign: 'middle',
		objectFit: 'scale-down',
		maxWidth: 'none'
	}
};
