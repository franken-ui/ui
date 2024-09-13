import { existsSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { parseArgs } from '$lib/cli/helpers/common.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const extensions = ['js', 'cjs', 'ts'];

function copy(stub: string, filename: string) {
	copyFileSync(join(__dirname, 'stubs', stub), join(process.cwd(), filename));

	console.log('Created config file:', filename);
}

export default function (args: string[]) {
	const map: { [key: string]: string } = { p: '--postcss', f: '--force' };
	const safelist = ['-p', '--postcss', '-f', '--force'];

	args = parseArgs(args, safelist, map);

	if (extensions.some((extension) => existsSync(`tailwind.config.${extension}`))) {
		console.error('tailwind.config.js already exists');
	} else {
		(() => {
			copy('tailwind.config.js', 'tailwind.config.js');
		})();
	}

	if (args.includes('--postcss')) {
		if (extensions.some((extension) => existsSync(`postcss.config.${extension}`))) {
			console.error('postcss.config.js already exists');
			return;
		}

		copy('postcss.config.cjs', 'postcss.config.cjs');
	}
}
