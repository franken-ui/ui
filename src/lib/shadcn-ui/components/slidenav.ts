export default {
	'.uk-slidenav': {
		boxShadow: 'var(--uk-box-shadow-s)',
		'@apply inline-flex h-9 w-9 items-center justify-center rounded-full border border-input bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring':
			{}
	},
	'.uk-slidenav:hover': {
		'@apply bg-accent text-accent-foreground': {}
	},
	'.uk-slidenav:active': {
		'@apply bg-accent text-accent-foreground': {}
	},
	'.uk-slidenav-lg': {
		padding: '10px 10px'
	},
	'.uk-slidenav-container': {
		display: 'flex'
	},
	'.uk-slidenav svg': {
		'@apply h-4 w-4': {}
	}
};
