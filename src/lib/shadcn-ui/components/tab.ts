export default function () {
	return {
		'hook-tab': {
			marginLeft: null,
			padding: null,
			'@apply text-muted-foreground': {}
		},
		'hook-tab-before': {
			borderBottom: '1px solid',
			left: '0',
			'@apply border-border': {}
		},
		'hook-item': {
			color: null,
			textTransform: 'none',
			borderBottom: '2px solid transparent',
			padding: null,
			'@apply font-semibold text-muted-foreground': {}
		},
		'hook-item-hover': {
			color: null
		},
		'hook-bottom-item': {
			borderTop: '2px solid transparent'
		},
		'hook-left-item': {
			borderRight: '2px solid transparent'
		},
		'hook-left-before': {
			borderLeft: '1px solid',
			'@apply border-border': {}
		},
		'hook-right-before': {
			borderLeft: '1px solid',
			'@apply border-border': {}
		},
		'hook-right-item': {
			borderLeft: '2px solid transparent'
		},
		'hook-item-active': {
			'@apply border-primary bg-background text-foreground': {}
		},
		'hook-item-disabled': {
			'@apply opacity-50 disabled:pointer-events-none': {}
		},
		'hook-misc': {
			'.uk-tab > *': {
				paddingLeft: null
			},
			'.uk-tab-alt': {
				'@apply flex h-9 w-full items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground':
					{}
			},
			'.uk-tab-alt > *': {
				'@apply flex-grow': {}
			},
			'.uk-tab-alt > * > a': {
				'@apply inline-flex h-auto w-full items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium no-underline':
					{}
			},
			'.uk-tab-alt > .uk-active > a': {
				'@apply rounded-md border-b-0 bg-background text-foreground': {}
			}
		}
	};
}
