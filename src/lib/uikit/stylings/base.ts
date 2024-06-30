import merge from 'lodash/merge.js';
import type { CSSRuleObject, PluginUtils } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	html: {
		fontFamily:
			'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		fontSize: '16px',
		fontWeight: 'normal',
		lineHeight: '1.5',
		WebkitTextSizeAdjust: '100%',
		backgroundColor: '#fff',
		color: '#666'
	},
	body: { margin: '0' },
	'a, .uk-link': {
		color: '#1e87f0',
		textDecoration: 'none',
		cursor: 'pointer'
	},
	'a:hover, .uk-link:hover, .uk-link-toggle:hover .uk-link': {
		color: '#0f6ecd',
		textDecoration: 'underline'
	},
	'abbr[title]': {
		textDecoration: 'underline dotted',
		WebkitTextDecorationStyle: 'dotted'
	},
	'b, strong': { fontWeight: 'bolder' },
	':not(pre) > code, :not(pre) > kbd, :not(pre) > samp': {
		fontFamily: 'Consolas, monaco, monospace',
		fontSize: '0.875rem',
		color: '#f0506e',
		whiteSpace: 'nowrap',
		padding: '2px 6px',
		backgroundColor: '#f8f8f8'
	},
	em: { color: '#f0506e' },
	ins: { backgroundColor: '#ffd', color: '#666', textDecoration: 'none' },
	mark: { backgroundColor: '#ffd', color: '#666' },
	q: { fontStyle: 'italic' },
	small: { fontSize: '80%' },
	'sub, sup': {
		fontSize: '75%',
		lineHeight: '0',
		position: 'relative',
		verticalAlign: 'baseline'
	},
	sup: { top: '-0.5em' },
	sub: { bottom: '-0.25em' },
	'audio, canvas, iframe, img, svg, video': { verticalAlign: 'middle' },
	'canvas, img, svg, video': {
		maxWidth: '100%',
		height: 'auto',
		boxSizing: 'border-box'
	},
	'img:not([src])': { visibility: 'hidden', minWidth: '1px' },
	iframe: { border: '0' },
	'p, ul, ol, dl, pre, address, fieldset, figure': {
		margin: '0 0 20px 0'
	},
	'* + p, * + ul, * + ol, * + dl, * + pre, * + address, * + fieldset, * + figure': {
		marginTop: '20px'
	},
	'h1, .uk-h1, h2, .uk-h2, h3, .uk-h3, h4, .uk-h4, h5, .uk-h5, h6, .uk-h6, .uk-heading-small, .uk-heading-medium, .uk-heading-large, .uk-heading-xlarge, .uk-heading-2xlarge, .uk-heading-3xlarge':
		{
			margin: '0 0 20px 0',
			fontFamily:
				'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			fontWeight: 'normal',
			color: '#333',
			textTransform: 'none'
		},
	'* + h1, * + .uk-h1, * + h2, * + .uk-h2, * + h3, * + .uk-h3, * + h4, * + .uk-h4, * + h5, * + .uk-h5, * + h6, * + .uk-h6, * + .uk-heading-small, * + .uk-heading-medium, * + .uk-heading-large, * + .uk-heading-xlarge, * + .uk-heading-2xlarge, * + .uk-heading-3xlarge':
		{
			marginTop: '40px'
		},
	'h1, .uk-h1': { fontSize: '2.23125rem', lineHeight: '1.2' },
	'h2, .uk-h2': { fontSize: '1.7rem', lineHeight: '1.3' },
	'h3, .uk-h3': { fontSize: '1.5rem', lineHeight: '1.4' },
	'h4, .uk-h4': { fontSize: '1.25rem', lineHeight: '1.4' },
	'h5, .uk-h5': { fontSize: '16px', lineHeight: '1.4' },
	'h6, .uk-h6': { fontSize: '0.875rem', lineHeight: '1.4' },
	'ul, ol': { paddingLeft: '30px' },
	'ul > li > ul, ul > li > ol, ol > li > ol, ol > li > ul': { margin: '0' },
	dt: { fontWeight: 'bold' },
	dd: { marginLeft: '0' },
	'hr, .uk-hr': {
		overflow: 'visible',
		textAlign: 'inherit',
		margin: '0 0 20px 0',
		border: '0',
		borderTop: '1px solid #e5e5e5'
	},
	'* + hr, * + .uk-hr': { marginTop: '20px' },
	address: { fontStyle: 'normal' },
	blockquote: {
		margin: '0 0 20px 0',
		fontSize: '1.25rem',
		lineHeight: '1.5',
		fontStyle: 'italic',
		color: '#333'
	},
	'* + blockquote': { marginTop: '20px' },
	'blockquote p:last-of-type': { marginBottom: '0' },
	'blockquote footer': {
		marginTop: '10px',
		fontSize: '0.875rem',
		lineHeight: '1.5',
		color: '#666'
	},
	'blockquote footer::before': { content: '"— "' },
	pre: {
		font: '0.875rem / 1.5 Consolas, monaco, monospace',
		color: '#666',
		MozTabSize: '4',
		tabSize: '4',
		overflow: 'auto',
		padding: '10px',
		border: '1px solid #e5e5e5',
		borderRadius: '3px',
		backgroundColor: '#fff'
	},
	'pre code': { fontFamily: 'Consolas, monaco, monospace' },
	':focus': { outline: 'none' },
	':focus-visible': { outline: '2px dotted #333' },
	'::selection': { backgroundColor: '#39f', color: '#fff', textShadow: 'none' },
	'details, main': { display: 'block' },
	summary: { display: 'list-item' },
	template: { display: 'none' }
};

