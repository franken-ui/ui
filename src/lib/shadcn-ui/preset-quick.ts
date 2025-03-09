import defaultTheme from 'tailwindcss/defaultTheme.js';
import ui from '../index.js';
import type { Options } from '../types.js';

export default function (options: Options = {}) {
	return {
		darkMode: 'class',
		theme: {
			extend: {
				colors: {
					background: 'hsl(var(--background))',
					foreground: 'hsl(var(--foreground))',
					muted: 'hsl(var(--muted))',
					'muted-foreground': 'hsl(var(--muted-foreground))',
					card: 'hsl(var(--card))',
					'card-foreground': 'hsl(var(--card-foreground))',
					popover: 'hsl(var(--popover))',
					'popover-foreground': 'hsl(var(--popover-foreground))',
					border: 'hsl(var(--border))',
					input: 'hsl(var(--input))',
					primary: 'hsl(var(--primary))',
					'primary-foreground': 'hsl(var(--primary-foreground))',
					secondary: 'hsl(var(--secondary))',
					'secondary-foreground': 'hsl(var(--secondary-foreground))',
					accent: 'hsl(var(--accent))',
					'accent-foreground': 'hsl(var(--accent-foreground))',
					destructive: 'hsl(var(--destructive))',
					'destructive-foreground': 'hsl(var(--destructive-foreground))',
					ring: 'hsl(var(--ring))'
				},
				fontFamily: {
					'geist-sans': ['Geist Sans', ...defaultTheme.fontFamily.sans],
					'geist-mono': ['Geist Mono', ...defaultTheme.fontFamily.mono]
				},
				screens: {
					'max-sm': { max: '640px' },
					'max-md': { max: '768px' },
					'max-lg': { max: '1024px' },
					'max-xl': { max: '1280px' }
				}
			}
		},
		plugins: [ui(options)]
	};
}
