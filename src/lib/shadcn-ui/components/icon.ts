export default {
	'.uk-icon': {
		color: 'inherit',
		display: 'inline-flex',
		fill: 'currentcolor'
	},
	'button.uk-icon:not(:disabled)': {
		cursor: 'pointer'
	},
	'.uk-icon::-moz-focus-inner': {
		border: '0',
		padding: '0'
	},
	".uk-icon:not(.uk-preserve) [fill*='#']:not(.uk-preserve)": {
		fill: 'currentcolor'
	},
	".uk-icon:not(.uk-preserve) [stroke*='#']:not(.uk-preserve)": {
		stroke: 'currentcolor'
	},
	'.uk-icon > *': {
		transform: 'translate(0, 0)'
	},
	'.uk-icon-image': {
		width: '20px',
		height: '20px',
		backgroundPosition: '50% 50%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		verticalAlign: 'middle',
		objectFit: 'scale-down',
		maxWidth: 'none'
	},
	'.uk-icon-link': {
		textDecoration: 'none !important'
	},
	'.uk-icon-button': {
		'@apply inline-flex h-9 w-9 items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50':
			{}
	},
	'.uk-icon-button:hover': {
		'@apply bg-accent text-accent-foreground': {}
	},
	'.uk-icon-button:active, .uk-active > .uk-icon-button': {
		'@apply bg-accent text-accent-foreground': {}
	},
	'.uk-icon-button-small': {
		'@apply h-8 w-8': {}
	},
	'.uk-icon-button-xsmall': {
		'@apply h-7 w-7': {}
	},
	'.uk-icon-button-outline': {
		'@apply border border-input shadow-sm': {}
	}
};
