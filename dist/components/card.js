export default {
    '.uk-card': {
        position: 'relative', // obvious value, no need for var
        boxSizing: 'border-box', // obvious value, no need for var
        border: 'var(--uk-card-border, 1px solid hsl(var(--border) / var(--border-alpha, 1)))',
        borderRadius: 'var(--uk-card-radius, var(--uk-global-radius))',
        boxShadow: 'var(--uk-card-shadow, var(--uk-global-shadow))',
        backgroundColor: 'var(--uk-card-bg, hsl(var(--card)))',
        color: 'var(--uk-card-color, hsl(var(--card-foreground)))'
    },
    '.uk-card-body, .uk-card-header, .uk-card-footer': {
        padding: 'var(--uk-card-padding, 1rem)'
    },
    '.uk-card-body > :last-child, .uk-card-header > :last-child, .uk-card-footer > :last-child': {
        marginBottom: 'var(--uk-card-last-child-margin, 0)'
    },
    '.uk-card-title': {
        fontSize: 'var(--uk-card-title-font-size, 1.125rem)',
        fontWeight: 'var(--uk-card-title-weight, 600)',
        lineHeight: 'var(--uk-card-title-height, 1)',
        letterSpacing: 'var(--uk-card-title-tracking, -0.025em)'
    },
    // Variants can be simplified
    '.uk-card-primary': {
        '--uk-card-border': '1px solid transparent',
        '--uk-card-bg': 'hsl(var(--primary))',
        '--uk-card-color': 'hsl(var(--primary-foreground))'
    },
    '.uk-card-secondary': {
        '--uk-card-border': '1px solid transparent',
        '--uk-card-bg': 'hsl(var(--secondary))',
        '--uk-card-color': 'hsl(var(--secondary-foreground))'
    },
    '.uk-card-destructive': {
        '--uk-card-border': '1px solid transparent',
        '--uk-card-bg': 'hsl(var(--destructive) / var(--destructive-alpha, 1))',
        '--uk-card-color': 'hsl(var(--destructive-foreground))'
    },
    // Spacing adjustments remain the same
    '.uk-card-header + .uk-card-body, .uk-card-body + .uk-card-footer': {
        paddingTop: 'var(--uk-card-adjacent-padding, 0)'
    },
    '.uk-card-header ~ .uk-card-footer': {
        paddingTop: 'var(--uk-card-header-footer-padding, 0)'
    }
};
