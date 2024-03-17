import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-comment-body': {
		display: 'flow-root',
		overflowWrap: 'break-word',
		wordWrap: 'break-word'
	},
	'.uk-comment-header': { display: 'flow-root', marginBottom: '20px' },
	'.uk-comment-body > :last-child, .uk-comment-header > :last-child': {
		marginBottom: '0'
	},
	'.uk-comment-title': { fontSize: '1.25rem', lineHeight: '1.4' },
	'.uk-comment-meta': {
		fontSize: '0.875rem',
		lineHeight: '1.4',
		color: '#999'
	},
	'.uk-comment-list': { padding: '0', listStyle: 'none' },
	'.uk-comment-list > :nth-child(n + 2)': { marginTop: '70px' },
	'.uk-comment-list .uk-comment ~ ul': {
		margin: '70px 0 0 0',
		paddingLeft: '30px',
		listStyle: 'none'
	},
	'.uk-comment-list .uk-comment ~ ul > :nth-child(n + 2)': {
		marginTop: '70px'
	},
	'.uk-comment-primary': { padding: '30px', backgroundColor: '#f8f8f8' }
};

export interface CommentHooks {
	'hook-comment': CSSRuleObject;
	'hook-body': CSSRuleObject;
	'hook-header': CSSRuleObject;
	'hook-title': CSSRuleObject;
	'hook-meta': CSSRuleObject;
	'hook-avatar': CSSRuleObject;
	'hook-list-adjacent': CSSRuleObject;
	'hook-list-sub': CSSRuleObject;
	'hook-list-sub-adjacent': CSSRuleObject;
	'hook-primary': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<CommentHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: CommentHooks = {
		'hook-comment': {},
		'hook-body': {},
		'hook-header': {},
		'hook-title': {},
		'hook-meta': {},
		'hook-avatar': {},
		'hook-list-adjacent': {},
		'hook-list-sub': {},
		'hook-list-sub-adjacent': {},
		'hook-primary': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-comment': {
			..._hooks['hook-comment']
		},
		'.uk-comment-body': {
			..._hooks['hook-body']
		},
		'.uk-comment-header': {
			..._hooks['hook-header']
		},
		'.uk-comment-title': {
			..._hooks['hook-title']
		},
		'.uk-comment-meta': {
			..._hooks['hook-meta']
		},
		'.uk-avatar': {
			..._hooks['hook-avatar']
		},
		'.uk-comment-list > :nth-child(n + 2)': {
			..._hooks['hook-list-adjacent']
		},
		'.uk-comment-list .uk-comment ~ ul': {
			..._hooks['hook-list-sub']
		},
		'.uk-comment-list .uk-comment ~ ul > :nth-child(n + 2)': {
			..._hooks['hook-list-sub-adjacent']
		},
		'.uk-comment-primary': {
			..._hooks['hook-primary']
		},
		..._hooks['hook-misc']
	};
};

export const media: CSSRuleObject = {
	'@media (min-width: 960px)': {
		'.uk-comment-list .uk-comment ~ ul': { paddingLeft: '100px' }
	}
};
