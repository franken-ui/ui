export default {
	'.uk-progress': {
		verticalAlign: 'baseline',
		display: 'block',
		width: '100%',
		border: '0',
		marginBottom: '20px',
		height: '15px',
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
