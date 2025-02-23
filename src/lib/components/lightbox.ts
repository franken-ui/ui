export default {
	'.uk-lightbox': {
		// Fundamental overlay positioning
		display: 'none',
		position: 'fixed',
		top: '0',
		right: '0',
		bottom: '0',
		left: '0',

		// Customizable properties
		zIndex: 'var(--uk-lightbox-z-index, 1010)',
		opacity: '0',
		transition: 'var(--uk-lightbox-transition, opacity 0.15s linear)',
		touchAction: 'var(--uk-lightbox-touch-action, pinch-zoom)',
		background: 'var(--uk-lightbox-bg, hsl(var(--background)))'
	},

	'.uk-lightbox.uk-open': {
		display: 'block', // Fundamental state
		opacity: '1' // Fundamental state
	},

	'.uk-lightbox-page': {
		overflow: 'hidden' // Fundamental behavior
	},

	'.uk-lightbox-items > *': {
		// Fundamental positioning
		position: 'absolute',
		top: '0',
		right: '0',
		bottom: '0',
		left: '0',
		display: 'none',
		justifyContent: 'center',
		alignItems: 'flex-start',

		// Customizable properties
		willChange: 'var(--uk-lightbox-will-change, transform, opacity)',
		overflow: 'var(--uk-lightbox-items-overflow, auto)'
	},

	'.uk-lightbox-items > .uk-active': {
		display: 'flex' // Fundamental state
	},

	'.uk-lightbox-items-fit > *': {
		alignItems: 'center' // Fundamental alignment
	},

	'.uk-lightbox-items-fit > * > *': {
		maxWidth: '100vw', // Fundamental constraint
		maxHeight: '100vh' // Fundamental constraint
	},

	'.uk-lightbox-items-fit > * > :not(iframe)': {
		width: 'auto', // Fundamental sizing
		height: 'auto' // Fundamental sizing
	},

	'.uk-lightbox-items.uk-lightbox-items-fit .uk-lightbox-zoom:hover': {
		cursor: 'zoom-in' // Fundamental behavior
	},

	'.uk-lightbox-items:not(.uk-lightbox-items-fit) .uk-lightbox-zoom:hover': {
		cursor: 'zoom-out' // Fundamental behavior
	},

	'.uk-lightbox-thumbnav-vertical :where(img, video)': {
		maxWidth: 'var(--uk-lightbox-thumb-max-width, 100px)'
	},

	'.uk-lightbox-thumbnav:not(.uk-lightbox-thumbnav-vertical) :where(img, video)': {
		maxHeight: 'var(--uk-lightbox-thumb-max-height, 100px)'
	},

	'.uk-lightbox-thumbnav:empty, .uk-lightbox-dotnav:empty': {
		display: 'none' // Fundamental state
	},

	'.uk-lightbox-caption': {
		backgroundColor: 'var(--uk-lightbox-caption-bg, hsl(var(--secondary)))',
		padding: 'var(--uk-lightbox-caption-padding, 1rem)',
		color: 'var(--uk-lightbox-caption-color, hsl(var(--secondary-foreground)))'
	},

	'.uk-lightbox-caption:empty': {
		display: 'none' // Fundamental state
	},

	'.uk-lightbox-iframe': {
		width: 'var(--uk-lightbox-iframe-width, 80%)',
		height: 'var(--uk-lightbox-iframe-height, 80%)'
	}
};
