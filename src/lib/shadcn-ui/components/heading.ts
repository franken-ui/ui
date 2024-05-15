export default function () {
	return {
		'hook-small': {
			fontSize: null,
			lineHeight: null,
			'@apply text-4xl': {}
		},
		'hook-medium': {
			fontSize: null,
			lineHeight: null,
			'@apply text-5xl': {}
		},
		'hook-large': {
			fontSize: null,
			lineHeight: null,
			'@apply text-6xl': {}
		},
		'hook-xlarge': {
			fontSize: null,
			lineHeight: null,
			'@apply text-7xl': {}
		},
		'hook-2xlarge': {
			fontSize: null,
			lineHeight: null,
			'@apply text-8xl': {}
		},
		'hook-3xlarge': {
			fontSize: null,
			lineHeight: null,
			'@apply text-9xl': {}
		},
		'hook-primary': {},
		'hook-hero': {},
		'hook-divider': {
			borderBottom: 'calc(0.2px + 0.05em) solid',
			'@apply border-border': {}
		},
		'hook-bullet': {
			borderLeft: 'calc(5px + 0.1em) solid',
			'@apply border-border': {}
		},
		'hook-line': {
			borderBottom: 'calc(0.2px + 0.05em) solid',
			'@apply border-border': {}
		},
		'hook-misc': {
			'.uk-h1': {
				'@apply text-4xl font-extrabold tracking-tight lg:text-5xl': {}
			},
			'.uk-h2': {
				'@apply text-3xl font-semibold tracking-tight': {}
			},
			'.uk-h3': {
				'@apply text-2xl font-semibold tracking-tight': {}
			},
			'.uk-h4': {
				'@apply text-xl font-semibold tracking-tight': {}
			}
		}
	};
}
