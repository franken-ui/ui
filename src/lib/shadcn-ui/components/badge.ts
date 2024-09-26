export default {
	'.uk-badge': {
		borderRadius: '500px',
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		boxShadow: 'var(--uk-box-shadow)',
		'@apply h-5 min-w-5 border border-border px-1.5 text-xs font-semibold text-foreground hover:opacity-80 focus-visible:outline-dotted focus-visible:outline-ring':
			{}
	},
	'.uk-badge-primary': {
		'@apply border-transparent bg-primary text-primary-foreground': {}
	},
	'.uk-badge-secondary': {
		'@apply border-transparent bg-secondary text-secondary-foreground': {}
	},
	'.uk-badge-danger': {
		'@apply border-transparent bg-destructive text-destructive-foreground': {}
	}
};
