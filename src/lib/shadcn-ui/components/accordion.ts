export default {
	'.uk-accordion-title': {
		display: 'flex',
		justifyContent: 'space-between',
		overflow: 'hidden',
		padding: 'var(--uk-accordion-title-padding)',
		'@apply items-start font-medium focus-visible:outline-dotted focus-visible:outline-ring': {}
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
		padding: 'var(--uk-accordion-content-padding)'
	},
	'.uk-accordion-content[hidden]': {
		display: 'none'
	},
	'.uk-accordion > li': {
		'@apply border-b border-border': {}
	}
};
