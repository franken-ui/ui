export default function () {
	return {
		'hook-slidenav': {
			padding: null,
			color: null,
			transition: null,
			'@apply inline-flex h-9 w-9 items-center justify-center rounded-full border border-input shadow-sm bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring':
				{}
		},
		'hook-hover': {
			color: null,
			'@apply bg-accent text-accent-foreground': {}
		},
		'hook-active': {
			color: null,
			'@apply bg-accent text-accent-foreground': {}
		},
		'hook-large': null,
		'hook-misc': {
			'.uk-slidenav svg': {
				'@apply h-4 w-4': {}
			}
		}
	};
}
