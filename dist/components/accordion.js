export default {
    '.uk-accordion-title': {
        // Layout
        display: 'var(--uk-accordion-title-display, flex)',
        justifyContent: 'var(--uk-accordion-title-justify, space-between)',
        alignItems: 'var(--uk-accordion-title-align, start)',
        overflow: 'var(--uk-accordion-title-overflow, hidden)',
        padding: 'var(--uk-accordion-title-padding, 1rem 0 1rem 0)',
        fontWeight: 'var(--uk-accordion-title-font, 500)'
    },
    '.uk-accordion-title:hover': {
        textDecoration: 'var(--uk-accordion-title-hover-decoration, underline)'
    },
    '.uk-accordion-icon': {
        flex: 'var(--uk-accordion-icon-flex, none)',
        transition: 'var(--uk-accordion-icon-transition, 300ms transform)',
        color: 'var(--uk-accordion-icon-color, hsl(var(--muted-foreground)))'
    },
    '.uk-open > .uk-accordion-title > .uk-accordion-icon': {
        transform: 'rotate(180deg)'
    },
    '.uk-accordion-content': {
        display: 'var(--uk-accordion-content-display, flow-root)',
        padding: 'var(--uk-accordion-content-padding, 0 0 1rem 0)'
    },
    '.uk-accordion-content[hidden]': {
        display: 'none'
    },
    '.uk-accordion > li': {
        borderWidth: 'var(--uk-accordion-item-border-width, 0 0 1px 0)',
        borderStyle: 'var(--uk-accordion-item-border-style, solid)',
        borderColor: 'var(--uk-accordion-item-border-color, hsl(var(--border)))'
    }
};
