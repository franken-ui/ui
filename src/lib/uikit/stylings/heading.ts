import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-heading-small': { fontSize: '2.6rem', lineHeight: '1.2' },
	'.uk-heading-medium': { fontSize: '2.8875rem', lineHeight: '1.1' },
	'.uk-heading-large': { fontSize: '3.4rem', lineHeight: '1.1' },
	'.uk-heading-xlarge': { fontSize: '4rem', lineHeight: '1' },
	'.uk-heading-2xlarge': { fontSize: '6rem', lineHeight: '1' },
	'.uk-heading-3xlarge': { fontSize: '8rem', lineHeight: '1' },
	'.uk-heading-divider': {
		paddingBottom: 'calc(5px + 0.1em)',
		borderBottom: 'calc(0.2px + 0.05em) solid #e5e5e5'
	},
	'.uk-heading-bullet': { position: 'relative' },
	'.uk-heading-bullet::before': {
		content: '""',
		display: 'inline-block',
		position: 'relative',
		top: 'calc(-0.1 * 1em)',
		verticalAlign: 'middle',
		height: 'calc(4px + 0.7em)',
		marginRight: 'calc(5px + 0.2em)',
		borderLeft: 'calc(5px + 0.1em) solid #e5e5e5'
	},
	'.uk-heading-line': { overflow: 'hidden' },
	'.uk-heading-line > *': { display: 'inline-block', position: 'relative' },
	'.uk-heading-line > ::before, .uk-heading-line > ::after': {
		content: '""',
		position: 'absolute',
		top: 'calc(50% - (calc(0.2px + 0.05em) / 2))',
		width: '2000px',
		borderBottom: 'calc(0.2px + 0.05em) solid #e5e5e5'
	},
	'.uk-heading-line > ::before': {
		right: '100%',
		marginRight: 'calc(5px + 0.3em)'
	},
	'.uk-heading-line > ::after': {
		left: '100%',
		marginLeft: 'calc(5px + 0.3em)'
	}
};

export const media: CSSRuleObject = {
	'@screen md': {
		'.uk-heading-small': { fontSize: '3.25rem' },
		'.uk-heading-medium': { fontSize: '3.5rem' },
		'.uk-heading-large': { fontSize: '4rem' },
		'.uk-heading-xlarge': { fontSize: '6rem' },
		'.uk-heading-2xlarge': { fontSize: '8rem' },
		'.uk-heading-3xlarge': { fontSize: '11rem' }
	},
	'@screen lg': {
		'.uk-heading-medium': { fontSize: '4rem' },
		'.uk-heading-large': { fontSize: '6rem' },
		'.uk-heading-xlarge': { fontSize: '8rem' },
		'.uk-heading-2xlarge': { fontSize: '11rem' },
		'.uk-heading-3xlarge': { fontSize: '15rem' }
	}
};

export interface HeadingHooks {
	'hook-small': CSSRuleObject;
	'hook-medium': CSSRuleObject;
	'hook-large': CSSRuleObject;
	'hook-xlarge': CSSRuleObject;
	'hook-2xlarge': CSSRuleObject;
	'hook-3xlarge': CSSRuleObject;
	'hook-primary': CSSRuleObject;
	'hook-hero': CSSRuleObject;
	'hook-divider': CSSRuleObject;
	'hook-bullet': CSSRuleObject;
	'hook-line': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<HeadingHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: HeadingHooks = {
		'hook-small': {},
		'hook-medium': {},
		'hook-large': {},
		'hook-xlarge': {},
		'hook-2xlarge': {},
		'hook-3xlarge': {},
		'hook-primary': {},
		'hook-hero': {},
		'hook-divider': {},
		'hook-bullet': {},
		'hook-line': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-heading-small': {
			..._hooks['hook-small']
		},
		'.uk-heading-medium': {
			..._hooks['hook-medium']
		},
		'.uk-heading-large': {
			..._hooks['hook-large']
		},
		'.uk-heading-xlarge': {
			..._hooks['hook-xlarge']
		},
		'.uk-heading-2xlarge': {
			..._hooks['hook-2xlarge']
		},
		'.uk-heading-3xlarge': {
			..._hooks['hook-3xlarge']
		},
		'.uk-heading-primary': {
			..._hooks['hook-primary']
		},
		'.uk-heading-hero': {
			..._hooks['hook-hero']
		},
		'.uk-heading-divider': {
			..._hooks['hook-divider']
		},
		'.uk-heading-bullet::before': {
			..._hooks['hook-bullet']
		},
		'.uk-heading-line > ::before, .uk-heading-line > ::after': {
			..._hooks['hook-line']
		},
		..._hooks['hook-misc']
	};
};
