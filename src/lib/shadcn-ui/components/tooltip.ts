export default {
	'.uk-tooltip': {
		display: 'none',
		position: 'absolute',
		zIndex: '1030',
		'--uk-position-offset': '10px',
		'--uk-position-viewport-offset': '10',
		top: '0',
		boxSizing: 'border-box',
		maxWidth: '200px',
		fontSize: '0.75rem',
		borderRadius: 'var(--uk-border-radius)',
		'@apply bg-primary px-3 py-1.5 text-primary-foreground': {}
	},
	'.uk-tooltip.uk-active': {
		display: 'block'
	}
};
