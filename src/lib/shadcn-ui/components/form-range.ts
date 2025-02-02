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
		height: '1rem',
		width: '1rem',
		borderRadius: '500px',
		border: '1px solid',
		'@apply border-primary/50 bg-background': {}
	},
	'.uk-range::-moz-range-thumb': {
		border: '1px solid',
		height: '1rem',
		width: '1rem',
		marginTop: '-7px',
		borderRadius: '500px',
		'@apply border-primary/50 bg-background': {}
	},
	'.uk-input-range': {
		'@apply relative block h-10 select-none': {}
	},
	'.uk-input-range-runnable-track': {
		borderRadius: 'var(--uk-global-radius)',
		'@apply bg-primary/20 absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2': {}
	},
	'.uk-input-range-track': {
		borderRadius: 'var(--uk-global-radius)',
		'@apply bg-primary absolute top-1/2 h-1.5 -translate-y-1/2': {}
	},
	'.uk-input-range-knob': {
		boxShadow: 'var(--uk-global-shadow)',
		'@apply border-primary/50 bg-background focus-visible:ring-ring absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border focus-visible:outline-none focus-visible:ring-1 disabled:opacity-50':
			{}
	},
	'.uk-input-range-label': {
		'@apply absolute top-4 -translate-x-1/2 whitespace-nowrap': {}
	},
	'.uk-input-range-label.top': {
		'@apply -top-8': {}
	}
};
