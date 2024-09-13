export default {
	'.uk-alert': {
		position: 'relative',
		'@apply rounded-lg border border-border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-3 [&>svg~*]:pl-7':
			{}
	},
	'.uk-alert-close': {
		position: 'absolute',
		'@apply right-3': {}
	},
	'.uk-alert-danger': {
		'@apply border border-destructive text-destructive': {}
	},
	'.uk-alert h1, .uk-alert h2, .uk-alert h3, .uk-alert h4, .uk-alert h5, .uk-alert h6': {
		color: 'inherit'
	},
	'.uk-alert a:not([class])': {
		color: 'inherit',
		textDecoration: 'underline'
	},
	'.uk-alert-title': {
		'@apply mb-1 font-medium leading-none tracking-tight': {}
	},
	'.uk-alert-description': {
		'@apply [&_p]:leading-relaxed': {}
	}
};
