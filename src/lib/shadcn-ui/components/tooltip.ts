export default {
	'.uk-tooltip': {
		display: 'none',
		position: 'absolute',
		zIndex: 'var(--uk-tooltip-z)',
		'--uk-position-offset': '10px',
		'--uk-position-viewport-offset': '8px',
		top: '0',
		boxSizing: 'border-box',
		maxWidth: 'var(--uk-tooltip-max-width)',
		fontSize: 'var(--uk-global-font-size-s)',
		lineHeight: 'var(--uk-global-line-height-s)',
		borderRadius: 'var(--uk-global-radius)',
		padding: 'var(--uk-tooltip-padding)',
		'@apply bg-primary text-primary-foreground': {}
	},
	'.uk-tooltip.uk-active': {
		display: 'block'
	}
};
