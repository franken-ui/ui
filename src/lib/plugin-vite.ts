import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';
import convertToHexPalette from './palette.js';
import type { Options } from './index.js';
import { fileURLToPath } from 'url';

function generateCss(palette: { [key: string]: { [key: string]: string } }): string {
	let css = '';

	for (const [theme, colors] of Object.entries(palette)) {
		css += `${theme} {\n`;
		for (const [colorKey, colorValue] of Object.entries(colors)) {
			css += `  ${colorKey}: ${colorValue};\n`;
		}
		css += `}\n`;
	}

	return css;
}

export default function customPalettePlugin(options: Options): Plugin {
	return {
		name: 'vite-plugin-custom-palette',
		apply: 'serve',
		buildStart() {
			if (options?.customPalette) {
				const palette = convertToHexPalette(options.customPalette);
				const css = generateCss(palette);
				const __dirname = path.dirname(fileURLToPath(import.meta.url));
				const outputPath = path.join(__dirname, '/css/custom-palette.css');

				fs.mkdirSync(path.dirname(outputPath), { recursive: true });
				fs.writeFileSync(outputPath, css);
			}
		}
	};
}
