export default {
	'.uk-card': {
		position: 'relative',
		boxSizing: 'border-box',
		borderRadius: 'var(--uk-card-radius)',
		boxShadow: 'var(--uk-card-shadow)',
		'@apply border border-border bg-card text-card-foreground': {}
	},
	'.uk-card-body': {
		padding: 'var(--uk-card-body-padding)'
	},
	'.uk-card-header': {
		padding: 'var(--uk-card-header-padding)'
	},
	'.uk-card-footer': {
		padding: 'var(--uk-card-footer-padding)'
	},
	'.uk-card-body > :last-child, .uk-card-header > :last-child, .uk-card-footer > :last-child': {
		marginBottom: '0'
	},
	'.uk-card-title': {
		'@apply text-lg font-semibold leading-none tracking-tight': {}
	},
	'.uk-card-primary': {
		'@apply bg-primary text-primary-foreground': {}
	},
	'.uk-card-secondary': {
		'@apply bg-secondary text-secondary-foreground': {}
	},
	'.uk-card-destructive': {
		'@apply bg-destructive text-destructive-foreground': {}
	},
	'.uk-card-header + .uk-card-body, .uk-card-body + .uk-card-footer': {
		'@apply pt-0': {}
	},
	'.uk-card-header ~ .uk-card-footer': {
		'@apply pt-0': {}
	}
};
