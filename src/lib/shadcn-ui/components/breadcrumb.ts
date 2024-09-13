export default {
	'.uk-breadcrumb': {
		padding: '0',
		listStyle: 'none',
		'@apply text-sm': {}
	},
	'.uk-breadcrumb > *': {
		display: 'contents'
	},
	'.uk-breadcrumb > * > *': {
		'@apply inline-flex items-center text-muted-foreground': {}
	},
	'.uk-breadcrumb > * > :hover': {
		textDecoration: 'none',
		'@apply text-foreground': {}
	},
	'.uk-breadcrumb > :last-child > span, .uk-breadcrumb > :last-child > a:not([href])': {
		'@apply font-medium text-foreground': {}
	},
	'.uk-breadcrumb > :nth-child(n + 2):not(.uk-first-column)::before': {
		content: "'/'",
		display: 'inline-block',
		fontSize: '0.875rem',
		'@apply ml-2 mr-3 text-muted-foreground': {}
	},
	'.uk-breadcrumb > .uk-disabled > *': {
		'@apply opacity-50': {}
	}
};
