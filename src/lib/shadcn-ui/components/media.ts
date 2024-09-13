export default {
	'@screen sm': {
		'.uk-align-left\\@s': {
			marginTop: '0',
			marginRight: '30px',
			cssFloat: 'left'
		},
		'.uk-align-right\\@s': {
			marginTop: '0',
			marginLeft: '30px',
			cssFloat: 'right'
		},
		'.uk-column-1-2\\@s': { columnCount: '2' },
		'.uk-column-1-3\\@s': { columnCount: '3' },
		'.uk-column-1-4\\@s': { columnCount: '4' },
		'.uk-column-1-5\\@s': { columnCount: '5' },
		'.uk-column-1-6\\@s': { columnCount: '6' },
		'.uk-container': {
			paddingLeft: '30px',
			paddingRight: '30px'
		},
		'.uk-container-expand-left.uk-container-xsmall, .uk-container-expand-right.uk-container-xsmall':
			{
				maxWidth: 'calc(50% + (750px / 2) - 30px)'
			},
		'.uk-container-expand-left.uk-container-small, .uk-container-expand-right.uk-container-small': {
			maxWidth: 'calc(50% + (900px / 2) - 30px)'
		},
		'.uk-container-item-padding-remove-left, .uk-container-item-padding-remove-right': {
			width: 'calc(100% + 30px)'
		},
		'.uk-container-item-padding-remove-left': {
			marginLeft: '-30px'
		},
		'.uk-container-item-padding-remove-right': {
			marginRight: '-30px'
		},
		'.uk-countdown-number': {
			fontSize: '4rem'
		},
		'.uk-countdown-separator': {
			fontSize: '2rem'
		},
		'.uk-dropbar': {
			paddingLeft: '30px',
			paddingRight: '30px'
		},
		'.uk-dropdown-dropbar': {
			'--uk-position-viewport-offset': '30px'
		},
		'.uk-flex-left\\@s': {
			justifyContent: 'flex-start'
		},
		'.uk-flex-center\\@s': {
			justifyContent: 'center'
		},
		'.uk-flex-right\\@s': {
			justifyContent: 'flex-end'
		},
		'.uk-flex-between\\@s': {
			justifyContent: 'space-between'
		},
		'.uk-flex-around\\@s': {
			justifyContent: 'space-around'
		},
		'.uk-flex-stretch\\@s': {
			alignItems: 'stretch'
		},
		'.uk-flex-top\\@s': {
			alignItems: 'flex-start'
		},
		'.uk-flex-middle\\@s': {
			alignItems: 'center'
		},
		'.uk-flex-bottom\\@s': {
			alignItems: 'flex-end'
		},
		'.uk-flex-row\\@s': {
			flexDirection: 'row'
		},
		'.uk-flex-column\\@s': {
			flexDirection: 'column'
		},
		'.uk-flex-first\\@s': {
			order: '-1'
		},
		'.uk-flex-last\\@s': {
			order: '99'
		},
		'.uk-flex-initial\\@s': {
			flex: 'initial'
		},
		'.uk-flex-none\\@s': {
			flex: 'none'
		},
		'.uk-flex-1\\@s': {
			flex: '1'
		},
		'.uk-margin-auto\\@s': {
			marginLeft: 'auto !important',
			marginRight: 'auto !important'
		},
		'.uk-margin-auto-left\\@s': {
			marginLeft: 'auto !important'
		},
		'.uk-margin-auto-right\\@s': {
			marginRight: 'auto !important'
		},
		'.uk-margin-remove-left\\@s': {
			marginLeft: '0 !important'
		},
		'.uk-margin-remove-right\\@s': {
			marginRight: '0 !important'
		},
		'.uk-offcanvas-bar': {
			left: '-350px',
			width: '350px',
			padding: '30px 30px'
		},
		'.uk-offcanvas-flip .uk-offcanvas-bar': {
			right: '-350px'
		},
		'.uk-open > .uk-offcanvas-reveal': {
			width: '350px'
		},
		'.uk-offcanvas-close': {
			top: '10px',
			right: '10px'
		},
		':not(.uk-offcanvas-flip).uk-offcanvas-container-animation': {
			left: '350px'
		},
		'.uk-offcanvas-flip.uk-offcanvas-container-animation': {
			left: '-350px'
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
		},
		'.uk-text-left\\@s': {
			textAlign: 'left !important'
		},
		'.uk-text-right\\@s': {
			textAlign: 'right !important'
		},
		'.uk-text-center\\@s': {
			textAlign: 'center !important'
		},
		'.uk-tile': {
			paddingLeft: '30px',
			paddingRight: '30px'
		},
		'.uk-hidden\\@s': {
			display: 'none !important'
		},
		'.uk-child-width-1-1\\@s > *': {
			width: '100%'
		},
		'.uk-child-width-1-2\\@s > *': {
			width: '50%'
		},
		'.uk-child-width-1-3\\@s > *': {
			width: 'calc(100% / 3)'
		},
		'.uk-child-width-1-4\\@s > *': {
			width: '25%'
		},
		'.uk-child-width-1-5\\@s > *': {
			width: '20%'
		},
		'.uk-child-width-1-6\\@s > *': {
			width: 'calc(100% / 6)'
		},
		'.uk-child-width-auto\\@s > *': {
			width: 'auto'
		},
		'.uk-child-width-expand\\@s > :not([class*="uk-width"])': {
			flex: '1',
			minWidth: '1px'
		},
		'.uk-child-width-1-1\\@s > :not([class*="uk-width"]), .uk-child-width-1-2\\@s > :not([class*="uk-width"]), .uk-child-width-1-3\\@s > :not([class*="uk-width"]), .uk-child-width-1-4\\@s > :not([class*="uk-width"]), .uk-child-width-1-5\\@s > :not([class*="uk-width"]), .uk-child-width-1-6\\@s > :not([class*="uk-width"]), .uk-child-width-auto\\@s > :not([class*="uk-width"])':
			{
				flex: 'initial'
			},
		'.uk-width-1-1\\@s': {
			width: '100%'
		},
		'.uk-width-1-2\\@s': {
			width: '50%'
		},
		'.uk-width-1-3\\@s': {
			width: 'calc(100% / 3)'
		},
		'.uk-width-2-3\\@s': {
			width: 'calc(200% / 3)'
		},
		'.uk-width-1-4\\@s': {
			width: '25%'
		},
		'.uk-width-3-4\\@s': {
			width: '75%'
		},
		'.uk-width-1-5\\@s': {
			width: '20%'
		},
		'.uk-width-2-5\\@s': {
			width: '40%'
		},
		'.uk-width-3-5\\@s': {
			width: '60%'
		},
		'.uk-width-4-5\\@s': {
			width: '80%'
		},
		'.uk-width-1-6\\@s': {
			width: 'calc(100% / 6)'
		},
		'.uk-width-5-6\\@s': {
			width: 'calc(500% / 6)'
		},
		'.uk-width-small\\@s': {
			width: '150px'
		},
		'.uk-width-medium\\@s': {
			width: '300px'
		},
		'.uk-width-large\\@s': {
			width: '450px'
		},
		'.uk-width-xlarge\\@s': {
			width: '600px'
		},
		'.uk-width-2xlarge\\@s': {
			width: '750px'
		},
		'.uk-width-auto\\@s': {
			width: 'auto'
		},
		'.uk-width-expand\\@s': {
			flex: '1',
			minWidth: '1px'
		},
		'.uk-width-1-1\\@s, .uk-width-1-2\\@s, .uk-width-1-3\\@s, .uk-width-2-3\\@s, .uk-width-1-4\\@s, .uk-width-3-4\\@s, .uk-width-1-5\\@s, .uk-width-2-5\\@s, .uk-width-3-5\\@s, .uk-width-4-5\\@s, .uk-width-1-6\\@s, .uk-width-5-6\\@s, .uk-width-small\\@s, .uk-width-medium\\@s, .uk-width-large\\@s, .uk-width-xlarge\\@s, .uk-width-2xlarge\\@s, .uk-width-auto\\@s':
			{
				flex: 'initial'
			}
	},
	'@screen md': {
		'.uk-align-left\\@m': {
			marginTop: '0',
			marginRight: '30px',
			cssFloat: 'left'
		},
		'.uk-align-right\\@m': {
			marginTop: '0',
			marginLeft: '30px',
			cssFloat: 'right'
		},
		'.uk-article-title': {
			fontSize: '2.625rem'
		},
		'.uk-column-1-2\\@m': { columnCount: '2' },
		'.uk-column-1-3\\@m': { columnCount: '3' },
		'.uk-column-1-4\\@m': { columnCount: '4' },
		'.uk-column-1-5\\@m': { columnCount: '5' },
		'.uk-column-1-6\\@m': { columnCount: '6' },
		'.uk-container': {
			paddingLeft: '40px',
			paddingRight: '40px'
		},
		'.uk-container-expand-left, .uk-container-expand-right': {
			maxWidth: 'calc(50% + (1200px / 2) - 40px)'
		},
		'.uk-container-expand-left.uk-container-xsmall, .uk-container-expand-right.uk-container-xsmall':
			{
				maxWidth: 'calc(50% + (750px / 2) - 40px)'
			},
		'.uk-container-expand-left.uk-container-small, .uk-container-expand-right.uk-container-small': {
			maxWidth: 'calc(50% + (900px / 2) - 40px)'
		},
		'.uk-container-expand-left.uk-container-large, .uk-container-expand-right.uk-container-large': {
			maxWidth: 'calc(50% + (1400px / 2) - 40px)'
		},
		'.uk-container-expand-left.uk-container-xlarge, .uk-container-expand-right.uk-container-xlarge':
			{
				maxWidth: 'calc(50% + (1600px / 2) - 40px)'
			},
		'.uk-container-item-padding-remove-left, .uk-container-item-padding-remove-right': {
			width: 'calc(100% + 40px)'
		},
		'.uk-container-item-padding-remove-left': {
			marginLeft: '-40px'
		},
		'.uk-container-item-padding-remove-right': {
			marginRight: '-40px'
		},
		'.uk-countdown-number': {
			fontSize: '6rem'
		},
		'.uk-countdown-separator': {
			fontSize: '3rem'
		},
		'.uk-dropbar': {
			paddingLeft: '40px',
			paddingRight: '40px'
		},
		'.uk-dropdown-dropbar': {
			'--uk-position-viewport-offset': '40px'
		},
		'.uk-flex-left\\@m': {
			justifyContent: 'flex-start'
		},
		'.uk-flex-center\\@m': {
			justifyContent: 'center'
		},
		'.uk-flex-right\\@m': {
			justifyContent: 'flex-end'
		},
		'.uk-flex-between\\@m': {
			justifyContent: 'space-between'
		},
		'.uk-flex-around\\@m': {
			justifyContent: 'space-around'
		},
		'.uk-flex-stretch\\@m': {
			alignItems: 'stretch'
		},
		'.uk-flex-top\\@m': {
			alignItems: 'flex-start'
		},
		'.uk-flex-middle\\@m': {
			alignItems: 'center'
		},
		'.uk-flex-bottom\\@m': {
			alignItems: 'flex-end'
		},
		'.uk-flex-row\\@m': {
			flexDirection: 'row'
		},
		'.uk-flex-column\\@m': {
			flexDirection: 'column'
		},
		'.uk-flex-first\\@m': {
			order: '-1'
		},
		'.uk-flex-last\\@m': {
			order: '99'
		},
		'.uk-flex-initial\\@m': {
			flex: 'initial'
		},
		'.uk-flex-none\\@m': {
			flex: 'none'
		},
		'.uk-flex-1\\@m': {
			flex: '1'
		},
		'.uk-form-horizontal .uk-form-label': {
			width: '200px',
			marginTop: '7px',
			cssFloat: 'left'
		},
		'.uk-form-horizontal .uk-form-controls': {
			marginLeft: '215px'
		},
		'.uk-form-horizontal .uk-form-controls-text': {
			paddingTop: '7px'
		},
		'.uk-margin-auto\\@m': {
			marginLeft: 'auto !important',
			marginRight: 'auto !important'
		},
		'.uk-margin-auto-left\\@m': {
			marginLeft: 'auto !important'
		},
		'.uk-margin-auto-right\\@m': {
			marginRight: 'auto !important'
		},
		'.uk-margin-remove-left\\@m': {
			marginLeft: '0 !important'
		},
		'.uk-margin-remove-right\\@m': {
			marginRight: '0 !important'
		},
		'.uk-section': {
			paddingTop: '70px',
			paddingBottom: '70px'
		},
		'.uk-section-large': {
			paddingTop: '140px',
			paddingBottom: '140px'
		},
		'.uk-section-xlarge': {
			paddingTop: '210px',
			paddingBottom: '210px'
		},
		'.uk-text-left\\@m': {
			textAlign: 'left !important'
		},
		'.uk-text-right\\@m': {
			textAlign: 'right !important'
		},
		'.uk-text-center\\@m': {
			textAlign: 'center !important'
		},
		'.uk-tile': {
			paddingLeft: '40px',
			paddingRight: '40px',
			paddingTop: '70px',
			paddingBottom: '70px'
		},
		'.uk-tile-large': {
			paddingTop: '140px',
			paddingBottom: '140px'
		},
		'.uk-tile-xlarge': {
			paddingTop: '210px',
			paddingBottom: '210px'
		},
		'.uk-hidden\\@m': {
			display: 'none !important'
		},
		'.uk-child-width-1-1\\@m > *': {
			width: '100%'
		},
		'.uk-child-width-1-2\\@m > *': {
			width: '50%'
		},
		'.uk-child-width-1-3\\@m > *': {
			width: 'calc(100% / 3)'
		},
		'.uk-child-width-1-4\\@m > *': {
			width: '25%'
		},
		'.uk-child-width-1-5\\@m > *': {
			width: '20%'
		},
		'.uk-child-width-1-6\\@m > *': {
			width: 'calc(100% / 6)'
		},
		'.uk-child-width-auto\\@m > *': {
			width: 'auto'
		},
		'.uk-child-width-expand\\@m > :not([class*="uk-width"])': {
			flex: '1',
			minWidth: '1px'
		},
		'.uk-child-width-1-1\\@m > :not([class*="uk-width"]), .uk-child-width-1-2\\@m > :not([class*="uk-width"]), .uk-child-width-1-3\\@m > :not([class*="uk-width"]), .uk-child-width-1-4\\@m > :not([class*="uk-width"]), .uk-child-width-1-5\\@m > :not([class*="uk-width"]), .uk-child-width-1-6\\@m > :not([class*="uk-width"]), .uk-child-width-auto\\@m > :not([class*="uk-width"])':
			{
				flex: 'initial'
			},
		'.uk-width-1-1\\@m': {
			width: '100%'
		},
		'.uk-width-1-2\\@m': {
			width: '50%'
		},
		'.uk-width-1-3\\@m': {
			width: 'calc(100% / 3)'
		},
		'.uk-width-2-3\\@m': {
			width: 'calc(200% / 3)'
		},
		'.uk-width-1-4\\@m': {
			width: '25%'
		},
		'.uk-width-3-4\\@m': {
			width: '75%'
		},
		'.uk-width-1-5\\@m': {
			width: '20%'
		},
		'.uk-width-2-5\\@m': {
			width: '40%'
		},
		'.uk-width-3-5\\@m': {
			width: '60%'
		},
		'.uk-width-4-5\\@m': {
			width: '80%'
		},
		'.uk-width-1-6\\@m': {
			width: 'calc(100% / 6)'
		},
		'.uk-width-5-6\\@m': {
			width: 'calc(500% / 6)'
		},
		'.uk-width-small\\@m': {
			width: '150px'
		},
		'.uk-width-medium\\@m': {
			width: '300px'
		},
		'.uk-width-large\\@m': {
			width: '450px'
		},
		'.uk-width-xlarge\\@m': {
			width: '600px'
		},
		'.uk-width-2xlarge\\@m': {
			width: '750px'
		},
		'.uk-width-auto\\@m': {
			width: 'auto'
		},
		'.uk-width-expand\\@m': {
			flex: '1',
			minWidth: '1px'
		},
		'.uk-width-1-1\\@m, .uk-width-1-2\\@m, .uk-width-1-3\\@m, .uk-width-2-3\\@m, .uk-width-1-4\\@m, .uk-width-3-4\\@m, .uk-width-1-5\\@m, .uk-width-2-5\\@m, .uk-width-3-5\\@m, .uk-width-4-5\\@m, .uk-width-1-6\\@m, .uk-width-5-6\\@m, .uk-width-small\\@m, .uk-width-medium\\@m, .uk-width-large\\@m, .uk-width-xlarge\\@m, .uk-width-2xlarge\\@m, .uk-width-auto\\@m':
			{
				flex: 'initial'
			}
	},
	'@screen lg': {
		'.uk-align-left\\@l': {
			marginTop: '0',
			cssFloat: 'left'
		},
		'.uk-align-right\\@l': {
			marginTop: '0',
			cssFloat: 'right'
		},
		'.uk-align-left,.uk-align-left\\@s,.uk-align-left\\@m,.uk-align-left\\@l': {
			marginRight: '40px'
		},
		'.uk-align-right,.uk-align-right\\@s,.uk-align-right\\@m,.uk-align-right\\@l': {
			marginLeft: '40px'
		},
		"[class*='uk-column-']": { columnGap: '40px' },
		'.uk-column-divider': { columnGap: '80px' },

		'.uk-column-1-2\\@l': { columnCount: '2' },
		'.uk-column-1-3\\@l': { columnCount: '3' },
		'.uk-column-1-4\\@l': { columnCount: '4' },
		'.uk-column-1-5\\@l': { columnCount: '5' },
		'.uk-column-1-6\\@l': { columnCount: '6' },
		'.uk-flex-left\\@l': {
			justifyContent: 'flex-start'
		},
		'.uk-flex-center\\@l': {
			justifyContent: 'center'
		},
		'.uk-flex-right\\@l': {
			justifyContent: 'flex-end'
		},
		'.uk-flex-between\\@l': {
			justifyContent: 'space-between'
		},
		'.uk-flex-around\\@l': {
			justifyContent: 'space-around'
		},
		'.uk-flex-stretch\\@l': {
			alignItems: 'stretch'
		},
		'.uk-flex-top\\@l': {
			alignItems: 'flex-start'
		},
		'.uk-flex-middle\\@l': {
			alignItems: 'center'
		},
		'.uk-flex-bottom\\@l': {
			alignItems: 'flex-end'
		},
		'.uk-flex-row\\@l': {
			flexDirection: 'row'
		},
		'.uk-flex-column\\@l': {
			flexDirection: 'column'
		},
		'.uk-flex-first\\@l': {
			order: '-1'
		},
		'.uk-flex-last\\@l': {
			order: '99'
		},
		'.uk-flex-initial\\@l': {
			flex: 'initial'
		},
		'.uk-flex-none\\@l': {
			flex: 'none'
		},
		'.uk-flex-1\\@l': {
			flex: '1'
		},
		'.uk-grid': {
			marginLeft: '-40px'
		},
		'.uk-grid > *': {
			paddingLeft: '40px'
		},
		'.uk-grid + .uk-grid,.uk-grid > .uk-grid-margin,* + .uk-grid-margin': {
			marginTop: '40px'
		},
		'.uk-grid-large,.uk-grid-column-large': {
			marginLeft: '-70px'
		},
		'.uk-grid-large > *,.uk-grid-column-large > *': {
			paddingLeft: '70px'
		},
		'.uk-grid + .uk-grid-large,.uk-grid + .uk-grid-row-large,.uk-grid-large > .uk-grid-margin,.uk-grid-row-large > .uk-grid-margin,* + .uk-grid-margin-large':
			{
				marginTop: '70px'
			},
		'.uk-grid-divider': {
			marginLeft: '-80px'
		},
		'.uk-grid-divider > *': {
			paddingLeft: '80px'
		},
		'.uk-grid-divider > :not(.uk-first-column)::before': {
			left: '40px'
		},
		'.uk-grid-divider.uk-grid-stack > .uk-grid-margin': {
			marginTop: '80px'
		},
		'.uk-grid-divider.uk-grid-stack > .uk-grid-margin::before': {
			top: '-40px',
			left: '80px'
		},
		'.uk-grid-divider.uk-grid-large,.uk-grid-divider.uk-grid-column-large': {
			marginLeft: '-140px'
		},
		'.uk-grid-divider.uk-grid-large > *,.uk-grid-divider.uk-grid-column-large > *': {
			paddingLeft: '140px'
		},
		'.uk-grid-divider.uk-grid-large > :not(.uk-first-column)::before,.uk-grid-divider.uk-grid-column-large > :not(.uk-first-column)::before':
			{
				left: '70px'
			},
		'.uk-grid-divider.uk-grid-large.uk-grid-stack > .uk-grid-margin,.uk-grid-divider.uk-grid-row-large.uk-grid-stack > .uk-grid-margin':
			{
				marginTop: '140px'
			},
		'.uk-grid-divider.uk-grid-large.uk-grid-stack > .uk-grid-margin::before': {
			top: '-70px',
			left: '140px'
		},
		'.uk-grid-divider.uk-grid-row-large.uk-grid-stack > .uk-grid-margin::before': {
			top: '-70px'
		},
		'.uk-grid-divider.uk-grid-column-large.uk-grid-stack > .uk-grid-margin::before': {
			left: '140px'
		},
		'.uk-margin-auto\\@l': {
			marginLeft: 'auto !important',
			marginRight: 'auto !important'
		},
		'.uk-margin-auto-left\\@l': {
			marginLeft: 'auto !important'
		},
		'.uk-margin-auto-right\\@l': {
			marginRight: 'auto !important'
		},
		'.uk-margin-remove-left\\@l': {
			marginLeft: '0 !important'
		},
		'.uk-margin-remove-right\\@l': {
			marginRight: '0 !important'
		},
		'.uk-text-left\\@l': {
			textAlign: 'left !important'
		},
		'.uk-text-right\\@l': {
			textAlign: 'right !important'
		},
		'.uk-text-center\\@l': {
			textAlign: 'center !important'
		},
		'.uk-hidden\\@l': {
			display: 'none !important'
		},
		'.uk-child-width-1-1\\@l > *': {
			width: '100%'
		},
		'.uk-child-width-1-2\\@l > *': {
			width: '50%'
		},
		'.uk-child-width-1-3\\@l > *': {
			width: 'calc(100% / 3)'
		},
		'.uk-child-width-1-4\\@l > *': {
			width: '25%'
		},
		'.uk-child-width-1-5\\@l > *': {
			width: '20%'
		},
		'.uk-child-width-1-6\\@l > *': {
			width: 'calc(100% / 6)'
		},
		'.uk-child-width-auto\\@l > *': {
			width: 'auto'
		},
		'.uk-child-width-expand\\@l > :not([class*="uk-width"])': {
			flex: '1',
			minWidth: '1px'
		},
		'.uk-child-width-1-1\\@l > :not([class*="uk-width"]), .uk-child-width-1-2\\@l > :not([class*="uk-width"]), .uk-child-width-1-3\\@l > :not([class*="uk-width"]), .uk-child-width-1-4\\@l > :not([class*="uk-width"]), .uk-child-width-1-5\\@l > :not([class*="uk-width"]), .uk-child-width-1-6\\@l > :not([class*="uk-width"]), .uk-child-width-auto\\@l > :not([class*="uk-width"])':
			{
				flex: 'initial'
			},
		'.uk-width-1-1\\@l': {
			width: '100%'
		},
		'.uk-width-1-2\\@l': {
			width: '50%'
		},
		'.uk-width-1-3\\@l': {
			width: 'calc(100% / 3)'
		},
		'.uk-width-2-3\\@l': {
			width: 'calc(200% / 3)'
		},
		'.uk-width-1-4\\@l': {
			width: '25%'
		},
		'.uk-width-3-4\\@l': {
			width: '75%'
		},
		'.uk-width-1-5\\@l': {
			width: '20%'
		},
		'.uk-width-2-5\\@l': {
			width: '40%'
		},
		'.uk-width-3-5\\@l': {
			width: '60%'
		},
		'.uk-width-4-5\\@l': {
			width: '80%'
		},
		'.uk-width-1-6\\@l': {
			width: 'calc(100% / 6)'
		},
		'.uk-width-5-6\\@l': {
			width: 'calc(500% / 6)'
		},
		'.uk-width-small\\@l': {
			width: '150px'
		},
		'.uk-width-medium\\@l': {
			width: '300px'
		},
		'.uk-width-large\\@l': {
			width: '450px'
		},
		'.uk-width-xlarge\\@l': {
			width: '600px'
		},
		'.uk-width-2xlarge\\@l': {
			width: '750px'
		},
		'.uk-width-auto\\@l': {
			width: 'auto'
		},
		'.uk-width-expand\\@l': {
			flex: '1',
			minWidth: '1px'
		},
		'.uk-width-1-1\\@l, .uk-width-1-2\\@l, .uk-width-1-3\\@l, .uk-width-2-3\\@l, .uk-width-1-4\\@l, .uk-width-3-4\\@l, .uk-width-1-5\\@l, .uk-width-2-5\\@l, .uk-width-3-5\\@l, .uk-width-4-5\\@l, .uk-width-1-6\\@l, .uk-width-5-6\\@l, .uk-width-small\\@l, .uk-width-medium\\@l, .uk-width-large\\@l, .uk-width-xlarge\\@l, .uk-width-2xlarge\\@l, .uk-width-auto\\@l':
			{
				flex: 'initial'
			}
	},
	'@screen xl': {
		'.uk-align-left\\@xl': {
			marginTop: '0',
			marginRight: '40px',
			cssFloat: 'left'
		},
		'.uk-align-right\\@xl': {
			marginTop: '0',
			marginLeft: '40px',
			cssFloat: 'right'
		},
		'.uk-column-1-2\\@xl': { columnCount: '2' },
		'.uk-column-1-3\\@xl': { columnCount: '3' },
		'.uk-column-1-4\\@xl': { columnCount: '4' },
		'.uk-column-1-5\\@xl': { columnCount: '5' },
		'.uk-column-1-6\\@xl': { columnCount: '6' },
		'.uk-flex-left\\@xl': {
			justifyContent: 'flex-start'
		},
		'.uk-flex-center\\@xl': {
			justifyContent: 'center'
		},
		'.uk-flex-right\\@xl': {
			justifyContent: 'flex-end'
		},
		'.uk-flex-between\\@xl': {
			justifyContent: 'space-between'
		},
		'.uk-flex-around\\@xl': {
			justifyContent: 'space-around'
		},
		'.uk-flex-stretch\\@xl': {
			alignItems: 'stretch'
		},
		'.uk-flex-top\\@xl': {
			alignItems: 'flex-start'
		},
		'.uk-flex-middle\\@xl': {
			alignItems: 'center'
		},
		'.uk-flex-bottom\\@xl': {
			alignItems: 'flex-end'
		},
		'.uk-flex-row\\@xl': {
			flexDirection: 'row'
		},
		'.uk-flex-column\\@xl': {
			flexDirection: 'column'
		},
		'.uk-flex-first\\@xl': {
			order: '-1'
		},
		'.uk-flex-last\\@xl': {
			order: '99'
		},
		'.uk-flex-initial\\@xl': {
			flex: 'initial'
		},
		'.uk-flex-none\\@xl': {
			flex: 'none'
		},
		'.uk-flex-1\\@xl': {
			flex: '1'
		},
		'.uk-margin-auto\\@xl': {
			marginLeft: 'auto !important',
			marginRight: 'auto !important'
		},
		'.uk-margin-auto-left\\@xl': {
			marginLeft: 'auto !important'
		},
		'.uk-margin-auto-right\\@xl': {
			marginRight: 'auto !important'
		},
		'.uk-margin-remove-left\\@xl': {
			marginLeft: '0 !important'
		},
		'.uk-margin-remove-right\\@xl': {
			marginRight: '0 !important'
		},
		'.uk-text-left\\@xl': {
			textAlign: 'left !important'
		},
		'.uk-text-right\\@xl': {
			textAlign: 'right !important'
		},
		'.uk-text-center\\@xl': {
			textAlign: 'center !important'
		},
		'.uk-hidden\\@xl': {
			display: 'none !important'
		},
		'.uk-child-width-1-1\\@xl > *': {
			width: '100%'
		},
		'.uk-child-width-1-2\\@xl > *': {
			width: '50%'
		},
		'.uk-child-width-1-3\\@xl > *': {
			width: 'calc(100% / 3)'
		},
		'.uk-child-width-1-4\\@xl > *': {
			width: '25%'
		},
		'.uk-child-width-1-5\\@xl > *': {
			width: '20%'
		},
		'.uk-child-width-1-6\\@xl > *': {
			width: 'calc(100% / 6)'
		},
		'.uk-child-width-auto\\@xl > *': {
			width: 'auto'
		},
		'.uk-child-width-expand\\@xl > :not([class*="uk-width"])': {
			flex: '1',
			minWidth: '1px'
		},
		'.uk-child-width-1-1\\@xl > :not([class*="uk-width"]), .uk-child-width-1-2\\@xl > :not([class*="uk-width"]), .uk-child-width-1-3\\@xl > :not([class*="uk-width"]), .uk-child-width-1-4\\@xl > :not([class*="uk-width"]), .uk-child-width-1-5\\@xl > :not([class*="uk-width"]), .uk-child-width-1-6\\@xl > :not([class*="uk-width"]), .uk-child-width-auto\\@xl > :not([class*="uk-width"])':
			{
				flex: 'initial'
			},
		'.uk-width-1-1\\@xl': {
			width: '100%'
		},
		'.uk-width-1-2\\@xl': {
			width: '50%'
		},
		'.uk-width-1-3\\@xl': {
			width: 'calc(100% / 3)'
		},
		'.uk-width-2-3\\@xl': {
			width: 'calc(200% / 3)'
		},
		'.uk-width-1-4\\@xl': {
			width: '25%'
		},
		'.uk-width-3-4\\@xl': {
			width: '75%'
		},
		'.uk-width-1-5\\@xl': {
			width: '20%'
		},
		'.uk-width-2-5\\@xl': {
			width: '40%'
		},
		'.uk-width-3-5\\@xl': {
			width: '60%'
		},
		'.uk-width-4-5\\@xl': {
			width: '80%'
		},
		'.uk-width-1-6\\@xl': {
			width: 'calc(100% / 6)'
		},
		'.uk-width-5-6\\@xl': {
			width: 'calc(500% / 6)'
		},
		'.uk-width-small\\@xl': {
			width: '150px'
		},
		'.uk-width-medium\\@xl': {
			width: '300px'
		},
		'.uk-width-large\\@xl': {
			width: '450px'
		},
		'.uk-width-xlarge\\@xl': {
			width: '600px'
		},
		'.uk-width-2xlarge\\@xl': {
			width: '750px'
		},
		'.uk-width-auto\\@xl': {
			width: 'auto'
		},
		'.uk-width-expand\\@xl': {
			flex: '1',
			minWidth: '1px'
		},
		'.uk-width-1-1\\@xl, .uk-width-1-2\\@xl, .uk-width-1-3\\@xl, .uk-width-2-3\\@xl, .uk-width-1-4\\@xl, .uk-width-3-4\\@xl, .uk-width-1-5\\@xl, .uk-width-2-5\\@xl, .uk-width-3-5\\@xl, .uk-width-4-5\\@xl, .uk-width-1-6\\@xl, .uk-width-5-6\\@xl, .uk-width-small\\@xl, .uk-width-medium\\@xl, .uk-width-large\\@xl, .uk-width-xlarge\\@xl, .uk-width-2xlarge\\@xl, .uk-width-auto\\@xl':
			{
				flex: 'initial'
			}
	},
	'@screen max-xl': {
		'.uk-background-image\\@xl': {
			backgroundImage: 'none !important'
		},
		'.uk-visible\\@xl': {
			display: 'none !important'
		}
	},
	'@screen max-lg': {
		'.uk-background-image\\@l': {
			backgroundImage: 'none !important'
		},
		'.uk-visible\\@l': {
			display: 'none !important'
		}
	},
	'@screen max-md': {
		'.uk-background-image\\@m': {
			backgroundImage: 'none !important'
		},
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
		},
		'.uk-visible\\@m': {
			display: 'none !important'
		}
	},
	'@screen max-sm': {
		'.uk-background-image\\@s': {
			backgroundImage: 'none !important'
		},
		'.uk-notification': {
			left: '10px',
			right: '10px',
			width: 'auto',
			margin: '0'
		},
		'.uk-visible\\@s': {
			display: 'none !important'
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
