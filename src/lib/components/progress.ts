export default {
	// Progress
	'.uk-progress': {
		verticalAlign: 'baseline', // obvious value
		display: 'block', // obvious value
		width: '100%', // obvious value
		border: '0', // obvious value
		marginBottom: 'var(--uk-progress-margin-bottom, 1.25rem)',
		height: 'var(--uk-progress-height, 1rem)',
		borderRadius: 'var(--uk-progress-radius, 500px)',
		overflow: 'hidden', // obvious value
		backgroundColor: 'var(--uk-progress-track-color, hsl(var(--primary) / 0.2))' // Renamed for clarity - track color
	},
	'.uk-progress::-webkit-progress-bar': {
		backgroundColor: 'transparent' // browser specific, obvious value
	},
	'.uk-progress::-webkit-progress-value': {
		transition: 'var(--uk-progress-transition, width 0.6s ease)', // Shorthand variable for transition
		backgroundColor: 'var(--uk-progress-value-color, hsl(var(--primary)))' // Renamed for clarity - value color
	},
	'.uk-progress::-moz-progress-bar': {
		transition: 'var(--uk-progress-transition, width 0.6s ease)', // Reusing the same variable for consistency
		backgroundColor: 'var(--uk-progress-value-color, hsl(var(--primary)))' // Reusing the same variable for consistency
	}
};
