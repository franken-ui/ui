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
		width: '1.25rem',
		height: '1.25rem',
		backgroundPosition: '50% 50%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		verticalAlign: 'middle',
		objectFit: 'scale-down',
		maxWidth: 'none'
	}
};
