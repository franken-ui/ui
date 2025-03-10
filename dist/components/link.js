export default {
    // Muted variant
    'a.uk-link-muted, .uk-link-muted a, .uk-link-toggle .uk-link-muted': {
        fontWeight: 'var(--uk-link-muted-font-weight, 500)',
        color: 'var(--uk-link-muted-color, hsl(var(--muted-foreground)))',
        textDecorationLine: 'underline', // Fundamental link behavior
        textUnderlineOffset: 'var(--uk-link-underline-offset, 4px)'
    },
    // Text variant hover state
    'a.uk-link-text:hover, .uk-link-text a:hover, .uk-link-toggle:hover .uk-link-text': {
        textDecorationLine: 'underline', // Fundamental link behavior
        textUnderlineOffset: 'var(--uk-link-underline-offset, 4px)'
    },
    // Reset variant (no variables needed - purpose is to reset)
    'a.uk-link-reset, .uk-link-reset a': {
        textDecoration: 'none !important', // Fundamental reset
        fontWeight: '400 !important' // Fundamental reset
    },
    // Toggle variant (no variables needed - functional class)
    '.uk-link-toggle': {
        textDecoration: 'none !important' // Fundamental behavior
    },
    // Base link style
    '.uk-link': {
        fontWeight: 'var(--uk-link-font-weight, 500)',
        textDecorationLine: 'underline', // Fundamental link behavior
        textUnderlineOffset: 'var(--uk-link-underline-offset, 4px)'
    }
};
