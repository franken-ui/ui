export default {
	'.uk-button': {
		'@apply inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring':
			{}
	},
	'.uk-button:not(:disabled)': {
		cursor: 'pointer'
	},
	'.uk-button::-moz-focus-inner': {
		border: '0',
		padding: '0'
	},
	'.uk-button:hover': {
		textDecoration: 'none'
	},
	'.uk-button-default': {
		'@apply border border-input bg-background text-accent-foreground': {}
	},
	'.uk-button-default:hover': {
		'@apply bg-accent': {}
	},
	'.uk-button-primary': {
		border: '1px solid transparent',
		'@apply bg-primary text-primary-foreground': {}
	},
	'.uk-button-primary:hover': {
		'@apply opacity-90': {}
	},
	'.uk-button-secondary': {
		border: '1px solid transparent',
		'@apply bg-secondary text-secondary-foreground': {}
	},
	'.uk-button-secondary:hover': {
		'@apply opacity-90': {}
	},
	'.uk-button-danger': {
		border: '1px solid transparent',
		'@apply bg-destructive text-destructive-foreground': {}
	},
	'.uk-button-danger:hover': {
		'@apply opacity-90': {}
	},
	'.uk-button-default:disabled, .uk-button-primary:disabled, .uk-button-secondary:disabled, .uk-button-danger:disabled':
		{
			'@apply opacity-50': {}
		},
	'.uk-button-small': {
		'@apply h-8 px-3 py-0 text-xs': {}
	},
	'.uk-button-text': {
		padding: '0',
		background: 'none',
		position: 'relative',
		'@apply h-auto rounded-none shadow-none': {}
	},
	'.uk-button-text::before': {
		content: "''",
		position: 'absolute',
		bottom: '0',
		left: '0',
		right: '100%',
		borderBottom: '1px solid currentColor',
		transition: 'right 0.3s ease-out'
	},
	'.uk-button-text:hover::before': {
		right: '0'
	},
	'.uk-button-text:disabled': {
		'@apply opacity-50': {}
	},
	'.uk-button-text:disabled::before': {
		display: 'none'
	},
	'.uk-button-link': {
		padding: '0',
		background: 'none',
		'@apply h-auto rounded-none shadow-none': {}
	},
	'.uk-button-link:hover': {
		textDecoration: 'none'
	},
	'.uk-button-link:disabled': {
		textDecoration: 'none',
		'@apply opacity-50': {}
	},
	'.uk-button-ghost': {
		'@apply shadow-none': {}
	},
	'.uk-button-ghost:hover': {
		'@apply bg-accent': {}
	},
	'.uk-button-xsmall': {
		'@apply h-7 px-3 py-0 text-xs': {}
	}
};
