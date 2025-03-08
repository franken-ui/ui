import type { ResolvedConfig } from 'vite';
import fs, { readFileSync } from 'fs';
import path from 'path';
import merge from 'lodash/merge.js';
import { fileURLToPath } from 'url';
import { preflight, root } from './components/index.js';
import { type Options } from './index.js';
import { defaults, palettes, components } from './rules.js';
import postcssJs from 'postcss-js';
import postcss from 'postcss';

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

			rules = merge(rules, root, defaults, palettes(options), components);

			const __dirname = path.dirname(fileURLToPath(import.meta.url));
			const outputPath = path.join(__dirname, '/css/franken-ui.css');

			fs.mkdirSync(path.dirname(outputPath), { recursive: true });
			fs.writeFileSync(outputPath, css(rules));
		}
	};
}
