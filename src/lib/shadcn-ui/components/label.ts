export default function () {
	return {
		'hook-label': {
			display: null,
			padding: null,
			backgroundColor: null,
			lineHeight: null,
			fontSize: null,
			color: null,
			verticalAlign: null,
			whiteSpace: null,
			borderRadius: null,
			textTransform: null,
			'@apply inline-flex items-center rounded-md border border-border px-2.5 py-0.5 text-xs font-semibold text-foreground shadow transition-colors':
				{}
		},
		'hook-danger': {
			backgroundColor: null,
			color: null,
			'@apply border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80':
				{}
		},
		'hook-misc': {
			'.uk-label-success': null,
			'.uk-label-warning': null,
			'.uk-label-primary': {
				'@apply border-transparent bg-primary text-primary-foreground hover:bg-primary/80': {}
			},
			'.uk-label-secondary': {
				'@apply border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80': {}
			}
		}
	};
}
