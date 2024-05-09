export default function () {
	return {
		'hook-placeholder': {
			border: '1px dashed',
			'@apply border-border': {}
		},
		'hook-misc': {
			'* + .uk-placeholder': {
				marginTop: null
			}
		}
	};
}
