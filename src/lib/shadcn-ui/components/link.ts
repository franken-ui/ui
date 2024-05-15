export default function () {
	return {
		'hook-muted': {
			color: null,
			'@apply font-medium text-muted-foreground underline underline-offset-4': {}
		},
		'hook-muted-hover': {
			color: null
		},
		'hook-text': {
			color: null
		},
		'hook-text-hover': {
			color: null,
			'@apply underline underline-offset-4': {}
		},
		'hook-heading': {
			color: null
		},
		'hook-heading-hover': {
			color: null
		},
		'hook-reset': {
			color: null,
			fontWeight: '400 !important'
		},
		'hook-misc': {
			'.uk-link-toggle': {
				color: null
			},
			'.uk-link': {
				'@apply font-medium underline underline-offset-4': {}
			},
			'a.uk-link-heading, .uk-link-heading a, .uk-link-toggle .uk-link-heading': null,
			'a.uk-link-heading:hover, .uk-link-heading a:hover, .uk-link-toggle:hover .uk-link-heading':
				null
		}
	};
}
