export default {
	'.uk-alert': {
		position: 'relative',
		borderRadius: 'var(--uk-border-radius)',
		padding: 'var(--uk-alert-padding)',
		'@apply border border-border': {}
	},
	'.uk-alert-close': {
		position: 'absolute',
		inset: 'var(--uk-alert-close-inset)',
		'@apply focus-visible:outline-dotted focus-visible:outline-ring': {}
	},
	'.uk-alert-destructive': {
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
