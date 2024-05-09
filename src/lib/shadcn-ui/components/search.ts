export default function () {
	return {
		'hook-input': {
			color: null
		},
		'hook-icon': {
			color: null
		},
		'hook-default-input': {
			height: null,
			paddingLeft: null,
			paddingRight: null,
			background: null,
			border: null,
			'@apply h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm text-foreground shadow-sm placeholder-muted-foreground':
				{}
		},
		'hook-default-input-focus': {
			backgroundColor: null,
			borderColor: null
		},
		'hook-navbar-input': {},
		'hook-navbar-input-focus': {},
		'hook-large-input': {},
		'hook-large-input-focus': {},
		'hook-toggle': {
			color: null
		},
		'hook-toggle-hover': {
			color: null
		},
		'hook-misc': {
			'.uk-search-input::placeholder': {
				color: null
			},
			'.uk-search .uk-search-icon:hover': {
				color: null
			},
			'.uk-search-default .uk-search-icon': {
				width: null,
				'@apply w-9': {}
			},
			'.uk-search-default .uk-search-icon:not(.uk-search-icon-flip) ~ .uk-search-input': {
				paddingLeft: null,
				'@apply pl-9': {}
			},
			'.uk-search-default .uk-search-icon-flip ~ .uk-search-input': {
				paddingRight: null,
				'@apply pr-9': {}
			}
		}
	};
}
