export default {
	'a.uk-link-muted, .uk-link-muted a, .uk-link-toggle .uk-link-muted': {
		'@apply font-medium text-muted-foreground underline underline-offset-4 font-medium text-muted-foreground underline underline-offset-4 focus-visible:outline-dotted focus-visible:outline-ring':
			{}
	},
	'a.uk-link-text:hover, .uk-link-text a:hover, .uk-link-toggle:hover .uk-link-text': {
		'@apply underline underline-offset-4': {}
	},
	'a.uk-link-reset, .uk-link-reset a': {
		textDecoration: 'none !important',
		fontWeight: '400 !important',
		'@apply focus-visible:outline-dotted focus-visible:outline-ring': {}
	},
	'.uk-link-toggle': {
		textDecoration: 'none !important',
		'@apply focus-visible:outline-dotted focus-visible:outline-ring': {}
	},
	'.uk-link': {
		'@apply font-medium underline underline-offset-4 focus-visible:outline-dotted focus-visible:outline-ring':
			{}
	}
};
