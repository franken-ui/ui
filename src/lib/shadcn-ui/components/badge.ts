export default {
	'.uk-badge': {
		borderRadius: '500px',
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		boxShadow: 'var(--uk-badge-shadow)',
		height: 'var(--uk-badge-height)',
		minWidth: 'var(--uk-badge-min-width)',
		padding: 'var(--uk-badge-padding)',
		'@apply border border-border text-xs font-semibold text-foreground hover:opacity-80 focus-visible:outline-dotted focus-visible:outline-ring':
			{}
	},
	'.uk-badge-primary': {
		'@apply border-transparent bg-primary text-primary-foreground': {}
	},
	'.uk-badge-secondary': {
		'@apply border-transparent bg-secondary text-secondary-foreground': {}
	},
	'.uk-badge-destructive': {
		'@apply border-transparent bg-destructive text-destructive-foreground': {}
	}
};
