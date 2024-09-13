export default {
	'.uk-slidenav': {
		'@apply inline-flex h-9 w-9 items-center justify-center rounded-full border border-input shadow-sm bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring':
			{}
	},
	'.uk-slidenav:hover': {
		'@apply bg-accent text-accent-foreground': {}
	},
	'.uk-slidenav:active': {
		'@apply bg-accent text-accent-foreground': {}
	},
	'.uk-slidenav-large': {
		padding: '10px 10px'
	},
	'.uk-slidenav-container': {
		display: 'flex'
	},
	'.uk-slidenav svg': {
		'@apply h-4 w-4': {}
	}
};
