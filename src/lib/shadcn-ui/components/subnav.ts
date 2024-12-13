export default {
	'.uk-subnav': {
		'@apply flex items-center': {}
	},
	'.uk-subnav > * > :first-child': {
		transition: '0.1s ease-in-out',
		transitionProperty: 'color, background-color',
		'@apply flex items-center justify-center rounded-full px-4 text-center font-medium text-muted-foreground':
			{}
	},
	'.uk-subnav > * > a:hover': {
		'@apply text-primary': {}
	},
	'.uk-subnav-primary > .uk-active > a': {
		'@apply bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground':
			{}
	},
	'.uk-subnav-secondary > .uk-active > a': {
		'@apply bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground':
			{}
	},
	'.uk-subnav-destructive > .uk-active > a': {
		'@apply bg-destructive text-destructive-foreground hover:bg-destructive/80 hover:text-destructive-foreground':
			{}
	}
};
