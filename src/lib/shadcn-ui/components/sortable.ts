export default {
	'.uk-sortable': {
		position: 'relative'
	},
	'.uk-sortable > :last-child': {
		marginBottom: '0'
	},
	'.uk-sortable-drag': {
		position: 'fixed !important',
		zIndex: '1050 !important',
		pointerEvents: 'none'
	},
	'.uk-sortable-placeholder': {
		opacity: '0',
		pointerEvents: 'none'
	},
	'.uk-sortable-empty': {
		minHeight: '50px'
	},
	'.uk-sortable-handle:hover': {
		cursor: 'move'
	}
};
