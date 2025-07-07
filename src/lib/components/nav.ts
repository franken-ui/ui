export default {
	'.uk-nav-primary, .uk-nav-secondary': {
		'--uk-nav-item-padding': '0.5rem 1rem',
		'--uk-nav-item-margin': '0.25rem',
		'--uk-nav-sub-item-padding': '0.5rem 1rem',
		'--uk-nav-sub-item-margin': '0 0.5rem',
		'--uk-nav-item-active-font-weight': '400',
		'--uk-nav-item-hover-decoration': 'none'
	},
	'.uk-nav-primary .uk-nav-sub li > a:hover, .uk-nav-secondary .uk-nav-sub li > a:hover': {
		'--uk-nav-item-hover-bg': 'hsl(var(--accent))',
		'--uk-nav-item-hover-color': 'hsl(var(--accent-foreground))'
	},
	'.uk-nav-default': {
		'--uk-nav-item-color': 'hsl(var(--muted-foreground))'
	},
	'.uk-nav-default li > a:hover': {
		'--uk-nav-item-hover-color': 'hsl(var(--muted-foreground))'
	},
	'.uk-nav-default > li.uk-active': {
		'--uk-nav-item-font-weight': '500',
		'--uk-nav-item-color': 'hsl(var(--foreground))'
	},
	'.uk-nav-primary > li.uk-active': {
		'--uk-nav-item-bg': 'hsl(var(--primary))',
		'--uk-nav-item-color': 'hsl(var(--primary-foreground))'
	},
	'.uk-nav-secondary > li.uk-active': {
		'--uk-nav-item-bg': 'hsl(var(--secondary))',
		'--uk-nav-item-color': 'hsl(var(--secondary-foreground))'
	},
	'.uk-nav-primary > li > a:hover, .uk-nav-secondary > li > a:hover': {
		'--uk-nav-item-hover-bg': 'hsl(var(--accent))',
		'--uk-nav-item-hover-color': 'hsl(var(--accent-foreground))'
	},
	'.uk-nav-header': {
		fontSize: 'var(--uk-nav-header-font-size, var(--uk-global-font-size))',
		lineHeight: 'var(--uk-nav-header-leading, var(--uk-global-leading))',
		fontWeight: 'var(--uk-nav-header-font-weight, 600)',
		margin: 'var(--uk-nav-header-margin, var(--uk-nav-item-margin))',
		padding: 'var(--uk-nav-header-padding, var(--uk-nav-item-padding))'
	},
	'.uk-nav-divider': {
		borderWidth: 'var(--uk-nav-divider-width, 1px 0 0 0)',
		borderStyle: 'var(--uk-nav-divider-style, solid)',
		borderColor: 'var(--uk-nav-divider-color, hsl(var(--border) / var(--border-alpha, 1)))'
	},
	'ul.uk-nav-sub > :not([hidden]) ~ :not([hidden])': {
		marginTop: 'var(--uk-nav-sub-item-margin-top, 0.25rem)',
		marginBottom: 'calc(var(--uk-nav-sub-item-margin-bottom) * 0)'
	},
	'.uk-nav-sub ul > :not([hidden]) ~ :not([hidden])': {
		marginTop: 'var(--uk-nav-sub-item-margin-top, 0.25rem)',
		marginBottom: 'calc(var(--uk-nav-sub-item-margin-bottom) * 0)'
	},
	'.uk-nav-sub, .uk-nav-sub ul': {
		borderInlineStartWidth: 'var(--uk-nav-sub-width)',
		borderColor: 'hsl(var(--border) / var(--border-alpha, 1))',
		borderInlineStartColor: 'hsl(var(--border) / var(--border-alpha, 1))'
	},
	'.uk-nav-sub': {
		marginInlineStart: 'var(--uk-nav-sub-margin-start, 1.25rem)',
		marginInlineEnd: 'var(--uk-nav-sub-margin-end, 0.25rem)'
	},
	'.uk-nav-sub ul': {
		marginInlineStart: 'var(--uk-nav-sub-deeper-margin-start, 1.25rem)',
		marginTop: 'var(--uk-nav-sub-deeper-margin-top, 0.25rem)'
	},
	'.uk-nav-sub li': { position: 'relative' },
	'.uk-nav-sub li::before': {
		content: "''",
		position: 'absolute',
		left: 'calc(var(--uk-nav-sub-width) * -1)',
		bottom: '0px',
		top: '0px',
		width: 'var(--uk-nav-sub-width)'
		// backgroundColor: 'hsl(var(--border) / var(--border-alpha, 1))'
	},
	'.uk-nav-sub li.uk-active::before': {
		backgroundColor: 'hsl(var(--primary))'
	},
	'.uk-nav-parent-icon': {
		marginInlineStart: 'auto',
		transition: 'var(--uk-nav-parent-icon-transition, transform 0.3s ease-out)'
	},
	'.uk-nav > li.uk-open > a .uk-nav-parent-icon': {
		transform: 'rotate(180deg)'
	},
	'.uk-nav a': { borderRadius: 'var(--uk-global-radius)' },
	'.uk-nav li > a': {
		display: 'var(--uk-nav-item-display, flex)',
		alignItems: 'var(--uk-nav-item-align-items, center)'
	},
	'.uk-nav > li > a': {
		backgroundColor: 'var(--uk-nav-item-bg)',
		color: 'var(--uk-nav-item-color)',
		padding: 'var(--uk-nav-item-padding)',
		margin: 'var(--uk-nav-item-margin)'
	},
	'.uk-nav > li.uk-active > a': {
		fontWeight: 'var(--uk-nav-item-active-font-weight, 500)'
	},
	'.uk-nav li:not(.uk-active) > a:hover': {
		backgroundColor: 'var(--uk-nav-item-hover-bg)',
		color: 'var(--uk-nav-item-hover-color)',
		textDecoration: 'var(--uk-nav-item-hover-decoration, underline)',
		transitionProperty: 'var(--uk-nav-item-hover-transition-property, background-color)',
		transitionDuration: 'var(--uk-nav-item-hover-transition-duration, 150ms)',
		transitionTimingFunction: 'var(--uk-nav-item-hover-transition-timing, ease-in-out)'
	},
	'.uk-nav-sub a': {
		backgroundColor: 'var(--uk-nav-sub-bg, var(--uk-nav-item-bg))',
		color: 'var(--uk-nav-sub-color, var(--uk-nav-item-color))',
		padding: 'var(--uk-nav-sub-item-padding)',
		margin: 'var(--uk-nav-sub-item-margin)'
	},
	'.uk-nav-sub li:not(.uk-active) > a:hover': {
		backgroundColor: 'var(--uk-nav-item-hover-bg)',
		color: 'var(--uk-nav-item-hover-color)',
		textDecoration: 'var(--uk-nav-item-hover-decoration, underline)',
		transitionProperty: 'var(--uk-nav-item-hover-transition-property, background-color)',
		transitionDuration: 'var(--uk-nav-item-hover-transition-duration, 150ms)',
		transitionTimingFunction: 'var(--uk-nav-item-hover-transition-timing, ease-in-out)'
	},

	// Subnav
	'.uk-subnav': {
		display: 'var(--uk-subnav-display, flex)',
		alignItems: 'var(--uk-subnav-align-items, center)'
	},
	'.uk-subnav > * > :first-child': {
		// Transitions
		transition: 'var(--uk-subnav-item-transition, 0.1s ease-in-out)', // Shorthand variable for transition
		transitionProperty: 'var(--uk-subnav-item-transition-property, color, background-color)',

		// Layout
		display: 'var(--uk-subnav-item-display, flex)',
		alignItems: 'var(--uk-subnav-item-align-items, center)',
		justifyContent: 'var(--uk-subnav-item-justify-content, center)',
		borderRadius: 'var(--uk-subnav-item-radius, 9999px)',
		paddingLeft: 'var(--uk-subnav-item-padding-horizontal, 1rem)', // Consistent naming for horizontal padding
		paddingRight: 'var(--uk-subnav-item-padding-horizontal, 1rem)', // Consistent naming for horizontal padding

		// Typography
		textAlign: 'var(--uk-subnav-item-text-align, center)',
		fontWeight: 'var(--uk-subnav-item-font-weight, 500)',
		color: 'var(--uk-subnav-item-color, hsl(var(--muted-foreground)))'
	},
	'.uk-subnav > * > a:hover': {
		color: 'var(--uk-subnav-item-hover-color, hsl(var(--primary)))'
	},
	'.uk-subnav > .uk-active > a': {
		backgroundColor: 'var(--uk-subnav-item-active-background)', // Renamed for clarity to item active background
		color: 'var(--uk-subnav-item-active-color)' // Renamed for clarity to item active color
	},
	'.uk-subnav > .uk-active > a:hover': {
		backgroundColor: 'var(--uk-subnav-item-active-hover-background)', // Renamed for clarity
		color: 'var(--uk-subnav-item-active-hover-color)' // Renamed for clarity
	},
	// Modifiers
	'.uk-subnav-primary': {
		'--uk-subnav-item-active-background': 'hsl(var(--primary))', // Consistent naming
		'--uk-subnav-item-active-color': 'hsl(var(--primary-foreground))', // Consistent naming
		'--uk-subnav-item-active-hover-background': 'hsl(var(--primary) / 0.8)', // Consistent naming
		'--uk-subnav-item-active-hover-color': 'hsl(var(--primary-foreground))' // Consistent naming
	},
	'.uk-subnav-secondary': {
		'--uk-subnav-item-active-background': 'hsl(var(--secondary))',
		'--uk-subnav-item-active-color': 'hsl(var(--secondary-foreground))',
		'--uk-subnav-item-active-hover-background': 'hsl(var(--secondary) / 0.8)',
		'--uk-subnav-item-active-hover-color': 'hsl(var(--secondary-foreground))'
	},
	'.uk-subnav-destructive': {
		'--uk-subnav-item-active-background': 'hsl(var(--destructive) / var(--destructive-alpha, 1))',
		'--uk-subnav-item-active-color': 'hsl(var(--destructive-foreground))',
		'--uk-subnav-item-active-hover-alpha': 'calc(var(--destructive-alpha, 1) * 0.8)',
		'--uk-subnav-item-active-hover-background':
			'hsl(var(--destructive) / var(--uk-subnav-item-active-hover-alpha))',
		'--uk-subnav-item-active-hover-color': 'hsl(var(--destructive-foreground))'
	}
};
