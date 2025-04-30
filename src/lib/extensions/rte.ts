import type { Context } from '../types.js';

export default (context: Context): Context => {
	context.components['rte'] = {
		'.tiptap p.is-editor-empty:first-child::before': {
			content: 'attr(data-placeholder)',
			pointerEvents: 'none',
			cssFloat: 'left',
			height: '0px',
			color: 'hsl(var(--muted-foreground))'
		},
		'.ProseMirror': {
			overflow: 'auto',
			borderWidth: '1px',
			borderColor: 'hsl(var(--input))',
			backgroundColor: 'transparent',
			padding: '0.5rem',
			color: 'hsl(var(--foreground))'
		},
		'.ProseMirror p:first-child': { marginTop: '0px' },
		'.ProseMirror p:last-child': { marginBottom: '0px' },
		'.ProseMirror-focused': {
			outlineWidth: 'var(--uk-form-focus-outline-width, 0)',
			outlineStyle: 'var(--uk-form-focus-outline-style, none)',
			outlineOffset: 'var(--uk-form-focus-outline-offset, 0px)',
			boxShadow:
				'var(--uk-form-focus-shadow, 0 0 0 0 transparent, 0 0 0 1px hsl(var(--ring)), 0 0 #0000)'
		},
		'.uk-rte': {
			boxShadow: 'var(--uk-global-shadow)',
			borderRadius: 'var(--uk-global-radius)'
		},
		'.uk-rte-header': {
			borderTopLeftRadius: 'var(--uk-global-radius)',
			borderTopRightRadius: 'var(--uk-global-radius)',
			display: 'flex',
			flexWrap: 'nowrap',
			overflow: 'hidden',
			borderWidth: '1px',
			borderBottomWidth: '0px',
			borderColor: 'hsl(var(--border))',
			padding: '0.5rem'
		},
		'.uk-rte-toolbar': {
			marginBottom: '-2.5rem',
			display: 'flex',
			width: '100%',
			columnGap: '0.75rem',
			overflowX: 'scroll',
			paddingBottom: '2.5rem'
		},
		'.uk-rte-toolbar-group': { display: 'flex', gap: '0.25rem' },
		'.uk-rte-toolbar-group button.uk-active': {
			backgroundColor: 'hsl(var(--muted))',
			color: 'hsl(var(--muted-foreground))'
		},
		'.uk-rte-toolbar-group a': { cursor: 'pointer' },
		'.uk-rte-footer': {
			borderBottomRightRadius: 'var(--uk-global-radius)',
			borderBottomLeftRadius: 'var(--uk-global-radius)',
			borderWidth: '1px',
			borderTopWidth: '0px',
			borderColor: 'hsl(var(--border))',
			padding: '0.5rem',
			fontSize: '0.75rem',
			lineHeight: '1rem'
		},
		'.uk-rte-link-close': {
			position: 'absolute',
			right: '0.5rem',
			top: '0.5rem'
		}
	};

	return context;
};
