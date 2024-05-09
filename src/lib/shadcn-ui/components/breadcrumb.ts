export default function () {
	return {
		'hook-breadcrumb': {
			'@apply text-sm': {}
		},
		// 'hook-breadcrumb-solid': {},
		'hook-item': {
			display: null,
			alignItems: null,
			fontSize: null,
			fontWeight: null,
			textDecoration: null,
			color: null,
			'@apply inline-flex items-center text-muted-foreground': {}
		},
		'hook-item-hover': {
			'@apply text-foreground': {}
		},
		'hook-item-disabled': {
			'@apply opacity-50': {}
		},
		'hook-item-active': {
			'@apply font-medium text-foreground': {}
		},
		'hook-divider': {
			margin: null,
			color: null,
			'@apply ml-2 mr-3 text-muted-foreground': {}
		},
		'hook-misc': {
			'.uk-breadcrumb-solid': null
		}
	};
}
