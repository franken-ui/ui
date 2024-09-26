export default {
	'.uk-pgn': { '@apply flex flex-wrap items-center gap-1': {} },
	'.uk-pgn > *': { '@apply relative flex-none': {} },
	'.uk-pgn > * > *': { '@apply uk-btn': {} },
	'.uk-pgn > .uk-active > *': { '@apply opacity-80': {} },
	'.uk-pgn > .uk-disabled > *': { '@apply opacity-50': {} },
	'.uk-pgn.uk-pgn-numbered > * > *': {
		'@apply aspect-square p-0': {}
	},
	'.uk-pgn-xs > * > *': { '@apply uk-btn-xs': {} },
	'.uk-pgn-sm > * > *': { '@apply uk-btn-sm': {} },
	'.uk-pgn-lg > * > *': { '@apply uk-btn-lg': {} },
	'.uk-pgn-xl > * > *': { '@apply uk-btn-xl': {} },
	'.uk-pgn-default > * > *': { '@apply uk-btn-default': {} },
	'.uk-pgn-primary > * > *': { '@apply uk-btn-primary': {} },
	'.uk-pgn-secondary > * > *': { '@apply uk-btn-secondary': {} },
	'.uk-pgn-ghost > * > *': { '@apply uk-btn-ghost': {} },
	'.uk-pgn-danger > * > *': { '@apply uk-btn-danger': {} }
};
