export default {
	'.uk-container': {
		display: 'flow-root',
		boxSizing: 'content-box',
		maxWidth: '1200px',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: '15px',
		paddingRight: '15px'
	},
	'.uk-container > :last-child': {
		marginBottom: '0'
	},
	'.uk-container .uk-container': {
		paddingLeft: '0',
		paddingRight: '0'
	},
	'.uk-container-xsmall': {
		maxWidth: '750px'
	},
	'.uk-container-small': {
		maxWidth: '900px'
	},
	'.uk-container-large': {
		maxWidth: '1400px'
	},
	'.uk-container-xlarge': {
		maxWidth: '1600px'
	},
	'.uk-container-expand': {
		maxWidth: 'none'
	},
	'.uk-container-expand-left': {
		marginLeft: '0'
	},
	'.uk-container-expand-right': {
		marginRight: '0'
	},
	'.uk-container-item-padding-remove-left, .uk-container-item-padding-remove-right': {
		width: 'calc(100% + 15px)'
	},
	'.uk-container-item-padding-remove-left': {
		marginLeft: '-15px'
	},
	'.uk-container-item-padding-remove-right': {
		marginRight: '-15px'
	}
};
