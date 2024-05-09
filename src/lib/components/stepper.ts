import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-stepper': { display: 'flex' },
	'.uk-stepper-counter': { counterReset: '0' },
	'.uk-stepper-counter li': { counterIncrement: 'item' },
	'.uk-stepper-default': {
		justifyContent: 'start',
		color: 'hsl(var(--muted-foreground))',
		flexWrap: 'wrap',
		fontSize: '.875rem'
	},
	'.uk-stepper-default li': {
		display: 'flex',
		alignItems: 'center',
		width: 'auto',
		textWrap: 'nowrap',
		position: 'relative'
	},
	'.uk-stepper-default li.uk-active,.uk-stepper-default li.uk-stepper-done': {
		color: 'hsl(var(--foreground))'
	},
	'.uk-stepper-default li:not(:last-child)::after': {
		content: '"/"',
		color: 'hsl(var(--muted-foreground))',
		marginLeft: '.5rem',
		marginRight: '.75rem'
	},
	'@media (min-width:640px)': {
		'.uk-stepper': { justifyContent: 'center', flexWrap: 'nowrap' },
		'.uk-stepper-default li': { width: '100%' },
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
		'.uk-stepper-default li:last-child': { width: 'auto' },
		'.uk-stepper-default li.uk-stepper-done::before': { display: 'none' },
		'.uk-stepper-default .uk-stepper-done a': {
			paddingLeft: '1.5rem',
			display: 'inline-flex',
			alignItems: 'center'
		},
		'.uk-stepper-default .uk-stepper-done a::before': {
			content: '""',
			backgroundImage:
				"url(\"data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='%2318181b' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E%0A\")",
			backgroundRepeat: 'no-repeat',
			backgroundPosition: '50% 50%',
			position: 'absolute',
			height: '1rem',
			width: '1rem',
			display: 'inline-flex',
			justifyContent: 'center',
			alignItems: 'center',
			left: '0',
			margin: '0',
			border: '1px solid',
			borderColor: 'hsl(var(--primary))',
			borderRadius: '50%'
		}
	}
};

export interface StepperHooks {
	'hook-stepper': {};
	'hook-misc': {};
}

export interface Args {
	hooks: Partial<StepperHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: StepperHooks = {
		'hook-stepper': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-stepper': {
			..._hooks['hook-stepper']
		},
		..._hooks['hook-misc']
	};
};
