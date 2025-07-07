export default {
	'.uk-avatar': {
		backgroundColor: 'hsl(var(--background))',
		borderRadius: 'var(--uk-avatar-radius, var(--uk-global-radius))',
		position: 'relative',
		display: 'inline-flex',
		height: 'var(--uk-avatar-height, 2.5rem)',
		width: 'var(--uk-avatar-width, 2.5rem)',
		alignItems: 'center',
		justifyContent: 'center'
	},
	'.uk-avatar-image': {
		height: '100%',
		width: '100%',
		overflow: 'hidden'
	},
	'.uk-avatar.uk-avatar-rounded': {
		borderRadius: '9999px'
	},
	'.uk-avatar.uk-avatar-rounded img, .uk-avatar.uk-avatar-rounded .uk-avatar-text': {
		borderRadius: '9999px'
	},
	'.uk-avatar.uk-avatar-bordered': {
		borderWidth: 'var(--uk-avatar-bordered-border-width, 0.125rem)',
		borderColor: 'hsl(var(--border) / var(--border-alpha, 1))',
		padding: 'var(--uk-avatar-bordered-padding, 0.25rem)'
	},
	'.uk-avatar img': {
		borderRadius: 'var(--uk-avatar-inner-radius, var(--uk-global-radius-s))',
		height: '100%',
		width: '100%',
		objectFit: 'cover'
	},
	'.uk-avatar-dot::after, .uk-avatar-dot-top::after, .uk-avatar-dot-top-right::after, .uk-avatar-dot-right::after, .uk-avatar-dot-bottom-right::after, .uk-avatar-dot-bottom::after, .uk-avatar-dot-bottom-left::after, .uk-avatar-dot-left::after, .uk-avatar-dot-top-left::after':
		{
			content: "''",
			position: 'absolute',
			height: 'var(--uk-avatar-dot-size, 0.875rem)',
			width: 'var(--uk-avatar-dot-size, 0.875rem)',
			borderRadius: '9999px',
			borderWidth: 'var(--uk-avatar-dot-border-width, 0.125rem)',
			borderColor: 'hsl(var(--background))',
			backgroundColor: 'var(--uk-avatar-dot-bg, hsl(var(--primary)))',
			transform: 'translate(0, 0)',
			zIndex: 'var(--uk-avatar-dot-z-index, 10)'
		},
	'.uk-avatar-dot::after, .uk-avatar-dot-bottom-right::after': {
		bottom: '0',
		right: '0',
		transform: 'translate(25%, 25%)'
	},
	'.uk-avatar-dot-top::after': {
		top: '0',
		left: '50%',
		transform: 'translate(-50%, -50%)'
	},
	'.uk-avatar-dot-top-right::after': {
		top: '0',
		right: '0',
		transform: 'translate(25%, -25%)'
	},
	'.uk-avatar-dot-right::after': {
		top: '50%',
		right: '0',
		transform: 'translate(50%, -50%)'
	},
	'.uk-avatar-dot-bottom::after': {
		bottom: '0',
		left: '50%',
		transform: 'translate(-50%, 50%)'
	},
	'.uk-avatar-dot-bottom-left::after': {
		bottom: '0',
		left: '0',
		transform: 'translate(-25%, 25%)'
	},
	'.uk-avatar-dot-left::after': {
		top: '50%',
		left: '0',
		transform: 'translate(-50%, -50%)'
	},
	'.uk-avatar-dot-top-left::after': {
		top: '0',
		left: '0',
		transform: 'translate(-25%, -25%)'
	},
	'.uk-avatar-text': {
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 'var(--uk-avatar-inner-radius, var(--uk-global-radius-s))'
	}
};
