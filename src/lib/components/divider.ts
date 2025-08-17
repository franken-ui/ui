export default {
	"[class*='uk-divider']": {
		border: 'none', // Static - core reset
		height: 'var(--uk-divider-height, 1px)'
	},

	'.uk-hr': {
		borderColor: 'var(--uk-hr-color, hsl(var(--border) / var(--border-alpha, 1)))'
	},

	'.uk-divider-icon': {
		opacity: 'var(--border-alpha)',
		position: 'relative', // Static - core positioning
		height: 'var(--uk-divider-icon-height, 1.25rem)',
		backgroundImage: 'var(--uk-divider-icon-image)',
		backgroundRepeat: 'no-repeat', // Static - icon behavior
		backgroundPosition: '50% 50%' // Static - icon centering
	},

	'.uk-divider-icon::before, .uk-divider-icon::after': {
		content: '""', // Static - pseudo element
		position: 'absolute', // Static - core positioning
		top: '50%', // Static - vertical centering
		maxWidth: 'calc(50% - (3.5rem / 2))', // Static - line width calculation
		borderBottom: 'var(--uk-divider-icon-line-border, 1px solid hsl(var(--border)))'
	},

	'.uk-divider-icon::before': {
		right: 'calc(50% + (3.5rem / 2))', // Static - line positioning
		width: '100%' // Static - full width
	},

	'.uk-divider-icon::after': {
		left: 'calc(50% + (3.5rem / 2))', // Static - line positioning
		width: '100%' // Static - full width
	},

	'.uk-divider-sm': {
		lineHeight: '0' // Static - remove line spacing
	},

	'.uk-divider-sm::after': {
		content: '""', // Static - pseudo element
		display: 'inline-block', // Static - layout behavior
		width: 'var(--uk-divider-sm-width, 100px)',
		maxWidth: '100%', // Static - responsive behavior
		borderTop: 'var(--uk-divider-sm-border, 1px solid hsl(var(--border) / var(--border-alpha, 1)))',
		verticalAlign: 'top', // Static - alignment
		borderBottom:
			'var(--uk-divider-sm-border, 1px solid hsl(var(--border) / var(--border-alpha, 1)))'
	},

	'.uk-divider-vertical': {
		width: 'max-content', // Static - content fitting
		height: 'var(--uk-divider-vertical-height, 100px)',
		marginLeft: 'auto', // Static - horizontal centering
		marginRight: 'auto', // Static - horizontal centering
		borderLeft:
			'var(--uk-divider-vertical-border, 1px solid hsl(var(--border) / var(--border-alpha, 1)))',
		borderBottom:
			'var(--uk-divider-vertical-border, 1px solid hsl(var(--border) / var(--border-alpha, 1)))'
	}
};
