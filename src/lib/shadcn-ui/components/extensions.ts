export default {
	'.uk-kbd': {
		'@apply pointer-events-none inline-flex select-none items-center rounded border border-border bg-muted px-1.5 font-mono text-[0.8rem] font-medium text-muted-foreground':
			{}
	},
	'.uk-hr': {
		'@apply border-border': {}
	},
	'.uk-input-tag': {
		'@apply border-input bg-background has-[input:focus]:ring-ring flex min-h-9 flex-wrap items-center gap-1 rounded-md border p-2 has-[input:focus]:ring-1':
			{}
	},
	'.uk-input-tag.uk-disabled': {
		'@apply opacity-50': {}
	},
	'.uk-input-tag input': {
		'@apply placeholder-muted-foreground text-foreground min-h-7 flex-1 bg-transparent px-1 text-sm focus:outline-none':
			{}
	},
	'.uk-input-tag.uk-form-danger': {
		'@apply has-[input:focus]:ring-destructive': {}
	},
	'.uk-tag': {
		'@apply inline-flex min-h-7 items-center gap-2 rounded px-2 py-1 text-sm': {}
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
	'.uk-input-pin': {
		'@apply inline-flex items-center shadow-sm': {}
	},
	'.uk-input-pin input': {
		'@apply relative -mr-[1px] flex h-9 w-9 border border-input bg-transparent text-center text-sm placeholder-muted-foreground focus:z-10 focus:outline-none focus:ring-1 focus:ring-ring':
			{}
	},
	'.uk-input-pin.uk-form-danger input': {
		'@apply ring-destructive': {}
	},
	'.uk-input-pin input:focus': {
		'@apply placeholder:text-background': {}
	},
	'.uk-input-pin.uk-disabled input, .uk-input-pin input:disabled': {
		'@apply opacity-50': {}
	},
	'.uk-input-pin input:first-child': {
		'@apply ml-[1px] rounded-l-md': {}
	},
	'.uk-input-pin input:last-child': {
		'@apply rounded-r-md': {}
	},
	'.uk-input-pin.uk-input-pin-separated': {
		'@apply gap-2 shadow-none': {}
	},
	'.uk-input-pin.uk-input-pin-separated input': {
		'@apply -mr-0 rounded-md shadow-sm': {}
	},
	'.uk-input-pin.uk-input-pin-separated input:first-child': {
		'@apply ml-0': {}
	},
	'.uk-custom-select': {
		'@apply relative': {}
	},
	'.uk-custom-select .uk-dropdown': {
		'@apply mt-1 w-full': {}
	},
	'.uk-custom-select .uk-dropdown-nav': {
		'@apply max-h-[160px] overflow-auto': {}
	},
	'.uk-custom-select .uk-dropdown-nav a': {
		'@apply flex cursor-pointer items-center justify-between': {}
	},
	'.uk-custom-select-search': {
		'@apply flex items-center px-3': {}
	},
	'.uk-custom-select-search svg': {
		'@apply mr-2 opacity-50': {}
	},
	'.uk-custom-select-search input': {
		'@apply placeholder-muted-foreground w-full bg-transparent py-3 text-sm focus:outline-none': {}
	},
	'.uk-input-fake': {
		'@apply border-input text-foreground flex h-9 w-full items-center rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm':
			{}
	},
	'.uk-input-fake-focus, .uk-input-fake:focus': {
		'@apply ring-ring outline-none ring-1': {}
	},
	'.uk-input-fake-focus.uk-form-danger, .uk-input-fake.uk-form-danger:focus': {
		'@apply ring-destructive': {}
	},
	'.uk-input-fake-disabled, .uk-input-fake:disabled': {
		'@apply opacity-50': {}
	},
	'.uk-input-fake.uk-form-small': {
		'@apply h-7 text-xs': {}
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
		'@apply uk-icon-button uk-icon-button-xsmall': {}
	},
	'.uk-tiptap-toolbar-group button.uk-active': {
		'@apply bg-muted text-muted-foreground': {}
	},
	'.uk-tiptap-toolbar-group a': {
		'@apply cursor-pointer': {}
	},
	'.uk-tiptap-footer': {
		'@apply border-border rounded-b-md border border-t-0 p-2 text-xs shadow-sm': {}
	},
	'.uk-theme-switcher-options': {
		'@apply mt-1.5 grid grid-cols-3 gap-4': {}
	},
	'.uk-theme-switcher button': {
		'@apply focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-8 items-center justify-start rounded-md border px-3 text-xs font-medium shadow-sm focus-visible:outline-none focus-visible:ring-1':
			{}
	},
	'.uk-theme-switcher button.uk-active': {
		'@apply border-primary border-2': {}
	},
	'.uk-theme-switcher .circle': {
		'@apply mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full text-white':
			{}
	}
};
