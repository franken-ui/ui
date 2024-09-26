export default {
	'.uk-progress': {
		verticalAlign: 'baseline',
		display: 'block',
		width: '100%',
		border: '0',
		marginBottom: '1.25rem',
		height: '1rem',
		borderRadius: '500px',
		overflow: 'hidden',
		'@apply bg-primary/20': {}
	},
	'.uk-progress::-webkit-progress-bar': {
		backgroundColor: 'transparent'
	},
	'.uk-progress::-webkit-progress-value': {
		transition: 'width 0.6s ease',
		'@apply bg-primary': {}
	},
	'.uk-progress::-moz-progress-bar': {
		transition: 'width 0.6s ease',
		'@apply bg-primary': {}
	}
};
