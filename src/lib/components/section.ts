import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-section': {
		display: 'flow-root',
		boxSizing: 'border-box',
		paddingTop: '40px',
		paddingBottom: '40px'
	},
	'.uk-section > :last-child': { marginBottom: '0' },
	'.uk-section-xsmall': { paddingTop: '20px', paddingBottom: '20px' },
	'.uk-section-small': { paddingTop: '40px', paddingBottom: '40px' },
	'.uk-section-large': { paddingTop: '70px', paddingBottom: '70px' },
	'.uk-section-xlarge': { paddingTop: '140px', paddingBottom: '140px' },
	'.uk-section-default': { backgroundColor: '#fff', '--uk-navbar-color': 'dark' },
	'.uk-section-muted': { backgroundColor: '#f8f8f8', '--uk-navbar-color': 'dark' },
	'.uk-section-primary': {
		backgroundColor: '#1e87f0',
		'--uk-navbar-color': 'light'
	},
	'.uk-section-secondary': { backgroundColor: '#222', '--uk-navbar-color': 'light' }
};

export const media: CSSRuleObject = {
	'@media (min-width: 960px)': {
		'.uk-section': { paddingTop: '70px', paddingBottom: '70px' },
		'.uk-section-large': { paddingTop: '140px', paddingBottom: '140px' },
		'.uk-section-xlarge': { paddingTop: '210px', paddingBottom: '210px' }
	}
};

export interface SectionHooks {
	'hook-section': CSSRuleObject;
	'hook-default': CSSRuleObject;
	'hook-muted': CSSRuleObject;
	'hook-secondary': CSSRuleObject;
	'hook-primary': CSSRuleObject;
	'hook-overlap': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<SectionHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: SectionHooks = {
		'hook-section': {},
		'hook-default': {},
		'hook-muted': {},
		'hook-secondary': {},
		'hook-primary': {},
		'hook-overlap': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-section': {
			..._hooks['hook-section']
		},
		'.uk-section-default': {
			..._hooks['hook-default']
		},
		'.uk-section-muted': {
			..._hooks['hook-muted']
		},
		'.uk-section-primary': {
			..._hooks['hook-primary']
		},
		'.uk-section-secondary': {
			..._hooks['hook-secondary']
		},
		'.uk-section-overlap': {
			..._hooks['hook-overlap']
		},
		..._hooks['hook-misc']
	};
};
