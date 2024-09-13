export default {
	'.uk-panel': {
		display: 'flow-root',
		position: 'relative',
		boxSizing: 'border-box'
	},
	'.uk-panel > :last-child': {
		marginBottom: '0'
	},
	'.uk-panel-scrollable': {
		padding: '10px',
		overflow: 'auto',
		resize: 'both',
		'@apply h-40 border border-border': {}
	},
	'.uk-clearfix::before': {
		content: "''",
		display: 'table-cell'
	},
	'.uk-clearfix::after': {
		content: "''",
		display: 'table',
		clear: 'both'
	},
	'.uk-float-left': {
		cssFloat: 'left'
	},
	'.uk-float-right': {
		cssFloat: 'right'
	},
	"[class*='uk-float-']": {
		maxWidth: '100%'
	},
	'.uk-overflow-hidden': {
		overflow: 'hidden'
	},
	'.uk-overflow-auto': {
		overflow: 'auto'
	},
	'.uk-overflow-auto > :last-child': {
		marginBottom: '0'
	},
	'.uk-box-sizing-content': {
		boxSizing: 'content-box'
	},
	'.uk-box-sizing-border': {
		boxSizing: 'border-box'
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
	'.uk-display-block': {
		display: 'block !important'
	},
	'.uk-display-inline': {
		display: 'inline !important'
	},
	'.uk-display-inline-block': {
		display: 'inline-block !important'
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
	'.uk-object-cover': {
		objectFit: 'cover'
	},
	'.uk-object-contain': {
		objectFit: 'contain'
	},
	'.uk-object-fill': {
		objectFit: 'fill'
	},
	'.uk-object-none': {
		objectFit: 'none'
	},
	'.uk-object-scale-down': {
		objectFit: 'scale-down'
	},
	'.uk-object-top-left': {
		objectPosition: '0 0'
	},
	'.uk-object-top-center': {
		objectPosition: '50% 0'
	},
	'.uk-object-top-right': {
		objectPosition: '100% 0'
	},
	'.uk-object-center-left': {
		objectPosition: '0 50%'
	},
	'.uk-object-center-center': {
		objectPosition: '50% 50%'
	},
	'.uk-object-center-right': {
		objectPosition: '100% 50%'
	},
	'.uk-object-bottom-left': {
		objectPosition: '0 100%'
	},
	'.uk-object-bottom-center': {
		objectPosition: '50% 100%'
	},
	'.uk-object-bottom-right': {
		objectPosition: '100% 100%'
	},
	'.uk-border-circle': {
		borderRadius: '50%'
	},
	'.uk-border-pill': {
		borderRadius: '500px'
	},
	'.uk-border-rounded': {
		borderRadius: '5px',
		'@apply rounded-md': {}
	},
	".uk-inline-clip[class*='uk-border-']": {
		WebkitTransform: 'translateZ(0)'
	},
	'.uk-box-shadow-small': {
		boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
		'@apply shadow-sm': {}
	},
	'.uk-box-shadow-medium': {
		boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
		'@apply shadow-md': {}
	},
	'.uk-box-shadow-large': {
		boxShadow: '0 14px 25px rgba(0, 0, 0, 0.16)',
		'@apply shadow-lg': {}
	},
	'.uk-box-shadow-xlarge': {
		boxShadow: '0 28px 50px rgba(0, 0, 0, 0.16)',
		'@apply shadow-xl': {}
	},
	'.uk-box-shadow-hover-small:hover': {
		boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
		'@apply shadow-sm': {}
	},
	'.uk-box-shadow-hover-medium:hover': {
		boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
		'@apply shadow-md': {}
	},
	'.uk-box-shadow-hover-large:hover': {
		boxShadow: '0 14px 25px rgba(0, 0, 0, 0.16)',
		'@apply shadow-lg': {}
	},
	'.uk-box-shadow-hover-xlarge:hover': {
		boxShadow: '0 28px 50px rgba(0, 0, 0, 0.16)',
		'@apply shadow-xl': {}
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
			bottom: '-30px',
			left: '0',
			right: '0',
			zIndex: '-1',
			height: '30px',
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
	'.uk-logo': {
		fontSize: '1.5rem',
		textDecoration: 'none'
	},
	':where(.uk-logo)': {
		display: 'inline-block',
		verticalAlign: 'middle'
	},
	'.uk-logo:hover': {
		textDecoration: 'none'
	},
	'.uk-logo :where(img, svg, video)': {
		display: 'block'
	},
	'.uk-logo-inverse': {
		display: 'none'
	},
	'.uk-disabled': {
		pointerEvents: 'none'
	},
	'.uk-drag, .uk-drag *': {
		cursor: 'move'
	},
	'.uk-drag iframe': {
		pointerEvents: 'none'
	},
	'.uk-dragover': {
		boxShadow: '0 0 20px rgba(100, 100, 100, 0.3)'
	},
	'.uk-blend-multiply': {
		mixBlendMode: 'multiply'
	},
	'.uk-blend-screen': {
		mixBlendMode: 'screen'
	},
	'.uk-blend-overlay': {
		mixBlendMode: 'overlay'
	},
	'.uk-blend-darken': {
		mixBlendMode: 'darken'
	},
	'.uk-blend-lighten': {
		mixBlendMode: 'lighten'
	},
	'.uk-blend-color-dodge': {
		mixBlendMode: 'color-dodge'
	},
	'.uk-blend-color-burn': {
		mixBlendMode: 'color-burn'
	},
	'.uk-blend-hard-light': {
		mixBlendMode: 'hard-light'
	},
	'.uk-blend-soft-light': {
		mixBlendMode: 'soft-light'
	},
	'.uk-blend-difference': {
		mixBlendMode: 'difference'
	},
	'.uk-blend-exclusion': {
		mixBlendMode: 'exclusion'
	},
	'.uk-blend-hue': {
		mixBlendMode: 'hue'
	},
	'.uk-blend-saturation': {
		mixBlendMode: 'saturation'
	},
	'.uk-blend-color': {
		mixBlendMode: 'color'
	},
	'.uk-blend-luminosity': {
		mixBlendMode: 'luminosity'
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
		'@apply relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold': {}
	},
	'.uk-box-shadow': {
		'@apply shadow': {}
	}
};
