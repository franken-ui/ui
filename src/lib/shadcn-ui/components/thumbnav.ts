export default {
	'.uk-thumbnav': {
		display: 'flex',
		flexWrap: 'wrap',
		margin: '0',
		padding: '0',
		listStyle: 'none',
		marginLeft: '-1rem'
	},
	'.uk-thumbnav > *': {
		paddingLeft: '1rem'
	},
	'.uk-thumbnav > * > *': {
		display: 'inline-block',
		position: 'relative'
	},
	'.uk-thumbnav > * > *::after': {
		content: "''",
		position: 'absolute',
		top: '0',
		bottom: '0',
		left: '0',
		right: '0',
		backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4))',
		transition: 'opacity 0.1s ease-in-out'
	},
	'.uk-thumbnav > * > :hover::after': {
		opacity: '0'
	},
	'.uk-thumbnav > .uk-active > *::after': {
		opacity: '0'
	},
	'.uk-thumbnav-vertical': {
		flexDirection: 'column',
		marginLeft: '0',
		marginTop: '-1rem'
	},
	'.uk-thumbnav-vertical > *': {
		paddingLeft: '0',
		paddingTop: '1rem'
	}
};
