export default {
	'.uk-datepicker-dropdown': {
		padding: 'var(--uk-datepicker-dropdown-padding, var(--uk-datepicker-spacing, 1rem))'
	}, // Customizable dropdown padding, defaults to datepicker spacing
	'.uk-datepicker-time': {
		marginTop: 'var(--uk-datepicker-time-margin-top, var(--uk-datepicker-spacing, 1rem))', // Customizable time margin top, defaults to datepicker spacing
		display: 'flex', // Obvious value, layout
		justifyContent: 'center' // Obvious value, layout
	},
	'.uk-cal': { maxWidth: 'var(--uk-cal-max-width, calc(var(--uk-cal-cell-size, 2.5rem) * 7))' }, // Customizable max width, based on cell size
	'.uk-cal-header': {
		marginBottom: 'var(--uk-cal-header-margin-bottom, 0.5rem)',
		display: 'flex', // Obvious value, layout
		MozColumnGap: 'var(--uk-cal-header-column-gap, 0.5rem)',
		columnGap: 'var(--uk-cal-header-column-gap, 0.5rem)'
	},
	'.uk-cal-header-l, .uk-cal-header-r': { flex: 'none' }, // Obvious value, layout - prevent flex grow/shrink
	'.uk-cal-jumper': {
		display: 'flex', // Obvious value, layout
		flex: '1 1 0%', // Obvious value, layout - take available space
		alignItems: 'center', // Obvious value, layout
		justifyContent: 'space-between', // Obvious value, layout
		MozColumnGap: 'var(--uk-cal-jumper-column-gap, 0.5rem)',
		columnGap: 'var(--uk-cal-jumper-column-gap, 0.5rem)'
	},
	'.uk-cal-jumper .uk-input-fake': { justifyContent: 'center' }, // Obvious value, layout - center content
	'.uk-cal-jumper input': { width: 'var(--uk-cal-jumper-input-width, 3rem)', textAlign: 'center' }, // Customizable input width, center text
	".uk-cal-jumper input[type='number']::-webkit-inner-spin-button, .uk-cal-jumper input[type='number']::-webkit-outer-spin-button":
		{
			WebkitAppearance: 'none', // Vendor prefix, obvious value - remove spinners
			margin: '0' // Reset margin, obvious value
		},
	".uk-cal-jumper input[type='number']": { MozAppearance: 'textfield' }, // Browser specific, obvious value - for Firefox number input appearance
	'.uk-cal-title': {
		width: '100%',
		textAlign: 'center',
		fontWeight: 'var(--uk-cal-title-font-weight, 500)'
	}, // Full width, center text, customizable font weight
	'.uk-cal-month-dropdown': {
		'--uk-dropdown-nav-item-padding': 'var(--uk-cal-month-dropdown-item-padding, 0.25rem)', // Customizable dropdown item padding
		flex: '1 1 0%' // Obvious value, layout - take available space
	},
	'.uk-cal-month-dropdown button': { width: '100%' }, // Full width button
	'.uk-cal-month-dropdown .uk-drop': {
		maxHeight: 'var(--uk-cal-month-dropdown-max-height, 10rem)', // Customizable dropdown max height
		minWidth: 'var(--uk-cal-month-dropdown-min-width, 9rem)', // Customizable dropdown min width
		overflowY: 'auto' // Obvious value, scrollable content
	},
	'.uk-cal-month-dropdown-item a': {
		alignItems: 'center', // Obvious value, layout
		justifyContent: 'space-between' // Obvious value, layout
	},
	'.uk-cal table': {
		display: 'flex',
		flexDirection: 'column',
		gap: 'var(--uk-cal-table-row-gap, 0.5rem)'
	}, // Flex table, column direction, customizable row gap
	'.uk-cal table tbody': {
		display: 'flex', // Obvious value, layout
		flexDirection: 'column', // Obvious value, layout
		gap: 'var(--uk-cal-table-body-row-gap, 0.5rem)' // Customizable table body row gap
	},
	'.uk-cal table thead th': {
		width: 'var(--uk-cal-cell-size, 2.5rem)', // Customizable cell size
		fontSize: 'var(--uk-cal-cell-header-font-size, var(--font-size-small, 0.875rem))', // Customizable header font size, defaults to small font size
		fontWeight: '400', // Static font weight
		color: 'var(--uk-cal-cell-header-color, hsl(var(--muted-foreground)))' // Customizable header color
	},
	'.uk-cal table tbody tr, .uk-cal table thead tr': {
		display: 'flex', // Obvious value, layout
		gap: 'var(--uk-cal-table-cell-gap, 0.125rem)' // Customizable cell gap
	},
	'.uk-cal table tbody tr td': {
		width: 'var(--uk-cal-cell-size, 2.5rem)', // Customizable cell size
		height: 'var(--uk-cal-cell-size, 2.5rem)', // Customizable cell size (square cells)
		fontSize: 'var(--uk-cal-cell-body-font-size, var(--font-size-base, 1rem))', // Customizable body font size, defaults to base font size
		position: 'relative', // Obvious value, for positioning markers
		padding: 'var(--uk-cal-cell-padding, 0px)', // Customizable cell padding
		textAlign: 'center' // Obvious value, center text
	},
	'.uk-cal table tbody tr td button': {
		borderRadius: 'var(--uk-cal-cell-radius, var(--global-radius-default, 0))', // Customizable cell radius, defaults to global radius
		display: 'inline-flex', // Obvious value, layout
		height: '100%', // Full height button
		width: '100%', // Full width button
		alignItems: 'center', // Obvious value, layout
		justifyContent: 'center', // Obvious value, layout
		whiteSpace: 'nowrap' // Obvious value, prevent text wrapping
	},
	'.uk-cal table tbody tr td button:hover': {
		backgroundColor: 'var(--uk-cal-cell-hover-bg, var(--uk-cal-cell-hover-bg, hsl(var(--accent))))', // Customizable hover background color, nested fallback for backward compatibility
		color:
			'var(--uk-cal-cell-hover-color, var(--uk-cal-cell-hover-color, hsl(var(--accent-foreground))))', // Customizable hover color, nested fallback
		transitionProperty: 'background-color', // Fixed transition property
		transitionDuration:
			'var(--uk-cal-cell-hover-transition-duration, var(--uk-cal-hover-duration, 150ms))', // Customizable hover duration, nested fallback for backward compatibility
		transitionTimingFunction: 'ease-in-out' // Fixed timing function
	},
	'.uk-cal table tbody tr td button:disabled': { opacity: '0.5' }, // Static opacity for disabled state
	'.uk-cal table tbody tr td.uk-cal-oom button': {
		color: 'var(--uk-cal-cell-oom-color, hsl(var(--muted-foreground)))' // Customizable color for outside of month cells
	},
	'.uk-cal table tbody tr td.uk-active button': {
		backgroundColor: 'var(--uk-cal-cell-active-bg, hsl(var(--primary)))', // Customizable active cell background color
		color: 'var(--uk-cal-cell-active-color, hsl(var(--primary-foreground)))' // Customizable active cell color
	},
	'.uk-cal table tbody tr td.uk-disabled button': { opacity: '0.5' }, // Static opacity for disabled cells
	'.uk-cal-divider table tbody': { gap: 'var(--uk-cal-divider-table-body-row-gap, 0.25rem)' }, // Customizable divider table body row gap
	'.uk-cal-divider table tbody tr': {
		borderBottomWidth: 'var(--uk-cal-divider-table-row-border-width, 1px)', // Customizable divider table row border width
		borderColor:
			'var(--uk-cal-divider-table-row-border-color, hsl(var(--border) / var(--border-alpha, 1)))' // Customizable divider table row border color
	},
	'.uk-cal-divider table tbody tr td': {
		marginBottom: 'var(--uk-cal-divider-cell-margin-bottom, 0.25rem)'
	}, // Customizable divider cell margin bottom
	'.uk-cal-divider table tbody tr:last-child': { borderStyle: 'none' }, // Static - remove border for last row in divider table
	'.uk-cal-marked::after': {
		content: "''", // Required for pseudo-element
		width: '0px', // Initial width, static
		height: '0px', // Initial height, static
		borderStyle: 'solid', // Static border style
		borderWidth:
			'var(--uk-cal-cell-body-font-size, 1rem) var(--uk-cal-cell-body-font-size, 1rem) 0 0', // Border widths linked to font size
		borderColor:
			'var(--uk-cal-marked-color, hsl(var(--destructive) / var(--destructive-alpha, 1))) transparent transparent transparent', // Customizable marker color
		transform: 'rotate(0deg)', // Static transform
		position: 'absolute', // Static absolute position
		top: '0', // Static top position
		left: '0', // Static left position
		borderTopLeftRadius: 'var(--uk-cal-cell-radius, var(--global-radius-default, 0))' // Customizable marker border radius, defaults to cell radius and then global radius
	},
	'.uk-input-time': {
		display: 'inline-flex', // Obvious value, layout
		alignItems: 'center', // Obvious value, layout
		MozColumnGap: 'var(--uk-input-time-column-gap, 0.25rem)',
		columnGap: 'var(--uk-input-time-column-gap, 0.25rem)'
	},
	'.uk-input-time input': {
		width: 'var(--uk-input-time-input-width, 3.5rem)',
		textAlign: 'center'
	}, // Customizable input width, center text
	'.uk-input-time .uk-input-fake': {
		width: 'var(--uk-input-time-fake-width, 3.5rem)', // Customizable fake input width, matches input width by default
		justifyContent: 'center' // Center content
	},
	".uk-input-time input[type='number']::-webkit-inner-spin-button, .uk-input-time input[type='number']::-webkit-outer-spin-button":
		{
			WebkitAppearance: 'none', // Vendor prefix, obvious value - remove spinners
			margin: '0' // Reset margin
		},
	".uk-input-time input[type='number']": { MozAppearance: 'textfield' } // Browser specific, obvious value - for Firefox number input appearance
};
