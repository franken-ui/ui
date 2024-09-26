export default {
	'.uk-card': {
		position: 'relative',
		boxSizing: 'border-box',
		borderRadius: 'var(--uk-border-radius)',
		boxShadow: 'var(--uk-box-shadow)',
		'@apply border border-border bg-card text-card-foreground': {}
	},
	'.uk-card-body': {
		'@apply p-4': {}
	},
	'.uk-card-header': {
		'@apply p-4': {}
	},
	'.uk-card-footer': {
		'@apply p-4': {}
	},
	'.uk-card-body > :last-child, .uk-card-header > :last-child, .uk-card-footer > :last-child': {
		marginBottom: '0'
	},
	'.uk-card-title': {
		'@apply font-semibold leading-none tracking-tight': {}
	},
	'.uk-card-primary': {
		'@apply bg-primary text-primary-foreground': {}
	},
	'.uk-card-secondary': {
		'@apply bg-secondary text-secondary-foreground': {}
	},
	'.uk-card-danger': {
		'@apply bg-destructive text-destructive-foreground': {}
	},
	'.uk-card-header + .uk-card-body, .uk-card-body + .uk-card-footer': {
		'@apply pt-0': {}
	},
	'.uk-card-header ~ .uk-card-footer': {
		'@apply pt-0': {}
	}
};
