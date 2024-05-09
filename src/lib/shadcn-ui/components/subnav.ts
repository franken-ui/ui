export default function () {
	return {
		'hook-subnav': {
			display: null,
			flexWrap: null,
			alignItems: null,
			marginLeft: null,
			padding: null,
			listStyle: null,
			'@apply flex items-center text-sm': {}
		},
		'hook-item': {
			display: null,
			alignItems: null,
			columnGap: null,
			color: null,
			fontSize: null,
			textTransform: null,
			'@apply flex items-center justify-center rounded-full px-4 text-center font-medium text-muted-foreground':
				{}
		},
		'hook-item-hover': {
			color: null,
			textDecoration: null,
			'@apply text-primary': {}
		},
		'hook-item-active': {
			color: null
		},
		'hook-pill-item': {},
		'hook-pill-item-hover': {},
		'hook-pill-item-onclick': {},
		'hook-pill-item-active': {
			'@apply bg-muted': {}
		},
		'hook-item-disabled': {
			'@apply pointer-events-none opacity-50': {}
		},
		'hook-misc': {
			'.uk-subnav > *': {
				flex: null,
				paddingLeft: null,
				position: null
			},
			'.uk-subnav-divider': null,
			'.uk-subnav-divider > *': null,
			'.uk-subnav-divider > ::before': null,
			'.uk-subnav-divider > :nth-child(n + 2):not(.uk-first-column)::before': null,
			'.uk-subnav-pill > * > :first-child': null,
			'.uk-subnav-pill > * > a:hover': null,
			'.uk-subnav-pill > * > a:active': null,
			'.uk-subnav-pill > .uk-active > a': null,
			'.uk-subnav > .uk-disabled > a': null,
			'.uk-subnav-primary > .uk-active > a': {
				'@apply bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground':
					{}
			},
			'.uk-subnav-secondary > .uk-active > a': {
				'@apply bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground':
					{}
			},
			'.uk-subnav-danger > .uk-active > a': {
				'@apply bg-destructive text-destructive-foreground hover:bg-destructive/80 hover:text-destructive-foreground':
					{}
			}
		}
	};
}
