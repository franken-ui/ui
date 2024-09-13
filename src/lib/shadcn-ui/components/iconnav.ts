export default {
	'.uk-iconnav': {
		display: 'flex',
		flexWrap: 'wrap',
		margin: '0',
		padding: '0',
		listStyle: 'none',
		'@apply gap-1': {}
	},
	'.uk-iconnav > *': {
		paddingLeft: '0'
	},
	'.uk-iconnav > * > a': {
		alignItems: 'center',
		columnGap: '0.25em',
		lineHeight: '0',
		textDecoration: 'none',
		fontSize: '0.875rem',
		transition: '0.1s ease-in-out',
		transitionProperty: 'color, background-color',
		'@apply inline-flex h-9 w-9 justify-center rounded-md': {}
	},
	'.uk-iconnav > * > a:hover': {
		'@apply bg-accent text-accent-foreground': {}
	},
	'.uk-iconnav > .uk-active > a': {
		'@apply bg-accent text-accent-foreground': {}
	},
	'.uk-iconnav-vertical': {
		flexDirection: 'column',
		marginLeft: '0',
		marginTop: '0'
	},
	'.uk-iconnav-vertical > *': {
		paddingLeft: '0',
		paddingTop: '0'
	},
	'.uk-iconnav > * > a:focus-visible': {
		'@apply outline-none ring-1 ring-ring': {}
	},
	'.uk-iconnav-outline > * > a': {
		'@apply border border-border shadow-sm': {}
	},
	'.uk-iconnav-small > * > a': {
		'@apply h-8 w-8': {}
	},
	'.uk-iconnav-xsmall > * > a': {
		'@apply h-7 w-7': {}
	}
};
