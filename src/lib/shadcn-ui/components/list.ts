export default {
	'.uk-list > *': {
		breakInside: 'avoid-column'
	},
	'.uk-list > * > :last-child': {
		marginBottom: '0'
	},
	'.uk-list > :nth-child(n+2), .uk-list > * > ul': {
		'@apply mt-2': {}
	},
	'.uk-list-disc, .uk-list-circle, .uk-list-square, .uk-list-decimal, .uk-list-hyphen': {
		paddingLeft: '32px'
	},
	'.uk-list-disc': {
		listStyleType: 'disc'
	},
	'.uk-list-circle': {
		listStyleType: 'circle'
	},
	'.uk-list-square': {
		listStyleType: 'square'
	},
	'.uk-list-decimal': {
		listStyleType: 'decimal'
	},
	'.uk-list-hyphen': {
		listStyleType: "'–  '"
	},
	'.uk-list-muted > ::marker': {
		'@apply text-muted-foreground': {}
	},
	'.uk-list-primary > ::marker': {
		'@apply text-primary': {}
	},
	'.uk-list-secondary > ::marker': {
		'@apply text-secondary-foreground': {}
	},
	'.uk-list-bullet > *': {
		position: 'relative',
		paddingLeft: '32px'
	},
	'.uk-list-bullet > ::before': {
		content: '""',
		position: 'absolute',
		top: '0',
		left: '0',
		width: '32px',
		height: '1.5em',
		backgroundImage: 'var(--uk-list-bullet-image)',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50% 50%'
	},
	'.uk-list-divider > :nth-child(n+2)': {
		'@apply mt-2 border-t border-border pt-2': {}
	},
	'.uk-list-striped > *': {
		'@apply p-2': {}
	},
	'.uk-list-striped > *:nth-of-type(odd)': {
		'@apply border-t border-b border-border': {}
	},
	'.uk-list-striped > :nth-of-type(odd)': {
		'@apply bg-muted/50': {}
	},
	'.uk-list-striped > :nth-child(n+2)': {
		marginTop: '0'
	}
};
