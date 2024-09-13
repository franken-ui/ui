export default {
	'.uk-stepper': {
		display: 'flex'
	},
	'.uk-stepper-counter': {
		counterReset: '0'
	},
	'.uk-stepper-counter li': {
		counterIncrement: 'item'
	},
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
	'.uk-stepper-default:has(li.uk-active) li.uk-active ~ li': {
		color: 'hsl(var(--muted-foreground))'
	},
	'.uk-stepper-default li.uk-active,.uk-stepper-default li.uk-stepper-checked, .uk-stepper-default:has(li.uk-active) li':
		{
			color: 'hsl(var(--foreground))'
		},
	'.uk-stepper-default .uk-stepper-checked a::before': {
		display: 'none',
		content: '""',
		backgroundImage: 'var(--uk-stepper-check-image)',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50% 50%',
		position: 'absolute',
		height: '1rem',
		width: '1rem',
		justifyContent: 'center',
		alignItems: 'center',
		left: '0',
		margin: '0',
		border: '1px solid',
		borderColor: 'hsl(var(--primary))',
		borderRadius: '50%'
	},
	'.uk-stepper-default li:not(:last-child)::after': {
		content: '"/"',
		color: 'hsl(var(--muted-foreground))',
		marginLeft: '.5rem',
		marginRight: '.75rem'
	}
};