export const media: CSSRuleObject = {
	'@media (min-width: 768px)': {
		'h1, .uk-h1': { fontSize: '2.625rem' },
		'h2, .uk-h2': { fontSize: '2rem' }
	}
};

export interface BaseHooks {
	'hook-body': CSSRuleObject;
	'hook-link': CSSRuleObject;
	'hook-link-hover': CSSRuleObject;
	'hook-code': CSSRuleObject;
	'hook-heading': CSSRuleObject;
	'hook-h1': CSSRuleObject;
	'hook-h2': CSSRuleObject;
	'hook-h3': CSSRuleObject;
	'hook-h4': CSSRuleObject;
	'hook-h5': CSSRuleObject;
	'hook-h6': CSSRuleObject;
	'hook-hr': CSSRuleObject;
	'hook-blockquote': CSSRuleObject;
	'hook-blockquote-footer': CSSRuleObject;
	'hook-pre': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<BaseHooks>;
	theme: PluginUtils['theme'];
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: BaseHooks = {
		'hook-body': {},
		'hook-link': {},
		'hook-link-hover': {},
		'hook-code': {},
		'hook-heading': {},
		'hook-h1': {},
		'hook-h2': {},
		'hook-h3': {},
		'hook-h4': {},
		'hook-h5': {},
		'hook-h6': {},
		'hook-hr': {},
		'hook-blockquote': {},
		'hook-blockquote-footer': {},
		'hook-pre': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		html: {
			..._hooks['hook-body']
		},
		'a, .uk-link': {
			..._hooks['hook-link']
		},
		'a:hover, .uk-link:hover, .uk-link-toggle:hover .uk-link': {
			..._hooks['hook-link-hover']
		},
		':not(pre) > code, :not(pre) > kbd, :not(pre) > samp': {
			..._hooks['hook-code']
		},
		'h1, .uk-h1, h2, .uk-h2, h3, .uk-h3, h4, .uk-h4, h5, .uk-h5, h6, .uk-h6, .uk-heading-small, .uk-heading-medium, .uk-heading-large, .uk-heading-xlarge, .uk-heading-2xlarge, .uk-heading-3xlarge':
			{
				..._hooks['hook-heading']
			},
		'h1, .uk-h1': {
			..._hooks['hook-h1']
		},
		'h2, .uk-h2': {
			..._hooks['hook-h2']
		},
		'h3, .uk-h3': {
			..._hooks['hook-h3']
		},
		'h4, .uk-h4': {
			..._hooks['hook-h4']
		},
		'h5, .uk-h5': {
			..._hooks['hook-h5']
		},
		'h6, .uk-h6': {
			..._hooks['hook-h6']
		},
		'hr, .uk-hr': {
			..._hooks['hook-hr']
		},
		blockquote: {
			..._hooks['hook-blockquote']
		},
		'blockquote footer': {
			..._hooks['hook-blockquote-footer']
		},
		pre: {
			..._hooks['hook-pre']
		},
		..._hooks['hook-misc']
	};
};
