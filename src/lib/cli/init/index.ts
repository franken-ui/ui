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
	const map: { [key: string]: string } = { p: '--postcss', r: '--raw', i: '--fine', f: '--force' };
	const safelist = ['-r', '--raw', '-i', '--fine', '-p', '--postcss', '-f', '--force'];

	args = parseArgs(args, safelist, map);

	if (extensions.some((extension) => existsSync(`tailwind.config.${extension}`))) {
		console.error('tailwind.config.js already exists');
	} else {
		(() => {
			if (args.some((arg) => ['--raw', '--fine'].includes(arg))) {
				if (args.includes('--raw') && args.includes('--fine')) {
					console.error('Choose only one of the two --raw or --fine');

					return;
				} else {
					if (args.includes('--raw')) {
						copy('tailwind.config.raw.js', 'tailwind.config.js');

						return;
					}

					if (args.includes('--fine')) {
						copy('tailwind.config.fine.js', 'tailwind.config.js');

						return;
					}
				}

				return;
			}

			copy('tailwind.config.recommended.js', 'tailwind.config.js');
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
