export default function () {
	return {
		'hook-icon': {
			display: 'inline-flex'
		},
		'hook-link': {
			color: null
		},
		'hook-link-hover': {
			color: null
		},
		'hook-link-active': {
			color: null
		},
		'hook-button': {
			boxSizing: null,
			width: null,
			height: null,
			borderRadius: null,
			backgroundColor: null,
			color: null,
			verticalAlign: null,
			display: null,
			justifyContent: null,
			alignItems: null,
			transition: null,
			transitionProperty: null,
			'@apply inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50':
				{}
		},
		'hook-button-hover': {
			backgroundColor: null,
			color: null,
			'@apply bg-accent text-accent-foreground': {}
		},
		'hook-button-active': {
			backgroundColor: null,
			color: null
		},
		'hook-misc': {
			'.uk-icon-button-small': {
				'@apply h-8 w-8': {}
			},
			'.uk-icon-button-xsmall': {
				'@apply h-7 w-7': {}
			}
		}
	};
}
