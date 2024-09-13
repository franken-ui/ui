export default {
	'.uk-pagination': {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		listStyle: 'none',
		'@apply gap-1': {}
	},
	'.uk-pagination > *': {
		flex: 'none',
		position: 'relative'
	},
	'.uk-pagination > * > *': {
		columnGap: '0.25em',
		transition: 'color 0.1s ease-in-out',
		'@apply inline-flex h-9 min-w-9 items-center justify-center whitespace-nowrap rounded-md': {}
	},
	'.uk-pagination > * > :hover': {
		textDecoration: 'none',
		'@apply bg-accent text-accent-foreground': {}
	},
	'.uk-pagination > .uk-active > *': {
		'@apply border border-input shadow': {}
	},
	'.uk-pagination > .uk-disabled > *': {
		'@apply opacity-50': {}
	}
};
