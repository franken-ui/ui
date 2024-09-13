export default {
	'.uk-text-lead': {
		'@apply text-xl text-muted-foreground': {}
	},
	'.uk-text-meta': {
		'@apply text-sm text-muted-foreground': {}
	},
	'.uk-text-small': {
		'@apply text-sm': {}
	},
	'.uk-text-large': {
		'@apply text-lg': {}
	},
	'.uk-text-default': {
		lineHeight: '1.5',
		'@apply text-base': {}
	},
	'.uk-text-light': {
		fontWeight: '300'
	},
	'.uk-text-normal': {
		fontWeight: '400'
	},
	'.uk-text-bold': {
		fontWeight: '700'
	},
	'.uk-text-lighter': {
		fontWeight: 'lighter'
	},
	'.uk-text-bolder': {
		fontWeight: 'bolder'
	},
	'.uk-text-italic': {
		fontStyle: 'italic'
	},
	'.uk-text-capitalize': {
		textTransform: 'capitalize !important'
	},
	'.uk-text-uppercase': {
		textTransform: 'uppercase !important'
	},
	'.uk-text-lowercase': {
		textTransform: 'lowercase !important'
	},
	'.uk-text-decoration-none': {
		textDecoration: 'none !important'
	},
	'.uk-text-muted': {
		'@apply text-muted-foreground': {}
	},
	'.uk-text-danger': {
		'@apply text-destructive': {}
	},
	'.uk-text-background': {
		WebkitBackgroundClip: 'text',
		color: 'transparent !important',
		display: 'inline-block',
		backgroundColor: '#1e87f0',
		backgroundImage: 'linear-gradient(90deg, #1e87f0 0%, #411ef0 100%)'
	},
	'.uk-text-left': {
		textAlign: 'left !important'
	},
	'.uk-text-right': {
		textAlign: 'right !important'
	},
	'.uk-text-center': {
		textAlign: 'center !important'
	},
	'.uk-text-justify': {
		textAlign: 'justify !important'
	},
	'.uk-text-top': {
		verticalAlign: 'top !important'
	},
	'.uk-text-middle': {
		verticalAlign: 'middle !important'
	},
	'.uk-text-bottom': {
		verticalAlign: 'bottom !important'
	},
	'.uk-text-baseline': {
		verticalAlign: 'baseline !important'
	},
	'.uk-text-nowrap': {
		whiteSpace: 'nowrap'
	},
	'.uk-text-truncate': {
		maxWidth: '100%',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap'
	},
	'th.uk-text-truncate, td.uk-text-truncate': {
		maxWidth: '0'
	},
	'.uk-text-break': {
		overflowWrap: 'break-word'
	},
	'th.uk-text-break, td.uk-text-break': {
		wordBreak: 'break-word'
	}
};
