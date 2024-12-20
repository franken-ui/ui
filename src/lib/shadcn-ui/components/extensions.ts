export default {
	'.uk-close': {
		'@apply focus-visible:outline-dotted focus-visible:outline-ring': {}
	},
	'.uk-kbd': {
		borderRadius: 'var(--uk-global-radius)',
		'@apply pointer-events-none inline-flex select-none items-center border border-border bg-muted px-1.5 font-mono text-[0.8rem] font-medium text-muted-foreground':
			{}
	},
	'.uk-hr': {
		'@apply border-border': {}
	},
	'.uk-tag': {
		borderRadius: 'var(--uk-global-radius-s)',
		fontSize: 'var(--uk-global-font-size-s)',
		lineHeight: 'var(--uk-global-line-height-s)',
		'@apply inline-flex min-h-7 items-center gap-2 px-2 py-1': {}
	},
	'.uk-tag-primary': {
		'@apply bg-primary text-primary-foreground hover:bg-primary/80': {}
	},
	'.uk-tag-secondary': {
		'@apply bg-secondary text-secondary-foreground hover:bg-secondary/80': {}
	},
	'.uk-tag-destructive': {
		'@apply bg-destructive text-destructive-foreground hover:bg-destructive/80': {}
	},
	'.tiptap': {
		minHeight: '82.4px'
	},
	'.tiptap p.is-editor-empty:first-child::before': {
		content: 'attr(data-placeholder)',
		'@apply text-muted-foreground pointer-events-none float-left h-0': {}
	},
	'.ProseMirror': {
		'@apply border-input text-foreground overflow-auto border bg-transparent p-2': {}
	},
	'.ProseMirror p:first-child': {
		'@apply mt-0': {}
	},
	'.ProseMirror p:last-child': {
		'@apply mb-0': {}
	},
	'.ProseMirror-focused': {
		'@apply ring-ring outline-none ring-1': {}
	},
	'.uk-tiptap-header': {
		'@apply border-border flex flex-nowrap overflow-hidden rounded-t-md border border-b-0 p-2': {}
	},
	'.uk-tiptap-toolbar': {
		'@apply -mb-10 flex w-full gap-x-3 overflow-x-scroll pb-10': {}
	},
	'.uk-tiptap-toolbar-group': {
		'@apply flex gap-1': {}
	},
	'.uk-tiptap-toolbar-group button': {
		// '@apply uk-icon-button uk-icon-button-xs': {}
	},
	'.uk-tiptap-toolbar-group button.uk-active': {
		'@apply bg-muted text-muted-foreground': {}
	},
	'.uk-tiptap-toolbar-group a': {
		'@apply cursor-pointer': {}
	},
	'.uk-tiptap-footer': {
		boxShadow: 'var(--uk-global-shadow-s)',
		'@apply border-border rounded-b-md border border-t-0 p-2 text-xs': {}
	}
};
