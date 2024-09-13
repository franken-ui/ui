export default {
	'.uk-tile': {
		display: 'flow-root',
		position: 'relative',
		boxSizing: 'border-box',
		paddingLeft: '15px',
		paddingRight: '15px',
		paddingTop: '40px',
		paddingBottom: '40px'
	},
	'.uk-tile > :last-child': {
		marginBottom: '0'
	},
	'.uk-tile-xsmall': {
		paddingTop: '20px',
		paddingBottom: '20px'
	},
	'.uk-tile-small': {
		paddingTop: '40px',
		paddingBottom: '40px'
	},
	'.uk-tile-large': {
		paddingTop: '70px',
		paddingBottom: '70px'
	},
	'.uk-tile-xlarge': {
		paddingTop: '140px',
		paddingBottom: '140px'
	},
	'.uk-tile-default': {
		'@apply bg-background': {}
	},
	'.uk-tile-muted': {
		'@apply bg-muted text-muted-foreground': {}
	},
	'.uk-tile-primary': {
		'@apply bg-primary text-primary-foreground': {}
	},
	'.uk-tile-secondary': {
		'@apply bg-secondary text-secondary-foreground': {}
	}
};
