import fs, { readFileSync } from 'fs';
import path from 'path';
import merge from 'lodash/merge.js';
import { fileURLToPath } from 'url';
import { preflight } from './components/index.js';
import { defaults, palettes, components } from './context.js';
import postcssJs from 'postcss-js';
import postcss from 'postcss';
import merger from './merger.js';
function css(rules) {
    const processor = postcss([]);
    return processor.process(rules, { parser: postcssJs.parse }).css;
}
export default function customPalettePlugin(options) {
    let config;
    return {
        name: 'vite-plugin-franken',
        configResolved(resolvedConfig) {
            config = resolvedConfig;
            try {
                const pkgJson = JSON.parse(readFileSync('package.json', 'utf-8'));
                const tailwindVersion = pkgJson.dependencies?.tailwindcss || pkgJson.devDependencies?.tailwindcss;
                if (tailwindVersion?.startsWith('^4.') && options?.preflight) {
                    console.warn('\n[@franken-ui/ui] Warning: Tailwind CSS v4 detected in your project.' +
                        '\nYou may want to disable preflight in Franken UI since Tailwind v4' +
                        '\nalready includes modern CSS reset styles.\n');
                }
            }
            catch (error) { }
        },
        buildStart() {
            let rules = options?.preflight ? { ...preflight } : {};
            let context = {
                defaults,
                palettes: palettes(options),
                components
            };
            if (options.extensions) {
                for (const [plugin, config] of options.extensions) {
                    context = plugin(context, config);
                }
            }
            // merged rules of palettes and components
            const r = merger({
                palettes: context.palettes,
                components: context.components
            });
            rules = merge(rules, context.defaults, r);
            const __dirname = path.dirname(fileURLToPath(import.meta.url));
            const outputPath = path.join(__dirname, '/css/franken-ui.css');
            fs.mkdirSync(path.dirname(outputPath), { recursive: true });
            fs.writeFileSync(outputPath, css(rules));
        }
    };
}
