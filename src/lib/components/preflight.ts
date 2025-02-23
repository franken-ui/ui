export default {
	'progress,sub,sup': { verticalAlign: 'baseline' },
	'a,hr': { color: 'inherit' },
	'*,::after,::backdrop,::before,::file-selector-button': {
		boxSizing: 'border-box',
		margin: '0',
		padding: '0',
		border: '0 solid'
	},
	':host,html': {
		lineHeight: 1.5,
		WebkitTextSizeAdjust: '100%',
		tabSize: 4,
		fontFamily:
			"var(--default-font-family,ui-sans-serif,system-ui,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji')",
		fontFeatureSettings: 'var(--default-font-feature-settings,normal)',
		fontVariationSettings: 'var(--default-font-variation-settings,normal)',
		WebkitTapHighlightColor: 'transparent'
	},
	body: { lineHeight: 'inherit' },
	hr: { height: '0', borderTopWidth: '1px' },
	'abbr:where([title])': {
		WebkitTextDecoration: 'underline dotted',
		textDecoration: 'underline dotted'
	},
	'h1,h2,h3,h4,h5,h6': { fontSize: 'inherit', fontWeight: 'inherit' },
	a: { WebkitTextDecoration: 'inherit', textDecoration: 'inherit' },
	'b,strong': { fontWeight: 'bolder' },
	'code,kbd,pre,samp': {
		fontFamily:
			"var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace)",
		fontFeatureSettings: 'var(--default-mono-font-feature-settings,normal)',
		fontVariationSettings: 'var(--default-mono-font-variation-settings,normal)',
		fontSize: '1em'
	},
	small: { fontSize: '80%' },
	'sub,sup': { fontSize: '75%', lineHeight: 0, position: 'relative' },
	sub: { bottom: '-.25em' },
	sup: { top: '-.5em' },
	table: {
		textIndent: '0',
		borderColor: 'inherit',
		borderCollapse: 'collapse'
	},
	':-moz-focusring': { outline: 'auto' },
	summary: { display: 'list-item' },
	'menu,ol,ul': { listStyle: 'none' },
	'audio,canvas,embed,iframe,img,object,svg,video': {
		display: 'block',
		verticalAlign: 'middle'
	},
	'img,video': { maxWidth: '100%', height: 'auto' },
	'::file-selector-button,button,input,optgroup,select,textarea': {
		font: 'inherit',
		fontFeatureSettings: 'inherit',
		fontVariationSettings: 'inherit',
		letterSpacing: 'inherit',
		color: 'inherit',
		borderRadius: '0',
		backgroundColor: 'transparent',
		opacity: 1
	},
	':where(select:is([multiple],[size])) optgroup': { fontWeight: 'bolder' },
	':where(select:is([multiple],[size])) optgroup option': {
		paddingInlineStart: '20px'
	},
	'::file-selector-button': { marginInlineEnd: '4px' },
	'::placeholder': {
		opacity: 1,
		color: 'color-mix(in oklab,currentColor 50%,transparent)'
	},
	textarea: { resize: 'vertical' },
	'::-webkit-search-decoration': { WebkitAppearance: 'none' },
	'::-webkit-date-and-time-value': { minHeight: '1lh', textAlign: 'inherit' },
	'::-webkit-datetime-edit': { display: 'inline-flex' },
	'::-webkit-datetime-edit-fields-wrapper': { padding: '0' },
	'::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field':
		{
			paddingBlock: '0'
		},
	':-moz-ui-invalid': { boxShadow: 'none' },
	'::file-selector-button,button,input:where([type=button],[type=reset],[type=submit])': {
		appearance: 'button'
	},
	'::-webkit-inner-spin-button,::-webkit-outer-spin-button': { height: 'auto' },
	'[hidden]:where(:not([hidden=until-found]))': { display: 'none !important' }
};
