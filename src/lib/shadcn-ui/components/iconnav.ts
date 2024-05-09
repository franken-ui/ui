export default function () {
	return {
		'hook-iconnav': {
			gap: null,
			marginLeft: null,
			'@apply gap-1': {}
		},
		'hook-item': {
			display: null,
			justifyContent: null,
			height: null,
			width: null,
			color: null,
			'@apply inline-flex h-9 w-9 justify-center rounded-md': {}
		},
		'hook-item-hover': {
			color: null,
			'@apply bg-accent text-accent-foreground': {}
		},
		'hook-item-active': {
			color: null,
			'@apply bg-accent text-accent-foreground': {}
		},
		'hook-misc': {
			'.uk-iconnav > * > a:focus-visible': {
				'@apply outline-none ring-1 ring-ring': {}
			},
			'.uk-iconnav > *': {
				paddingLeft: '0'
			},
			'.uk-iconnav-vertical': {
				marginTop: '0'
			},
			'.uk-iconnav-vertical > *': {
				paddingTop: '0'
			},
			'.uk-iconnav-outline > * > a': {
				'@apply border border-border shadow-sm': {}
			}
		}
	};
}
