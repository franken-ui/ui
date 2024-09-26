export default {
	'.uk-slider': {
		WebkitTapHighlightColor: 'transparent'
	},
	'.uk-slider-container': {
		overflow: ['hidden', 'clip']
	},
	'.uk-slider-items': {
		display: 'flex',
		willChange: 'transform',
		position: 'relative',
		touchAction: 'pan-y'
	},
	'.uk-slider-items > *': {
		flex: 'none !important',
		boxSizing: 'border-box',
		maxWidth: '100%',
		position: 'relative'
	}
};
