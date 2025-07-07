export default {
    '.uk-tab': {
        // Layout
        display: 'var(--uk-tab-display, flex)',
        flexWrap: 'var(--uk-tab-flex-wrap, wrap)',
        padding: 'var(--uk-tab-padding, 0)',
        position: 'var(--uk-tab-position, relative)',
        // Visual
        listStyle: 'var(--uk-tab-list-style, none)',
        color: 'var(--uk-tab-color, hsl(var(--muted-foreground)))'
    },
    '.uk-tab::before': {
        content: "''",
        position: 'var(--uk-tab-before-position, absolute)',
        inset: 'var(--uk-tab-before-inset, auto 0 0 0)',
        borderBottom: 'var(--uk-tab-before-border, 1px solid hsl(var(--border) / var(--border-alpha, 1)))'
    },
    '.uk-tab > *': {
        flex: 'var(--uk-tab-item-flex, none)',
        position: 'var(--uk-tab-item-position, relative)'
    },
    '.uk-tab > * > a': {
        // Layout
        display: 'var(--uk-tab-link-display, flex)',
        alignItems: 'var(--uk-tab-link-align, center)',
        justifyContent: 'var(--uk-tab-link-justify, center)',
        padding: 'var(--uk-tab-item-padding, 5px 10px)',
        columnGap: 'var(--uk-tab-link-gap, 0.25em)',
        // Typography
        fontSize: 'var(--uk-tab-link-font-size, 0.875rem)',
        fontWeight: 'var(--uk-tab-link-font-weight, 600)',
        textTransform: 'var(--uk-tab-link-transform, none)',
        color: 'var(--uk-tab-link-color, hsl(var(--muted-foreground)))',
        // Visual
        borderBottom: 'var(--uk-tab-link-border, 2px solid transparent)',
        // Transitions
        transition: 'var(--uk-tab-link-transition, color 100ms ease-in-out)'
    },
    '.uk-tab > * > a:hover': {
        textDecoration: 'var(--uk-tab-link-hover-decoration, none)'
    },
    '.uk-tab > .uk-active > a': {
        borderColor: 'var(--uk-tab-active-border-color, hsl(var(--primary)))',
        backgroundColor: 'var(--uk-tab-active-bg, hsl(var(--background)))',
        color: 'var(--uk-tab-active-color, hsl(var(--foreground)))'
    },
    '.uk-tab > .uk-disabled > a': {
        opacity: 'var(--uk-tab-disabled-opacity, 0.5)',
        pointerEvents: 'var(--uk-tab-disabled-pointer-events, none)'
    },
    '.uk-tab-bottom::before': {
        inset: 'var(--uk-tab-bottom-before-inset, 0 0 auto 0)'
    },
    '.uk-tab-bottom > * > a': {
        borderWidth: 'var(--uk-tab-bottom-link-border-width, 2px 0 0 0)',
        borderStyle: 'var(--uk-tab-bottom-link-border-style, solid)',
        borderColor: 'var(--uk-tab-bottom-link-border-color, transparent)'
    },
    '.uk-tab-left, .uk-tab-right': {
        flexDirection: 'var(--uk-tab-vertical-direction, column)',
        marginLeft: 'var(--uk-tab-vertical-margin, 0)'
    },
    '.uk-tab-left > *, .uk-tab-right > *': {
        paddingLeft: 'var(--uk-tab-vertical-item-padding, 0)'
    },
    '.uk-tab-left::before': {
        inset: 'var(--uk-tab-left-before-inset, 0 0 0 auto)',
        borderLeft: 'var(--uk-tab-left-before-border, 1px solid hsl(var(--border) / var(--border-alpha, 1)))',
        borderBottom: 'none'
    },
    '.uk-tab-right::before': {
        inset: 'var(--uk-tab-right-before-inset, 0 auto 0 0)',
        borderLeft: 'var(--uk-tab-right-before-border, 1px solid hsl(var(--border) / var(--border-alpha, 1)))',
        borderBottom: 'none'
    },
    '.uk-tab-left > * > a': {
        justifyContent: 'var(--uk-tab-left-link-justify, left)',
        borderRight: 'var(--uk-tab-left-link-border, 2px solid transparent)',
        borderBottom: 'none'
    },
    '.uk-tab-right > * > a': {
        justifyContent: 'var(--uk-tab-right-link-justify, left)',
        borderLeft: 'var(--uk-tab-right-link-border, 2px solid transparent)',
        borderBottom: 'none'
    },
    '.uk-tab .uk-dropdown': {
        marginLeft: 'var(--uk-tab-dropdown-margin, 2rem)'
    },
    '.uk-tab-alt': {
        // Layout
        display: 'var(--uk-tab-alt-display, flex)',
        height: 'var(--uk-tab-alt-height, 2.25rem)',
        width: 'var(--uk-tab-alt-width, 100%)',
        alignItems: 'var(--uk-tab-alt-align, center)',
        justifyContent: 'var(--uk-tab-alt-justify, center)',
        padding: 'var(--uk-tab-alt-padding, 0.25rem)',
        // Visual
        borderRadius: 'var(--uk-tab-alt-radius, var(--uk-global-radius))',
        backgroundColor: 'var(--uk-tab-alt-bg, hsl(var(--muted)))',
        color: 'var(--uk-tab-alt-color, hsl(var(--muted-foreground)))'
    },
    '.uk-tab-alt > *': {
        flexGrow: 'var(--uk-tab-alt-item-grow, 1)'
    },
    '.uk-tab-alt > * > a': {
        display: 'var(--uk-tab-alt-link-display, inline-flex)',
        width: 'var(--uk-tab-alt-link-width, 100%)',
        height: 'var(--uk-tab-alt-link-height, auto)',
        alignItems: 'var(--uk-tab-alt-link-align, center)',
        justifyContent: 'var(--uk-tab-alt-link-justify, center)',
        padding: 'var(--uk-tab-alt-link-padding, 0.25rem 0.75rem)',
        // Typography
        fontWeight: 'var(--uk-tab-alt-link-font-weight, 500)',
        whiteSpace: 'var(--uk-tab-alt-link-whitespace, nowrap)',
        textDecoration: 'var(--uk-tab-alt-link-decoration, none)'
    },
    '.uk-tab-alt > .uk-active > a': {
        borderRadius: 'var(--uk-tab-alt-active-radius, var(--uk-global-radius-s))',
        backgroundColor: 'var(--uk-tab-alt-active-bg, hsl(var(--background)))',
        color: 'var(--uk-tab-alt-active-color, hsl(var(--foreground)))',
        borderBottom: 'none'
    }
};
