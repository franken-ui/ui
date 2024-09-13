export default {
	'.uk-article': {
		display: 'flow-root'
	},
	'.uk-article > :last-child': {
		marginBottom: '0'
	},
	'.uk-article + .uk-article': {
		marginTop: '70px'
	},
	'.uk-article-title': {
		fontSize: '2.23125rem',
		lineHeight: '1.2'
	},
	'.uk-article-meta': {
		fontSize: '0.875rem',
		lineHeight: '1.4',
		'@apply text-muted-foreground': {}
	},
	'.uk-article-meta a:hover': {
		textDecoration: 'none'
	}
};
