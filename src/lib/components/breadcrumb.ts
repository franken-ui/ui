export default {
	'.uk-breadcrumb > *': {
		// Layout
		display: 'var(--uk-breadcrumb-display, contents)'
	},
	'.uk-breadcrumb > * > *': {
		// Layout
		display: 'var(--uk-breadcrumb-item-display, inline-flex)',
		alignItems: 'var(--uk-breadcrumb-item-align, center)',

		// Typography
		color: 'var(--uk-breadcrumb-item-color, hsl(var(--muted-foreground)))'
	},
	'.uk-breadcrumb > * > :hover': {
		// Typography
		textDecoration: 'var(--uk-breadcrumb-item-hover-decoration, none)',
		color: 'var(--uk-breadcrumb-item-hover-color, hsl(var(--foreground)))',

		// Hover-only transition
		transitionProperty: 'var(--uk-breadcrumb-item-hover-transition-property, color)',
		transitionDuration: 'var(--uk-breadcrumb-item-hover-transition-duration, 150ms)',
		transitionTimingFunction: 'var(--uk-breadcrumb-item-hover-transition-timing, ease-in-out)'
	},
	'.uk-breadcrumb > :last-child > span, .uk-breadcrumb > :last-child > a:not([href])': {
		// Typography
		fontWeight: 'var(--uk-breadcrumb-active-font-weight, 500)',
		color: 'var(--uk-breadcrumb-active-color, hsl(var(--foreground)))'
	},
	'.uk-breadcrumb > :nth-child(n + 2):not(.uk-first-column)::before': {
		// Content
		content: 'var(--uk-breadcrumb-divider, "/")',
		display: 'var(--uk-breadcrumb-divider-display, inline-block)',

		// Layout
		margin: 'var(--uk-breadcrumb-divider-margin, 0 0.75rem 0 0.5rem)',

		// Typography
		color: 'var(--uk-breadcrumb-divider-color, hsl(var(--muted-foreground)))'
	},
	'.uk-breadcrumb > .uk-disabled > *': {
		// Visual
		opacity: 'var(--uk-breadcrumb-disabled-opacity, 0.5)',
		pointerEvents: 'none' // static no need to make it a variable
	}
};
