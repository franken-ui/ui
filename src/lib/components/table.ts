import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-table': {
		borderCollapse: 'collapse',
		borderSpacing: '0',
		width: '100%',
		marginBottom: '20px'
	},
	'* + .uk-table': { marginTop: '20px' },
	'.uk-table th': {
		padding: '16px 12px',
		textAlign: 'left',
		verticalAlign: 'bottom',
		fontSize: '0.875rem',
		fontWeight: 'normal',
		color: '#999',
		textTransform: 'uppercase'
	},
	'.uk-table td': { padding: '16px 12px', verticalAlign: 'top' },
	'.uk-table td > :last-child': { marginBottom: '0' },
	'.uk-table tfoot': { fontSize: '0.875rem' },
	'.uk-table caption': {
		fontSize: '0.875rem',
		textAlign: 'left',
		color: '#999'
	},
	'.uk-table-middle, .uk-table-middle td': {
		verticalAlign: 'middle !important'
	},
	'.uk-table-divider > tr:not(:first-child), .uk-table-divider > :not(:first-child) > tr, .uk-table-divider > :first-child > tr:not(:first-child)':
		{
			borderTop: '1px solid #e5e5e5'
		},
	'.uk-table-striped > tr:nth-of-type(odd), .uk-table-striped tbody tr:nth-of-type(odd)': {
		backgroundColor: '#f8f8f8',
		borderTop: '1px solid #e5e5e5',
		borderBottom: '1px solid #e5e5e5'
	},
	'.uk-table-hover > tr:hover, .uk-table-hover tbody tr:hover': {
		backgroundColor: '#ffd'
	},
	'.uk-table > tr.uk-active, .uk-table tbody tr.uk-active': {
		backgroundColor: '#ffd'
	},
	'.uk-table-small th, .uk-table-small td': { padding: '10px 12px' },
	'.uk-table-large th, .uk-table-large td': { padding: '22px 12px' },
	'.uk-table-justify th:first-child, .uk-table-justify td:first-child': {
		paddingLeft: '0'
	},
	'.uk-table-justify th:last-child, .uk-table-justify td:last-child': {
		paddingRight: '0'
	},
	'.uk-table-shrink': { width: '1px' },
	'.uk-table-expand': { minWidth: '150px' },
	'.uk-table-link': { padding: '0 !important' },
	'.uk-table-link > a': { display: 'block', padding: '16px 12px' },
	'.uk-table-small .uk-table-link > a': { padding: '10px 12px' },
	'.uk-table tbody tr': { transition: 'background-color 0.1s linear' },
	'.uk-table-striped > tr:nth-of-type(even):last-child, .uk-table-striped tbody tr:nth-of-type(even):last-child':
		{
			borderBottom: '1px solid #e5e5e5'
		}
};

export const media: CSSRuleObject = {
	'@media (max-width: 959px)': {
		'.uk-table-responsive, .uk-table-responsive tbody, .uk-table-responsive th, .uk-table-responsive td, .uk-table-responsive tr':
			{
				display: 'block'
			},
		'.uk-table-responsive thead': { display: 'none' },
		'.uk-table-responsive th, .uk-table-responsive td': {
			width: 'auto !important',
			maxWidth: 'none !important',
			minWidth: '0 !important',
			overflow: 'visible !important',
			whiteSpace: 'normal !important'
		},
		'.uk-table-responsive th:not(:first-child):not(.uk-table-link), .uk-table-responsive td:not(:first-child):not(.uk-table-link), .uk-table-responsive .uk-table-link:not(:first-child) > a':
			{
				paddingTop: '5px !important'
			},
		'.uk-table-responsive th:not(:last-child):not(.uk-table-link), .uk-table-responsive td:not(:last-child):not(.uk-table-link), .uk-table-responsive .uk-table-link:not(:last-child) > a':
			{
				paddingBottom: '5px !important'
			},
		'.uk-table-justify.uk-table-responsive th, .uk-table-justify.uk-table-responsive td': {
			paddingLeft: '0',
			paddingRight: '0'
		}
	}
};

export interface TableHooks {
	'hook-table': CSSRuleObject;
	'hook-header-cell': CSSRuleObject;
	'hook-cell': CSSRuleObject;
	'hook-footer': CSSRuleObject;
	'hook-caption': CSSRuleObject;
	'hook-row-active': CSSRuleObject;
	'hook-divider': CSSRuleObject;
	'hook-striped': CSSRuleObject;
	'hook-hover': CSSRuleObject;
	'hook-small': CSSRuleObject;
	'hook-large': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<TableHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: TableHooks = {
		'hook-table': {},
		'hook-header-cell': {},
		'hook-cell': {},
		'hook-footer': {},
		'hook-caption': {},
		'hook-row-active': {},
		'hook-divider': {},
		'hook-striped': {},
		'hook-hover': {},
		'hook-small': {},
		'hook-large': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-table': {
			..._hooks['hook-table']
		},
		'.uk-table th': {
			..._hooks['hook-header-cell']
		},
		'.uk-table td': {
			..._hooks['hook-cell']
		},
		'.uk-table tfoot': {
			..._hooks['hook-footer']
		},
		'.uk-table caption': {
			..._hooks['hook-caption']
		},
		'.uk-table-divider > tr:not(:first-child), .uk-table-divider > :not(:first-child) > tr, .uk-table-divider > :first-child > tr:not(:first-child)':
			{
				..._hooks['hook-divider']
			},
		'.uk-table-striped > tr:nth-of-type(odd), .uk-table-striped tbody tr:nth-of-type(odd)': {
			..._hooks['hook-striped']
		},
		'.uk-table-hover > tr:hover, .uk-table-hover tbody tr:hover': {
			..._hooks['hook-hover']
		},
		'.uk-table > tr.uk-active, .uk-table tbody tr.uk-active': {
			..._hooks['hook-row-active']
		},
		'.uk-table-small th, .uk-table-small td': {
			..._hooks['hook-small']
		},
		'.uk-table-large th, .uk-table-large td': {
			..._hooks['hook-large']
		},
		..._hooks['hook-misc']
	};
};
