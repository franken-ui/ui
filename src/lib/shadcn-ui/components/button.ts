export default function () {
	return {
		'hook-button': {
			margin: null,
			border: null,
			overflow: null,
			font: null,
			color: null,
			textTransform: null,
			WebkitAppearance: null,
			borderRadius: null,
			display: null,
			boxSizing: null,
			padding: null,
			verticalAlign: null,
			fontSize: null,
			lineHeight: null,
			textAlign: null,
			textDecoration: null,
			'@apply inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring':
				{}
		},
		'hook-disabled': {
			backgroundColor: null,
			color: null,
			borderColor: null,
			'@apply opacity-50': {}
		},
		'hook-default': {
			backgroundColor: null,
			color: null,
			border: null,
			'@apply border border-input bg-background text-accent-foreground': {}
		},
		'hook-default-hover': {
			backgroundColor: null,
			color: null,
			borderColor: null,
			'@apply bg-accent': {}
		},
		'hook-default-active': {
			backgroundColor: null,
			color: null,
			borderColor: null
		},
		'hook-primary': {
			backgroundColor: null,
			color: null,
			'@apply bg-primary text-primary-foreground': {}
		},
		'hook-primary-hover': {
			backgroundColor: null,
			color: null,
			'@apply opacity-90': {}
		},
		'hook-primary-active': {
			backgroundColor: null,
			color: null
		},
		'hook-secondary': {
			backgroundColor: null,
			color: null,
			'@apply bg-secondary text-secondary-foreground': {}
		},
		'hook-secondary-hover': {
			backgroundColor: null,
			color: null,
			'@apply opacity-90': {}
		},
		'hook-secondary-active': {
			backgroundColor: null,
			color: null
		},
		'hook-danger': {
			backgroundColor: null,
			color: null,
			'@apply bg-destructive text-destructive-foreground': {}
		},
		'hook-danger-hover': {
			backgroundColor: null,
			color: null,
			'@apply opacity-90': {}
		},
		'hook-danger-active': {
			backgroundColor: null,
			color: null
		},
		'hook-link': {
			color: null,
			lineHeight: null,
			'@apply h-auto rounded-none shadow-none': {}
		},
		'hook-link-hover': {
			color: null
		},
		'hook-link-disabled': {
			color: null,
			'@apply opacity-50': {}
		},
		'hook-text': {
			color: null,
			lineHeight: null,
			'@apply h-auto rounded-none shadow-none': {}
		},
		'hook-text-hover': {
			color: null
		},
		'hook-text-disabled': {
			color: null,
			'@apply opacity-50': {}
		},
		'hook-small': {
			padding: null,
			lineHeight: null,
			fontSize: null,
			'@apply h-8 px-3 py-0 text-xs': {}
		},
		'hook-large': {},
		'hook-misc': {
			'.uk-button-large': null,
			'.uk-button-group': null,
			'.uk-button-group > .uk-button:nth-child(n + 2), .uk-button-group > div:nth-child(n + 2) .uk-button':
				null,
			'.uk-button-group .uk-button:hover, .uk-button-group .uk-button:focus, .uk-button-group .uk-button:active, .uk-button-group .uk-button.uk-active':
				null,
			'.uk-button-ghost': {
				'@apply shadow-none': {}
			},
			'.uk-button-ghost:hover': {
				'@apply bg-accent': {}
			},
			'.uk-button-xsmall': {
				'@apply h-7 px-3 py-0 text-xs': {}
			}
		}
	};
}
