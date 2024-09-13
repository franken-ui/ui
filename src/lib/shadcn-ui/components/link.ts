export default {
	'a.uk-link-muted, .uk-link-muted a, .uk-link-toggle .uk-link-muted': {
		'@apply font-medium text-muted-foreground underline underline-offset-4': {}
	},
	'a.uk-link-text:hover, .uk-link-text a:hover, .uk-link-toggle:hover .uk-link-text': {
		'@apply underline underline-offset-4': {}
	},
	'a.uk-link-reset, .uk-link-reset a': {
		textDecoration: 'none !important',
		fontWeight: '400 !important'
	},
	'.uk-link-toggle': {
		textDecoration: 'none !important'
	},
	'.uk-link': {
		'@apply font-medium underline underline-offset-4': {}
	}
};
