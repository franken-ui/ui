export default {
	'.uk-range': {
		WebkitAppearance: 'none',
		boxSizing: 'border-box',
		margin: '0',
		verticalAlign: 'middle',
		maxWidth: '100%',
		width: '100%',
		background: 'transparent'
	},
	'.uk-range:focus': {
		outline: 'none'
	},
	'.uk-range::-moz-focus-outer': {
		border: 'none'
	},
	'.uk-range:not(:disabled)::-webkit-slider-thumb': {
		cursor: 'pointer'
	},
	'.uk-range:not(:disabled)::-moz-range-thumb': {
		cursor: 'pointer'
	},
	'.uk-range::-webkit-slider-runnable-track': {
		height: '3px',
		borderRadius: '500px',
		'@apply bg-primary/20': {}
	},
	'.uk-range:focus::-webkit-slider-runnable-track, .uk-range:active::-webkit-slider-runnable-track':
		{
			'@apply bg-primary/20': {}
		},
	'.uk-range::-moz-range-track': {
		height: '3px',
		borderRadius: '500px',
		'@apply bg-primary/20': {}
	},
	'.uk-range:focus::-moz-range-track': {
		'@apply bg-primary/20': {}
	},
	'.uk-range::-webkit-slider-thumb': {
		WebkitAppearance: 'none',
		marginTop: '-7px',
		height: '15px',
		width: '15px',
		borderRadius: '500px',
		border: '1px solid',
		'@apply border-primary/50 bg-background': {}
	},
	'.uk-range::-moz-range-thumb': {
		border: '1px solid',
		height: '15px',
		width: '15px',
		marginTop: '-7px',
		borderRadius: '500px',
		'@apply border-primary/50 bg-background': {}
	}
};
