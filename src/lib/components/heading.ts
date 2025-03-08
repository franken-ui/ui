export default {
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
		borderBottomColor: 'var(--uk-heading-divider-border, hsl(var(--border)))'
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
		borderLeftColor: 'var(--uk-heading-bullet-border, hsl(var(--border)))'
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
		borderColor: 'var(--uk-heading-line-border, hsl(var(--border)))'
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
