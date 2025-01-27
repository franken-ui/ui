export default {
	'.uk-datepicker-dropdown': {
		padding: 'var(--uk-datepicker-spacing)'
	},
	'.uk-datepicker-time': {
		marginTop: 'var(--uk-datepicker-spacing)',
		'@apply flex justify-center': {}
	},
	'.uk-cal': {
		maxWidth: 'calc(var(--uk-cal-cell-size) * 7)'
	},
	'.uk-cal-header': {
		'@apply mb-2 flex gap-x-2': {}
	},
	'.uk-cal-header-l, .uk-cal-header-r': {
		'@apply flex-none': {}
	},
	'.uk-cal-jumper': {
		'@apply flex flex-1 items-center justify-between gap-x-2': {}
	},
	'.uk-cal-jumper .uk-input-fake': {
		justifyContent: 'center'
	},
	'.uk-cal-jumper input': {
		'@apply w-12 text-center': {}
	},
	".uk-cal-jumper input[type='number']::-webkit-inner-spin-button, .uk-cal-jumper input[type='number']::-webkit-outer-spin-button":
		{
			WebkitAppearance: 'none',
			margin: '0'
		},
	".uk-cal-jumper input[type='number']": {
		MozAppearance: 'textfield'
	},
	'.uk-cal-title': {
		'@apply w-full text-center font-medium': {}
	},
	'.uk-cal-month-dropdown': {
		'--uk-dropdown-nav-item-padding': '0.25rem',
		'@apply flex-1': {}
	},
	'.uk-cal-month-dropdown button': {
		'@apply w-full': {}
	},
	'.uk-cal-month-dropdown .uk-drop': {
		'@apply max-h-40 min-w-36 overflow-y-auto': {}
	},
	'.uk-cal-month-dropdown-item a': {
		'@apply items-center justify-between': {}
	},
	'.uk-cal table': {
		'@apply flex flex-col gap-2': {}
	},
	'.uk-cal table tbody': {
		'@apply flex flex-col gap-2': {}
	},
	'.uk-cal table thead th': {
		width: 'var(--uk-cal-cell-size)',
		fontSize: 'var(--uk-cal-cell-header-font-size)',
		'@apply text-muted-foreground font-normal': {}
	},
	'.uk-cal table tbody tr, .uk-cal table thead tr': {
		'@apply flex gap-0.5': {}
	},
	'.uk-cal table tbody tr td': {
		width: 'var(--uk-cal-cell-size)',
		height: 'var(--uk-cal-cell-size)',
		fontSize: 'var(--uk-cal-cell-body-font-size)',
		'@apply relative p-0 text-center': {}
	},
	'.uk-cal table tbody tr td button': {
		borderRadius: 'var(--uk-cal-cell-radius)',
		'@apply focus-visible:outline-ring hover:bg-accent hover:text-accent-foreground inline-flex h-full w-full items-center justify-center whitespace-nowrap focus-visible:outline-dotted focus-visible:ring-1 disabled:opacity-50':
			{}
	},
	'.uk-cal table tbody tr td.uk-cal-oom button': {
		'@apply text-muted-foreground': {}
	},
	'.uk-cal table tbody tr td.uk-active button': {
		'@apply bg-primary text-primary-foreground': {}
	},
	'.uk-cal table tbody tr td.uk-disabled button': {
		'@apply opacity-50': {}
	},
	'.uk-cal-divider table tbody': {
		'@apply gap-1': {}
	},
	'.uk-cal-divider table tbody tr': {
		'@apply border-border border-b': {}
	},
	'.uk-cal-divider table tbody tr td': {
		'@apply mb-1': {}
	},
	'.uk-cal-divider table tbody tr:last-child': {
		'@apply border-none': {}
	},
	'.uk-cal-marked::after': {
		content: "''",
		width: '0px',
		height: '0px',
		borderStyle: 'solid',
		borderWidth: 'var(--uk-cal-cell-body-font-size)     var(--uk-cal-cell-body-font-size) 0 0',
		borderColor: 'hsl(var(--destructive)) transparent transparent transparent',
		transform: 'rotate(0deg)',
		position: 'absolute',
		top: '0',
		left: '0',
		borderTopLeftRadius: 'var(--uk-cal-cell-radius)'
	},
	'.uk-input-time': {
		'@apply inline-flex items-center gap-x-1': {}
	},
	'.uk-input-time input': {
		'@apply w-14 text-center': {}
	},
	'.uk-input-time .uk-input-fake': {
		'@apply w-14 justify-center': {}
	},
	".uk-input-time input[type='number']::-webkit-inner-spin-button, .uk-input-time input[type='number']::-webkit-outer-spin-button":
		{
			WebkitAppearance: 'none',
			margin: '0'
		},
	".uk-input-time input[type='number']": {
		MozAppearance: 'textfield'
	}
};
