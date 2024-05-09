import type { OptionsType } from '$lib/shadcn-ui/preset-types.js';
import hexes from '../hexes.js';

export default function (options: OptionsType = {}) {
	const scheme = hexes[options.theme || 'zinc'];

	return {
		'hook-icon-line': {
			borderBottom: '1px solid',
			'@apply border-border': {}
		},
		'hook-small': {
			borderBottom: '1px solid',
			'@apply border-border': {}
		},
		'hook-vertical': {
			borderBottom: '1px solid',
			'@apply border-border': {}
		},
		'hook-misc': {
			'.uk-divider-icon': {
				backgroundImage: `url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22none%22%20stroke%3D%22${encodeURIComponent(scheme.light.border)}%22%20stroke-width%3D%222%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%227%22%20%2F%3E%0A%3C%2Fsvg%3E%0A')`
			},
			'.dark .uk-divider-icon': {
				backgroundImage: `url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22none%22%20stroke%3D%22${encodeURIComponent(scheme.dark.border)}%22%20stroke-width%3D%222%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%227%22%20%2F%3E%0A%3C%2Fsvg%3E%0A')`
			},
			"[class*='uk-divider']": {
				marginBottom: null
			},
			"* + [class*='uk-divider']": {
				marginTop: null
			}
		}
	};
}
