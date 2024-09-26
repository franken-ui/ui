export default {
	'.uk-dotnav': {
		display: 'flex',
		flexWrap: 'wrap',
		margin: '0',
		padding: '0',
		listStyle: 'none',
		marginLeft: '-0.75rem'
	},
	'.uk-dotnav > *': {
		flex: 'none',
		paddingLeft: '0.75rem'
	},
	'.uk-dotnav > * > *': {
		display: 'block',
		boxSizing: 'border-box',
		width: '10px',
		height: '10px',
		borderRadius: '50%',
		background: 'transparent',
		textIndent: '100%',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		transition: '0.2s ease-in-out',
		transitionProperty: 'background-color, border-color',
		'@apply border border-primary': {}
	},
	'.uk-dotnav > * > :hover': {
		borderColor: 'transparent',
		'@apply bg-primary': {}
	},
	'.uk-dotnav > * > :active': {
		borderColor: 'transparent',
		'@apply bg-primary': {}
	},
	'.uk-dotnav > .uk-active > *': {
		borderColor: 'transparent',
		'@apply bg-primary': {}
	},
	'.uk-dotnav-vertical': {
		flexDirection: 'column',
		marginLeft: '0',
		marginTop: '-0.75rem'
	},
	'.uk-dotnav-vertical > *': {
		paddingLeft: '0',
		paddingTop: '0.75rem'
	}
};
