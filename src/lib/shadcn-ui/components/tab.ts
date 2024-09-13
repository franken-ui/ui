export default {
	'.uk-tab': {
		display: 'flex',
		flexWrap: 'wrap',
		padding: '0',
		listStyle: 'none',
		position: 'relative',
		'@apply text-muted-foreground': {}
	},
	'.uk-tab::before': {
		content: "''",
		position: 'absolute',
		bottom: '0',
		left: '0',
		right: '0',
		borderBottom: '1px solid',
		'@apply border-border': {}
	},
	'.uk-tab > *': {
		flex: 'none',
		position: 'relative'
	},
	'.uk-tab > * > a': {
		display: 'flex',
		alignItems: 'center',
		columnGap: '0.25em',
		justifyContent: 'center',
		padding: '5px 10px',
		borderBottom: '2px solid transparent',
		fontSize: '0.875rem',
		textTransform: 'none',
		transition: 'color 0.1s ease-in-out',
		'@apply font-semibold text-muted-foreground': {}
	},
	'.uk-tab > * > a:hover': {
		textDecoration: 'none'
	},
	'.uk-tab > .uk-active > a': {
		'@apply border-primary bg-background text-foreground': {}
	},
	'.uk-tab > .uk-disabled > a': {
		'@apply opacity-50 disabled:pointer-events-none': {}
	},
	'.uk-tab-bottom::before': {
		top: '0',
		bottom: 'auto'
	},
	'.uk-tab-bottom > * > a': {
		borderTop: '2px solid transparent',
		borderBottom: 'none'
	},
	'.uk-tab-left, .uk-tab-right': {
		flexDirection: 'column',
		marginLeft: '0'
	},
	'.uk-tab-left > *, .uk-tab-right > *': {
		paddingLeft: '0'
	},
	'.uk-tab-left::before': {
		top: '0',
		bottom: '0',
		left: 'auto',
		right: '0',
		borderLeft: '1px solid',
		borderBottom: 'none',
		'@apply border-border': {}
	},
	'.uk-tab-right::before': {
		top: '0',
		bottom: '0',
		left: '0',
		right: 'auto',
		borderLeft: '1px solid',
		borderBottom: 'none',
		'@apply border-border': {}
	},
	'.uk-tab-left > * > a': {
		justifyContent: 'left',
		borderRight: '2px solid transparent',
		borderBottom: 'none'
	},
	'.uk-tab-right > * > a': {
		justifyContent: 'left',
		borderLeft: '2px solid transparent',
		borderBottom: 'none'
	},
	'.uk-tab .uk-dropdown': {
		marginLeft: '30px'
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
};
