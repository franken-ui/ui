export default {
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
			'var(--uk-text-background-image, linear-gradient(90deg, #1e87f0 0%, #411ef0 100%))' // Customizable background image/gradient
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
		borderColor: 'var(--uk-blockquote-border-color, hsl(var(--border) / var(--border-alpha, 1)))',
		paddingLeft: 'var(--uk-blockquote-padding-left, 1.5rem)',
		fontStyle: 'italic'
	},
	'.uk-codespan': {
		position: 'relative',
		borderRadius: 'var(--uk-codespan-radius, 0.25rem)',
		backgroundColor: 'var(--uk-codespan-bg, hsl(var(--muted)))',
		padding: 'var(--uk-codespan-padding, 0.2rem 0.3rem)',
		fontFamily: 'var(--uk-codespan-font-family, var(--uk-global-font-family-mono))',
		fontWeight: 'var(--uk-codespan-font-weight, 600)'
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
		borderColor: 'var(--uk-kbd-border-color, hsl(var(--border) / var(--border-alpha, 1)))',
		backgroundColor: 'var(--uk-kbd-bg, hsl(var(--muted)))',

		// Typography
		fontFamily: 'var(--uk-kbd-font-family, var(--uk-global-font-family-mono))',
		fontSize: 'var(--uk-kbd-font-size, 0.8rem)',
		fontWeight: 'var(--uk-kbd-font-weight, 500)',
		color: 'var(--uk-kbd-color, hsl(var(--muted-foreground)))',

		// Behavior
		pointerEvents: 'none',
		userSelect: 'none'
	},
	// Hero sizes
	'.uk-hero-sm': {
		// Typography
		fontSize: 'var(--uk-hero-sm-font-size, 2.25rem)', // text-4xl
		lineHeight: 'var(--uk-hero-sm-leading, 1)'
	},

	'.uk-hero-md': {
		// Typography
		fontSize: 'var(--uk-hero-md-font-size, 3rem)', // text-5xl
		lineHeight: 'var(--uk-hero-md-leading, 1)'
	},

	'.uk-hero-lg': {
		fontSize: 'var(--uk-hero-lg-font-size, 3.75rem)', // from Tailwind's text-6xl
		lineHeight: 'var(--uk-hero-lg-line-height, 1)'
	},
	'.uk-hero-xl': {
		fontSize: 'var(--uk-hero-xl-font-size, 4.5rem)', // from Tailwind's text-7xl
		lineHeight: 'var(--uk-hero-xl-line-height, 1)'
	},
	'.uk-hero-2xl': {
		fontSize: 'var(--uk-hero-2xl-font-size, 5.25rem)', // from Tailwind's text-8xl
		lineHeight: 'var(--uk-hero-2xl-line-height, 1)'
	},
	'.uk-hero-3xl': {
		fontSize: 'var(--uk-hero-3xl-font-size, 6rem)', // from Tailwind's text-9xl
		lineHeight: 'var(--uk-hero-3xl-line-height, 1)'
	},

	// Heading variants
	'.uk-heading-divider': {
		// Layout
		paddingBottom: 'calc(5px + 0.1em)',
		// Border
		borderBottomWidth: 'calc(0.2px + 0.05em)',
		borderBottomStyle: 'solid',
		borderBottomColor:
			'var(--uk-heading-divider-border, hsl(var(--border) / var(--border-alpha, 1)))'
	},

	'.uk-heading-bullet': {
		position: 'relative'
	},

	'.uk-heading-bullet::before': {
		// Layout
		content: '""',
		display: 'inline-block',
		position: 'relative',
		top: 'calc(-0.1 * 1em)',
		verticalAlign: 'middle',
		height: 'calc(4px + 0.7em)',
		marginRight: 'calc(5px + 0.2em)',
		// Border
		borderLeftWidth: 'calc(5px + 0.1em)',
		borderLeftStyle: 'solid',
		borderLeftColor: 'var(--uk-heading-bullet-border, hsl(var(--border) / var(--border-alpha, 1)))'
	},

	'.uk-heading-line': {
		overflow: 'hidden'
	},
	'.uk-heading-line > *': {
		display: 'inline-block',
		position: 'relative'
	},
	'.uk-heading-line > ::before, .uk-heading-line > ::after': {
		content: '""',
		position: 'absolute',
		top: 'calc(50% - (calc(0.2px + 0.05em) / 2))',
		width: '2000px',
		borderBottom: 'calc(0.2px + 0.05em) solid',
		borderColor: 'var(--uk-heading-line-border, hsl(var(--border) / var(--border-alpha, 1)))'
	},
	'.uk-heading-line > ::before': {
		right: '100%',
		marginRight: 'calc(5px + 0.3em)'
	},
	'.uk-heading-line > ::after': {
		left: '100%',
		marginLeft: 'calc(5px + 0.3em)'
	},

	// Standard headings
	'.uk-h1': {
		// Typography
		fontSize: 'var(--uk-h1-font-size, 2.25rem)', // text-4xl
		fontWeight: 'var(--uk-h1-font-weight, 800)', // font-extrabold
		letterSpacing: 'var(--uk-h1-tracking, -0.025em)', // tracking-tight
		lineHeight: 'var(--uk-h1-leading, 1)'
	},
	'.uk-h2': {
		fontSize: 'var(--uk-h2-font-size, 1.875rem)', // text-3xl
		fontWeight: 'var(--uk-h2-font-weight, 600)', // font-semibold
		letterSpacing: 'var(--uk-h2-tracking, -0.025em)', // tracking-tight
		lineHeight: 'var(--uk-h2-line-height, 1)'
	},
	'.uk-h3': {
		fontSize: 'var(--uk-h3-font-size, 1.5rem)', // text-2xl
		fontWeight: 'var(--uk-h3-font-weight, 600)', // font-semibold
		letterSpacing: 'var(--uk-h3-tracking, -0.025em)', // tracking-tight
		lineHeight: 'var(--uk-h3-line-height, 1)'
	},
	'.uk-h4': {
		fontSize: 'var(--uk-h4-font-size, 1.25rem)', // text-xl
		fontWeight: 'var(--uk-h4-font-weight, 600)', // font-semibold
		letterSpacing: 'var(--uk-h4-tracking, -0.025em)', // tracking-tight
		lineHeight: 'var(--uk-h4-line-height, 1)'
	}
};
