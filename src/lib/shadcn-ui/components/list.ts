export default {
	'.uk-list': {
		padding: '0',
		listStyle: 'none'
	},
	'.uk-list > *': {
		breakInside: 'avoid-column'
	},
	'.uk-list > * > :last-child': {
		marginBottom: '0'
	},
	'.uk-list-disc > *, .uk-list-circle > *, .uk-list-square > *, .uk-list-decimal > *, .uk-list-hyphen > *':
		{
			'@apply ml-6': {}
		},
	'.uk-list-decimal': {
		counterReset: 'decimal'
	},
	'.uk-list-decimal > *': {
		counterIncrement: 'decimal'
	},
	'.uk-list-disc > ::before, .uk-list-circle > ::before, .uk-list-square > ::before, .uk-list-decimal > ::before, .uk-list-hyphen > ::before':
		{
			content: "''",
			position: 'relative',
			left: '-30px',
			width: '30px',
			height: '1.5em',
			marginBottom: '-1.5em',
			display: 'list-item',
			listStylePosition: 'inside',
			textAlign: 'right'
		},
	'.uk-list-disc > ::before': {
		listStyleType: 'disc'
	},
	'.uk-list-circle > ::before': {
		listStyleType: 'circle'
	},
	'.uk-list-square > ::before': {
		listStyleType: 'square'
	},
	'.uk-list-decimal > ::before': {
		content: "counter(decimal, decimal) '\\200A.\\00A0'"
	},
	'.uk-list-hyphen > ::before': {
		content: "'–\\00A0\\00A0'"
	},
	'.uk-list-muted > ::before': {
		'@apply text-muted-foreground': {}
	},
	'.uk-list-primary > ::before': {
		'@apply text-primary': {}
	},
	'.uk-list-secondary > ::before': {
		'@apply text-secondary-foreground': {}
	},
	'.uk-list-bullet > *': {
		'@apply ml-6': {}
	},
	'.uk-list-bullet > ::before': {
		content: "''",
		display: 'list-item',
		position: 'relative',
		height: '1.5em',
		marginBottom: '-1.5em',
		backgroundImage: 'var(--uk-list-bullet-image)',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50% 50%',
		'@apply -left-6 w-6': {}
	},
	'.uk-list-divider > :nth-child(n + 2)': {
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
	'.uk-list-large.uk-list-striped > :nth-child(n + 2), .uk-list-collapse.uk-list-striped > :nth-child(n + 2)':
		null,
	'.uk-list-disc > li:not(:first-child), .uk-list-circle > li:not(:first-child), .uk-list-square > li:not(:first-child), .uk-list-decimal > li:not(:first-child), .uk-list-hyphen > li:not(:first-child)':
		{
			'@apply mt-2': {}
		},
	'.uk-list-bullet > li:not(:first-child)': {
		'@apply mt-2': {}
	}
};
