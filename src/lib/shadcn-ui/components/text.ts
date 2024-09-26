export default {
	'.uk-text-lead': {
		'@apply text-xl text-muted-foreground': {}
	},
	'.uk-text-meta': {
		'@apply text-sm text-muted-foreground': {}
	},
	'.uk-text-xs': {
		'@apply text-xs': {}
	},
	'.uk-text-sm': {
		'@apply text-sm': {}
	},
	'.uk-text-base': {
		'@apply text-base': {}
	},
	'.uk-text-lg': {
		'@apply text-lg': {}
	},
	'.uk-text-background': {
		WebkitBackgroundClip: 'text',
		color: 'transparent !important',
		display: 'inline-block',
		backgroundColor: '#1e87f0',
		backgroundImage: 'linear-gradient(90deg, #1e87f0 0%, #411ef0 100%)'
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
