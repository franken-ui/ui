export default {
	'.uk-card': {
		position: 'relative',
		boxSizing: 'border-box',
		'@apply rounded-xl border border-border shadow': {}
	},
	'.uk-card-body': {
		display: 'flow-root',
		'@apply p-6': {}
	},
	'.uk-card-header': {
		display: 'flow-root',
		'@apply p-6': {}
	},
	'.uk-card-footer': {
		display: 'flow-root',
		'@apply p-6': {}
	},
	'.uk-card-body > :last-child, .uk-card-header > :last-child, .uk-card-footer > :last-child': {
		marginBottom: '0'
	},
	'.uk-card-title': {
		'@apply font-semibold leading-none tracking-tight': {}
	},
	'.uk-card-default': {
		'@apply bg-card text-card-foreground': {}
	},
	'.uk-card-default .uk-card-header': {
		borderBottom: '1px solid',
		'@apply border-border': {}
	},
	'.uk-card-default .uk-card-footer': {
		borderTop: '1px solid',
		'@apply border-border': {}
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
