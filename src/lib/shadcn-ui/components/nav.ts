export default function () {
	return {
		'hook-sub': {
			padding: null
		},
		'hook-header': {
			textTransform: null,
			padding: null,
			'@apply font-semibold': {}
		},
		'hook-divider': {
			margin: null
		},
		'hook-default': {
			fontSize: null
		},
		'hook-default-item': {
			color: null,
			'@apply px-2 py-1 text-muted-foreground': {}
		},
		'hook-default-item-hover': {
			color: null,
			'@apply underline': {}
		},
		'hook-default-item-active': {
			color: null,
			'@apply font-medium text-foreground': {}
		},
		'hook-default-subtitle': {
			fontSize: null
		},
		'hook-default-header': {
			color: null,
			'@apply px-2 py-1': {}
		},
		'hook-default-divider': {
			borderTop: '1px solid',
			'@apply border-border': {}
		},
		'hook-default-sublist': {
			color: null,
			'@apply px-2 py-1 text-muted-foreground': {}
		},
		'hook-default-sublist-hover': {
			color: null,
			'@apply underline': {}
		},
		'hook-default-sublist-active': {
			color: null,
			'@apply text-foreground': {}
		},
		'hook-primary': {
			fontSize: null,
			lineHeight: null
		},
		'hook-primary-item': {
			color: null,
			'@apply px-4 py-2 m-1 rounded-md': {}
		},
		'hook-primary-item-hover': {
			color: null,
			'@apply bg-accent text-accent-foreground': {}
		},
		'hook-primary-item-active': {
			color: null,
			'@apply bg-primary text-primary-foreground': {}
		},
		'hook-primary-subtitle': {
			fontSize: null
		},
		'hook-primary-header': {
			color: null,
			'@apply px-4 py-2 m-1': {}
		},
		'hook-primary-divider': {
			borderTop: '1px solid',
			'@apply border-border': {}
		},
		'hook-primary-sublist': {
			color: null,
			'@apply px-4 py-2 ml-1': {}
		},
		'hook-primary-sublist-hover': {
			color: null,
			'@apply bg-accent text-accent-foreground': {}
		},
		'hook-primary-sublist-active': {
			color: null,
			'@apply bg-primary text-primary-foreground': {}
		},
		'hook-secondary': {
			fontSize: null,
			lineHeight: null
		},
		'hook-secondary-item': {
			color: null,
			padding: null,
			'@apply px-4 py-2 m-1 rounded-md': {}
		},
		'hook-secondary-item-hover': {
			color: null,
			backgroundColor: null,
			'@apply bg-secondary text-secondary-foreground': {}
		},
		'hook-secondary-item-active': {
			color: null,
			backgroundColor: null,
			'@apply bg-secondary text-secondary-foreground': {}
		},
		'hook-secondary-subtitle': {
			color: null,
			fontSize: null
		},
		'hook-secondary-subtitle-hover': {
			color: null
		},
		'hook-secondary-subtitle-active': {
			color: null
		},
		'hook-secondary-header': {
			color: null,
			'@apply px-4 py-2 m-1': {}
		},
		'hook-secondary-divider': {
			borderTop: '1px solid',
			'@apply border-border': {}
		},
		'hook-secondary-sublist': {
			color: null,
			'@apply px-4 py-2 ml-1': {}
		},
		'hook-secondary-sublist-hover': {
			color: null,
			'@apply bg-accent text-accent-foreground': {}
		},
		'hook-secondary-sublist-active': {
			color: null,
			'@apply bg-secondary text-secondary-foreground': {}
		},
		// 'hook-dividers': {},
		'hook-misc': {
			'.uk-nav': {
				'@apply text-sm': {}
			},
			'.uk-nav li > a': {
				columnGap: null
			},
			'.uk-nav > li > a': {
				padding: null,
				columnGap: null
			},
			'ul.uk-nav-sub': {
				padding: null,
				'@apply ml-5 mr-1 space-y-1 border-l border-border': {}
			},
			'.uk-nav-sub ul': {
				paddingLeft: null,
				'@apply ml-5 mt-1 space-y-1 border-l border-border': {}
			},
			'.uk-nav-sub li': {
				'@apply relative': {}
			},
			'.uk-nav-sub li::before': {
				content: "''",
				'@apply absolute -left-[1px] bottom-0 top-0 w-[1px] bg-border': {}
			},
			// '.uk-nav-sub ul li:hover::before': {
			// 	'@apply bg-primary': {}
			// },
			'.uk-nav-sub li.uk-active::before': {
				'@apply bg-primary': {}
			},
			'.uk-nav-sub a': {
				padding: null,
				'@apply rounded-md': {}
			},
			'.uk-nav > li.uk-open > a .uk-nav-parent-icon': {
				transform: 'rotate(180deg)'
			},
			'.uk-nav-default .uk-nav-sub': {
				fontSize: null,
				lineHeight: null
			},
			'.uk-nav-primary .uk-nav-sub': {
				fontSize: null,
				lineHeight: null
			},
			'.uk-nav-secondary .uk-nav-sub': {
				fontSize: null,
				lineHeight: null
			},
			'.uk-nav-header:not(:first-child)': {
				marginTop: null
			},
			'.uk-nav-center': null,
			'.uk-nav-center li > a': null,
			'.uk-nav-center .uk-nav-sub, .uk-nav-center .uk-nav-sub ul': null,
			'.uk-nav-center .uk-nav-parent-icon': null,
			'.uk-nav.uk-nav-divider> :not(.uk-nav-header, .uk-nav-divider)+ :not(.uk-nav-header, .uk-nav-divider)':
				null
		}
	};
}
