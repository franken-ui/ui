export default {
	'.uk-badge': {
		borderRadius: '500px',
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		'@apply h-5 min-w-5 border border-border px-1.5 text-xs font-semibold text-foreground shadow':
			{}
	},
	'.uk-badge-primary': {
		'@apply border-transparent bg-primary text-primary-foreground hover:bg-primary/80': {}
	},
	'.uk-badge-secondary': {
		'@apply border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80': {}
	},
	'.uk-badge-danger': {
		'@apply border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80':
			{}
	}
};
