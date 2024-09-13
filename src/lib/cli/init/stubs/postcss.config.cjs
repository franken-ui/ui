module.exports = {
	plugins: [
		require('tailwindcss'),
		require('franken-ui/postcss/sort-media-queries')({
			sort: 'mobile-first'
		}),
		require('franken-ui/postcss/combine-duplicated-selectors')({
			removeDuplicatedProperties: true
		})
	]
};
