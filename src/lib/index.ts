import merge from 'lodash/merge.js';
import plugin from 'tailwindcss/plugin.js';
import type { OptionsType } from './components/index.js';
import { components } from './components/index.js';
import { rules as baseRules, media as baseMedia, addHooks } from './components/base.js';

export default plugin.withOptions((options: OptionsType = {}) => {
	return async ({ addBase, addComponents, theme }) => {
		addBase({
			':root': {
				'--uk-breakpoint-s': '640px',
				'--uk-breakpoint-m': '768px',
				'--uk-breakpoint-l': '1024px',
				'--uk-breakpoint-xl': '1080px',
				'--uk-leader-fill-content': '.',
				'--uk-position-margin-offset': '0px'
			}
		});

		if (options.base) {
			addBase(baseMedia);

			if (options.hooks) {
				addBase(Object.assign(baseRules, addHooks({ hooks: options.hooks, theme })));
			} else {
				addBase(baseRules);
			}
		}

		const media = [];

		for (const a in options.components) {
			const component = components[a];

			if (options.components[a].media === true && component.media) {
				media.push(component.media);
			}
		}

		const rules = {};

		Object.assign(
			rules,
			media.reduce((a, b) => {
				return merge(a, b);
			}, {})
		);

		for (const a in options.components) {
			const component = components[a];

			if (component.addHooks) {
				Object.assign(
					rules,
					merge(
						component.rules,
						component.addHooks({
							hooks: options.components[a].hooks,
							theme
						})
					)
				);
			} else {
				Object.assign(rules, component.rules);
			}
		}

		addComponents(rules);
	};
});
