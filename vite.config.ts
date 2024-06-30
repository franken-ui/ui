import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'uikit-util': path.resolve(__dirname, 'src/lib/uikit/js/util')
		}
	}
});
