export default {
    '.uk-label': {
        // Layout
        display: 'inline-flex', // Removed variable - fundamental layout
        alignItems: 'center', // Removed variable - fundamental layout
        padding: 'var(--uk-label-padding, 0.125rem 0.625rem)',
        // Typography
        fontSize: 'var(--uk-label-font-size, var(--uk-global-font-size-s))',
        lineHeight: 'var(--uk-label-leading, var(--uk-global-leading-s))',
        fontWeight: 'var(--uk-label-font-weight, 600)',
        // Visual
        borderRadius: 'var(--uk-label-radius, var(--uk-global-radius))',
        boxShadow: 'var(--uk-label-shadow, var(--uk-global-shadow))',
        border: 'var(--uk-label-border, 1px solid hsl(var(--border) / var(--border-alpha, 1)))',
        backgroundColor: 'var(--uk-label-bg, transparent)',
        color: 'var(--uk-label-color, hsl(var(--foreground)))'
    },
    '.uk-label:hover': {
        transitionProperty: 'background-color', // Removed variable - fundamental transition
        transitionDuration: 'var(--uk-label-hover-duration, 150ms)',
        transitionTimingFunction: 'ease-in-out', // Removed variable - fundamental timing
        opacity: 'var(--uk-label-hover-opacity, 0.8)'
    },
    // Variants using CSS variable reassignment pattern
    '.uk-label-primary': {
        '--uk-label-border': '1px solid hsl(var(--primary))',
        '--uk-label-bg': 'hsl(var(--primary))',
        '--uk-label-color': 'hsl(var(--primary-foreground))'
    },
    '.uk-label-secondary': {
        '--uk-label-border': '1px solid hsl(var(--secondary))',
        '--uk-label-bg': 'hsl(var(--secondary))',
        '--uk-label-color': 'hsl(var(--secondary-foreground))'
    },
    '.uk-label-destructive': {
        '--uk-label-border': '1px solid hsl(var(--destructive) / var(--destructive-alpha, 1))',
        '--uk-label-bg': 'hsl(var(--destructive) / var(--destructive-alpha, 1))',
        '--uk-label-color': 'hsl(var(--destructive-foreground))'
    }
};
