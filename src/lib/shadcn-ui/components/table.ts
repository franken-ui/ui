export default {
	'.uk-table': {
		borderCollapse: 'collapse',
		borderSpacing: '0',
		width: '100%'
	},
	'.uk-table th': {
		padding: '1rem 0.75rem',
		textAlign: 'left',
		fontSize: '0.875rem',
		fontWeight: 'normal',
		'@apply text-muted-foreground': {}
	},
	'.uk-table td': {
		padding: '1rem 0.75rem',
		verticalAlign: 'top'
	},
	'.uk-table tfoot': {
		fontSize: '0.875rem'
	},
	'.uk-table caption': {
		fontSize: '0.875rem',
		'@apply text-muted-foreground': {}
	},
	'.uk-table-middle, .uk-table-middle td': {
		verticalAlign: 'middle !important'
	},
	'.uk-table-divider > tr:not(:first-child), .uk-table-divider > :not(:first-child) > tr, .uk-table-divider > :first-child > tr:not(:first-child)':
		{
			'@apply border-t border-border': {}
		},
	'.uk-table-striped > tr:nth-of-type(odd), .uk-table-striped tbody tr:nth-of-type(odd)': {
		'@apply border-b border-t border-border bg-muted/50': {}
	},
	'.uk-table-hover > tr:hover, .uk-table-hover tbody tr:hover': {
		'@apply bg-muted/50': {}
	},
	'.uk-table > tr.uk-active, .uk-table tbody tr.uk-active': {
		'@apply bg-muted': {}
	},
	'.uk-table-sm th, .uk-table-sm td': {
		padding: '0.625rem 0.75rem'
	},
	'.uk-table-lg th, .uk-table-lg td': {
		padding: '1.5rem 0.75rem'
	},
	'.uk-table-justify th:first-child, .uk-table-justify td:first-child': {
		paddingLeft: '0'
	},
	'.uk-table-justify th:last-child, .uk-table-justify td:last-child': {
		paddingRight: '0'
	},
	'.uk-table-shrink': {
		width: '1px'
	},
	'.uk-table-expand': {
		minWidth: '10rem'
	},
	'.uk-table-link': {
		padding: '0 !important'
	},
	'.uk-table-link > a': {
		padding: '1rem 0.75rem'
	},
	'.uk-table-sm .uk-table-link > a': {
		padding: '0.625rem 0.75rem'
	},
	'.uk-table-striped > tr:nth-of-type(even):last-child, .uk-table-striped tbody tr:nth-of-type(even):last-child':
		{
			'@apply border-b border-border': {}
		}
};
