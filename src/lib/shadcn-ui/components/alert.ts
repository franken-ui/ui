export default {
	'.uk-alert': {
		position: 'relative',
		borderRadius: 'var(--uk-border-radius)',
		'@apply border border-border p-4 pr-8': {}
	},
	'.uk-alert-close': {
		position: 'absolute',
		'@apply right-4 top-4 focus-visible:outline-dotted focus-visible:outline-ring': {}
	},
	'.uk-alert-danger': {
		'@apply border border-destructive text-destructive': {}
	},
	'.uk-alert a:not([class])': {
		'@apply font-medium underline underline-offset-4 focus-visible:outline-dotted focus-visible:outline-ring':
			{}
	},
	'.uk-alert-title': {
		'@apply font-medium leading-none tracking-tight': {}
	}
};
