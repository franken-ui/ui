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
			'.uk-paragraph': {
				'@apply leading-7 [&:not(:first-child)]:mt-6': {}
			},
			'.uk-blockquote': {
				'@apply mt-6 border-l-2 border-border pl-6 italic': {}
			},
			'.uk-codespan': {
				'@apply relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold':
					{}
			}
		}
	};
}
