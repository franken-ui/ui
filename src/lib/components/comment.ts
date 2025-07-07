export default {
	'.uk-comment-body': {
		display: 'flow-root', // obvious - standard block formatting context
		overflowWrap: 'break-word', // obvious - prevent overflow
		wordWrap: 'break-word' // obvious - prevent overflow
	},
	'.uk-comment-header': {
		display: 'flow-root', // obvious - standard block formatting context
		marginBottom: 'var(--uk-comment-header-margin, 1.25rem)'
	},
	'.uk-comment-body > :last-child, .uk-comment-header > :last-child': {
		marginBottom: '0' // obvious - remove margin from last child
	},
	// Typography
	'.uk-comment-title': {
		fontSize: 'var(--uk-comment-title-font-size, 1rem)',
		fontWeight: 'var(--uk-comment-title-font-weight, 500)'
	},
	'.uk-comment-meta': {
		fontSize: 'var(--uk-comment-meta-font-size, var(--uk-global-font-size-s))',
		lineHeight: 'var(--uk-comment-meta-leading, var(--uk-global-leading-s))',
		marginTop: 'var(--uk-comment-meta-margin-top, 0.25rem)'
	},
	'.uk-comment-list > :nth-child(n + 2)': {
		marginTop: 'var(--uk-comment-list-gap, 0.75rem)'
	},
	// Nested comments
	'.uk-comment-list .uk-comment ~ ul': {
		marginInlineStart: 'var(--uk-comment-nested-margin, 1.5rem)',
		marginTop: 'var(--uk-comment-nested-margin-top, 1.5rem)',
		borderInlineStartWidth: 'var(--uk-comment-nested-border-width, 1px)',
		borderInlineStartStyle: 'var(--uk-comment-nested-border-style, solid)',
		borderInlineStartColor:
			'var(--uk-comment-nested-border-color, hsl(var(--border) / var(--border-alpha, 1)))'
	},
	'.uk-comment-list .uk-comment ~ ul > :nth-child(n + 2)': {
		marginTop: 'var(--uk-comment-nested-item-gap, 1.5rem)'
	},
	'.uk-comment-primary': {
		borderRadius: 'var(--uk-comment-primary-radius, var(--uk-global-radius))',
		backgroundColor: 'var(--uk-comment-primary-bg, hsl(var(--primary)))',
		color: 'var(--uk-comment-primary-color, hsl(var(--primary-foreground)))'
	},
	'.uk-comment': {
		padding: 'var(--uk-comment-padding, 0.75rem)'
	},
	// Avatar
	'.uk-comment-avatar': {
		height: 'var(--uk-comment-avatar-size, 2.5rem)',
		width: 'var(--uk-comment-avatar-size, 2.5rem)',
		overflow: 'hidden', // obvious - contain image
		borderRadius: 'var(--uk-comment-avatar-radius, 9999px)',
		backgroundColor: 'var(--uk-comment-avatar-bg, hsl(var(--muted)))'
	},
	'.uk-comment-avatar img': {
		height: '100%', // obvious - fill container
		width: '100%', // obvious - fill container
		objectFit: 'cover' // obvious - standard image cover
	},
	'.uk-comment-list .uk-comment ~ ul > li': {
		marginLeft: 'var(--uk-comment-nested-item-margin, 0.75rem)',
		marginInlineStart: 'var(--uk-comment-nested-item-margin, 0.75rem)'
	}
};
