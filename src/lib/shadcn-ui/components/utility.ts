export default function () {
	return {
		'hook-panel-scrollable': {
			border: '1px solid'
		},
		'hook-box-shadow-bottom': {},
		'hook-dropcap': {},
		'hook-logo': {
			fontFamily: null,
			color: null
		},
		'hook-logo-hover': {
			color: null
		},
		'hook-misc': {
			'.uk-panel-scrollable': {
				height: null,
				border: null,
				'@apply h-40 border border-border': {}
			},
			'.uk-paragraph': {
				'@apply leading-7 [&:not(:first-child)]:mt-6': {}
			},
			'.uk-blockquote': {
				'@apply mt-6 border-l-2 border-border pl-6 italic': {}
			},
			'.uk-codespan': {
				'@apply relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold':
					{}
			},
			'.uk-border-rounded': {
				'@apply rounded-md': {}
			},
			'.uk-box-shadow-small': {
				'@apply shadow-sm': {}
			},
			'.uk-box-shadow-medium': {
				'@apply shadow-md': {}
			},
			'.uk-box-shadow': {
				'@apply shadow': {}
			},
			'.uk-box-shadow-large': {
				'@apply shadow-lg': {}
			},
			'.uk-box-shadow-xlarge': {
				'@apply shadow-xl': {}
			},
			"[class*='uk-box-shadow-hover']": {
				transition: null
			},
			'.uk-box-shadow-hover-small:hover': {
				'@apply shadow-sm': {}
			},
			'.uk-box-shadow-hover-medium:hover': {
				'@apply shadow-md': {}
			},
			'.uk-box-shadow-hover-large:hover': {
				'@apply shadow-lg': {}
			},
			'.uk-box-shadow-hover-xlarge:hover': {
				'@apply shadow-xl': {}
			}
		}
	};
}
