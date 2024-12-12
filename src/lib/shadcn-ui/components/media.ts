export default {
	'@screen sm': {
		'.uk-container': {
			paddingLeft: '2rem',
			paddingRight: '2rem'
		},
		'.uk-container-expand-left.uk-container-xs, .uk-container-expand-right.uk-container-xs': {
			maxWidth: 'calc(50% + (750px / 2) - 2rem)'
		},
		'.uk-container-expand-left.uk-container-sm, .uk-container-expand-right.uk-container-sm': {
			maxWidth: 'calc(50% + (900px / 2) - 2rem)'
		},
		'.uk-container-item-padding-remove-left, .uk-container-item-padding-remove-right': {
			width: 'calc(100% + 2rem)'
		},
		'.uk-container-item-padding-remove-left': {
			marginLeft: '-2rem'
		},
		'.uk-container-item-padding-remove-right': {
			marginRight: '-2rem'
		},
		'.uk-dropbar': {
			paddingLeft: '2rem',
			paddingRight: '2rem'
		},
		'.uk-dropdown-dropbar': {
			'--uk-position-viewport-offset': '2rem'
		},
		'.uk-stepper': {
			justifyContent: 'center',
			flexWrap: 'nowrap'
		},
		'.uk-stepper-default li': {
			width: '100%'
		},
		'.uk-stepper-counter.uk-stepper-default li::before': {
			content: 'counter(item)',
			display: 'inline-flex',
			marginRight: '.5rem'
		},
		'.uk-stepper-default li:not(:last-child)::after': {
			content: '""',
			width: '100%',
			height: '1px',
			background: 'hsl(var(--border))',
			marginLeft: '1.5rem',
			marginRight: '1.5rem'
		},
		'.uk-stepper-default li:last-child': {
			width: 'auto'
		},
		'.uk-stepper-default li.uk-stepper-checked::before': {
			display: 'none'
		},
		'.uk-stepper-default .uk-stepper-checked a': {
			paddingLeft: '1.5rem',
			display: 'inline-flex',
			alignItems: 'center'
		},
		'.uk-stepper-default .uk-stepper-checked a::before': {
			display: 'inline-flex'
		}
	},
	'@screen md': {
		'.uk-container-expand-left, .uk-container-expand-right': {
			maxWidth: 'calc(50% + (1200px / 2) - 2.5rem)'
		},
		'.uk-container-expand-left.uk-container-xs, .uk-container-expand-right.uk-container-xs': {
			maxWidth: 'calc(50% + (750px / 2) - 2.5rem)'
		},
		'.uk-container-expand-left.uk-container-sm, .uk-container-expand-right.uk-container-sm': {
			maxWidth: 'calc(50% + (900px / 2) - 2.5rem)'
		},
		'.uk-container-expand-left.uk-container-lg, .uk-container-expand-right.uk-container-lg': {
			maxWidth: 'calc(50% + (1400px / 2) - 2.5rem)'
		},
		'.uk-container-expand-left.uk-container-xl, .uk-container-expand-right.uk-container-xl': {
			maxWidth: 'calc(50% + (1600px / 2) - 2.5rem)'
		},
		'.uk-container-item-padding-remove-left, .uk-container-item-padding-remove-right': {
			width: 'calc(100% + 2.5rem)'
		},
		'.uk-container-item-padding-remove-left': {
			marginLeft: '-2.5rem'
		},
		'.uk-container-item-padding-remove-right': {
			marginRight: '-2.5rem'
		},
		'.uk-dropbar': {
			paddingLeft: '2.5rem',
			paddingRight: '2.5rem'
		},
		'.uk-dropdown-dropbar': {
			'--uk-position-viewport-offset': '2.5rem'
		},
		'.uk-form-horizontal .uk-form-label': {
			width: '200px',
			marginTop: '7px',
			cssFloat: 'left'
		},
		'.uk-form-horizontal .uk-form-controls': {
			marginLeft: '21rem'
		},
		'.uk-form-horizontal .uk-form-controls-text': {
			paddingTop: '7px'
		}
	},
	// '@screen lg': {},
	// '@screen xl': {},
	// '@screen max-xl': {},
	// '@screen max-lg': {},
	'@screen max-md': {
		'.uk-form-horizontal .uk-form-label': {
			display: 'block',
			marginBottom: '5px'
		},
		'.uk-table-responsive, .uk-table-responsive tbody, .uk-table-responsive th, .uk-table-responsive td, .uk-table-responsive tr':
			{
				display: 'block'
			},
		'.uk-table-responsive thead': {
			display: 'none'
		},
		'.uk-table-responsive th, .uk-table-responsive td': {
			width: 'auto !important',
			maxWidth: 'none !important',
			minWidth: '0 !important',
			overflow: 'visible !important',
			whiteSpace: 'normal !important'
		},
		'.uk-table-responsive th:not(:first-child):not(.uk-table-link), .uk-table-responsive td:not(:first-child):not(.uk-table-link), .uk-table-responsive .uk-table-link:not(:first-child) > a':
			{
				paddingTop: '5px !important'
			},
		'.uk-table-responsive th:not(:last-child):not(.uk-table-link), .uk-table-responsive td:not(:last-child):not(.uk-table-link), .uk-table-responsive .uk-table-link:not(:last-child) > a':
			{
				paddingBottom: '5px !important'
			},
		'.uk-table-justify.uk-table-responsive th, .uk-table-justify.uk-table-responsive td': {
			paddingLeft: '0',
			paddingRight: '0'
		}
	},
	'@screen max-sm': {
		'.uk-notification': {
			left: '10px',
			right: '10px',
			width: 'auto',
			margin: '0'
		}
	},
	'@media (hover: none)': {
		'.uk-hidden-touch': {
			display: 'none !important'
		}
	},
	'@media (hover)': {
		'.uk-hidden-notouch': {
			display: 'none !important'
		}
	},
	'@media (pointer: coarse)': {
		'.uk-background-fixed': {
			backgroundAttachment: 'scroll'
		}
	}
};
