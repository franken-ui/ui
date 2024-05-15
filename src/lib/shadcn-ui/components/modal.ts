export default function () {
	return {
		'hook-modal': {
			// padding: null,
			backgroundColor: `rgba(0, 0, 0, 0.8)`,
			'@apply backdrop-blur-sm': {}
		},
		'hook-dialog': {
			width: '32rem',
			backgroundColor: null,
			'@apply overflow-hidden border border-border bg-background rounded-lg': {}
		},
		'hook-full': {
			backgroundColor: null,
			'@apply w-full rounded-none border-none': {}
		},
		'hook-header': {
			// padding: null,
			backgroundColor: null,
			borderBottom: null
			// '@apply p-6': {}
		},
		'hook-body': {
			// padding: null,
			// '@apply p-6': {}
		},
		'hook-footer': {
			// padding: null,
			backgroundColor: null,
			borderTop: null
			// '@apply p-6': {}
		},
		'hook-title': {
			fontSize: null,
			lineHeight: null,
			'@apply text-lg font-semibold leading-none tracking-tight': {}
		},
		'hook-close-full': {
			backgroundColor: null
		},
		'hook-misc': {
			'.uk-modal-full': {
				padding: '0 !important'
			},
			'.uk-flex': {
				display: 'flex !important'
			},
			'.uk-flex-top': {
				'@apply items-start': {}
			},
			'.uk-margin-auto-vertical': {
				marginTop: 'auto !important',
				marginBottom: 'auto !important'
			},
			'.uk-overflow-auto': { overflow: 'auto' },
			'.uk-overflow-auto > :last-child': { marginBottom: '0' }
		}
	};
}
