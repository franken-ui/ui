export default {
	'.uk-dropdown': {
		'--uk-position-offset': '10px',
		'--uk-position-viewport-offset': '8px',
		width: 'auto',
		borderRadius: 'var(--uk-dropdown-radius)',
		boxShadow: 'var(--uk-dropdown-shadow)',
		'@apply border border-border bg-popover text-popover-foreground': {}
	},
	'.uk-dropdown-dropbar': {
		width: 'auto',
		background: 'transparent',
		'--uk-position-viewport-offset': '1rem',
		boxShadow: 'none'
	},
	'.uk-dropdown-nav > li > a': {
		borderRadius: 'var(--uk-dropdown-nav-item-radius)',
		padding: 'var(--uk-dropdown-nav-item-padding)',
		margin: 'var(--uk-dropdown-nav-item-margin)',
		'@apply flex select-none items-center': {}
	},
	'.uk-dropdown-nav > li > a:hover, .uk-dropdown-nav > li.uk-active > a': {
		'@apply bg-accent text-accent-foreground': {}
	},
	'.uk-dropdown-nav .uk-nav-subtitle': {},
	'.uk-dropdown-nav .uk-nav-header': {
		padding: 'var(--uk-dropdown-nav-header-padding)',
		margin: 'var(--uk-dropdown-nav-header-margin)',
		'@apply font-semibold': {}
	},
	'.uk-dropdown-nav .uk-nav-divider': {
		margin: '0 !important',
		'@apply border-t border-border': {}
	}
};
