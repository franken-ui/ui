export default {
	'.uk-label': {
		borderRadius: 'var(--uk-global-radius)',
		boxShadow: 'var(--uk-global-shadow)',
		fontSize: 'var(--uk-global-font-size-s)',
		lineHeight: 'var(--uk-global-line-height-s)',
		'@apply inline-flex items-center border border-border px-2.5 py-0.5 font-semibold text-foreground':
			{}
	},
	'.uk-label-destructive': {
		'@apply border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80':
			{}
	},
	'.uk-label-primary': {
		'@apply border-transparent bg-primary text-primary-foreground hover:bg-primary/80': {}
	},
	'.uk-label-secondary': {
		'@apply border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80': {}
	}
};
