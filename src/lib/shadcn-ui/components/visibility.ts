export default {
	'[hidden], .uk-hidden': {
		display: 'none !important'
	},
	'.uk-invisible': {
		visibility: 'hidden !important'
	},
	'.uk-hidden-visually:not(:focus):not(:active):not(:focus-within), .uk-visible-toggle:not(:hover):not(:focus) .uk-hidden-hover:not(:focus-within)':
		{
			position: 'absolute !important',
			width: '1px !important',
			height: '1px !important',
			padding: '0 !important',
			border: '0 !important',
			margin: '0 !important',
			overflow: 'hidden !important',
			clipPath: 'inset(50%) !important',
			whiteSpace: 'nowrap !important'
		},
	'.uk-visible-toggle:not(:hover):not(:focus) .uk-invisible-hover:not(:focus-within)': {
		opacity: '0 !important'
	}
};
