export default {
	'.uk-accordion-title': {
		display: 'flex',
		justifyContent: 'space-between',
		overflow: 'hidden',
		'@apply items-start py-4 font-medium text-foreground focus-visible:outline-dotted focus-visible:outline-ring':
			{}
	},
	'.uk-accordion-icon': {
		flex: 'none',
		transition: '0.3s transform',
		'@apply text-muted-foreground': {}
	},
	'.uk-open > .uk-accordion-title > .uk-accordion-icon': {
		transform: 'rotate(180deg)'
	},
	'.uk-accordion-title:hover': {
		'@apply underline': {}
	},
	'.uk-accordion-content': {
		display: 'flow-root',
		'@apply pb-4 text-foreground': {}
	},
	'.uk-accordion-content[hidden]': {
		display: 'none'
	},
	'.uk-accordion > li': {
		'@apply border-b border-border': {}
	}
};
