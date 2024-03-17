import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'@media print': {
		'*,*::before,*::after': {
			background: 'transparent !important',
			color: 'black !important',
			boxShadow: 'none !important',
			textShadow: 'none !important'
		},
		'a,a:visited': { textDecoration: 'underline' },
		'pre,blockquote': {
			border: '1px solid #999',
			pageBreakInside: 'avoid'
		},
		thead: { display: 'table-header-group' },
		'tr,img': { pageBreakInside: 'avoid' },
		img: { maxWidth: '100% !important' },
		'@page': { margin: '0.5cm' },
		'p,h2,h3': { orphans: '3', widows: '3' },
		'h2,h3': { pageBreakAfter: 'avoid' }
	}
};

export interface PrintHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<PrintHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: PrintHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
