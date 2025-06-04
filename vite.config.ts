import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
import franken from './src/lib/plugin-vite.js';
import chart from './src/lib/extensions/chart.js';
import rte from './src/lib/extensions/rte.js';

export default defineConfig({
	plugins: [
		sveltekit(),
		franken({
			preflight: true,
			layer: true,
			layerExceptions: ['chart'],
			extensions: [
				[chart, {}],
				[rte, {}]
			]
		})
	],
	resolve: {
		alias: {
			'uikit-util': path.resolve(__dirname, 'src/lib/uikit/js/util/index.js')
		}
	}
});
