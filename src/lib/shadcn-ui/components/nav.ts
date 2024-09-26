export default {
	'.uk-nav, .uk-nav ul': {
		margin: '0',
		padding: '0',
		listStyle: 'none'
	},
	'.uk-nav li > a': {
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none',
		'@apply focus-visible:outline-dotted focus-visible:outline-ring': {}
	},
	'ul.uk-nav-sub': {
		'@apply ml-5 mr-1 space-y-1 border-l border-border': {}
	},
	'.uk-nav-sub ul': {
		'@apply ml-5 mt-1 space-y-1 border-l border-border': {}
	},
	'.uk-nav-sub a': {
		borderRadius: 'var(--uk-border-radius)'
	},
	'.uk-nav-parent-icon': {
		marginLeft: 'auto',
		transition: 'transform 0.3s ease-out'
	},
	'.uk-nav > li.uk-open > a .uk-nav-parent-icon': {
		transform: 'rotate(180deg)'
	},
	'.uk-nav-header': {
		fontSize: '0.875rem',
		'@apply font-semibold': {}
	},
	'.uk-nav-default': {
		lineHeight: '1.5'
	},
	'.uk-nav-default > li > a': {
		'@apply px-2 py-1 text-muted-foreground': {}
	},
	'.uk-nav-default > li > a:hover': {
		'@apply underline': {}
	},
	'.uk-nav-default > li.uk-active > a': {
		'@apply font-medium text-foreground': {}
	},
	'.uk-nav-default .uk-nav-header': {
		'@apply px-2 py-1': {}
	},
	'.uk-nav-default .uk-nav-divider': {
		borderTop: '1px solid',
		'@apply border-border': {}
	},
	'.uk-nav-default .uk-nav-sub a': {
		'@apply px-2 py-1 text-muted-foreground': {}
	},
	'.uk-nav-default .uk-nav-sub a:hover': {
		'@apply underline': {}
	},
	'.uk-nav-default .uk-nav-sub li.uk-active > a': {
		'@apply text-foreground': {}
	},
	'.uk-nav-primary > li > a': {
		borderRadius: 'var(--uk-border-radius)',
		'@apply px-4 py-2 m-1': {}
	},
	'.uk-nav-primary > li > a:hover': {
		'@apply bg-accent text-accent-foreground': {}
	},
	'.uk-nav-primary > li.uk-active > a': {
		'@apply bg-primary text-primary-foreground': {}
	},
	'.uk-nav-primary .uk-nav-header': {
		'@apply px-4 py-2 m-1': {}
	},
	'.uk-nav-primary .uk-nav-divider': {
		borderTop: '1px solid',
		'@apply border-border': {}
	},
	'.uk-nav-primary .uk-nav-sub a': {
		'@apply px-4 py-2 ml-1': {}
	},
	'.uk-nav-primary .uk-nav-sub a:hover': {
		'@apply bg-accent text-accent-foreground': {}
	},
	'.uk-nav-primary .uk-nav-sub li.uk-active > a': {
		'@apply bg-primary text-primary-foreground': {}
	},
	'.uk-nav-secondary > :not(.uk-nav-divider) + :not(.uk-nav-header, .uk-nav-divider)': {
		marginTop: '0'
	},
	'.uk-nav-secondary > li > a': {
		borderRadius: 'var(--uk-border-radius)',
		'@apply px-4 py-2 m-1': {}
	},
	'.uk-nav-secondary > li > a:hover': {
		'@apply bg-secondary text-secondary-foreground': {}
	},
	'.uk-nav-secondary > li.uk-active > a': {
		'@apply bg-secondary text-secondary-foreground': {}
	},
	'.uk-nav-secondary .uk-nav-header': {
		'@apply px-4 py-2 m-1': {}
	},
	'.uk-nav-secondary .uk-nav-divider': {
		borderTop: '1px solid',
		'@apply border-border': {}
	},
	'.uk-nav-secondary .uk-nav-sub a': {
		'@apply px-4 py-2 ml-1': {}
	},
	'.uk-nav-secondary .uk-nav-sub a:hover': {
		'@apply bg-accent text-accent-foreground': {}
	},
	'.uk-nav-secondary .uk-nav-sub li.uk-active > a': {
		'@apply bg-secondary text-secondary-foreground': {}
	},
	'.uk-nav.uk-nav-divider> :not(.uk-nav-header, .uk-nav-divider)+ :not(.uk-nav-header, .uk-nav-divider)':
		null,
	'.uk-nav.uk-nav-divider > :not(.uk-nav-header, .uk-nav-divider) + :not(.uk-nav-header, .uk-nav-divider)':
		{},
	'.uk-nav-sub li': {
		'@apply relative': {}
	},
	'.uk-nav-sub li::before': {
		content: "''",
		'@apply absolute -left-[1px] bottom-0 top-0 w-[1px] bg-border': {}
	},
	'.uk-nav-sub li.uk-active::before': {
		'@apply bg-primary': {}
	}
};
