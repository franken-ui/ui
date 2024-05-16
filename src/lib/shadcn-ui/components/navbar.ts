export default function () {
	return {
		// 'hook-navbar': {},
		'hook-container': {
			backgroundColor: null,
			'@apply border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60':
				{}
		},
		'hook-nav-item': {
			color: null,
			textTransform: null,
			'@apply text-foreground/60': {}
		},
		'hook-nav-item-hover': {
			color: null,
			'@apply text-foreground/80': {}
		},
		'hook-nav-item-onclick': {
			color: null
		},
		'hook-nav-item-active': {
			color: null,
			'@apply text-foreground': {}
		},
		'hook-item': {
			color: null,
			'@apply text-foreground/60': {}
		},
		'hook-toggle': {
			color: null,
			'@apply text-foreground/60': {}
		},
		'hook-toggle-hover': {
			color: null,
			'@apply text-foreground/80': {}
		},
		'hook-toggle-icon': {
			color: null,
			'@apply text-foreground/60': {}
		},
		'hook-toggle-icon-hover': {
			color: null,
			'@apply text-foreground/80': {}
		},
		// 'hook-subtitle': {},
		// 'hook-primary': {},
		// 'hook-transparent': {},
		// 'hook-sticky': {},
		'hook-dropdown': {
			padding: null,
			backgroundColor: null,
			color: null,
			boxShadow: null,
			'@apply rounded-md border border-border bg-popover text-popover-foreground shadow-md': {}
		},
		// 'hook-dropdown-large': {},
		// 'hook-dropdown-dropbar': {},
		// 'hook-dropdown-dropbar-large': {},
		// 'hook-dropdown-nav': {},
		'hook-dropdown-nav-item': {
			color: null,
			'@apply m-1 flex select-none items-center rounded-sm px-2 py-1.5 text-sm': {}
		},
		'hook-dropdown-nav-item-hover': {
			color: null,
			'@apply bg-accent text-accent-foreground': {}
		},
		'hook-dropdown-nav-item-active': {
			color: null,
			'@apply bg-secondary text-secondary-foreground': {}
		},
		'hook-dropdown-nav-subtitle': {},
		'hook-dropdown-nav-header': {
			color: null,
			'@apply m-1 px-2 py-1.5': {}
		},
		'hook-dropdown-nav-divider': {
			borderTop: '1px solid',
			'@apply border-border': {}
		},
		// 'hook-dropbar': {},
		'hook-misc': {
			".uk-navbar-left, .uk-navbar-right, [class*='uk-navbar-center']": {
				gap: null,
				'@apply gap-6 md:gap-6': {}
			},
			'.uk-navbar-nav': {
				gap: null,
				'@apply gap-6 md:gap-6': {}
			},
			'.uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle': {
				minHeight: null,
				fontFamily: null,
				'@apply min-h-14': {}
			},
			'.uk-navbar-nav > li > a[aria-expanded="true"] .uk-navbar-parent-icon': {
				transform: 'rotate(180deg)'
			},
			'.uk-navbar-dropdown-nav .uk-nav-sub a': {
				color: null,
				'@apply ml-1 px-2 py-1.5': {}
			},
			'.uk-navbar-dropdown-nav .uk-nav-sub a:hover': {
				color: null,
				'@apply bg-accent text-accent-foreground': {}
			},
			'.uk-navbar-dropdown-nav .uk-nav-sub li.uk-active > a': {
				color: null,
				'@apply bg-secondary text-secondary-foreground': {}
			},
			'.uk-navbar-dropdown-large': null,
			'.uk-navbar-dropdown-dropbar-large': null
		}
	};
}
