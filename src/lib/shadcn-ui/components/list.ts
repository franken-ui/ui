import type { OptionsType } from '$lib/shadcn-ui/preset-types.js';
import hexes from '../hexes.js';

export default function (options: OptionsType = {}) {
	const scheme = hexes[options.theme || 'zinc'];

	return {
		'hook-misc': {
			'.uk-list-disc > li:not(:first-child), .uk-list-circle > li:not(:first-child), .uk-list-square > li:not(:first-child), .uk-list-decimal > li:not(:first-child), .uk-list-hyphen > li:not(:first-child)':
				{
					'@apply mt-2': {}
				},
			'.uk-list > :nth-child(n + 2), .uk-list > * > ul': { marginTop: null },
			'.uk-list-disc > *, .uk-list-circle > *, .uk-list-square > *, .uk-list-decimal > *, .uk-list-hyphen > *':
				{
					paddingLeft: null,
					'@apply ml-6': {}
				},
			'.uk-list-muted > ::before': { color: null },
			'.uk-list-emphasis > ::before': { color: null },
			'.uk-list-primary > ::before': { color: null },
			'.uk-list-secondary > ::before': { color: null },
			'.uk-list-bullet > *': {
				paddingLeft: null,
				'@apply ml-6': {}
			},
			'.uk-list-bullet > li:not(:first-child)': {
				'@apply mt-2': {}
			},
			'.uk-list-bullet > ::before': {
				left: null,
				width: null,
				backgroundImage: `url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22${encodeURIComponent(scheme.light.foreground)}%22%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%20%2F%3E%0A%3C%2Fsvg%3E')`,
				'@apply -left-6 w-6': {}
			},
			'.dark .uk-list-bullet > ::before': {
				backgroundImage: `url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22${encodeURIComponent(scheme.dark.foreground)}%22%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%20%2F%3E%0A%3C%2Fsvg%3E')`
			},
			'.uk-list-divider > :nth-child(n + 2)': {
				marginTop: null,
				paddingTop: null,
				borderTop: null,
				'@apply mt-2 border-t border-border pt-2': {}
			},
			'.uk-list-striped > *': {
				padding: null,
				'@apply p-2': {}
			},
			'.uk-list-striped > *:nth-of-type(odd)': {
				borderTop: null,
				borderBottom: null,
				'@apply border-t border-b border-border': {}
			},
			'.uk-list-striped > :nth-of-type(odd)': {
				backgroundColor: null,
				'@apply bg-muted/50': {}
			},
			'.uk-list-striped > :nth-child(n + 2)': {
				marginTop: null
			},
			'.uk-list-large > :nth-child(n + 2), .uk-list-large > * > ul': null,
			'.uk-list-collapse > :nth-child(n + 2), .uk-list-collapse > * > ul': null,
			'.uk-list-large.uk-list-divider > :nth-child(n + 2)': null,
			'.uk-list-collapse.uk-list-divider > :nth-child(n + 2)': null,
			'.uk-list-large.uk-list-striped > *': null,
			'.uk-list-collapse.uk-list-striped > *': null,
			'.uk-list-large.uk-list-striped > :nth-child(n + 2), .uk-list-collapse.uk-list-striped > :nth-child(n + 2)':
				null
		}
	};
}
