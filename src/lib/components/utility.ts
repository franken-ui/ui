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
	'.uk-paragraph': {
		lineHeight: 'var(--uk-paragraph-line-height, 1.75rem)'
	},
	'.uk-paragraph:not(:first-child)': {
		marginTop: 'var(--uk-paragraph-margin-top, 1.5rem)'
	},
	'.uk-blockquote': {
		marginTop: 'var(--uk-blockquote-margin-top, 1.5rem)',
		borderLeftWidth: 'var(--uk-blockquote-border-width, 2px)',
		borderColor: 'var(--uk-blockquote-border-color, hsl(var(--border)))',
		paddingLeft: 'var(--uk-blockquote-padding-left, 1.5rem)',
		fontStyle: 'italic'
	},
	'.uk-codespan': {
		position: 'relative',
		borderRadius: 'var(--uk-codespan-radius, 0.25rem)',
		backgroundColor: 'var(--uk-codespan-bg, hsl(var(--muted)))',
		padding: 'var(--uk-codespan-padding, 0.2rem 0.3rem)',
		fontFamily:
			'var(--uk-codespan-font-family, ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace)',
		fontWeight: 'var(--uk-codespan-font-weight, 600)'
	},
	'.uk-text-truncate': {
		maxWidth: 'var(--uk-text-truncate-max-width, 100%)', // Customizable max-width for truncation
		overflow: 'hidden', // required for truncation, static
		textOverflow: 'ellipsis', // required for truncation, static
		whiteSpace: 'nowrap' // required for truncation, static
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
	'.uk-kbd': {
		// Layout
		display: 'var(--uk-kbd-display, inline-flex)',
		alignItems: 'var(--uk-kbd-align, center)',
		padding: 'var(--uk-kbd-padding, 0 0.375rem)',

		// Visual
		borderRadius: 'var(--uk-global-radius)',
		borderWidth: 'var(--uk-kbd-border-width, 1px)',
		borderStyle: 'var(--uk-kbd-border-style, solid)',
		borderColor: 'var(--uk-kbd-border-color, hsl(var(--border)))',
		backgroundColor: 'var(--uk-kbd-bg, hsl(var(--muted)))',

		// Typography
		fontFamily:
			'var(--uk-kbd-font-family, ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace)',
		fontSize: 'var(--uk-kbd-font-size, 0.8rem)',
		fontWeight: 'var(--uk-kbd-font-weight, 500)',
		color: 'var(--uk-kbd-color, hsl(var(--muted-foreground)))',

		// Behavior
		pointerEvents: 'none',
		userSelect: 'none'
	},

	// Horizontal rule
	'.uk-hr': {
		borderColor: 'var(--uk-hr-color, hsl(var(--border)))'
	},

	// Tags
	'.uk-tag': {
		// Layout
		display: 'var(--uk-tag-display, inline-flex)',
		alignItems: 'var(--uk-tag-align, center)',
		minHeight: 'var(--uk-tag-height, 1.75rem)',
		padding: 'var(--uk-tag-padding, 0.25rem 0.5rem)',
		gap: 'var(--uk-tag-gap, 0.5rem)',

		// Typography
		fontSize: 'var(--uk-tag-font-size, var(--uk-global-font-size-s))',
		lineHeight: 'var(--uk-tag-leading, var(--uk-global-leading-s))',

		// Visual
		borderRadius: 'var(--uk-tag-radius, var(--uk-global-radius-s))',
		backgroundColor: 'var(--uk-tag-bg, transparent)',
		color: 'var(--uk-tag-color, hsl(var(--foreground)))',

		// Reset transition
		transition: 'none'
	},

	'.uk-tag:hover': {
		transitionProperty: 'background-color', // Removed variable - fundamental transition
		transitionDuration: 'var(--uk-tag-hover-duration, 150ms)',
		transitionTimingFunction: 'ease-in-out', // Removed variable - fundamental timing
		opacity: 'var(--uk-tag-hover-opacity, 0.8)'
	},

	// Variants
	'.uk-tag-primary': {
		'--uk-tag-bg': 'hsl(var(--primary))',
		'--uk-tag-color': 'hsl(var(--primary-foreground))'
	},
	'.uk-tag-primary:hover': {
		'--uk-tag-bg': 'hsl(var(--primary) / 0.8)'
	},
	'.uk-tag-secondary': {
		'--uk-tag-bg': 'hsl(var(--secondary))',
		'--uk-tag-color': 'hsl(var(--secondary-foreground))'
	},
	'.uk-tag-secondary:hover': {
		'--uk-tag-bg': 'hsl(var(--secondary) / 0.8)'
	},
	'.uk-tag-destructive': {
		'--uk-tag-bg': 'hsl(var(--destructive))',
		'--uk-tag-color': 'hsl(var(--destructive-foreground))'
	},
	'.uk-tag-destructive:hover': {
		'--uk-tag-bg': 'hsl(var(--destructive) / 0.8)'
	},

	// Placeholder
	'.uk-placeholder': {
		marginBottom: 'var(--uk-placeholder-margin-bottom, 1.25rem)',
		padding: 'var(--uk-placeholder-padding, 2rem 2rem)',
		background: 'var(--uk-placeholder-background, transparent)',
		border: 'var(--uk-placeholder-border, 1px dashed)', // Shorthand variable for border
		borderColor: 'var(--uk-placeholder-border-color, hsl(var(--border)))' // borderColor is already using a variable, encapsulate it too for component level customization
	},
	'.uk-placeholder > :last-child': {
		marginBottom: '0' // obvious value, keep static
	},

	// Progress
	'.uk-progress': {
		verticalAlign: 'baseline', // obvious value
		display: 'block', // obvious value
		width: '100%', // obvious value
		border: '0', // obvious value
		marginBottom: 'var(--uk-progress-margin-bottom, 1.25rem)',
		height: 'var(--uk-progress-height, 1rem)',
		borderRadius: 'var(--uk-progress-radius, 500px)',
		overflow: 'hidden', // obvious value
		backgroundColor: 'var(--uk-progress-track-color, hsl(var(--primary) / 0.2))' // Renamed for clarity - track color
	},
	'.uk-progress::-webkit-progress-bar': {
		backgroundColor: 'transparent' // browser specific, obvious value
	},
	'.uk-progress::-webkit-progress-value': {
		transition: 'var(--uk-progress-transition, width 0.6s ease)', // Shorthand variable for transition
		backgroundColor: 'var(--uk-progress-value-color, hsl(var(--primary)))' // Renamed for clarity - value color
	},
	'.uk-progress::-moz-progress-bar': {
		transition: 'var(--uk-progress-transition, width 0.6s ease)', // Reusing the same variable for consistency
		backgroundColor: 'var(--uk-progress-value-color, hsl(var(--primary)))' // Reusing the same variable for consistency
	},

	// Text
	'.uk-text-lead': {
		fontSize: 'var(--uk-text-lead-font-size, 1.25rem)',
		lineHeight: 'var(--uk-text-lead-line-height, 1.75rem)',
		color: 'var(--uk-text-lead-color, hsl(var(--muted-foreground)))'
	},
	'.uk-text-meta': {
		color: 'var(--uk-text-meta-color, var(--uk-chart-muted-color, hsl(var(--muted-foreground))))' // Nested variable, allow override of meta color and fallback to chart muted color and then muted-foreground
	},
	'.uk-text-background': {
		WebkitBackgroundClip: 'text', // vendor prefix, static
		color: 'transparent !important', // important and functional, static
		display: 'inline-block', // structural, static
		backgroundColor: 'var(--uk-text-background-background-color, #1e87f0)', // Customizable background color
		backgroundImage:
			'var(--uk-text-background-background-image, linear-gradient(90deg, #1e87f0 0%, #411ef0 100%))' // Customizable background image/gradient
	},
	'th.uk-text-truncate, td.uk-text-truncate': {
		maxWidth: '0' // table specific override, functional, static
	},
	'th.uk-text-break, td.uk-text-break': {
		wordBreak: 'break-word' // functional for word breaking in tables, static
	}
};
