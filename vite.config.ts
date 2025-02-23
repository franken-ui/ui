import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
import franken from './src/lib/plugin-vite.js';

export default defineConfig({
	plugins: [
		sveltekit(),
		franken({
			preflight: true
		})
	],
	resolve: {
		alias: {
			'uikit-util': path.resolve(__dirname, 'src/lib/uikit/js/util/index.js')
		}
	}
});
