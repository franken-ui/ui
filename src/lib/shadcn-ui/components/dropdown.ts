export default function () {
	return {
		'hook-dropdown': {
			padding: null,
			backgroundColor: null,
			color: null,
			boxShadow: null,
			'@apply rounded-md border border-border bg-popover text-popover-foreground shadow-md': {}
		},
		'hook-dropbar': {
			padding: null
		},
		'hook-nav-item': {
			color: null,
			padding: null,
			'@apply m-1 flex select-none items-center rounded-sm px-2 py-1.5 text-sm': {}
		},
		'hook-nav-item-hover': {
			color: null,
			'@apply bg-accent text-accent-foreground': {}
		},
		'hook-nav-header': {
			color: null,
			padding: null,
			textTransform: 'none',
			'@apply m-1 px-2 py-1.5 font-semibold': {}
		},
		'hook-nav-divider': {
			borderTop: null,
			margin: `0 !important`,
			'@apply border-t border-border': {}
		},
		'hook-text': {
			backgroundColor: null,
			color: null,
			'@apply focus-visible:ring-0': {}
		},
		'hook-text-hover': {
			color: null
		},
		'hook-text-disabled': {
			color: null,
			'@apply opacity-50': {}
		},
		'hook-misc': {
			'.uk-dropdown :focus-visible': {
				outlineColor: null
			}
		}
	};
}
