export default {
	"[class*='uk-column-']": { columnGap: '30px' },
	'.uk-column-span': { columnSpan: 'all' },
	"[class*='uk-column-'] img": { transform: 'translate3d(0, 0, 0)' },
	'.uk-column-divider': {
		columnRule: '1px solid',
		columnRuleColor: 'hsl(var(--border))',
		columnGap: '60px'
	},
	'.uk-column-1-2': { columnCount: '2' },
	'.uk-column-1-3': { columnCount: '3' },
	'.uk-column-1-4': { columnCount: '4' },
	'.uk-column-1-5': { columnCount: '5' },
	'.uk-column-1-6': { columnCount: '6' }
};
