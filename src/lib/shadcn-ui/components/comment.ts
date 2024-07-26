export default function () {
	return {
		'hook-comment': {
			'@apply p-3': {}
		},
		'hook-body': {
			'@apply text-sm': {}
		},
		'hook-header': {},
		'hook-title': {
			fontSize: null,
			lineHeight: null,
			'@apply text-base font-medium': {}
		},
		'hook-meta': {
			fontSize: null,
			lineHeight: null,
			color: null,
			'@apply text-xs text-muted-foreground mt-1': {}
		},
		'hook-avatar': {
			'@apply h-10 w-10 overflow-hidden rounded-full bg-muted': {}
		},
		'hook-list-adjacent': {
			marginTop: null,
			'@apply mt-3': {}
		},
		'hook-list-sub': {
			margin: null,
			paddingLeft: null,
			listStyle: null,
			'@apply ml-6 mt-6 border-l border-border': {}
		},
		'hook-list-sub-adjacent': {
			marginTop: null,
			'@apply mt-6': {}
		},
		'hook-primary': {
			padding: null,
			backgroundColor: null,
			'@apply bg-primary text-primary-foreground rounded-md': {}
		},
		'hook-misc': {
			'.uk-comment-avatar img': {
				'@apply h-full w-full object-cover': {}
			},
			'.uk-comment-list .uk-comment ~ ul > li': {
				'@apply ml-3': {}
			},
			'@media (min-width: 768px)': {
				'.uk-comment-list .uk-comment ~ ul': {
					paddingLeft: null
				}
			}
		}
	};
}
