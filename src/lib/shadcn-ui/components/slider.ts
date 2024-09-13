export default {
	'.uk-slider': {
		WebkitTapHighlightColor: 'transparent'
	},
	'.uk-slider-container': {
		overflow: ['hidden', 'clip']
	},
	'.uk-slider-container-offset': {
		margin: '-11px -25px -39px -25px',
		padding: '11px 25px 39px 25px'
	},
	'.uk-slider-items': {
		willChange: 'transform',
		position: 'relative',
		touchAction: 'pan-y'
	},
	'.uk-slider-items:not(.uk-grid)': {
		display: 'flex',
		margin: '0',
		padding: '0',
		listStyle: 'none',
		WebkitTouchCallout: 'none'
	},
	'.uk-slider-items.uk-grid': {
		flexWrap: 'nowrap'
	},
	'.uk-slider-items > *': {
		flex: 'none !important',
		boxSizing: 'border-box',
		maxWidth: '100%',
		position: 'relative'
	}
};
