export default {
	'.uk-comment-body': {
		display: 'flow-root',
		overflowWrap: 'break-word',
		wordWrap: 'break-word',
		'@apply text-sm': {}
	},
	'.uk-comment-header': {
		display: 'flow-root',
		marginBottom: '20px'
	},
	'.uk-comment-body > :last-child, .uk-comment-header > :last-child': {
		marginBottom: '0'
	},
	'.uk-comment-title': {
		'@apply text-base font-medium': {}
	},
	'.uk-comment-meta': {
		'@apply text-xs text-muted-foreground mt-1': {}
	},
	'.uk-comment-list': {
		padding: '0',
		listStyle: 'none'
	},
	'.uk-comment-list > :nth-child(n + 2)': {
		'@apply mt-3': {}
	},
	'.uk-comment-list .uk-comment ~ ul': {
		'@apply ml-6 mt-6 border-l border-border': {}
	},
	'.uk-comment-list .uk-comment ~ ul > :nth-child(n + 2)': {
		'@apply mt-6': {}
	},
	'.uk-comment-primary': {
		'@apply bg-primary text-primary-foreground rounded-md': {}
	},
	'.uk-comment': {
		'@apply p-3': {}
	},
	'.uk-comment-avatar': {
		'@apply h-10 w-10 overflow-hidden rounded-full bg-muted': {}
	},
	'.uk-comment-avatar img': {
		'@apply h-full w-full object-cover': {}
	},
	'.uk-comment-list .uk-comment ~ ul > li': {
		'@apply ml-3': {}
	}
};
