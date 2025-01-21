export default {
	'.uk-lightbox': {
		display: 'none',
		position: 'fixed',
		top: '0',
		right: '0',
		bottom: '0',
		left: '0',
		zIndex: '1010',
		opacity: '0',
		transition: 'opacity 0.15s linear',
		touchAction: 'pinch-zoom',
		'@apply bg-background': {}
	},
	'.uk-lightbox.uk-open': {
		display: 'block',
		opacity: '1'
	},
	'.uk-lightbox :focus-visible': {
		'@apply outline-dotted outline-ring': {}
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
		alignItems: 'flex-start',
		willChange: 'transform, opacity',
		overflow: 'auto'
	},
	'.uk-lightbox-items > .uk-active': {
		display: 'flex'
	},
	'.uk-lightbox-items-fit > *': { alignItems: 'center' },
	'.uk-lightbox-items-fit > * > *': { maxWidth: '100vw', maxHeight: '100vh' },
	'.uk-lightbox-items-fit > * > :not(iframe)': {
		width: 'auto',
		height: 'auto'
	},
	'.uk-lightbox-items.uk-lightbox-items-fit .uk-lightbox-zoom:hover': {
		cursor: 'zoom-in'
	},
	'.uk-lightbox-items:not(.uk-lightbox-items-fit) .uk-lightbox-zoom:hover': {
		cursor: 'zoom-out'
	},
	'.uk-lightbox-thumbnav-vertical :where(img, video)': { maxWidth: '100px' },
	'.uk-lightbox-thumbnav:not(.uk-lightbox-thumbnav-vertical) :where(img, video)': {
		maxHeight: '100px'
	},
	'.uk-lightbox-thumbnav:empty, .uk-lightbox-dotnav:empty': {
		display: 'none'
	},
	'.uk-lightbox-caption': {
		'@apply bg-secondary p-4 text-secondary-foreground backdrop-blur-sm': {}
	},
	'.uk-lightbox-caption:empty': {
		display: 'none'
	},
	'.uk-lightbox-iframe': {
		width: '80%',
		height: '80%'
	}
};
