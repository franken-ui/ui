import type { OptionsType } from '$lib/shadcn-ui/preset-types.js';
import hexes from '../hexes.js';

export default function (options: OptionsType = {}) {
	const scheme = hexes[options.theme || 'zinc'];

	return {
		'hook-misc': {
			'.uk-list-muted > ::before': { color: null },
			'.uk-list-emphasis > ::before': { color: null },
			'.uk-list-primary > ::before': { color: null },
			'.uk-list-secondary > ::before': { color: null },
			'.uk-list-bullet > ::before': {
				backgroundImage: `url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22${encodeURIComponent(scheme.light.foreground)}%22%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%20%2F%3E%0A%3C%2Fsvg%3E')`
			},
			'.dark .uk-list-bullet > ::before': {
				backgroundImage: `url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22${encodeURIComponent(scheme.dark.foreground)}%22%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%20%2F%3E%0A%3C%2Fsvg%3E')`
			},
			'.uk-list-divider > :nth-child(n + 2)': {
				borderTop: '1px solid'
			},
			'.uk-list-striped > *:nth-of-type(odd)': {
				borderTop: '1px solid',
				borderBottom: '1px solid'
			}
		}
	};
}
