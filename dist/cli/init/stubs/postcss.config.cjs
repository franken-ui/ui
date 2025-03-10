module.exports = {
	plugins: [
		require('tailwindcss'),
		require('franken-ui/postcss/combine-duplicated-selectors')({
			removeDuplicatedProperties: true
		})
	]
};
