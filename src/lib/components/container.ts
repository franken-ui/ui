import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-container': {
		display: 'flow-root',
		boxSizing: 'content-box',
		maxWidth: '1200px',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: '15px',
		paddingRight: '15px'
	},
	'.uk-container > :last-child': { marginBottom: '0' },
	'.uk-container .uk-container': { paddingLeft: '0', paddingRight: '0' },
	'.uk-container-xsmall': { maxWidth: '750px' },
	'.uk-container-small': { maxWidth: '900px' },
	'.uk-container-large': { maxWidth: '1400px' },
	'.uk-container-xlarge': { maxWidth: '1600px' },
	'.uk-container-expand': { maxWidth: 'none' },
	'.uk-container-expand-left': { marginLeft: '0' },
	'.uk-container-expand-right': { marginRight: '0' },
	'.uk-container-item-padding-remove-left, .uk-container-item-padding-remove-right': {
		width: 'calc(100% + 15px)'
	},
	'.uk-container-item-padding-remove-left': { marginLeft: '-15px' },
	'.uk-container-item-padding-remove-right': { marginRight: '-15px' }
};

export const media: CSSRuleObject = {
	'@media (min-width: 640px)': {
		'.uk-container': { paddingLeft: '30px', paddingRight: '30px' },
		'.uk-container-expand-left.uk-container-xsmall,.uk-container-expand-right.uk-container-xsmall':
			{
				maxWidth: 'calc(50% + (750px / 2) - 30px)'
			},
		'.uk-container-expand-left.uk-container-small,.uk-container-expand-right.uk-container-small': {
			maxWidth: 'calc(50% + (900px / 2) - 30px)'
		},
		'.uk-container-item-padding-remove-left,.uk-container-item-padding-remove-right': {
			width: 'calc(100% + 30px)'
		},
		'.uk-container-item-padding-remove-left': { marginLeft: '-30px' },
		'.uk-container-item-padding-remove-right': { marginRight: '-30px' }
	},
	'@media (min-width: 960px)': {
		'.uk-container': { paddingLeft: '40px', paddingRight: '40px' },
		'.uk-container-expand-left,.uk-container-expand-right': {
			maxWidth: 'calc(50% + (1200px / 2) - 40px)'
		},
		'.uk-container-expand-left.uk-container-xsmall,.uk-container-expand-right.uk-container-xsmall':
			{
				maxWidth: 'calc(50% + (750px / 2) - 40px)'
			},
		'.uk-container-expand-left.uk-container-small,.uk-container-expand-right.uk-container-small': {
			maxWidth: 'calc(50% + (900px / 2) - 40px)'
		},
		'.uk-container-expand-left.uk-container-large,.uk-container-expand-right.uk-container-large': {
			maxWidth: 'calc(50% + (1400px / 2) - 40px)'
		},
		'.uk-container-expand-left.uk-container-xlarge,.uk-container-expand-right.uk-container-xlarge':
			{
				maxWidth: 'calc(50% + (1600px / 2) - 40px)'
			},
		'.uk-container-item-padding-remove-left,.uk-container-item-padding-remove-right': {
			width: 'calc(100% + 40px)'
		},
		'.uk-container-item-padding-remove-left': { marginLeft: '-40px' },
		'.uk-container-item-padding-remove-right': { marginRight: '-40px' }
	}
};

export interface ContainerHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<ContainerHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: ContainerHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
