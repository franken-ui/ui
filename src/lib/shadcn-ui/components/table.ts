export default function () {
	return {
		'hook-table': {
			marginBottom: null,
			'@apply text-sm': {}
		},
		'hook-header-cell': {
			// padding: null,
			verticalAlign: null,
			color: null,
			textTransform: null,
			'@apply text-muted-foreground': {}
		},
		'hook-cell': {
			// padding: null
		},
		'hook-footer': {},
		'hook-caption': {
			textAlign: null,
			color: null,
			'@apply text-muted-foreground': {}
		},
		'hook-row-active': {
			'@apply bg-muted': {}
		},
		'hook-divider': {
			borderTop: null,
			'@apply border-t border-border': {}
		},
		'hook-striped': {
			backgroundColor: null,
			borderTop: null,
			borderBottom: null,
			'@apply border-b border-t border-border bg-muted/50': {}
		},
		'hook-hover': {
			backgroundColor: null,
			'@apply bg-muted/50': {}
		},
		'hook-small': {
			// padding: null
		},
		'hook-large': {
			// padding: null
		},
		'hook-misc': {
			'* + .uk-table': {
				marginTop: null
			},
			'.uk-table td > :last-child': {
				marginBottom: null
			},
			'.uk-table-link > a': {
				display: null
				// padding: null
			},
			'.uk-table-striped > tr:nth-of-type(even):last-child, .uk-table-striped tbody tr:nth-of-type(even):last-child':
				{
					borderBottom: null,
					'@apply border-b border-border': {}
				}
		}
	};
}
