module.exports = {
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		require('postcss-sort-media-queries')({
			sort: 'mobile-first'
		}),
		require('postcss-combine-duplicated-selectors')({
			removeDuplicatedProperties: true
		})
	]
};
