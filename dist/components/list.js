export default {
    '.uk-list > *': {
        MozColumnBreakInside: 'avoid',
        breakInside: 'avoid-column'
    },
    '.uk-list > * > :last-child': { marginBottom: '0' },
    '.uk-list > :nth-child(n+2), .uk-list > * > ul': {
        marginTop: 'var(--uk-list-item-margin-top, 0.5rem)'
    },
    '.uk-list-disc, .uk-list-circle, .uk-list-square, .uk-list-decimal, .uk-list-hyphen': {
        paddingLeft: 'var(--uk-list-indent, 32px)'
    },
    '.uk-list-disc': { listStyleType: 'disc' },
    '.uk-list-circle': { listStyleType: 'circle' },
    '.uk-list-square': { listStyleType: 'square' },
    '.uk-list-decimal': { listStyleType: 'decimal' },
    '.uk-list-hyphen': { listStyleType: "'–  '" },
    '.uk-list-muted > ::marker': {
        color: 'var(--uk-list-marker-muted-color, hsl(var(--muted-foreground)))'
    },
    '.uk-list-primary > ::marker': {
        color: 'var(--uk-list-marker-primary-color, hsl(var(--primary)))'
    },
    '.uk-list-secondary > ::marker': {
        color: 'var(--uk-list-marker-secondary-color, hsl(var(--secondary-foreground)))'
    },
    '.uk-list-bullet > *': {
        position: 'relative',
        paddingLeft: 'var(--uk-list-bullet-indent, 32px)'
    },
    '.uk-list-bullet > ::before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: 'var(--uk-list-bullet-width, 32px)',
        height: 'var(--uk-list-bullet-height, 1.5em)',
        backgroundImage: 'var(--uk-list-bullet-image)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%'
    },
    '.uk-list-divider > :nth-child(n+2)': {
        marginTop: 'var(--uk-list-divider-item-margin-top, 0.5rem)',
        borderTopWidth: 'var(--uk-list-divider-border-width, 1px)',
        borderColor: 'var(--uk-list-divider-border-color, hsl(var(--border) / var(--border-alpha, 1)))',
        paddingTop: 'var(--uk-list-divider-item-padding-top, 0.5rem)'
    },
    '.uk-list-striped > *': { padding: 'var(--uk-list-striped-item-padding, 0.5rem)' },
    '.uk-list-striped > *:nth-of-type(odd)': {
        borderTopWidth: 'var(--uk-list-striped-border-width, 1px)', // Shorthand variable
        borderBottomWidth: 'var(--uk-list-striped-border-width, 1px)', // Shorthand variable
        borderColor: 'var(--uk-list-striped-border-color, hsl(var(--border) / var(--border-alpha, 1)))'
    },
    '.uk-list-striped > :nth-of-type(odd)': {
        backgroundColor: 'var(--uk-list-striped-background-color, hsl(var(--muted) / 0.5))'
    },
    '.uk-list-striped > :nth-child(n+2)': { marginTop: '0' }
};
