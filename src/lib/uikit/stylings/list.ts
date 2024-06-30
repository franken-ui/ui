import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-list': { padding: '0', listStyle: 'none' },
	'.uk-list > *': { breakInside: 'avoid-column' },
	'.uk-list > * > :last-child': { marginBottom: '0' },
	'.uk-list > :nth-child(n + 2), .uk-list > * > ul': { marginTop: '10px' },
	'.uk-list-disc > *, .uk-list-circle > *, .uk-list-square > *, .uk-list-decimal > *, .uk-list-hyphen > *':
		{
			paddingLeft: '30px'
		},
	'.uk-list-decimal': { counterReset: 'decimal' },
	'.uk-list-decimal > *': { counterIncrement: 'decimal' },
	'.uk-list-disc > ::before, .uk-list-circle > ::before, .uk-list-square > ::before, .uk-list-decimal > ::before, .uk-list-hyphen > ::before':
		{
			content: "''",
			position: 'relative',
			left: '-30px',
			width: '30px',
			height: '1.5em',
			marginBottom: '-1.5em',
			display: 'list-item',
			listStylePosition: 'inside',
			textAlign: 'right'
		},
	'.uk-list-disc > ::before': { listStyleType: 'disc' },
	'.uk-list-circle > ::before': { listStyleType: 'circle' },
	'.uk-list-square > ::before': { listStyleType: 'square' },
	'.uk-list-decimal > ::before': {
		content: "counter(decimal, decimal) '\\200A.\\00A0'"
	},
	'.uk-list-hyphen > ::before': { content: "'–\\00A0\\00A0'" },
	'.uk-list-muted > ::before': { color: '#999 !important' },
	'.uk-list-emphasis > ::before': { color: '#333 !important' },
	'.uk-list-primary > ::before': { color: '#1e87f0 !important' },
	'.uk-list-secondary > ::before': { color: '#222 !important' },
	'.uk-list-bullet > *': { paddingLeft: '30px' },
	'.uk-list-bullet > ::before': {
		content: "''",
		display: 'list-item',
		position: 'relative',
		left: '-30px',
		width: '30px',
		height: '1.5em',
		marginBottom: '-1.5em',
		backgroundImage:
			"url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23666%22%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%20%2F%3E%0A%3C%2Fsvg%3E')",
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50% 50%'
	},
	'.uk-list-divider > :nth-child(n + 2)': {
		marginTop: '10px',
		paddingTop: '10px',
		borderTop: '1px solid #e5e5e5'
	},
	'.uk-list-striped > *': { padding: '10px 10px' },
	'.uk-list-striped > *:nth-of-type(odd)': {
		borderTop: '1px solid #e5e5e5',
		borderBottom: '1px solid #e5e5e5'
	},
	'.uk-list-striped > :nth-of-type(odd)': { backgroundColor: '#f8f8f8' },
	'.uk-list-striped > :nth-child(n + 2)': { marginTop: '0' },
	'.uk-list-large > :nth-child(n + 2), .uk-list-large > * > ul': {
		marginTop: '20px'
	},
	'.uk-list-collapse > :nth-child(n + 2), .uk-list-collapse > * > ul': {
		marginTop: '0'
	},
	'.uk-list-large.uk-list-divider > :nth-child(n + 2)': {
		marginTop: '20px',
		paddingTop: '20px'
	},
	'.uk-list-collapse.uk-list-divider > :nth-child(n + 2)': {
		marginTop: '0',
		paddingTop: '0'
	},
	'.uk-list-large.uk-list-striped > *': { padding: '20px 10px' },
	'.uk-list-collapse.uk-list-striped > *': {
		paddingTop: '0',
		paddingBottom: '0'
	},
	'.uk-list-large.uk-list-striped > :nth-child(n + 2), .uk-list-collapse.uk-list-striped > :nth-child(n + 2)':
		{
			marginTop: '0'
		}
};

export interface ListHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<ListHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: ListHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
