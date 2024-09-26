export default {
	'.uk-lightbox': {
		display: 'none',
		position: 'fixed',
		top: '0',
		right: '0',
		bottom: '0',
		left: '0',
		zIndex: '1010',
		backgroundColor: '#000',
		opacity: '0',
		transition: 'opacity 0.15s linear',
		touchAction: 'pinch-zoom'
	},
	'.uk-lightbox.uk-open': {
		display: 'block',
		opacity: '1'
	},
	'.uk-lightbox-page': {
		overflow: 'hidden'
	},
	'.uk-lightbox-items > *': {
		position: 'absolute',
		top: '0',
		right: '0',
		bottom: '0',
		left: '0',
		display: 'none',
		justifyContent: 'center',
		alignItems: 'center',
		willChange: 'transform, opacity'
	},
	'.uk-lightbox-items > * > *': {
		maxWidth: '100vw',
		maxHeight: '100vh'
	},
	'.uk-lightbox-items > * > :not(iframe)': {
		width: 'auto',
		height: 'auto'
	},
	'.uk-lightbox-items > .uk-active': {
		display: 'flex'
	},
	'.uk-lightbox-toolbar': {
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		'@apply p-4 text-white backdrop-blur-sm': {}
	},
	'.uk-lightbox-toolbar-icon': {
		'@apply text-white': {}
	},
	'.uk-lightbox-toolbar-icon:hover': {
		color: '#fff'
	},
	'.uk-lightbox-caption:empty': {
		display: 'none'
	},
	'.uk-lightbox-iframe': {
		width: '80%',
		height: '80%'
	},
	'.uk-lightbox-toolbar-icon:focus-visible': {
		'@apply outline-none': {}
	},
	'.uk-lightbox-toolbar-icon svg': {
		'@apply h-4 w-4': {}
	}
};
