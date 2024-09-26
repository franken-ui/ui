export default {
	'.uk-dropdown': {
		'--uk-position-offset': '10px',
		'--uk-position-viewport-offset': '8px',
		width: 'auto',
		borderRadius: 'var(--uk-border-radius)',
		boxShadow: 'var(--uk-box-shadow)',
		'@apply border border-border bg-popover text-popover-foreground': {}
	},
	'.uk-dropdown > :last-child': {
		marginBottom: '0'
	},
	'.uk-dropdown-lg': {
		padding: '2.5rem'
	},
	'.uk-dropdown-dropbar': {
		width: 'auto',
		background: 'transparent',
		'--uk-position-viewport-offset': '1rem',
		boxShadow: 'none'
	},
	'.uk-dropdown-dropbar-lg': {
		paddingTop: '2.5rem',
		paddingBottom: '2.5rem'
	},
	'.uk-dropdown-nav': {},
	'.uk-dropdown-nav > li > a': {
		borderRadius: 'var(--uk-border-radius-s)',
		'@apply m-1 flex select-none items-center px-2 py-1.5': {}
	},
	'.uk-dropdown-nav > li > a:hover, .uk-dropdown-nav > li.uk-active > a': {
		'@apply bg-accent text-accent-foreground': {}
	},
	'.uk-dropdown-nav .uk-nav-subtitle': {},
	'.uk-dropdown-nav .uk-nav-header': {
		textTransform: 'none',
		'@apply m-1 px-2 py-1.5 font-semibold': {}
	},
	'.uk-dropdown-nav .uk-nav-divider': {
		margin: '0 !important',
		'@apply border-t border-border': {}
	}
};
