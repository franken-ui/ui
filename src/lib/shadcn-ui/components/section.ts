export default {
	'.uk-section': {
		display: 'flow-root',
		boxSizing: 'border-box',
		paddingTop: '40px',
		paddingBottom: '40px'
	},
	'.uk-section > :last-child': {
		marginBottom: '0'
	},
	'.uk-section-xsmall': {
		paddingTop: '20px',
		paddingBottom: '20px'
	},
	'.uk-section-small': {
		paddingTop: '40px',
		paddingBottom: '40px'
	},
	'.uk-section-large': {
		paddingTop: '70px',
		paddingBottom: '70px'
	},
	'.uk-section-xlarge': {
		paddingTop: '140px',
		paddingBottom: '140px'
	},
	'.uk-section-default': {
		'@apply bg-background': {}
	},
	'.uk-section-muted': {
		'@apply bg-muted text-muted-foreground': {}
	},
	'.uk-section-primary': {
		'@apply bg-primary text-primary-foreground': {}
	},
	'.uk-section-secondary': {
		'@apply bg-secondary text-secondary-foreground': {}
	}
};
