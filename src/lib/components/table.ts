export default {
	'.uk-table': {
		// Box model
		width: 'var(--uk-table-width, 100%)',
		borderCollapse: 'var(--uk-table-collapse, collapse)',
		borderSpacing: 'var(--uk-table-spacing, 0)'
	},
	'.uk-table th': {
		// Layout
		padding: 'var(--uk-table-cell-padding, 1rem 0.75rem)',
		textAlign: 'var(--uk-table-header-align, left)',

		// Typography
		fontSize: 'var(--uk-table-header-font-size, 0.875rem)',
		fontWeight: 'var(--uk-table-header-font-weight, normal)',
		color: 'var(--uk-table-header-color, hsl(var(--muted-foreground)))'
	},
	'.uk-table td': {
		padding: 'var(--uk-table-cell-padding, 1rem 0.75rem)',
		verticalAlign: 'var(--uk-table-cell-align, top)'
	},
	'.uk-table tfoot': {
		fontSize: 'var(--uk-table-footer-font-size, 0.875rem)'
	},
	'.uk-table caption': {
		fontSize: 'var(--uk-table-caption-font-size, 0.875rem)',
		color: 'var(--uk-table-caption-color, hsl(var(--muted-foreground)))'
	},
	'.uk-table-middle, .uk-table-middle td': {
		verticalAlign: 'var(--uk-table-middle-align, middle) !important'
	},
	'.uk-table-divider > tr:not(:first-child), .uk-table-divider > :not(:first-child) > tr, .uk-table-divider > :first-child > tr:not(:first-child)':
		{
			borderTop: 'var(--uk-table-divider-border, 1px solid hsl(var(--border)))'
		},
	'.uk-table-striped > tr:nth-of-type(odd), .uk-table-striped tbody tr:nth-of-type(odd)': {
		borderTop: 'var(--uk-table-striped-border-top, 1px solid hsl(var(--border)))',
		borderBottom: 'var(--uk-table-striped-border-bottom, 1px solid hsl(var(--border)))',
		backgroundColor: 'var(--uk-table-striped-bg, hsl(var(--muted) / 0.5))'
	},
	'.uk-table-hover > tr:hover, .uk-table-hover tbody tr:hover': {
		backgroundColor: 'var(--uk-table-hover-bg, hsl(var(--muted) / 0.5))',
		transition: 'var(--uk-table-hover-transition, background-color 150ms ease-in-out)'
	},
	'.uk-table > tr.uk-active, .uk-table tbody tr.uk-active': {
		backgroundColor: 'var(--uk-table-active-bg, hsl(var(--muted)))'
	},
	'.uk-table-justify th:first-child, .uk-table-justify td:first-child': {
		paddingLeft: 'var(--uk-table-justify-padding-left, 0)'
	},
	'.uk-table-justify th:last-child, .uk-table-justify td:last-child': {
		paddingRight: 'var(--uk-table-justify-padding-right, 0)'
	},
	'.uk-table-shrink': {
		width: 'var(--uk-table-shrink-width, 1px)'
	},
	'.uk-table-expand': {
		minWidth: 'var(--uk-table-expand-min-width, 10rem)'
	},
	'.uk-table-link': {
		padding: 'var(--uk-table-link-padding, 0) !important'
	},
	'.uk-table-link > a': {
		padding: 'var(--uk-table-cell-padding, 1rem 0.75rem)',
		display: 'var(--uk-table-link-display, block)'
	},
	'.uk-table-striped > tr:nth-of-type(even):last-child, .uk-table-striped tbody tr:nth-of-type(even):last-child':
		{
			borderBottom: 'var(--uk-table-striped-last-border, 1px solid hsl(var(--border)))'
		}
};
