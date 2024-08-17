import defaultTheme from 'tailwindcss/defaultTheme.js';
import variables from './variables.js';
import hooks from './hooks.js';
import ui from '../index.js';
import type { OptionsType, Components } from '$lib/shadcn-ui/preset-types.js';
import { sortBy, uniq } from 'lodash';

export default function (
	options: OptionsType & {
		only?: Components[];
		except?: Components[];
	} = {}
) {
	const shadcn = hooks(options);
	const components = {
		accordion: {
			hooks: shadcn.accordion
		},
		alert: {
			hooks: shadcn.alert
		},
		align: {
			media: true
		},
		animation: {},
		article: {
			hooks: shadcn.article,
			media: true
		},
		background: {
			hooks: shadcn.background,
			media: true
		},
		badge: {
			hooks: shadcn.badge
		},
		breadcrumb: {
			hooks: shadcn.breadcrumb
		},
		button: {
			hooks: shadcn.button
		},
		card: {
			hooks: shadcn.card
			// media: true
		},
		close: {
			hooks: shadcn.close
		},
		column: {
			hooks: shadcn.column,
			media: true
		},
		comment: {
			hooks: shadcn.comment,
			media: true
		},
		container: {
			media: true
		},
		countdown: {
			media: true
		},
		cover: {},
		'description-list': {
			hooks: shadcn['description-list']
		},
		divider: {
			hooks: shadcn.divider
		},
		dotnav: {
			hooks: shadcn.dotnav
		},
		drop: {},
		dropbar: {
			hooks: shadcn.dropbar,
			media: true
		},
		dropdown: {
			hooks: shadcn.dropdown,
			media: true
		},
		dropnav: {},
		extensions: {
			hooks: shadcn.extensions,
			media: true
		},
		flex: {
			media: true
		},
		'form-range': {
			hooks: shadcn['form-range']
		},
		form: {
			hooks: shadcn.form,
			media: true
		},
		grid: {
			hooks: shadcn.grid,
			media: true
		},
		heading: {
			hooks: shadcn.heading
			// media: true
		},
		height: {},
		icon: {
			hooks: shadcn.icon
		},
		iconnav: {
			hooks: shadcn.iconnav
		},
		label: {
			hooks: shadcn.label
		},
		leader: {},
		lightbox: {},
		link: {
			hooks: shadcn.link
		},
		list: {
			hooks: shadcn.list
		},
		margin: {
			media: true
		},
		marker: {
			hooks: shadcn.marker
		},
		modal: {
			hooks: shadcn.modal,
			media: true
		},
		nav: {
			hooks: shadcn.nav
		},
		navbar: {
			hooks: shadcn.navbar,
			media: true
		},
		notification: {
			hooks: shadcn.notification,
			media: true
		},
		offcanvas: {
			hooks: shadcn.offcanvas,
			media: true
		},
		overlay: {},
		padding: {
			media: true
		},
		pagination: {
			hooks: shadcn.pagination
		},
		placeholder: {
			hooks: shadcn.placeholder
		},
		position: {
			media: true
		},
		progress: {
			hooks: shadcn.progress
		},
		search: {
			hooks: shadcn.search
		},
		section: {
			hooks: shadcn.section,
			media: true
		},
		slidenav: {
			hooks: shadcn.slidenav
		},
		slider: {
			hooks: shadcn.slider
		},
		slideshow: {
			hooks: shadcn.slideshow
		},
		sortable: {},
		spinner: {},
		stepper: {
			media: true,
			hooks: shadcn.stepper
		},
		sticky: {},
		subnav: {
			hooks: shadcn.subnav
		},
		svg: {},
		switcher: {},
		tab: {
			hooks: shadcn.tab
		},
		table: {
			hooks: shadcn.table,
			media: true
		},
		text: {
			hooks: shadcn.text,
			media: true
		},
		thumbnav: {},
		tile: {
			hooks: shadcn.tile,
			media: true
		},
		tooltip: {
			hooks: shadcn.tooltip
		},
		totop: {},
		transition: {},
		utility: {
			hooks: shadcn.utility
		},
		visibility: {
			media: true
		},
		width: {
			media: true
		},
		print: {}
	};

	function filter() {
		if (!options.only && !options.except) {
			return components;
		}

		const result = {};

		if (options.only) {
			const only = options.only;

			only.push('close', 'icon', 'svg');

			if (only.includes('dropbar') || only.includes('dropdown') || only.includes('dropnav')) {
				only.push('drop');
			}

			if (only.includes('form')) {
				only.push('form-range');
			}

			if (only.includes('lightbox')) {
				only.push('text', 'position', 'transition', 'visibility');
			}

			const _only = sortBy(uniq(only));

			Object.keys(components).forEach((key) => {
				if (_only.includes(key)) {
					result[key] = components[key];
				}
			});

			return result;
		}

		if (options.except) {
			Object.keys(components).forEach((key) => {
				if (options.except && !options.except.includes(key)) {
					result[key] = components[key];
				}
			});

			return result;
		}
	}

	return {
		darkMode: 'class',
		theme: {
			extend: {
				colors: {
					background: 'hsl(var(--background))',
					foreground: 'hsl(var(--foreground))',
					muted: 'hsl(var(--muted))',
					'muted-foreground': 'hsl(var(--muted-foreground))',
					card: 'hsl(var(--card))',
					'card-foreground': 'hsl(var(--card-foreground))',
					popover: 'hsl(var(--popover))',
					'popover-foreground': 'hsl(var(--popover-foreground))',
					border: 'hsl(var(--border))',
					input: 'hsl(var(--input))',
					primary: 'hsl(var(--primary))',
					'primary-foreground': 'hsl(var(--primary-foreground))',
					secondary: 'hsl(var(--secondary))',
					'secondary-foreground': 'hsl(var(--secondary-foreground))',
					accent: 'hsl(var(--accent))',
					'accent-foreground': 'hsl(var(--accent-foreground))',
					destructive: 'hsl(var(--destructive))',
					'destructive-foreground': 'hsl(var(--destructive-foreground))',
					ring: 'hsl(var(--ring))'
				},
				fontFamily: {
					'geist-sans': ['Geist Sans', ...defaultTheme.fontFamily.sans],
					'geist-mono': ['Geist Mono', ...defaultTheme.fontFamily.mono]
				}
			}
		},
		plugins: [
			variables(options),
			ui({
				components: filter()
			})
		]
	};
}
