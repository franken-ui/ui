export default {
	'.uk-drop': {
		display: 'none', // Removed variable - fundamental behavior
		position: 'absolute', // Removed variable - fundamental positioning
		zIndex: 'var(--uk-drop-z-index, 1020)',
		boxSizing: 'border-box', // Removed variable - fundamental box model
		width: 'var(--uk-drop-width, 18rem)',

		// Position offset variables - keep as is per rule #4
		'--uk-position-offset': '10px',
		'--uk-position-viewport-offset': '8px'
	},

	'.uk-drop.uk-open': {
		display: 'block' // Removed variable - fundamental behavior
	},

	'.uk-drop-stack .uk-drop-grid > *': {
		width: '100%' // Removed variable - fundamental stacking behavior
	},

	'.uk-drop-parent-icon': {
		marginLeft: 'var(--uk-drop-icon-margin, 0.5rem)',
		transition: '0.3s transform' // Simplified transition - fundamental animation
	},

	"[aria-expanded='true'] > .uk-drop-parent-icon": {
		transform: 'rotate(180deg)' // Removed variable - fundamental rotation
	},

	// Dropbar
	'.uk-dropbar': {
		// Position offset variables - keep as is per rule #4
		'--uk-position-offset': '0',
		'--uk-position-shift-offset': '0',
		'--uk-position-viewport-offset': '0',
		width: 'auto', // Removed variable - fundamental sizing
		backgroundColor: 'hsl(var(--background))'
	},

	'.uk-dropbar > :last-child': {
		marginBottom: '0' // Removed variable - fundamental spacing reset
	},

	'.uk-dropbar-lg': {
		padding: 'var(--uk-dropbar-lg-padding, 2.5rem 0)' // Combined padding properties
	},

	// Dropdown
	// Base dropdown styles
	'.uk-dropdown': {
		// Position
		'--uk-position-offset': '10px',
		'--uk-position-viewport-offset': '8px',

		// Layout
		width: 'var(--uk-dropdown-width, auto)',

		// Visual
		borderRadius: 'var(--uk-dropdown-radius, var(--uk-global-radius))',
		boxShadow: 'var(--uk-dropdown-shadow, var(--uk-global-shadow))',
		borderWidth: 'var(--uk-dropdown-border-width, 1px)',
		borderStyle: 'var(--uk-dropdown-border-style, solid)',
		borderColor: 'var(--uk-dropdown-border-color, hsl(var(--border) / var(--border-alpha, 1)))',
		backgroundColor: 'var(--uk-dropdown-bg, hsl(var(--popover)))',
		color: 'var(--uk-dropdown-color, hsl(var(--popover-foreground)))'
	},

	// Dropbar variant
	'.uk-dropdown-dropbar': {
		// Layout
		width: 'var(--uk-dropdown-dropbar-width, auto)',

		// Visual
		backgroundColor: 'var(--uk-dropdown-dropbar-bg, transparent)',
		boxShadow: 'var(--uk-dropdown-dropbar-shadow, none)',

		// Position
		'--uk-position-viewport-offset': '1rem'
	},

	'.uk-dropdown-nav': {
		'--uk-nav-item-hover-decoration': 'none',
		'--uk-nav-item-padding': 'var(--uk-dropdown-nav-item-padding, 0.375rem 0.25rem)',
		'--uk-nav-item-margin': 'var(--uk-dropdown-nav-item-margin, 0.25rem)',
		'--uk-nav-item-display': 'var(--uk-dropdown-nav-item-display, flex)',
		'--uk-nav-item-align-items': 'var(--uk-dropdown-nav-item-align, center)',
		'--uk-nav-item-hover-bg': 'var(--uk-dropdown-nav-item-hover-bg, hsl(var(--accent)))',
		'--uk-nav-item-hover-color':
			'var(--uk-dropdown-nav-item-hover-color, hsl(var(--accent-foreground)))',
		'--uk-nav-header-padding': 'var(--uk-dropdown-nav-header-padding, 0.375rem 0.25rem)',
		'--uk-nav-header-margin': 'var(--uk-dropdown-nav-header-margin, 0.25rem)',
		'--uk-nav-header-font-weight': 'var(--uk-dropdown-nav-header-weight, 600)',
		'--uk-nav-divider-margin': 'var(--uk-dropdown-nav-divider-margin, 0)',
		'--uk-nav-divider-width': 'var(--uk-dropdown-nav-divider-border-width, 1px) 0 0 0',
		'--uk-nav-divider-style': 'var(--uk-dropdown-nav-divider-border-style, solid)',
		'--uk-nav-divider-color':
			'var(--uk-dropdown-nav-divider-border-color, hsl(var(--border) / var(--border-alpha, 1)))',
		'user-select': 'var(--uk-dropdown-nav-item-select, none)'
	},

	// Dropnav
	'.uk-dropnav-dropbar': {
		position: 'absolute', // Removed variable - fundamental positioning
		zIndex: 'var(--uk-dropnav-z)',
		padding: '0', // Removed variable - fundamental reset
		left: '0', // Removed variable - fundamental positioning
		right: '0' // Removed variable - fundamental positioning
	}
};
