export default {
	'.uk-overflow-hidden': {
		overflow: 'hidden'
	},
	'.uk-overflow-auto': {
		overflow: 'auto'
	},
	'.uk-overflow-auto > :last-child': {
		marginBottom: '0'
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
	'@supports (filter: blur(0))': {
		'.uk-box-shadow-bottom': {
			display: 'inline-block',
			position: 'relative',
			zIndex: '0',
			maxWidth: '100%',
			verticalAlign: 'middle'
		},
		'.uk-box-shadow-bottom::after': {
			content: "''",
			position: 'absolute',
			bottom: '-2rem',
			left: '0',
			right: '0',
			zIndex: '-1',
			height: '2rem',
			borderRadius: '100%',
			backgroundColor: '#444',
			filter: 'blur(20px)',
			willChange: 'filter'
		}
	},
	'.uk-dropcap::first-letter, .uk-dropcap > p:first-of-type::first-letter': {
		display: 'block',
		marginRight: '10px',
		cssFloat: 'left',
		fontSize: '4.5em',
		lineHeight: '1',
		marginBottom: '-2px'
	},
	'@-moz-document url-prefix()': {
		'.uk-dropcap::first-letter,.uk-dropcap > p:first-of-type::first-letter': {
			marginTop: '1.1%'
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
	'.uk-paragraph': {
		'@apply leading-7 [&:not(:first-child)]:mt-6': {}
	},
	'.uk-blockquote': {
		'@apply mt-6 border-l-2 border-border pl-6 italic': {}
	},
	'.uk-codespan': {
		'@apply relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold': {}
	},
	'.uk-text-truncate': {
		maxWidth: '100%',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap'
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
	'.uk-rounded-sm': {
		borderRadius: 'var(--uk-border-radius-s)'
	},
	'.uk-rounded': {
		borderRadius: 'var(--uk-border-radius)'
	},
	'.uk-shadow-sm': {
		boxShadow: 'var(--uk-box-shadow-s)'
	},
	'.uk-shadow': {
		boxShadow: 'var(--uk-box-shadow)'
	}
};
