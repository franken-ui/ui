export default function () {
	return {
		'hook-bar': {
			padding: null,
			backgroundColor: null,
			'@apply border-r border-border bg-background': {}
		},
		'hook-overlay': {
			backgroundColor: `rgba(0, 0, 0, 0.8)`,
			'@apply backdrop-blur-sm': {}
		},
		'hook-misc': {
			'.uk-offcanvas-flip .uk-offcanvas-bar': {
				borderRight: 'none',
				'@apply border-l border-border': {}
			}
		}
	};
}
