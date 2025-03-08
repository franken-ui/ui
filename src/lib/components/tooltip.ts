export default {
	'.uk-tooltip': {
		// Layout
		display: 'none', // Removed variable - fundamental behavior
		position: 'absolute', // Removed variable - fundamental positioning
		zIndex: 'var(--uk-tooltip-z-index, 1030)',
		top: 'var(--uk-tooltip-top, 0)',
		maxWidth: 'var(--uk-tooltip-max-width, 208px)',
		padding: 'var(--uk-tooltip-padding, 0.375rem 0.75rem)',

		// Typography
		fontSize: 'var(--uk-tooltip-font-size, var(--uk-global-font-size-s))',
		lineHeight: 'var(--uk-tooltip-leading, var(--uk-global-leading-s))',

		// Visual
		borderRadius: 'var(--uk-tooltip-radius, var(--uk-global-radius))',
		backgroundColor: 'var(--uk-tooltip-bg, hsl(var(--primary)))',
		color: 'var(--uk-tooltip-color, hsl(var(--primary-foreground)))',

		// Position offset variables - keep as is per rule #4
		'--uk-position-offset': '10px',
		'--uk-position-viewport-offset': '8px'
	},

	'.uk-tooltip.uk-active': {
		display: 'block' // Removed variable - fundamental behavior
	}
};
