export default {
	'.uk-close': {
		'@apply focus-visible:outline-dotted focus-visible:outline-ring': {}
	},
	'.uk-radii-none': {
		'--uk-border-radius-s': '0',
		'--uk-border-radius': '0'
	},
	'.uk-radii-sm': {
		'--uk-border-radius-s': '0.25rem',
		'--uk-border-radius': '0.125rem'
	},
	'.uk-radii-lg': {
		'--uk-border-radius-s': '0.375rem',
		'--uk-border-radius': '0.5rem'
	},
	'.uk-shadows-none': {
		'--uk-box-shadow-s': '0 0 0 0',
		'--uk-box-shadow': '0 0 0 0'
	},
	'.uk-shadows-md': {
		'--uk-box-shadow-s': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
		'--uk-box-shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
	},
	'.uk-shadows-lg': {
		'--uk-box-shadow-s': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
		'--uk-box-shadow': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
	},
	'.uk-kbd': {
		borderRadius: 'var(--uk-border-radius)',
		'@apply pointer-events-none inline-flex select-none items-center border border-border bg-muted px-1.5 font-mono text-[0.8rem] font-medium text-muted-foreground':
			{}
	},
	'.uk-hr': {
		'@apply border-border': {}
	},
	'.uk-tag': {
		borderRadius: 'var(--uk-border-radius-s)',
		'@apply inline-flex min-h-7 items-center gap-2 px-2 py-1 text-sm': {}
	},
	'.uk-tag-primary': {
		'@apply bg-primary text-primary-foreground hover:bg-primary/80': {}
	},
	'.uk-tag-secondary': {
		'@apply bg-secondary text-secondary-foreground hover:bg-secondary/80': {}
	},
	'.uk-tag-danger': {
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
		boxShadow: 'var(--uk-box-shadow-s)',
		'@apply border-border rounded-b-md border border-t-0 p-2 text-xs': {}
	}
};
