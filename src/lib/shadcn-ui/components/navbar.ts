export default {
	'.uk-navbar': {
		display: 'flex',
		position: 'relative',
		'--uk-navbar-dropbar-behind-color': 'dark'
	},
	'.uk-navbar-container:not(.uk-navbar-transparent)': {
		'@apply border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60':
			{}
	},
	".uk-navbar-left, .uk-navbar-right, [class*='uk-navbar-center']": {
		display: 'flex',
		alignItems: 'center',
		'@apply gap-6': {}
	},
	'.uk-navbar-right': {
		marginLeft: 'auto'
	},
	'.uk-navbar-center:only-child': {
		marginLeft: 'auto',
		marginRight: 'auto',
		position: 'relative'
	},
	'.uk-navbar-center:not(:only-child)': {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 'max-content',
		boxSizing: 'border-box',
		zIndex: '990'
	},
	'.uk-navbar-center-left, .uk-navbar-center-right': {
		position: 'absolute',
		top: '0'
	},
	'.uk-navbar-center-left': {
		right: 'calc(100% + 15px)'
	},
	'.uk-navbar-center-right': {
		left: 'calc(100% + 15px)'
	},
	"[class*='uk-navbar-center-']": {
		width: 'max-content',
		boxSizing: 'border-box'
	},
	'.uk-navbar-nav': {
		display: 'flex',
		margin: '0',
		padding: '0',
		listStyle: 'none',
		'@apply gap-6': {}
	},
	'.uk-navbar-left, .uk-navbar-right, .uk-navbar-center:only-child': {
		flexWrap: 'wrap'
	},
	'.uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		columnGap: '0.25em',
		boxSizing: 'border-box',
		fontSize: '0.875rem',
		textDecoration: 'none',
		'@apply min-h-14': {}
	},
	'.uk-navbar-nav > li > a': {
		padding: '0 0',
		transition: '0.1s ease-in-out',
		transitionProperty: 'color, background-color',
		'@apply text-foreground/60': {}
	},
	'.uk-navbar-nav > li:hover > a, .uk-navbar-nav > li > a[aria-expanded="true"]': {
		'@apply text-foreground/80': {}
	},
	'.uk-navbar-nav > li.uk-active > a': {
		'@apply text-foreground': {}
	},
	'.uk-navbar-parent-icon': {
		marginLeft: '4px',
		transition: 'transform 0.3s ease-out'
	},
	'.uk-navbar-nav > li > a[aria-expanded="true"] .uk-navbar-parent-icon': {
		transform: 'rotate(180deg)'
	},
	'.uk-navbar-item': {
		padding: '0 0',
		'@apply text-foreground/60': {}
	},
	'.uk-navbar-item > :last-child': {
		marginBottom: '0'
	},
	'.uk-navbar-toggle': {
		padding: '0 0',
		'@apply text-foreground/60': {}
	},
	'.uk-navbar-toggle:hover, .uk-navbar-toggle[aria-expanded="true"]': {
		textDecoration: 'none',
		'@apply text-foreground/80': {}
	},
	'.uk-navbar-subtitle': {
		fontSize: '0.875rem'
	},
	'.uk-navbar-justify .uk-navbar-left, .uk-navbar-justify .uk-navbar-right, .uk-navbar-justify .uk-navbar-nav, .uk-navbar-justify .uk-navbar-nav > li, .uk-navbar-justify .uk-navbar-item, .uk-navbar-justify .uk-navbar-toggle':
		{
			flexGrow: '1'
		},
	'.uk-navbar-dropdown': {
		'--uk-position-offset': '15px',
		'--uk-position-shift-offset': '0',
		'--uk-position-viewport-offset': '15px',
		width: '200px',
		'@apply rounded-md border border-border bg-popover text-popover-foreground shadow-md': {}
	},
	'.uk-navbar-dropdown > :last-child': {
		marginBottom: '0'
	},
	'.uk-navbar-dropdown :focus-visible': {
		outlineColor: '#333 !important'
	},
	'.uk-navbar-dropdown .uk-drop-grid': {
		marginLeft: '-30px'
	},
	'.uk-navbar-dropdown .uk-drop-grid > *': {
		paddingLeft: '30px'
	},
	'.uk-navbar-dropdown .uk-drop-grid > .uk-grid-margin': {
		marginTop: '30px'
	},
	'.uk-navbar-dropdown-width-2:not(.uk-drop-stack)': {
		width: '400px'
	},
	'.uk-navbar-dropdown-width-3:not(.uk-drop-stack)': {
		width: '600px'
	},
	'.uk-navbar-dropdown-width-4:not(.uk-drop-stack)': {
		width: '800px'
	},
	'.uk-navbar-dropdown-width-5:not(.uk-drop-stack)': {
		width: '1000px'
	},
	'.uk-navbar-dropdown-dropbar': {
		width: 'auto',
		background: 'transparent',
		padding: '25px 0 25px 0',
		'--uk-position-offset': '0',
		'--uk-position-shift-offset': '0',
		'--uk-position-viewport-offset': '15px',
		boxShadow: 'none'
	},
	'.uk-navbar-dropdown-nav': {
		fontSize: '0.875rem'
	},
	'.uk-navbar-dropdown-nav > li > a': {
		'@apply m-1 flex select-none items-center rounded-sm px-2 py-1.5 text-sm': {}
	},
	'.uk-navbar-dropdown-nav > li > a:hover': {
		'@apply bg-accent text-accent-foreground': {}
	},
	'.uk-navbar-dropdown-nav > li.uk-active > a': {
		'@apply bg-secondary text-secondary-foreground': {}
	},
	'.uk-navbar-dropdown-nav .uk-nav-subtitle': {
		fontSize: '12px'
	},
	'.uk-navbar-dropdown-nav .uk-nav-header': {
		'@apply m-1 px-2 py-1.5': {}
	},
	'.uk-navbar-dropdown-nav .uk-nav-divider': {
		borderTop: '1px solid',
		'@apply border-border': {}
	},
	'.uk-navbar-dropdown-nav .uk-nav-sub a': {
		'@apply ml-1 px-2 py-1.5': {}
	},
	'.uk-navbar-dropdown-nav .uk-nav-sub a:hover': {
		'@apply bg-accent text-accent-foreground': {}
	},
	'.uk-navbar-dropdown-nav .uk-nav-sub li.uk-active > a': {
		'@apply bg-secondary text-secondary-foreground': {}
	},
	'.uk-navbar-container': {
		transition: '0.1s ease-in-out',
		transitionProperty: 'background-color'
	},
	'.uk-navbar-toggle-icon': {
		'@apply text-foreground/60': {}
	},
	':hover > .uk-navbar-toggle-icon': {
		'@apply text-foreground/80': {}
	}
};
