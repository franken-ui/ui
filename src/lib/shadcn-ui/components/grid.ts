export default {
	'.uk-grid': {
		display: 'flex',
		flexWrap: 'wrap',
		margin: '0',
		padding: '0',
		listStyle: 'none',
		marginLeft: '-30px'
	},
	'.uk-grid > *': {
		margin: '0',
		paddingLeft: '30px'
	},
	'.uk-grid > * > :last-child': {
		marginBottom: '0'
	},
	'.uk-grid + .uk-grid, .uk-grid > .uk-grid-margin, * + .uk-grid-margin': {
		marginTop: '30px'
	},
	'.uk-grid-small, .uk-grid-column-small': {
		marginLeft: '-15px'
	},
	'.uk-grid-small > *, .uk-grid-column-small > *': {
		paddingLeft: '15px'
	},
	'.uk-grid + .uk-grid-small, .uk-grid + .uk-grid-row-small, .uk-grid-small > .uk-grid-margin, .uk-grid-row-small > .uk-grid-margin, * + .uk-grid-margin-small':
		{
			marginTop: '15px'
		},
	'.uk-grid-medium, .uk-grid-column-medium': {
		marginLeft: '-30px'
	},
	'.uk-grid-medium > *, .uk-grid-column-medium > *': {
		paddingLeft: '30px'
	},
	'.uk-grid + .uk-grid-medium, .uk-grid + .uk-grid-row-medium, .uk-grid-medium > .uk-grid-margin, .uk-grid-row-medium > .uk-grid-margin, * + .uk-grid-margin-medium':
		{
			marginTop: '30px'
		},
	'.uk-grid-large, .uk-grid-column-large': {
		marginLeft: '-40px'
	},
	'.uk-grid-large > *, .uk-grid-column-large > *': {
		paddingLeft: '40px'
	},
	'.uk-grid + .uk-grid-large, .uk-grid + .uk-grid-row-large, .uk-grid-large > .uk-grid-margin, .uk-grid-row-large > .uk-grid-margin, * + .uk-grid-margin-large':
		{
			marginTop: '40px'
		},
	'.uk-grid-collapse, .uk-grid-column-collapse': {
		marginLeft: '0'
	},
	'.uk-grid-collapse > *, .uk-grid-column-collapse > *': {
		paddingLeft: '0'
	},
	'.uk-grid + .uk-grid-collapse, .uk-grid + .uk-grid-row-collapse, .uk-grid-collapse > .uk-grid-margin, .uk-grid-row-collapse > .uk-grid-margin':
		{
			marginTop: '0'
		},
	'.uk-grid-divider > *': {
		position: 'relative',
		paddingLeft: '60px'
	},
	'.uk-grid-divider > :not(.uk-first-column)::before': {
		content: "''",
		position: 'absolute',
		top: '0',
		bottom: '0',
		borderLeft: '1px solid',
		left: '30px',
		'@apply border-border': {}
	},
	'.uk-grid-divider.uk-grid-stack > .uk-grid-margin::before': {
		content: "''",
		position: 'absolute',
		left: '60px',
		right: '0',
		borderTop: '1px solid',
		top: '-30px',
		'@apply border-border': {}
	},
	'.uk-grid-divider': {
		marginLeft: '-60px'
	},
	'.uk-grid-divider.uk-grid-stack > .uk-grid-margin': {
		marginTop: '60px'
	},
	'.uk-grid-divider.uk-grid-small, .uk-grid-divider.uk-grid-column-small': {
		marginLeft: '-30px'
	},
	'.uk-grid-divider.uk-grid-small > *, .uk-grid-divider.uk-grid-column-small > *': {
		paddingLeft: '30px'
	},
	'.uk-grid-divider.uk-grid-small > :not(.uk-first-column)::before, .uk-grid-divider.uk-grid-column-small > :not(.uk-first-column)::before':
		{
			left: '15px'
		},
	'.uk-grid-divider.uk-grid-small.uk-grid-stack > .uk-grid-margin, .uk-grid-divider.uk-grid-row-small.uk-grid-stack > .uk-grid-margin':
		{
			marginTop: '30px'
		},
	'.uk-grid-divider.uk-grid-small.uk-grid-stack > .uk-grid-margin::before': {
		top: '-15px',
		left: '30px'
	},
	'.uk-grid-divider.uk-grid-row-small.uk-grid-stack > .uk-grid-margin::before': {
		top: '-15px'
	},
	'.uk-grid-divider.uk-grid-column-small.uk-grid-stack > .uk-grid-margin::before': {
		left: '30px'
	},
	'.uk-grid-divider.uk-grid-medium, .uk-grid-divider.uk-grid-column-medium': {
		marginLeft: '-60px'
	},
	'.uk-grid-divider.uk-grid-medium > *, .uk-grid-divider.uk-grid-column-medium > *': {
		paddingLeft: '60px'
	},
	'.uk-grid-divider.uk-grid-medium > :not(.uk-first-column)::before, .uk-grid-divider.uk-grid-column-medium > :not(.uk-first-column)::before':
		{
			left: '30px'
		},
	'.uk-grid-divider.uk-grid-medium.uk-grid-stack > .uk-grid-margin, .uk-grid-divider.uk-grid-row-medium.uk-grid-stack > .uk-grid-margin':
		{
			marginTop: '60px'
		},
	'.uk-grid-divider.uk-grid-medium.uk-grid-stack > .uk-grid-margin::before': {
		top: '-30px',
		left: '60px'
	},
	'.uk-grid-divider.uk-grid-row-medium.uk-grid-stack > .uk-grid-margin::before': {
		top: '-30px'
	},
	'.uk-grid-divider.uk-grid-column-medium.uk-grid-stack > .uk-grid-margin::before': {
		left: '60px'
	},
	'.uk-grid-divider.uk-grid-large, .uk-grid-divider.uk-grid-column-large': {
		marginLeft: '-80px'
	},
	'.uk-grid-divider.uk-grid-large > *, .uk-grid-divider.uk-grid-column-large > *': {
		paddingLeft: '80px'
	},
	'.uk-grid-divider.uk-grid-large > :not(.uk-first-column)::before, .uk-grid-divider.uk-grid-column-large > :not(.uk-first-column)::before':
		{
			left: '40px'
		},
	'.uk-grid-divider.uk-grid-large.uk-grid-stack > .uk-grid-margin, .uk-grid-divider.uk-grid-row-large.uk-grid-stack > .uk-grid-margin':
		{
			marginTop: '80px'
		},
	'.uk-grid-divider.uk-grid-large.uk-grid-stack > .uk-grid-margin::before': {
		top: '-40px',
		left: '80px'
	},
	'.uk-grid-divider.uk-grid-row-large.uk-grid-stack > .uk-grid-margin::before': {
		top: '-40px'
	},
	'.uk-grid-divider.uk-grid-column-large.uk-grid-stack > .uk-grid-margin::before': {
		left: '80px'
	},
	'.uk-grid-match > *, .uk-grid-item-match': {
		display: 'flex',
		flexWrap: 'wrap'
	},
	".uk-grid-match > * > :not([class*='uk-width']), .uk-grid-item-match > :not([class*='uk-width'])":
		{
			boxSizing: 'border-box',
			width: '100%',
			flex: 'auto'
		}
};
