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
		'@apply backdrop-blur-sm p-4': {}
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
		borderRadius: 'var(--uk-border-radius)',
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
		'@apply p-4': {}
	},
	'.uk-modal-header': {
		display: 'flow-root',
		'@apply p-4': {}
	},
	'.uk-modal-footer': {
		display: 'flow-root',
		'@apply p-4': {}
	},
	'.uk-modal-body > :last-child, .uk-modal-header > :last-child, .uk-modal-footer > :last-child': {
		marginBottom: '0'
	},
	'.uk-modal-title': {
		'@apply text-lg font-semibold leading-none tracking-tight': {}
	},
	"[class*='uk-modal-close-']": {
		position: 'absolute',
		zIndex: '1010',
		top: '10px',
		right: '10px',
		'@apply top-4 right-4': {}
	},
	"[class*='uk-modal-close-']:first-child + *": {
		marginTop: '0'
	},
	'.uk-modal-close-outside': {
		top: '0',
		right: '-5px',
		transform: 'translate(0, -100%)',
		color: '#ffffff'
	},
	'.uk-modal-close-outside:hover': {
		color: '#fff'
	},
	'.uk-modal-close-full': {
		top: '0',
		right: '0'
	},
	'.uk-modal-header + .uk-modal-body, .uk-modal-body + .uk-modal-footer': {
		'@apply pt-0': {}
	},
	'.uk-modal-header ~ .uk-modal-footer': {
		'@apply pt-0': {}
	},
	'.uk-modal-header + .uk-modal-body.uk-overflow-auto': {
		'@apply pb-0': {}
	},
	'.uk-modal-body.uk-overflow-auto + .uk-modal-footer': {
		'@apply pt-6': {}
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
