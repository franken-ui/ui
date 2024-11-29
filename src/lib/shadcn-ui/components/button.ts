export default {
	'.uk-btn': {
		boxSizing: 'border-box',
		borderRadius: 'var(--uk-border-radius)',
		textAlign: 'center',
		boxShadow: 'var(--uk-box-shadow-s)',
		'@apply inline-flex h-10 items-center justify-center px-5 py-2.5 font-medium hover:opacity-80 focus-visible:outline-dotted focus-visible:outline-ring disabled:opacity-50':
			{}
	},
	'.uk-btn::-moz-focus-inner': { border: '0', padding: '0' },
	'.uk-btn.uk-active': { '@apply opacity-80': {} },
	'.uk-btn-default': { '@apply border border-border bg-transparent': {} },
	'.uk-btn-primary': { '@apply bg-primary text-primary-foreground': {} },
	'.uk-btn-secondary': {
		'@apply bg-secondary text-secondary-foreground': {}
	},
	'.uk-btn-danger': {
		'@apply bg-destructive text-destructive-foreground': {}
	},
	'.uk-btn-xs': {
		'@apply h-7 px-3 py-1.5 text-xs': {}
	},
	'.uk-btn-sm': { '@apply h-8 px-4 py-2 text-sm': {} },
	'.uk-btn-lg': {
		'@apply h-12 px-6 py-3': {}
	},
	'.uk-btn-xl': {
		'@apply h-14 px-7 py-3.5': {}
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
		boxShadow: 'var(--uk-box-shadow-s)',
		borderRadius: 'var(--uk-border-radius)'
	},
	'.uk-btn-group .uk-btn': { '@apply rounded-none shadow-none': {} },
	'.uk-btn-group > .uk-btn:first-child': {
		borderTopLeftRadius: 'var(--uk-border-radius)',
		borderBottomLeftRadius: 'var(--uk-border-radius)'
	},
	'.uk-btn-group > .uk-btn:last-child, .uk-btn-group > .uk-inline:last-child > .uk-btn': {
		borderTopRightRadius: 'var(--uk-border-radius)',
		borderBottomRightRadius: 'var(--uk-border-radius)'
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
	'.uk-btn-icon': { '@apply aspect-square p-0': {} }
};
