export default function () {
	return {
		'hook-pagination': {
			gap: null,
			fontSize: null,
			marginLeft: null,
			padding: null,
			'@apply gap-1': {}
		},
		'hook-item': {
			padding: null,
			color: null,
			textDecoration: null,
			fontWeight: null,
			display: null,
			justifyContent: null,
			alignItems: null,
			height: null,
			minWidth: null,
			whiteSpace: null,
			'@apply inline-flex h-9 min-w-9 items-center justify-center whitespace-nowrap rounded-md': {}
		},
		'hook-item-hover': {
			color: null,
			'@apply bg-accent text-accent-foreground': {}
		},
		'hook-item-active': {
			color: null,
			'@apply border border-input shadow': {}
		},
		'hook-item-disabled': {
			color: null,
			'@apply opacity-50': {}
		},
		'hook-misc': {
			'.uk-pagination > *': {
				paddingLeft: null
			}
		}
	};
}
