export default function () {
	return {
		'hook-alert': {
			marginBottom: null,
			padding: null,
			backgroundColor: null,
			color: null,
			'@apply rounded-lg border border-border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7':
				{}
		},
		'hook-close': {
			top: null,
			right: null,
			color: null,
			opacity: null,
			'@apply right-3': {}
		},
		'hook-close-hover': {
			color: null,
			opacity: null
		},
		// 'hook-close-focus': {},
		// 'hook-default': {},
		// 'hook-primary': {},
		// 'hook-success': {},
		// 'hook-warning': {},
		'hook-danger': {
			backgroundColor: null,
			color: null,
			'@apply border border-destructive text-destructive': {}
		},
		'hook-misc': {
			'* + .uk-alert': {
				marginTop: null
			},
			'.uk-alert > :last-child': {
				marginBottom: null
			},
			'.uk-alert-close:first-child + *': {
				marginTop: null
			},
			'.uk-alert-primary': null,
			'.uk-alert-success': null,
			'.uk-alert-warning': null,
			'.uk-alert a:not([class]):hover': {
				color: null,
				textDecoration: null
			},
			'.uk-alert-title': {
				'@apply mb-1 font-medium leading-none tracking-tight': {}
			},
			'.uk-alert-description': {
				'@apply [&_p]:leading-relaxed': {}
			}
		}
	};
}
