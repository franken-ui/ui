export default {
	"[class*='uk-align']": {
		display: 'block',
		marginBottom: '30px'
	},
	"* + [class*='uk-align']": {
		marginTop: '30px'
	},
	'.uk-align-center': {
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	'.uk-align-left': {
		marginTop: '0',
		marginRight: '30px',
		cssFloat: 'left'
	},
	'.uk-align-right': {
		marginTop: '0',
		marginLeft: '30px',
		cssFloat: 'right'
	}
};
