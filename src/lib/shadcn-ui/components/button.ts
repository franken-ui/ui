export default {
	'.uk-btn': {
		boxSizing: 'border-box',
		borderRadius: 'var(--uk-btn-radius)',
		boxShadow: 'var(--uk-btn-shadow)',
		height: 'var(--uk-btn-height)',
		padding: 'var(--uk-btn-padding)',
		fontSize: 'var(--uk-btn-font-size)',
		lineHeight: 'var(--uk-btn-line-height)',
		'@apply box-border inline-flex items-center justify-center text-center font-medium focus-visible:outline-dotted focus-visible:outline-ring disabled:opacity-50':
			{}
	},
	'.uk-btn::-moz-focus-inner': { border: '0', padding: '0' },
	'.uk-btn-default': {
		'@apply border border-border bg-background hover:bg-accent hover:text-accent-foreground': {}
	},
	'.uk-btn-default.uk-active': {
		'@apply bg-accent text-accent-foreground': {}
	},
	'.uk-btn-primary': {
		'@apply bg-primary text-primary-foreground hover:bg-primary/90': {}
	},
	'.uk-btn-primary.uk-active': {
		'@apply bg-primary/90': {}
	},
	'.uk-btn-secondary': {
		'@apply bg-secondary text-secondary-foreground hover:bg-secondary/80': {}
	},
	'.uk-btn-secondary.uk-active': {
		'@apply bg-secondary/80': {}
	},
	'.uk-btn-destructive': {
		'@apply bg-destructive text-destructive-foreground hover:bg-destructive/90': {}
	},
	'.uk-btn-destructive.uk-active': {
		'@apply bg-destructive/90': {}
	},
	'.uk-btn-text': {
		height: 'auto',
		padding: '0',
		position: 'relative',
		borderRadius: '0',
		'@apply shadow-none': {}
	},
	'.uk-btn-text::before': {
		content: "''",
		position: 'absolute',
		bottom: '0',
		left: '0',
		right: '100%',
		borderBottom: '1px solid currentColor',
		transition: 'right 0.3s ease-out'
	},
	'.uk-btn-text:hover::before': { right: '0' },
	'.uk-btn-text:disabled::before': { display: 'none' },
	'.uk-btn-group': {
		display: 'inline-flex',
		position: 'relative',
		boxShadow: 'var(--uk-btn-shadow)',
		borderRadius: 'var(--uk-btn-radius)'
	},
	'.uk-btn-group .uk-btn': { '@apply rounded-none shadow-none': {} },
	'.uk-btn-group > .uk-btn:first-child': {
		borderTopLeftRadius: 'var(--uk-btn-radius)',
		borderBottomLeftRadius: 'var(--uk-btn-radius)'
	},
	'.uk-btn-group > .uk-btn:last-child, .uk-btn-group > .uk-inline:last-child > .uk-btn': {
		borderTopRightRadius: 'var(--uk-btn-radius)',
		borderBottomRightRadius: 'var(--uk-btn-radius)'
	},
	'.uk-btn-group > .uk-btn:nth-child(n + 2), .uk-btn-group > div:nth-child(n + 2) .uk-btn': {
		marginLeft: '-1px'
	},
	'.uk-btn-group .uk-btn:hover, .uk-btn-group .uk-btn:focus, .uk-btn-group .uk-btn:active, .uk-btn-group .uk-btn.uk-active':
		{
			position: 'relative',
			zIndex: '1'
		},
	'.uk-btn-ghost': { '@apply shadow-none': {} },
	'.uk-btn-ghost:not(:disabled):hover': { '@apply bg-accent': {} },
	'.uk-btn-ghost.uk-active': { '@apply bg-accent': {} },
	'.uk-btn-icon': { '@apply aspect-square p-0': {} }
};
