function hex(h, s, l) {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}
export default function (variables) {
    const palette = {};
    const hexes = {};
    for (const [theme, colors] of Object.entries(variables)) {
        palette[theme] = {};
        hexes[theme] = {};
        for (const [colorKey, colorValue] of Object.entries(colors)) {
            const [h, s, l] = colorValue.split(' ').map((a) => Number(a.replace('%', '')));
            hexes[theme][colorKey] = hex(h, s, l);
        }
        palette[theme] = {
            ...variables[theme],
            '--uk-form-checkbox-image': `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='${encodeURIComponent(hexes[theme]['--primary'])}' /%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(hexes[theme]['--primary-foreground'])}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E")`,
            '--uk-form-checkbox-image-indeterminate': `url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22${encodeURIComponent(hexes[theme]['--primary'])}%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E")`,
            '--uk-form-radio-image': `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(hexes[theme]['--primary'])}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E%0A")`,
            '--uk-form-list-image': `url("data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon fill='${encodeURIComponent(hexes[theme]['--muted-foreground'])}' points='12 1 9 6 15 6' /%3E%3Cpolygon fill='${encodeURIComponent(hexes[theme]['--muted-foreground'])}' points='12 13 9 8 15 8' /%3E%3C/svg%3E%0A")`,
            '--uk-divider-icon-image': `url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22none%22%20stroke%3D%22${encodeURIComponent(hexes[theme]['--border'])}%22%20stroke-width%3D%222%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%227%22%20%2F%3E%0A%3C%2Fsvg%3E%0A')`,
            '--uk-list-bullet-image': `url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22${encodeURIComponent(hexes[theme]['--foreground'])}%22%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%20%2F%3E%0A%3C%2Fsvg%3E')`
        };
    }
    return palette;
}
