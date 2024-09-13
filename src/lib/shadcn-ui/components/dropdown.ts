export default {
	'.uk-dropdown': {
		'--uk-position-offset': '10px',
		'--uk-position-viewport-offset': '15px',
		width: 'auto',
		minWidth: '200px',
		'@apply rounded-md border border-border bg-popover text-popover-foreground shadow-md': {}
	},
	'.uk-dropdown > :last-child': {
		marginBottom: '0'
	},
	'.uk-dropdown-large': {
		padding: '40px'
	},
	'.uk-dropdown-dropbar': {
		width: 'auto',
		background: 'transparent',
		'--uk-position-viewport-offset': '15px',
		boxShadow: 'none'
	},
	'.uk-dropdown-dropbar-large': {
		paddingTop: '40px',
		paddingBottom: '40px'
	},
	'.uk-dropdown-nav': {
		'@apply text-sm': {}
	},
	'.uk-dropdown-nav > li > a': {
		'@apply m-1 flex select-none items-center rounded-sm px-2 py-1.5 text-sm': {}
	},
	'.uk-dropdown-nav > li > a:hover, .uk-dropdown-nav > li.uk-active > a': {
		'@apply bg-accent text-accent-foreground': {}
	},
	'.uk-dropdown-nav .uk-nav-subtitle': {
		fontSize: '12px'
	},
	'.uk-dropdown-nav .uk-nav-header': {
		textTransform: 'none',
		'@apply m-1 px-2 py-1.5 font-semibold': {}
	},
	'.uk-dropdown-nav .uk-nav-divider': {
		margin: '0 !important',
		'@apply border-t border-border': {}
	}
};
