export default function () {
	return {
		'hook-progress': {
			backgroundColor: null,
			'@apply bg-primary/20': {}
		},
		'hook-bar': {
			backgroundColor: null,
			'@apply bg-primary': {}
		},
		'hook-misc': {
			'* + .uk-progress': {
				marginTop: null
			}
		}
	};
}
