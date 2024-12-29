export default {
	'.uk-modal': {
		display: 'none',
		position: 'fixed',
		top: '0',
		right: '0',
		bottom: '0',
		left: '0',
		zIndex: '1010',
		overflowY: 'auto',
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		opacity: '0',
		transition: 'opacity 0.15s linear',
		padding: 'var(--uk-modal-padding)',
		'@apply backdrop-blur-sm': {}
	},
	'.uk-modal.uk-open': {
		opacity: '1'
	},
	'.uk-modal-page': {
		overflow: 'hidden'
	},
	'.uk-modal-dialog': {
		position: 'relative',
		boxSizing: 'border-box',
		margin: '0 auto',
		width: '32rem',
		maxWidth: '100% !important',
		opacity: '0',
		transform: 'translateY(-100px)',
		transition: '0.3s linear',
		transitionProperty: 'opacity, transform',
		borderRadius: 'var(--uk-modal-radius)',
		'@apply overflow-hidden border border-border bg-background': {}
	},
	'.uk-open > .uk-modal-dialog': {
		opacity: '1',
		transform: 'translateY(0)'
	},
	'.uk-modal-container .uk-modal-dialog': {
		width: '1200px'
	},
	'.uk-modal-full': {
		padding: '0 !important',
		background: 'none'
	},
	'.uk-modal-full .uk-modal-dialog': {
		margin: '0',
		width: '100%',
		maxWidth: '100%',
		transform: 'translateY(0)',
		'@apply w-full rounded-none border-none': {}
	},
	'.uk-modal-body': {
		display: 'flow-root',
		padding: 'var(--uk-modal-padding-body)'
	},
	'.uk-modal-header': {
		display: 'flow-root',
		padding: 'var(--uk-modal-padding-header)'
	},
	'.uk-modal-footer': {
		display: 'flow-root',
		padding: 'var(--uk-modal-padding-footer)'
	},
	'.uk-modal-body > :last-child, .uk-modal-header > :last-child, .uk-modal-footer > :last-child': {
		marginBottom: '0'
	},
	'.uk-modal-title': {
		'@apply text-lg font-semibold leading-none tracking-tight': {}
	},
	'.uk-modal-header + .uk-modal-body, .uk-modal-body + .uk-modal-footer': {
		paddingTop: 'var(--uk-modal-padding-top-between)'
	},
	'.uk-modal-header ~ .uk-modal-footer': {
		paddingTop: 'var(--uk-modal-padding-top-after-header)'
	},
	'.uk-modal-header + .uk-modal-body.uk-overflow-auto': {
		paddingBottom: 'var(--uk-modal-padding-bottom-scrollable)'
	},
	'.uk-modal-body.uk-overflow-auto + .uk-modal-footer': {
		paddingTop: 'var(--uk-modal-padding-top-after-scrollable)'
	},
	'.uk-flex': {
		display: 'flex !important'
	},
	'.uk-flex-top': {
		'@apply items-start': {}
	},
	'.uk-flex-wrap-top': {
		alignContent: 'flex-start'
	},
	'.uk-margin-auto-vertical': {
		marginTop: 'auto !important',
		marginBottom: 'auto !important'
	},
	'.uk-overflow-auto': {
		overflow: 'auto'
	},
	'.uk-overflow-auto > :last-child': {
		marginBottom: '0'
	}
};
