export default {
	'.uk-offcanvas': {
		display: 'none',
		position: 'fixed',
		top: '0',
		bottom: '0',
		left: '0',
		zIndex: '1000'
	},
	'.uk-offcanvas-flip .uk-offcanvas': {
		right: '0',
		left: 'auto'
	},
	'.uk-offcanvas-bar': {
		position: 'absolute',
		top: '0',
		bottom: '0',
		left: '-270px',
		boxSizing: 'border-box',
		width: '270px',
		overflowY: 'auto',
		'@apply border-r border-border bg-background': {}
	},
	'.uk-offcanvas-flip .uk-offcanvas-bar': {
		left: 'auto',
		right: '-270px',
		borderRight: 'none',
		'@apply border-l border-border': {}
	},
	'.uk-open > .uk-offcanvas-bar': {
		left: '0'
	},
	'.uk-offcanvas-flip .uk-open > .uk-offcanvas-bar': {
		left: 'auto',
		right: '0'
	},
	'.uk-offcanvas-bar-animation': {
		transition: 'left 0.3s ease-out'
	},
	'.uk-offcanvas-flip .uk-offcanvas-bar-animation': {
		transitionProperty: 'right'
	},
	'.uk-offcanvas-reveal': {
		position: 'absolute',
		top: '0',
		bottom: '0',
		left: '0',
		width: '0',
		overflow: 'hidden',
		transition: 'width 0.3s ease-out'
	},
	'.uk-offcanvas-reveal .uk-offcanvas-bar': {
		left: '0'
	},
	'.uk-offcanvas-flip .uk-offcanvas-reveal .uk-offcanvas-bar': {
		left: 'auto',
		right: '0'
	},
	'.uk-open > .uk-offcanvas-reveal': {
		width: '270px'
	},
	'.uk-offcanvas-flip .uk-offcanvas-reveal': {
		right: '0',
		left: 'auto'
	},
	'.uk-offcanvas-close': {
		position: 'absolute',
		zIndex: '1000',
		top: '5px',
		right: '5px',
		padding: '5px'
	},
	'.uk-offcanvas-close:first-child + *': {
		marginTop: '0'
	},
	'.uk-offcanvas-overlay': {
		width: '100vw',
		touchAction: 'none'
	},
	'.uk-offcanvas-overlay::before': {
		content: "''",
		position: 'absolute',
		top: '0',
		bottom: '0',
		left: '0',
		right: '0',
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		opacity: '0',
		transition: 'opacity 0.15s linear',
		'@apply backdrop-blur-sm': {}
	},
	'.uk-offcanvas-overlay.uk-open::before': {
		opacity: '1'
	},
	'.uk-offcanvas-page, .uk-offcanvas-container': {
		overflowX: ['hidden', 'clip']
	},
	'.uk-offcanvas-container': {
		position: 'relative',
		left: '0',
		transition: 'left 0.3s ease-out',
		boxSizing: 'border-box',
		width: '100%'
	},
	':not(.uk-offcanvas-flip).uk-offcanvas-container-animation': {
		left: '270px'
	},
	'.uk-offcanvas-flip.uk-offcanvas-container-animation': {
		left: '-270px'
	}
};
