import franken from 'franken-ui/shadcn-ui/preset-recommended';

/** @type {import('tailwindcss').Config} */
export default {
	presets: [franken()],
	content: [],
	safelist: [
		{
			pattern: /^uk-/
		}
	],
	theme: {
		extend: {}
	},
	plugins: []
};
