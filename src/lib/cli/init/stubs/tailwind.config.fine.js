import preset from 'franken-ui/shadcn-ui/preset';
import variables from 'franken-ui/shadcn-ui/variables';
import ui from 'franken-ui';
import hooks from 'franken-ui/shadcn-ui/hooks';

const shadcn = hooks({
	theme: 'zinc'
});

/** @type {import('tailwindcss').Config} */
export default {
	presets: [preset],
	content: [],
	safelist: [
		{
			pattern: /^uk-/
		}
	],
	theme: {
		extend: {}
	},
	plugins: [
		variables({
			theme: 'zinc'
		}),
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
					hooks: shadcn.stepper,
					media: true
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
			}
		})
	]
};
