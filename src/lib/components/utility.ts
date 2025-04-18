export default {
	'.uk-overflow-hidden': {
		overflow: 'hidden'
	},
	'.uk-overflow-auto': {
		overflow: 'auto'
	},
	'.uk-resize': {
		resize: 'both'
	},
	'.uk-resize-horizontal': {
		resize: 'horizontal'
	},
	'.uk-resize-vertical': {
		resize: 'vertical'
	},
	"[class*='uk-inline']": {
		display: 'inline-block',
		position: 'relative',
		maxWidth: '100%',
		verticalAlign: 'middle',
		WebkitBackfaceVisibility: 'hidden'
	},
	'.uk-inline-clip': {
		overflow: 'hidden'
	},
	'.uk-preserve-width, .uk-preserve-width canvas, .uk-preserve-width img, .uk-preserve-width svg, .uk-preserve-width video':
		{
			maxWidth: 'none'
		},
	'.uk-responsive-width, .uk-responsive-height': {
		boxSizing: 'border-box'
	},
	'.uk-responsive-width': {
		maxWidth: '100% !important',
		height: 'auto'
	},
	'.uk-responsive-height': {
		maxHeight: '100%',
		width: 'auto',
		maxWidth: 'none'
	},
	'[uk-responsive], [data-uk-responsive]': {
		maxWidth: '100%'
	},
	".uk-inline-clip[class*='uk-border-']": {
		WebkitTransform: 'translateZ(0)'
	},
	'.uk-dropcap::first-letter, .uk-dropcap > p:first-of-type::first-letter': {
		display: 'block',
		marginRight: 'var(--uk-dropcap-margin-right, 10px)',
		cssFloat: 'left',
		fontSize: 'var(--uk-dropcap-font-size, 4.5em)',
		lineHeight: 'var(--uk-dropcap-line-height, 1)',
		marginBottom: 'var(--uk-dropcap-margin-bottom, -2px)'
	},
	'@-moz-document url-prefix()': {
		'.uk-dropcap::first-letter,.uk-dropcap > p:first-of-type::first-letter': {
			marginTop: 'var(--uk-dropcap-moz-margin-top, 1.1%)'
		}
	},
	'.uk-disabled': {
		pointerEvents: 'none'
	},
	'.uk-transform-center': {
		transform: 'translate(-50%, -50%)'
	},
	'.uk-transform-origin-top-left': {
		transformOrigin: '0 0'
	},
	'.uk-transform-origin-top-center': {
		transformOrigin: '50% 0'
	},
	'.uk-transform-origin-top-right': {
		transformOrigin: '100% 0'
	},
	'.uk-transform-origin-center-left': {
		transformOrigin: '0 50%'
	},
	'.uk-transform-origin-center-right': {
		transformOrigin: '100% 50%'
	},
	'.uk-transform-origin-bottom-left': {
		transformOrigin: '0 100%'
	},
	'.uk-transform-origin-bottom-center': {
		transformOrigin: '50% 100%'
	},
	'.uk-transform-origin-bottom-right': {
		transformOrigin: '100% 100%'
	},
	'.uk-text-right': {
		textAlign: 'right'
	},
	'.uk-text-center': {
		textAlign: 'center'
	},
	'.uk-text-break': {
		overflowWrap: 'break-word'
	},
	'.uk-rounded': {
		borderRadius: 'var(--uk-global-radius)'
	},
	'.uk-rounded-sm': {
		borderRadius: 'var(--uk-global-radius-s)'
	},
	'.uk-shadow': {
		boxShadow: 'var(--uk-global-shadow)'
	},
	'.uk-shadow-sm': {
		boxShadow: 'var(--uk-global-shadow-s)'
	},
	'.uk-text-sm': {
		fontSize: 'var(--uk-global-font-size-s)',
		lineHeight: 'var(--uk-global-leading-s)'
	},
	'.uk-text-base': {
		fontSize: 'var(--uk-global-font-size)',
		lineHeight: 'var(--uk-global-leading)'
	},
	'.uk-flex': {
		display: 'flex !important'
	},
	'.uk-flex-top': {
		alignItems: 'flex-start'
	},
	'.uk-flex-wrap-top': {
		alignContent: 'flex-start'
	},
	'.uk-margin-auto-vertical': {
		marginTop: 'auto !important',
		marginBottom: 'auto !important'
	},
	'.uk-text-truncate': {
		maxWidth: '100%',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap'
	},
	'th.uk-text-truncate, td.uk-text-truncate': {
		maxWidth: '0'
	},
	'th.uk-text-break, td.uk-text-break': {
		wordBreak: 'break-word'
	}
};
