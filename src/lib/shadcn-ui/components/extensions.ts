import type { OptionsType } from '$lib/shadcn-ui/preset-types.js';
// import { variables } from '../variables.js';
// import hexes from '../hexes.js';

export default function (options: OptionsType) {
	// let root = variables[`.theme-${options.theme || 'zinc'}`];
	// let dark = variables[`.dark .theme-${options.theme || 'zinc'}`];

	// if (options.palette && options.palette[':root'] && options.palette['.dark']) {
	// 	root = options.palette[':root'];
	// 	dark = options.palette['.dark'];
	// }

	// const scheme = hexes({
	// 	':root': root,
	// 	'.dark': dark
	// });

	return {
		'hook-misc': {}
	};
}
