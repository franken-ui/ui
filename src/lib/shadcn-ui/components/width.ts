export default {
	'[class*="uk-child-width"] > *': {
		boxSizing: 'border-box',
		width: '100%'
	},
	'.uk-child-width-1-2 > *': {
		width: '50%'
	},
	'.uk-child-width-1-3 > *': {
		width: 'calc(100% / 3)'
	},
	'.uk-child-width-1-4 > *': {
		width: '25%'
	},
	'.uk-child-width-1-5 > *': {
		width: '20%'
	},
	'.uk-child-width-1-6 > *': {
		width: 'calc(100% / 6)'
	},
	'.uk-child-width-auto > *': {
		width: 'auto'
	},
	'.uk-child-width-expand > :not([class*="uk-width"])': {
		flex: '1',
		minWidth: '1px'
	},
	'[class*="uk-width"]': {
		boxSizing: 'border-box',
		width: '100%',
		maxWidth: '100%'
	},
	'.uk-width-1-2': {
		width: '50%'
	},
	'.uk-width-1-3': {
		width: 'calc(100% / 3)'
	},
	'.uk-width-2-3': {
		width: 'calc(200% / 3)'
	},
	'.uk-width-1-4': {
		width: '25%'
	},
	'.uk-width-3-4': {
		width: '75%'
	},
	'.uk-width-1-5': {
		width: '20%'
	},
	'.uk-width-2-5': {
		width: '40%'
	},
	'.uk-width-3-5': {
		width: '60%'
	},
	'.uk-width-4-5': {
		width: '80%'
	},
	'.uk-width-1-6': {
		width: 'calc(100% / 6)'
	},
	'.uk-width-5-6': {
		width: 'calc(500% / 6)'
	},
	'.uk-width-small': {
		width: '150px'
	},
	'.uk-width-medium': {
		width: '300px'
	},
	'.uk-width-large': {
		width: '450px'
	},
	'.uk-width-xlarge': {
		width: '600px'
	},
	'.uk-width-2xlarge': {
		width: '750px'
	},
	'.uk-width-auto': {
		width: 'auto'
	},
	'.uk-width-expand': {
		flex: '1',
		minWidth: '1px'
	},
	'.uk-width-max-content': {
		width: 'max-content'
	},
	'.uk-width-min-content': {
		width: 'min-content'
	}
};
