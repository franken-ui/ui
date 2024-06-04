import type { Palette, Scheme } from './preset-types.js';

const map: any = {
	'--background': 'background',
	'--foreground': 'foreground',
	'--card': 'card',
	'--card-foreground': 'cardForeground',
	'--popover': 'popover',
	'--popover-foreground': 'popoverForeground',
	'--primary': 'primary',
	'--primary-foreground': 'primaryForeground',
	'--secondary': 'secondary',
	'--secondary-foreground': 'secondaryForeground',
	'--muted': 'muted',
	'--muted-foreground': 'mutedForeground',
	'--accent': 'accent',
	'--accent-foreground': 'accentForeground',
	'--destructive': 'destructive',
	'--destructive-foreground': 'destructiveForeground',
	'--border': 'border',
	'--input': 'input',
	'--ring': 'ring'
};

function hex(h: number, s: number, l: number): string {
	l /= 100;
	const a = (s * Math.min(l, 1 - l)) / 100;
	const f = (n: number) => {
		const k = (n + h / 30) % 12;
		const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

		return Math.round(255 * color)
			.toString(16)
			.padStart(2, '0');
	};

	return `#${f(0)}${f(8)}${f(4)}`;
}

function hexes(palette: any) {
	const hexes: any = {};

	for (const a in palette) {
		const [h, s, l] = palette[a].split(' ').map((a: string) => Number(a.replace('%', '')));

		hexes[map[a]] = hex(h, s, l);
	}

	return hexes;
}

export default function (palette: { ':root': Palette; '.dark': Palette }): {
	light: Scheme;
	dark: Scheme;
} {
	return {
		light: hexes(palette[':root']),
		dark: hexes(palette['.dark'])
	};
}
