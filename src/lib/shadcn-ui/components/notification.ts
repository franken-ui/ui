export default {
	'.uk-notification': {
		position: 'fixed',
		top: '10px',
		left: '10px',
		zIndex: '1040',
		boxSizing: 'border-box',
		width: '350px'
	},
	'.uk-notification-top-right, .uk-notification-bottom-right': {
		left: 'auto',
		right: '10px'
	},
	'.uk-notification-top-center, .uk-notification-bottom-center': {
		left: '50%',
		marginLeft: '-175px'
	},
	'.uk-notification-bottom-left, .uk-notification-bottom-right, .uk-notification-bottom-center': {
		top: 'auto',
		bottom: '10px'
	},
	'.uk-notification-message': {
		position: 'relative',
		cursor: 'pointer',
		'@apply rounded-md border border-border bg-background p-4 pr-6 text-sm text-foreground shadow-lg':
			{}
	},
	'* + .uk-notification-message': {
		marginTop: '10px'
	},
	'.uk-notification-close': {
		display: 'none',
		position: 'absolute',
		'@apply right-1 top-1 p-1 text-foreground/50': {}
	},
	'.uk-notification-message:hover .uk-notification-close': {
		display: 'block'
	},
	'.uk-notification-message-danger': {
		'@apply border-destructive bg-destructive text-destructive-foreground': {}
	},
	'.uk-notification-message-danger .uk-notification-close': {
		'@apply text-destructive-foreground/50': {}
	}
};
