export default function () {
	return {
		'hook-item': {
			color: null
		},
		'hook-toolbar': {
			padding: null,
			backgroundColor: 'rgba(0, 0, 0, 0.3)',
			color: null,
			'@apply p-4 text-sm text-white backdrop-blur-sm': {}
		},
		'hook-toolbar-icon': {
			padding: null,
			color: null,
			'@apply text-white': {}
		},
		'hook-misc': {
			'.uk-lightbox :focus-visible': null,
			'.uk-lightbox-toolbar-icon:focus-visible': {
				'@apply outline-none': {}
			},
			'.uk-lightbox-toolbar-icon svg': {
				'@apply h-4 w-4': {}
			},
			'.uk-lightbox-button': null,
			'.uk-lightbox-button:hover': null,
			'.uk-lightbox-toolbar > *': null
		}
	};
}
