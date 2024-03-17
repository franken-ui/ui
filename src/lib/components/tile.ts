import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-tile': {
		display: 'flow-root',
		position: 'relative',
		boxSizing: 'border-box',
		paddingLeft: '15px',
		paddingRight: '15px',
		paddingTop: '40px',
		paddingBottom: '40px'
	},
	'.uk-tile > :last-child': { marginBottom: '0' },
	'.uk-tile-xsmall': { paddingTop: '20px', paddingBottom: '20px' },
	'.uk-tile-small': { paddingTop: '40px', paddingBottom: '40px' },
	'.uk-tile-large': { paddingTop: '70px', paddingBottom: '70px' },
	'.uk-tile-xlarge': { paddingTop: '140px', paddingBottom: '140px' },
	'.uk-tile-default': { backgroundColor: '#fff' },
	'.uk-tile-muted': { backgroundColor: '#f8f8f8' },
	'.uk-tile-primary': { backgroundColor: '#1e87f0' },
	'.uk-tile-secondary': { backgroundColor: '#222' }
};

export const media: CSSRuleObject = {
	'@media (min-width: 640px)': {
		'.uk-tile': { paddingLeft: '30px', paddingRight: '30px' }
	},
	'@media (min-width: 960px)': {
		'.uk-tile': {
			paddingLeft: '40px',
			paddingRight: '40px',
			paddingTop: '70px',
			paddingBottom: '70px'
		},
		'.uk-tile-large': { paddingTop: '140px', paddingBottom: '140px' },
		'.uk-tile-xlarge': { paddingTop: '210px', paddingBottom: '210px' }
	}
};

export interface TileHooks {
	'hook-tile': CSSRuleObject;
	'hook-default': CSSRuleObject;
	'hook-default-hover': CSSRuleObject;
	'hook-muted': CSSRuleObject;
	'hook-muted-hover': CSSRuleObject;
	'hook-primary': CSSRuleObject;
	'hook-primary-hover': CSSRuleObject;
	'hook-secondary': CSSRuleObject;
	'hook-secondary-hover': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<TileHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: TileHooks = {
		'hook-tile': {},
		'hook-default': {},
		'hook-default-hover': {},
		'hook-muted': {},
		'hook-muted-hover': {},
		'hook-primary': {},
		'hook-primary-hover': {},
		'hook-secondary': {},
		'hook-secondary-hover': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-tile': {
			..._hooks['hook-tile']
		},
		'.uk-tile-default': {
			..._hooks['hook-default']
		},
		'.uk-tile-default.uk-tile-hover:hover': {
			..._hooks['hook-default-hover']
		},
		'.uk-tile-muted': {
			..._hooks['hook-muted']
		},
		'.uk-tile-muted.uk-tile-hover:hover': {
			..._hooks['hook-muted-hover']
		},
		'.uk-tile-primary': {
			..._hooks['hook-primary']
		},
		'.uk-tile-primary.uk-tile-hover:hover': {
			..._hooks['hook-primary-hover']
		},
		'.uk-tile-secondary': {
			..._hooks['hook-secondary']
		},
		'.uk-tile-secondary.uk-tile-hover:hover': {
			..._hooks['hook-secondary-hover']
		},
		..._hooks['hook-misc']
	};
};
