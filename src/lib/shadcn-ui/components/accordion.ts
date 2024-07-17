export default function () {
	return {
		'hook-accordion': {
			'@apply text-sm': {}
		},
		'hook-item': {
			marginTop: null
		},
		'hook-title': {
			fontSize: null,
			lineHeight: null,
			color: null,
			'@apply items-start px-0 py-4 font-medium text-foreground': {}
		},
		'hook-title-hover': {
			color: null,
			textDecoration: null,
			'@apply underline': {}
		},
		// 'hook-title-focus': {},
		// 'hook-title-active': {},
		'hook-content': {
			marginTop: null,
			'@apply pb-4 text-foreground': {}
		},
		'hook-misc': {
			'.uk-accordion > li': {
				'@apply border-b border-border': {}
			},
			'.uk-accordion-icon': {
				'@apply text-muted-foreground': {}
			},
			'.uk-accordion-content > :last-child': {
				marginBottom: null
			}
		}
	};
}
