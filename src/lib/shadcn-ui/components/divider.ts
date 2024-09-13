export default {
	"[class*='uk-divider']": {
		border: 'none',
		height: '1px'
	},
	'.uk-divider-icon': {
		position: 'relative',
		height: '20px',
		backgroundImage: 'var(--uk-divider-icon-image)',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50% 50%'
	},
	'.uk-divider-icon::before, .uk-divider-icon::after': {
		content: "''",
		position: 'absolute',
		top: '50%',
		maxWidth: 'calc(50% - (50px / 2))',
		borderBottom: '1px solid',
		'@apply border-border': {}
	},
	'.uk-divider-icon::before': {
		right: 'calc(50% + (50px / 2))',
		width: '100%'
	},
	'.uk-divider-icon::after': {
		left: 'calc(50% + (50px / 2))',
		width: '100%'
	},
	'.uk-divider-small': {
		lineHeight: '0'
	},
	'.uk-divider-small::after': {
		content: "''",
		display: 'inline-block',
		width: '100px',
		maxWidth: '100%',
		borderTop: '1px solid #e5e5e5',
		verticalAlign: 'top',
		borderBottom: '1px solid',
		'@apply border-border': {}
	},
	'.uk-divider-vertical': {
		width: 'max-content',
		height: '100px',
		marginLeft: 'auto',
		marginRight: 'auto',
		borderLeft: '1px solid #e5e5e5',
		borderBottom: '1px solid',
		'@apply border-border': {}
	}
};
