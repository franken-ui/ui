export default function () {
	return {
		// 'hook-notification': {},
		'hook-close': {
			top: null,
			right: null,
			'@apply right-1 top-1 p-1 text-foreground/50': {}
		},
		// 'hook-close-hover': {},
		'hook-message': {
			padding: null,
			backgroundColor: null,
			color: null,
			fontSize: null,
			lineHeight: null,
			'@apply rounded-md border border-border bg-background p-4 pr-6 text-sm text-foreground shadow-lg':
				{}
		},
		// 'hook-primary': {},
		// 'hook-success': {},
		// 'hook-warning': {},
		'hook-danger': {
			color: null,
			'@apply border-destructive bg-destructive text-destructive-foreground': {}
		},
		'hook-misc': {
			'.uk-notification-message-primary': null,
			'.uk-notification-message-success': null,
			'.uk-notification-message-warning': null,
			'.uk-notification-message-danger .uk-notification-close': {
				'@apply text-destructive-foreground/50': {}
			}
		}
	};
}
