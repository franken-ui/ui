export default {
    '.uk-badge': {
        // Layout
        display: 'var(--uk-badge-display, inline-flex)',
        justifyContent: 'var(--uk-badge-justify-content, center)',
        alignItems: 'var(--uk-badge-align-items, center)',
        height: 'var(--uk-badge-height, 1.25rem)',
        minWidth: 'var(--uk-badge-min-width, 1.25rem)',
        padding: 'var(--uk-badge-padding, 0 0.375rem)',
        // Typography
        fontSize: 'var(--uk-badge-font-size, var(--uk-global-font-size-s))',
        lineHeight: 'var(--uk-badge-leading, var(--uk-global-leading-s))',
        fontWeight: 'var(--uk-badge-font-weight, 600)',
        // Visual
        borderRadius: 'var(--uk-badge-radius, 500px)',
        boxShadow: 'var(--uk-badge-box-shadow, var(--uk-global-shadow))',
        border: 'var(--uk-badge-border, 1px solid hsl(var(--border) / var(--border-alpha, 1)))',
        backgroundColor: 'var(--uk-badge-bg, transparent)',
        color: 'var(--uk-badge-color, hsl(var(--foreground)))'
        // States
    },
    '.uk-badge:hover': {
        transitionProperty: 'var(--uk-badge-hover-transition-property, background-color)',
        transitionDuration: 'var(--uk-badge-hover-transition-duration, 150ms)',
        transitionTimingFunction: 'var(--uk-badge-hover-transition-timing, ease-in-out)',
        opacity: 'var(--uk-badge-hover-opacity, 0.8)'
    },
    '.uk-badge-primary': {
        '--uk-badge-border': '1px solid hsl(var(--primary))',
        '--uk-badge-bg': 'hsl(var(--primary))',
        '--uk-badge-color': 'hsl(var(--primary-foreground))'
    },
    '.uk-badge-secondary': {
        '--uk-badge-border': '1px solid hsl(var(--secondary))',
        '--uk-badge-bg': 'hsl(var(--secondary))',
        '--uk-badge-color': 'hsl(var(--secondary-foreground))'
    },
    '.uk-badge-destructive': {
        '--uk-badge-border': '1px solid hsl(var(--destructive) / var(--destructive-alpha, 1))',
        '--uk-badge-bg': 'hsl(var(--destructive) / var(--destructive-alpha, 1))',
        '--uk-badge-color': 'hsl(var(--destructive-foreground))'
    }
};
