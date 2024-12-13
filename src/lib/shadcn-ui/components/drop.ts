export default {
	'.uk-drop': {
		display: 'none',
		position: 'absolute',
		zIndex: 'var(--uk-drop-z)',
		'--uk-position-offset': '10px',
		'--uk-position-viewport-offset': '8px',
		boxSizing: 'border-box',
		width: '18rem'
	},
	'.uk-drop.uk-open': {
		display: 'block'
	},
	'.uk-drop-stack .uk-drop-grid > *': {
		width: '100% !important'
	},
	'.uk-drop-parent-icon': {
		marginLeft: '0.5rem',
		transition: '0.3s transform'
	},
	"[aria-expanded='true'] > .uk-drop-parent-icon": {
		transform: 'rotate(180deg)'
	}
};
