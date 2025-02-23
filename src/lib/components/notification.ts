export default {
	'.uk-notification': {
		position: 'fixed', // obvious value for notifications
		top: 'var(--uk-notification-offset-y, 10px)',
		left: 'var(--uk-notification-offset-x, 10px)',
		zIndex: 'var(--uk-notification-z-index, 1040)',
		boxSizing: 'border-box', // obvious value
		width: 'var(--uk-notification-width, 350px)'
	},

	'.uk-notification-top-right, .uk-notification-bottom-right': {
		left: 'auto', // obvious value
		right: 'var(--uk-notification-offset-x, 10px)'
	},

	'.uk-notification-top-center, .uk-notification-bottom-center': {
		left: '50%', // obvious value for centering
		marginLeft: 'calc(var(--uk-notification-width, 350px) / -2)'
	},

	'.uk-notification-bottom-left, .uk-notification-bottom-right, .uk-notification-bottom-center': {
		top: 'auto', // obvious value
		bottom: 'var(--uk-notification-offset-y, 10px)'
	},

	'.uk-notification-message': {
		position: 'relative', // obvious value for close button
		cursor: 'pointer', // obvious value for interaction
		borderRadius: 'var(--uk-notification-radius, var(--uk-global-radius))',
		boxShadow: 'var(--uk-notification-shadow, var(--uk-global-shadow))',
		border: 'var(--uk-notification-border, 1px solid hsl(var(--border)))',
		backgroundColor: 'var(--uk-notification-bg, hsl(var(--background)))',
		padding: 'var(--uk-notification-padding, 1rem 1.5rem 1rem 1rem)',
		color: 'var(--uk-notification-color, hsl(var(--foreground)))'
	},

	'* + .uk-notification-message': {
		marginTop: 'var(--uk-notification-gap, 10px)'
	},

	'.uk-notification-close': {
		display: 'none', // obvious value, shows on hover
		position: 'absolute', // obvious value for positioning
		right: 'var(--uk-notification-close-offset-x, 0.25rem)',
		top: 'var(--uk-notification-close-offset-y, 0.25rem)',
		padding: 'var(--uk-notification-close-padding, 0.25rem)',
		color: 'var(--uk-notification-close-color, hsl(var(--foreground) / 0.5))'
	},

	'.uk-notification-message:hover .uk-notification-close': {
		display: 'block' // obvious value for hover state
	},

	// Primary modifier
	'.uk-notification-message-primary': {
		'--uk-notification-border': '1px solid hsl(var(--primary))',
		'--uk-notification-bg': 'hsl(var(--primary))',
		'--uk-notification-color': 'hsl(var(--primary-foreground))',
		'--uk-notification-close-color': 'hsl(var(--primary-foreground) / 0.5)'
	},

	// Secondary modifier
	'.uk-notification-message-secondary': {
		'--uk-notification-border': '1px solid hsl(var(--secondary))',
		'--uk-notification-bg': 'hsl(var(--secondary))',
		'--uk-notification-color': 'hsl(var(--secondary-foreground))',
		'--uk-notification-close-color': 'hsl(var(--secondary-foreground) / 0.5)'
	},

	// Destructive modifier
	'.uk-notification-message-destructive': {
		'--uk-notification-border': '1px solid hsl(var(--destructive))',
		'--uk-notification-bg': 'hsl(var(--destructive))',
		'--uk-notification-color': 'hsl(var(--destructive-foreground))',
		'--uk-notification-close-color': 'hsl(var(--destructive-foreground) / 0.5)'
	}
};
