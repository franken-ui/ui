export default {
	'.uk-leader': {
		overflow: 'hidden'
	},
	'.uk-leader-fill::after': {
		display: 'inline-block',
		marginLeft: '1rem',
		width: '0',
		content: 'attr(data-fill)',
		whiteSpace: 'nowrap'
	},
	'.uk-leader-fill.uk-leader-hide::after': {
		display: 'none'
	}
};
