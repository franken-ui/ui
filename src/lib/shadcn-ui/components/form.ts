import type { OptionsType } from '$lib/shadcn-ui/preset-types.js';
import { variables } from '../variables.js';
import hexes from '../hexes.js';

export default function (options: OptionsType) {
	let root = variables[`.theme-${options.theme || 'zinc'}`];
	let dark = variables[`.dark .theme-${options.theme || 'zinc'}`];

	if (options.palette && options.palette[':root'] && options.palette['.dark']) {
		root = options.palette[':root'];
		dark = options.palette['.dark'];
	}

	const scheme = hexes({
		':root': root,
		'.dark': dark
	});

	return {
		'hook-form': {
			border: null,
			padding: null,
			backgroundColor: null,
			color: null,
			fontSize: null,
			'@apply rounded-md border border-input bg-transparent px-3 py-1 text-sm text-foreground shadow-sm':
				{}
		},
		'hook-single-line': {
			height: null,
			'@apply h-9': {}
		},
		'hook-multi-line': {
			'@apply min-h-[60px] py-2': {}
		},
		'hook-focus': {
			backgroundColor: null,
			color: null,
			borderColor: null,
			'@apply outline-none ring-1 ring-ring': {}
		},
		'hook-disabled': {
			backgroundColor: null,
			color: null,
			borderColor: null,
			'@apply opacity-50': {}
		},
		'hook-danger': {
			color: null,
			borderColor: null,
			'@apply ring-destructive': {}
		},
		'hook-blank': {
			'@apply shadow-none': {}
		},
		'hook-blank-focus': {
			borderColor: null,
			borderStyle: null,
			'@apply ring-0': {}
		},
		'hook-placeholder': {
			color: null,
			'@apply text-muted-foreground': {}
		},
		'hook-radio': {
			backgroundColor: null,
			border: null,
			'@apply rounded-sm border border-primary shadow': {}
		},
		'hook-radio-focus': {
			backgroundColor: null,
			borderColor: null,
			'@apply outline-none ring-1 ring-ring': {}
		},
		'hook-radio-checked': {
			backgroundColor: null,
			borderColor: null
		},
		'hook-radio-checked-focus': {
			backgroundColor: null,
			'@apply outline-none ring-1 ring-ring': {}
		},
		'hook-radio-disabled': {
			backgroundColor: null,
			borderColor: null
		},
		'hook-legend': {
			width: null,
			color: null,
			padding: null,
			fontSize: null,
			lineHeight: null
		},
		'hook-label': {
			color: null,
			'@apply text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70':
				{}
		},
		'hook-icon': {
			color: null
		},
		'hook-icon-hover': {
			color: null
		},
		'hook-toggle-switch': {
			width: null,
			height: null,
			backgroundColor: null,
			'@apply h-5 w-9 bg-input shadow-sm': {}
		},
		'hook-toggle-switch-before': {
			width: null,
			height: null,
			backgroundColor: null,
			'@apply h-4 w-4 bg-background': {}
		},
		'hook-toggle-switch-checked-before': {
			left: null,
			'@apply left-4': {}
		},
		'hook-toggle-switch-primary': {
			backgroundColor: null,
			'@apply bg-primary': {}
		},
		'hook-toggle-switch-danger': {
			backgroundColor: null,
			'@apply bg-destructive': {}
		},
		'hook-misc': {
			'.uk-form-small': {
				fontSize: null,
				'@apply text-xs': {}
			},
			'.uk-form-small:not(textarea):not([multiple]):not([size])': {
				height: null,
				paddingLeft: null,
				paddingRight: null,
				'@apply h-8 px-3 py-0': {}
			},
			'textarea.uk-form-small, [multiple].uk-form-small, [size].uk-form-small': null,
			'.uk-form-small:not(select):not(input):not(textarea)': null,
			'.uk-form-large': null,
			'.uk-form-large:not(textarea):not([multiple]):not([size])': null,
			'textarea.uk-form-large, [multiple].uk-form-large, [size].uk-form-large': null,
			'.uk-form-large:not(select):not(input):not(textarea)': null,
			'.uk-form-success, .uk-form-success:focus': null,
			'input.uk-form-width-xsmall': null,
			'select.uk-form-width-xsmall': null,
			'.uk-form-width-small': null,
			'.uk-form-width-medium': null,
			'.uk-form-width-large': null,
			'.uk-form-help': {
				fontSize: '0.8rem',
				'@apply font-medium': {}
			},
			'.uk-radio:checked': {
				backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(
					scheme.light.primary
				)}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E%0A")`
			},
			'.uk-radio:disabled:checked': {
				backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(
					scheme.light.primary
				)}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E%0A")`
			},
			'.dark .uk-radio:checked': {
				backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(
					scheme.dark.primary
				)}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E%0A")`
			},
			'.dark .uk-radio:disabled:checked': {
				backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(
					scheme.dark.primary
				)}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E%0A")`
			},

			'.uk-checkbox:indeterminate': {
				backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22${encodeURIComponent(
					scheme.light.primary
				)}%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E")`
			},
			'.dark .uk-checkbox:indeterminate': {
				backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22${encodeURIComponent(
					scheme.dark.primary
				)}%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E")`
			},
			'.uk-checkbox:disabled:indeterminate': {
				backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22${encodeURIComponent(
					scheme.light.primary
				)}%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E")`
			},
			'.dark .uk-checkbox:disabled:indeterminate': {
				backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22${encodeURIComponent(
					scheme.dark.primary
				)}%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E")`
			},

			'.uk-checkbox:checked': {
				backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='${encodeURIComponent(
					scheme.light.primary
				)}' /%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(
					scheme.light.primaryForeground
				)}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E")`
			},
			'.uk-checkbox:disabled:checked': {
				backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='${encodeURIComponent(
					scheme.light.primary
				)}' /%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(
					scheme.light.primaryForeground
				)}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E")`
			},
			'.dark .uk-checkbox:checked': {
				backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='${encodeURIComponent(
					scheme.dark.primary
				)}' /%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(
					scheme.dark.primaryForeground
				)}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E")`
			},
			'.dark .uk-checkbox:disabled:checked': {
				backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='${encodeURIComponent(
					scheme.dark.primary
				)}' /%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(
					scheme.dark.primaryForeground
				)}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E")`
			},

			'.uk-select:not([multiple]):not([size]) option': {
				color: scheme.light.primary
			},
			'.uk-select:not([multiple]):not([size])': {
				backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon fill='${encodeURIComponent(
					scheme.light.primary
				)}' points='12 1 9 6 15 6' /%3E%3Cpolygon fill='${encodeURIComponent(
					scheme.light.primary
				)}' points='12 13 9 8 15 8' /%3E%3C/svg%3E%0A")`
			},
			'.dark .uk-select:not([multiple]):not([size])': {
				backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon fill='${encodeURIComponent(
					scheme.dark.primary
				)}' points='12 1 9 6 15 6' /%3E%3Cpolygon fill='${encodeURIComponent(
					scheme.dark.primary
				)}' points='12 13 9 8 15 8' /%3E%3C/svg%3E")`
			},

			'.uk-input[list]:hover, .uk-input[list]:focus': {
				backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon fill='${encodeURIComponent(
					scheme.light.primary
				)}' points='12 12 8 6 16 6' /%3E%3C/svg%3E")`
			},
			'.dark .uk-input[list]:hover,.dark .uk-input[list]:focus': {
				backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon fill='${encodeURIComponent(
					scheme.dark.primary
				)}' points='12 12 8 6 16 6' /%3E%3C/svg%3E")`
			},
			'.uk-toggle-switch-secondary:checked': null,
			"[class*='uk-inline']": {
				display: 'inline-block',
				position: 'relative',
				maxWidth: '100%',
				verticalAlign: 'middle',
				WebkitBackfaceVisibility: 'hidden'
			}
		}
	};
}
