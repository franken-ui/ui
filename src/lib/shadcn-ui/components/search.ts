export default {
	'.uk-search': {
		display: 'inline-block',
		position: 'relative',
		maxWidth: '100%',
		margin: '0'
	},
	'.uk-search-input::-webkit-search-cancel-button, .uk-search-input::-webkit-search-decoration': {
		WebkitAppearance: 'none'
	},
	'.uk-search-input::-moz-placeholder': {
		opacity: '1'
	},
	'.uk-search-input': {
		boxSizing: 'border-box',
		margin: '0',
		borderRadius: '0',
		font: 'inherit',
		overflow: 'visible',
		WebkitAppearance: 'none',
		verticalAlign: 'middle',
		width: '100%',
		border: 'none'
	},
	'.uk-search-input:focus': {
		outline: 'none'
	},
	'.uk-search .uk-search-icon': {
		position: 'absolute',
		top: '0',
		bottom: '0',
		left: '0',
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	'.uk-search .uk-search-icon:not(a):not(button):not(input)': {
		pointerEvents: 'none'
	},
	'.uk-search .uk-search-icon-flip': {
		right: '0',
		left: 'auto'
	},
	'.uk-search-default': {
		width: '240px'
	},
	'.uk-search-default .uk-search-input': {
		'@apply h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm text-foreground shadow-sm placeholder-muted-foreground':
			{}
	},
	'.uk-search-default .uk-search-icon': {
		'@apply w-9': {}
	},
	'.uk-search-default .uk-search-icon:not(.uk-search-icon-flip) ~ .uk-search-input': {
		'@apply pl-9': {}
	},
	'.uk-search-default .uk-search-icon-flip ~ .uk-search-input': {
		'@apply pr-9': {}
	},
	'.uk-search-navbar': {
		width: '400px'
	},
	'.uk-search-navbar .uk-search-input': {
		height: '40px',
		background: 'transparent',
		fontSize: '1.5rem'
	},
	'.uk-search-navbar .uk-search-icon': {
		width: '40px'
	},
	'.uk-search-navbar .uk-search-icon:not(.uk-search-icon-flip) ~ .uk-search-input': {
		paddingLeft: '40px'
	},
	'.uk-search-navbar .uk-search-icon-flip ~ .uk-search-input': {
		paddingRight: '40px'
	},
	'.uk-search-large': {
		width: '500px'
	},
	'.uk-search-large .uk-search-input': {
		height: '80px',
		background: 'transparent',
		fontSize: '2.625rem'
	},
	'.uk-search-large .uk-search-icon': {
		width: '80px'
	},
	'.uk-search-large .uk-search-icon:not(.uk-search-icon-flip) ~ .uk-search-input': {
		paddingLeft: '80px'
	},
	'.uk-search-large .uk-search-icon-flip ~ .uk-search-input': {
		paddingRight: '80px'
	}
};
