import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-dotnav': {
		display: 'flex',
		flexWrap: 'wrap',
		margin: '0',
		padding: '0',
		listStyle: 'none',
		marginLeft: '-12px'
	},
	'.uk-dotnav > *': { flex: 'none', paddingLeft: '12px' },
	'.uk-dotnav > * > *': {
		display: 'block',
		boxSizing: 'border-box',
		width: '10px',
		height: '10px',
		borderRadius: '50%',
		background: 'transparent',
		textIndent: '100%',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		border: '1px solid rgba(102, 102, 102, 0.4)',
		transition: '0.2s ease-in-out',
		transitionProperty: 'background-color, border-color'
	},
	'.uk-dotnav > * > :hover': {
		backgroundColor: 'rgba(102, 102, 102, 0.6)',
		borderColor: 'transparent'
	},
	'.uk-dotnav > * > :active': {
		backgroundColor: 'rgba(102, 102, 102, 0.2)',
		borderColor: 'transparent'
	},
	'.uk-dotnav > .uk-active > *': {
		backgroundColor: 'rgba(102, 102, 102, 0.6)',
		borderColor: 'transparent'
	},
	'.uk-dotnav-vertical': {
		flexDirection: 'column',
		marginLeft: '0',
		marginTop: '-12px'
	},
	'.uk-dotnav-vertical > *': { paddingLeft: '0', paddingTop: '12px' }
};

export interface DotnavHooks {
	'hook-dotnav': CSSRuleObject;
	'hook-item': CSSRuleObject;
	'hook-item-hover': CSSRuleObject;
	'hook-item-onclick': CSSRuleObject;
	'hook-item-active': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<DotnavHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: DotnavHooks = {
		'hook-dotnav': {},
		'hook-item': {},
		'hook-item-hover': {},
		'hook-item-onclick': {},
		'hook-item-active': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-dotnav': {
			..._hooks['hook-dotnav']
		},
		'.uk-dotnav > * > *': {
			..._hooks['hook-item']
		},
		'.uk-dotnav > * > :hover': {
			..._hooks['hook-item-hover']
		},
		'.uk-dotnav > * > :active': {
			..._hooks['hook-item-onclick']
		},
		'.uk-dotnav > .uk-active > *': {
			..._hooks['hook-item-active']
		},
		..._hooks['hook-misc']
	};
};
