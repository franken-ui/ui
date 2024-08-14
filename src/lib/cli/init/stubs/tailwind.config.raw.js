import ui from 'franken-ui';

/** @type {import('tailwindcss').Config} */
export default {
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
		ui({
			base: true,
			components: {
				accordion: {},
				alert: {},
				align: {
					media: true
				},
				animation: {},
				article: {
					media: true
				},
				background: {
					media: true
				},
				badge: {},
				breadcrumb: {},
				button: {},
				card: {
					media: true
				},
				close: {},
				column: {
					media: true
				},
				combobox: {},
				comment: {
					media: true
				},
				container: {
					media: true
				},
				countdown: {
					media: true
				},
				cover: {},
				'description-list': {},
				divider: {},
				dotnav: {},
				drop: {},
				dropbar: {
					media: true
				},
				dropdown: {
					media: true
				},
				dropnav: {},
				extensions: {
					media: true
				},
				flex: {
					media: true
				},
				'form-range': {},
				form: {
					media: true
				},
				grid: {
					media: true
				},
				heading: {
					media: true
				},
				height: {},
				icon: {},
				iconnav: {},
				label: {},
				leader: {},
				lightbox: {},
				link: {},
				list: {},
				margin: {
					media: true
				},
				marker: {},
				modal: {
					media: true
				},
				nav: {},
				navbar: {
					media: true
				},
				notification: {},
				offcanvas: {
					media: true
				},
				overlay: {},
				padding: {
					media: true
				},
				pagination: {},
				placeholder: {},
				position: {
					media: true
				},
				progress: {},
				search: {},
				section: {
					media: true
				},
				slidenav: {},
				slider: {},
				slideshow: {},
				sortable: {},
				spinner: {},
				stepper: {},
				sticky: {},
				subnav: {},
				svg: {},
				switcher: {},
				tab: {},
				table: {
					media: true
				},
				text: {
					media: true
				},
				thumbnav: {},
				tile: {
					media: true
				},
				tooltip: {},
				totop: {},
				transition: {},
				utility: {},
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
