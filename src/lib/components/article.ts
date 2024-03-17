import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-article': { display: 'flow-root' },
	'.uk-article > :last-child': { marginBottom: '0' },
	'.uk-article + .uk-article': { marginTop: '70px' },
	'.uk-article-title': { fontSize: '2.23125rem', lineHeight: '1.2' },
	'.uk-article-meta': {
		fontSize: '0.875rem',
		lineHeight: '1.4',
		color: '#999'
	},
	'.uk-article-meta a': { color: '#999' },
	'.uk-article-meta a:hover': { color: '#666', textDecoration: 'none' }
};

export const media: CSSRuleObject = {
	'@media (min-width: 960px)': {
		'.uk-article-title': { fontSize: '2.625rem' }
	}
};

export interface ArticleHooks {
	'hook-article': CSSRuleObject;
	'hook-adjacent': CSSRuleObject;
	'hook-title': CSSRuleObject;
	'hook-meta': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<ArticleHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: ArticleHooks = {
		'hook-article': {},
		'hook-adjacent': {},
		'hook-title': {},
		'hook-meta': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-article': {
			..._hooks['hook-article']
		},
		'.uk-article + .uk-article': {
			..._hooks['hook-adjacent']
		},
		'.uk-article-title': {
			..._hooks['hook-title']
		},
		'.uk-article-meta': {
			..._hooks['hook-meta']
		},
		..._hooks['hook-misc']
	};
};
