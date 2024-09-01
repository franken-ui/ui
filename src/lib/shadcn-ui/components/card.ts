export default function () {
	return {
		'hook-card': {
			'@apply rounded-xl border border-border shadow': {}
		},
		'hook-body': {
			padding: null,
			'@apply p-6': {}
		},
		'hook-header': {
			padding: null,
			'@apply p-6': {}
		},
		'hook-footer': {
			padding: null,
			'@apply p-6': {}
		},
		// 'hook-media': {},
		// 'hook-media-top': {},
		// 'hook-media-bottom': {},
		// 'hook-media-left': {},
		// 'hook-media-right': {},
		'hook-title': {
			fontSize: null,
			lineHeight: null,
			'@apply font-semibold leading-none tracking-tight': {}
		},
		// 'hook-badge': {},
		// 'hook-hover': {},
		'hook-default': {
			backgroundColor: null,
			color: null,
			boxShadow: null,
			'@apply bg-card text-card-foreground': {}
		},
		'hook-default-title': {
			color: null
		},
		// 'hook-default-hover': {},
		'hook-default-header': {
			borderBottom: '1px solid',
			'@apply border-border': {}
		},
		'hook-default-footer': {
			borderTop: '1px solid',
			'@apply border-border': {}
		},
		'hook-primary': {
			backgroundColor: null,
			color: null,
			boxShadow: null,
			'@apply bg-primary text-primary-foreground': {}
		},
		'hook-primary-title': {
			color: null
		},
		// 'hook-primary-hover': {},
		'hook-secondary': {
			backgroundColor: null,
			color: null,
			boxShadow: null,
			'@apply bg-secondary text-secondary-foreground': {}
		},
		'hook-secondary-title': {
			color: null
		},
		// 'hook-secondary-hover': {},
		'hook-misc': {
			"[class*='uk-card-media']": null,
			'.uk-card-media-top, .uk-grid-stack > .uk-card-media-left, .uk-grid-stack > .uk-card-media-right':
				null,
			'.uk-card-media-bottom': null,
			':not(.uk-grid-stack) > .uk-card-media-left': null,
			':not(.uk-grid-stack) > .uk-card-media-right': null,
			'.uk-card-badge': null,
			'.uk-card-badge:first-child + *': null,
			'.uk-card-hover:not(.uk-card-default):not(.uk-card-primary):not(.uk-card-secondary):hover':
				null,
			'.uk-card-default.uk-card-hover:hover': null,
			'.uk-card-primary.uk-card-hover:hover': null,
			'.uk-card-secondary.uk-card-hover:hover': null,
			'.uk-card-small.uk-card-body, .uk-card-small .uk-card-body': null,
			'.uk-card-small .uk-card-header': null,
			'.uk-card-small .uk-card-footer': null,
			'.uk-card-body > .uk-nav-default': null,
			'.uk-card-body > .uk-nav-default:only-child': null,
			'.uk-card-body > .uk-nav-default > li > a, .uk-card-body > .uk-nav-default .uk-nav-header, .uk-card-body > .uk-nav-default .uk-nav-divider':
				null,
			'.uk-card-body > .uk-nav-default .uk-nav-sub': null,
			'.uk-card-small > .uk-nav-default': null,
			'.uk-card-small > .uk-nav-default:only-child': null,
			'.uk-card-small > .uk-nav-default > li > a, .uk-card-small > .uk-nav-default .uk-nav-header, .uk-card-small > .uk-nav-default .uk-nav-divider':
				null,
			'.uk-card-small > .uk-nav-default .uk-nav-sub': null,
			'.uk-card-danger': {
				'@apply bg-destructive text-destructive-foreground': {}
			},
			'.uk-card-header + .uk-card-body, .uk-card-body + .uk-card-footer': {
				'@apply pt-0': {}
			},
			'.uk-card-header ~ .uk-card-footer': {
				'@apply pt-0': {}
			}
		}
	};
}
