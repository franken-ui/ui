export default {
	'.uk-heading-small': {
		'@apply text-4xl': {}
	},
	'.uk-heading-medium': {
		'@apply text-5xl': {}
	},
	'.uk-heading-large': {
		'@apply text-6xl': {}
	},
	'.uk-heading-xlarge': {
		'@apply text-7xl': {}
	},
	'.uk-heading-2xlarge': {
		'@apply text-8xl': {}
	},
	'.uk-heading-3xlarge': {
		'@apply text-9xl': {}
	},
	'.uk-heading-divider': {
		paddingBottom: 'calc(5px + 0.1em)',
		borderBottom: 'calc(0.2px + 0.05em) solid',
		'@apply border-border': {}
	},
	'.uk-heading-bullet': {
		position: 'relative'
	},
	'.uk-heading-bullet::before': {
		content: '""',
		display: 'inline-block',
		position: 'relative',
		top: 'calc(-0.1 * 1em)',
		verticalAlign: 'middle',
		height: 'calc(4px + 0.7em)',
		marginRight: 'calc(5px + 0.2em)',
		borderLeft: 'calc(5px + 0.1em) solid',
		'@apply border-border': {}
	},
	'.uk-heading-line': {
		overflow: 'hidden'
	},
	'.uk-heading-line > *': {
		display: 'inline-block',
		position: 'relative'
	},
	'.uk-heading-line > ::before, .uk-heading-line > ::after': {
		content: '""',
		position: 'absolute',
		top: 'calc(50% - (calc(0.2px + 0.05em) / 2))',
		width: '2000px',
		borderBottom: 'calc(0.2px + 0.05em) solid',
		'@apply border-border': {}
	},
	'.uk-heading-line > ::before': {
		right: '100%',
		marginRight: 'calc(5px + 0.3em)'
	},
	'.uk-heading-line > ::after': {
		left: '100%',
		marginLeft: 'calc(5px + 0.3em)'
	},
	'.uk-h1': {
		'@apply text-4xl font-extrabold tracking-tight': {}
	},
	'.uk-h2': {
		'@apply text-3xl font-semibold tracking-tight': {}
	},
	'.uk-h3': {
		'@apply text-2xl font-semibold tracking-tight': {}
	},
	'.uk-h4': {
		'@apply text-xl font-semibold tracking-tight': {}
	}
};
