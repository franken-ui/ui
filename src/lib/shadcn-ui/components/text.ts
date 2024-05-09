export default function () {
	return {
		'hook-lead': {
			fontSize: null,
			lineHeight: null,
			color: null,
			'@apply text-xl text-muted-foreground': {}
		},
		'hook-meta': {
			fontSize: null,
			lineHeight: null,
			color: null,
			'@apply text-sm text-muted-foreground': {}
		},
		'hook-small': {
			fontSize: null,
			lineHeight: null,
			'@apply text-sm': {}
		},
		'hook-large': {
			fontSize: null,
			lineHeight: null,
			'@apply text-lg': {}
		},
		'hook-background': {},
		'hook-misc': {
			'.uk-text-meta > a': {
				color: null
			},
			'.uk-text-meta > a:hover': {
				color: null,
				textDecoration: null
			},
			'.uk-text-muted': { color: null, '@apply text-muted-foreground': {} },
			'.uk-text-emphasis': null,
			'.uk-text-primary': null,
			'.uk-text-secondary': null,
			'.uk-text-success': null,
			'.uk-text-warning': null,
			'.uk-text-danger': { color: null, '@apply text-destructive': {} }
		}
	};
}
