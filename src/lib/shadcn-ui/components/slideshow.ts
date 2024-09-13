export default {
	'.uk-slideshow': {
		WebkitTapHighlightColor: 'transparent'
	},
	'.uk-slideshow-items': {
		position: 'relative',
		zIndex: '0',
		margin: '0',
		padding: '0',
		listStyle: 'none',
		overflow: 'hidden',
		WebkitTouchCallout: 'none',
		touchAction: 'pan-y'
	},
	'.uk-slideshow-items > *': {
		position: 'absolute',
		top: '0',
		left: '0',
		right: '0',
		bottom: '0',
		overflow: 'hidden',
		willChange: 'transform, opacity'
	},
	'.uk-slideshow-items > :not(.uk-active)': {
		display: 'none'
	}
};
