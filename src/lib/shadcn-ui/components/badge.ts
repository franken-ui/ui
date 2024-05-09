export default function () {
	return {
		'hook-badge': {
			verticalAlign: null,
			backgroundColor: null,
			color: null,
			fontSize: null,
			lineHeight: null,
			'@apply border border-border text-xs font-semibold text-foreground shadow': {}
		},
		'hook-hover': {
			textDecoration: null
		},
		'hook-misc': {
			'.uk-badge-primary': {
				'@apply border-transparent bg-primary text-primary-foreground hover:bg-primary/80': {}
			},
			'.uk-badge-secondary': {
				'@apply border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80': {}
			},
			'.uk-badge-danger': {
				'@apply border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80':
					{}
			}
		}
	};
}
