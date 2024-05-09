import defaultTheme from 'tailwindcss/defaultTheme.js';
import variables from './variables.js';
import hooks from './hooks.js';
import ui from '../index.js';
import type { OptionsType } from '$lib/shadcn-ui/preset-types.js';

export default function (options: OptionsType = {}) {
	const shadcn = hooks(options);

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
		safelist: [
			{
				pattern: /^uk-/
			}
		],
		plugins: [
			variables(options),
			ui({
				components: {
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
						hooks: shadcn.dropbar
					},
					dropdown: {
						hooks: shadcn.dropdown
					},
					dropnav: {},
					flex: {},
					'form-range': {
						hooks: shadcn['form-range']
					},
					form: {
						hooks: shadcn.form
					},
					grid: {
						hooks: shadcn.grid,
						media: true
					},
					heading: {
						hooks: shadcn.heading
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
					lightbox: {
						hooks: shadcn.lightbox
					},
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
						hooks: shadcn.modal
					},
					nav: {
						hooks: shadcn.nav
					},
					navbar: {
						hooks: shadcn.navbar,
						media: false
					},
					notification: {
						hooks: shadcn.notification,
						media: true
					},
					offcanvas: {
						media: true
					},
					overlay: {},
					padding: {
						media: true
					},
					pagination: {
						hooks: shadcn.pagination
					},
					placeholder: {},
					position: {
						media: true
					},
					progress: {},
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
						hooks: shadcn.table
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
				}
			})
		]
	};
}
