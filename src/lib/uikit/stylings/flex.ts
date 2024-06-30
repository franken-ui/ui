import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-flex': { display: 'flex !important' },
	'.uk-flex-inline': { display: 'inline-flex' },
	'.uk-flex-left': { justifyContent: 'flex-start' },
	'.uk-flex-center': { justifyContent: 'center' },
	'.uk-flex-right': { justifyContent: 'flex-end' },
	'.uk-flex-between': { justifyContent: 'space-between' },
	'.uk-flex-around': { justifyContent: 'space-around' },
	'.uk-flex-stretch': { alignItems: 'stretch' },
	'.uk-flex-top': { alignItems: 'flex-start' },
	'.uk-flex-middle': { alignItems: 'center' },
	'.uk-flex-bottom': { alignItems: 'flex-end' },
	'.uk-flex-row': { flexDirection: 'row' },
	'.uk-flex-row-reverse': { flexDirection: 'row-reverse' },
	'.uk-flex-column': { flexDirection: 'column' },
	'.uk-flex-column-reverse': { flexDirection: 'column-reverse' },
	'.uk-flex-nowrap': { flexWrap: 'nowrap' },
	'.uk-flex-wrap': { flexWrap: 'wrap' },
	'.uk-flex-wrap-reverse': { flexWrap: 'wrap-reverse' },
	'.uk-flex-wrap-stretch': { alignContent: 'stretch' },
	'.uk-flex-wrap-top': { alignContent: 'flex-start' },
	'.uk-flex-wrap-middle': { alignContent: 'center' },
	'.uk-flex-wrap-bottom': { alignContent: 'flex-end' },
	'.uk-flex-wrap-between': { alignContent: 'space-between' },
	'.uk-flex-wrap-around': { alignContent: 'space-around' },
	'.uk-flex-first': { order: '-1' },
	'.uk-flex-last': { order: '99' },
	'.uk-flex-initial': { flex: 'initial' },
	'.uk-flex-none': { flex: 'none' },
	'.uk-flex-auto': { flex: 'auto' },
	'.uk-flex-1': { flex: '1' }
};

export const media: CSSRuleObject = {
	'@media (min-width: 640px)': {
		'.uk-flex-left\\@s': { justifyContent: 'flex-start' },
		'.uk-flex-center\\@s': { justifyContent: 'center' },
		'.uk-flex-right\\@s': { justifyContent: 'flex-end' },
		'.uk-flex-between\\@s': { justifyContent: 'space-between' },
		'.uk-flex-around\\@s': { justifyContent: 'space-around' },
		'.uk-flex-stretch\\@s': { alignItems: 'stretch' },
		'.uk-flex-top\\@s': { alignItems: 'flex-start' },
		'.uk-flex-middle\\@s': { alignItems: 'center' },
		'.uk-flex-bottom\\@s': { alignItems: 'flex-end' },
		'.uk-flex-row\\@s': { flexDirection: 'row' },
		'.uk-flex-column\\@s': { flexDirection: 'column' },
		'.uk-flex-first\\@s': { order: '-1' },
		'.uk-flex-last\\@s': { order: '99' },
		'.uk-flex-initial\\@s': { flex: 'initial' },
		'.uk-flex-none\\@s': { flex: 'none' },
		'.uk-flex-1\\@s': { flex: '1' }
	},
	'@media (min-width: 768px)': {
		'.uk-flex-left\\@m': { justifyContent: 'flex-start' },
		'.uk-flex-center\\@m': { justifyContent: 'center' },
		'.uk-flex-right\\@m': { justifyContent: 'flex-end' },
		'.uk-flex-between\\@m': { justifyContent: 'space-between' },
		'.uk-flex-around\\@m': { justifyContent: 'space-around' },
		'.uk-flex-stretch\\@m': { alignItems: 'stretch' },
		'.uk-flex-top\\@m': { alignItems: 'flex-start' },
		'.uk-flex-middle\\@m': { alignItems: 'center' },
		'.uk-flex-bottom\\@m': { alignItems: 'flex-end' },
		'.uk-flex-row\\@m': { flexDirection: 'row' },
		'.uk-flex-column\\@m': { flexDirection: 'column' },
		'.uk-flex-first\\@m': { order: '-1' },
		'.uk-flex-last\\@m': { order: '99' },
		'.uk-flex-initial\\@m': { flex: 'initial' },
		'.uk-flex-none\\@m': { flex: 'none' },
		'.uk-flex-1\\@m': { flex: '1' }
	},
	'@media (min-width: 1024px)': {
		'.uk-flex-left\\@l': { justifyContent: 'flex-start' },
		'.uk-flex-center\\@l': { justifyContent: 'center' },
		'.uk-flex-right\\@l': { justifyContent: 'flex-end' },
		'.uk-flex-between\\@l': { justifyContent: 'space-between' },
		'.uk-flex-around\\@l': { justifyContent: 'space-around' },
		'.uk-flex-stretch\\@l': { alignItems: 'stretch' },
		'.uk-flex-top\\@l': { alignItems: 'flex-start' },
		'.uk-flex-middle\\@l': { alignItems: 'center' },
		'.uk-flex-bottom\\@l': { alignItems: 'flex-end' },
		'.uk-flex-row\\@l': { flexDirection: 'row' },
		'.uk-flex-column\\@l': { flexDirection: 'column' },
		'.uk-flex-first\\@l': { order: '-1' },
		'.uk-flex-last\\@l': { order: '99' },
		'.uk-flex-initial\\@l': { flex: 'initial' },
		'.uk-flex-none\\@l': { flex: 'none' },
		'.uk-flex-1\\@l': { flex: '1' }
	},
	'@media (min-width: 1280px)': {
		'.uk-flex-left\\@xl': { justifyContent: 'flex-start' },
		'.uk-flex-center\\@xl': { justifyContent: 'center' },
		'.uk-flex-right\\@xl': { justifyContent: 'flex-end' },
		'.uk-flex-between\\@xl': { justifyContent: 'space-between' },
		'.uk-flex-around\\@xl': { justifyContent: 'space-around' },
		'.uk-flex-stretch\\@xl': { alignItems: 'stretch' },
		'.uk-flex-top\\@xl': { alignItems: 'flex-start' },
		'.uk-flex-middle\\@xl': { alignItems: 'center' },
		'.uk-flex-bottom\\@xl': { alignItems: 'flex-end' },
		'.uk-flex-row\\@xl': { flexDirection: 'row' },
		'.uk-flex-column\\@xl': { flexDirection: 'column' },
		'.uk-flex-first\\@xl': { order: '-1' },
		'.uk-flex-last\\@xl': { order: '99' },
		'.uk-flex-initial\\@xl': { flex: 'initial' },
		'.uk-flex-none\\@xl': { flex: 'none' },
		'.uk-flex-1\\@xl': { flex: '1' }
	}
};

export interface FlexHooks {
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<FlexHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: FlexHooks = {
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		..._hooks['hook-misc']
	};
};
