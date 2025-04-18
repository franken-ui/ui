import type { ResolvedConfig } from 'vite';
import fs, { readFileSync } from 'fs';
import path from 'path';
import merge from 'lodash/merge.js';
import { fileURLToPath } from 'url';
import { preflight } from './components/index.js';
import { theme, base, palettes, components } from './context.js';
import postcssJs from 'postcss-js';
import postcss from 'postcss';
import type { Context, CSSRuleObject, Options } from './types.js';
import merger from './merger.js';

function css(rules: { [key: string]: any }): string {
	const processor = postcss([]);

	return processor.process(rules, { parser: postcssJs.parse }).css;
}

export default function customPalettePlugin(options: Options): any {
	let config: ResolvedConfig;

	return {
		name: 'vite-plugin-franken',
		configResolved(resolvedConfig: ResolvedConfig) {
			config = resolvedConfig;

			try {
				const pkgJson = JSON.parse(readFileSync('package.json', 'utf-8'));

				const tailwindVersion =
					pkgJson.dependencies?.tailwindcss || pkgJson.devDependencies?.tailwindcss;

				if (tailwindVersion?.startsWith('^4.') && options?.preflight) {
					console.warn(
						'\n[@franken-ui/ui] Warning: Tailwind CSS v4 detected in your project.' +
							'\nYou may want to disable preflight in Franken UI since Tailwind v4' +
							'\nalready includes modern CSS reset styles.\n'
					);
				}
			} catch (error) {}
		},
		buildStart() {
			let rules = options?.preflight ? { ...preflight } : {};

			let context: Context = {
				theme,
				base,
				palettes: palettes(options),
				components
			};

			if (options.extensions) {
				for (const [plugin, config] of options.extensions) {
					context = plugin(context, config);
				}
			}

			let defaults: CSSRuleObject = {};

			if (options.layer) {
				defaults['@layer theme'] = theme;
				defaults['@layer base'] = base;
			} else {
				defaults = { ...theme, ...base };
			}

			// merged rules of palettes and components
			const r: CSSRuleObject = merger({
				palettes: context.palettes,
				components: context.components,
				layer: options.layer
			});

			rules = merge(rules, defaults, r);

			const __dirname = path.dirname(fileURLToPath(import.meta.url));
			const outputPath = path.join(__dirname, '/css/franken-ui.css');

			fs.mkdirSync(path.dirname(outputPath), { recursive: true });
			fs.writeFileSync(outputPath, css(rules));
		}
	};
}
