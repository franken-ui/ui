export default {
	'.uk-breadcrumb > *': {
		display: 'contents'
	},
	'.uk-breadcrumb > * > *': {
		'@apply inline-flex items-center text-muted-foreground focus-visible:outline-dotted focus-visible:outline-ring':
			{}
	},
	'.uk-breadcrumb > * > :hover': {
		textDecoration: 'none',
		'@apply text-foreground': {}
	},
	'.uk-breadcrumb > :last-child > span, .uk-breadcrumb > :last-child > a:not([href])': {
		'@apply font-medium text-foreground': {}
	},
	'.uk-breadcrumb > :nth-child(n + 2):not(.uk-first-column)::before': {
		content: 'var(--uk-breadcrumb-divider)',
		display: 'inline-block',
		'@apply ml-2 mr-3 text-muted-foreground': {}
	},
	'.uk-breadcrumb > .uk-disabled > *': {
		'@apply opacity-50': {}
	}
};
