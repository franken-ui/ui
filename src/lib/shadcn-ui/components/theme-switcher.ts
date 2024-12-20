export default {
	'.uk-ts': { '@apply flex flex-1 flex-col space-y-4': {} },
	'.uk-ts-key': { '@apply space-y-2': {} },
	'.uk-ts-value': { '@apply grid grid-cols-3 gap-2': {} },
	'.uk-ts-value button': {
		borderRadius: 'var(--uk-global-radius)',
		boxShadow: 'var(--uk-global-shadow-s)',
		fontSize: 'var(--uk-global-font-size-s)',
		lineHeight: 'var(--uk-global-line-height-s)',
		'@apply focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-8 items-center justify-start border px-3 font-medium focus-visible:outline-dotted focus-visible:ring-1':
			{}
	},
	'.uk-ts-value button.uk-active': {
		'@apply border-primary ring-primary ring-1': {}
	},
	'.uk-ts-hex': {
		'@apply flex h-4 w-4 shrink-0 -translate-x-1 items-center justify-center rounded-full text-white':
			{}
	},
	'.uk-ts-text:not(:first-child)': { '@apply ml-2': {} }
};
