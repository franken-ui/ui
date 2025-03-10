export default {
    // Base dotnav styles
    '.uk-dotnav': {
        display: 'flex', // Removed variable - fundamental layout
        flexWrap: 'wrap', // Removed variable - fundamental layout
        marginLeft: 'var(--uk-dotnav-margin-left, -0.75rem)'
    },
    // Dotnav items
    '.uk-dotnav > *': {
        flex: 'none', // Removed variable - fundamental layout
        paddingLeft: 'var(--uk-dotnav-item-padding, 0.75rem)'
    },
    // Dotnav dots
    '.uk-dotnav > * > *': {
        // Layout
        display: 'block', // Removed variable - fundamental layout
        boxSizing: 'border-box', // Removed variable - fundamental box model
        width: 'var(--uk-dotnav-dot-size, 10px)',
        height: 'var(--uk-dotnav-dot-size, 10px)', // Using same variable for consistent sizing
        // Visual
        border: 'var(--uk-dotnav-dot-border, 1px solid hsl(var(--primary)))', // Combined border properties
        borderRadius: '50%', // Removed variable - fundamental shape for dots
        backgroundColor: 'var(--uk-dotnav-dot-bg, transparent)',
        // Accessibility
        textIndent: '100%', // Removed variable - fundamental accessibility
        overflow: 'hidden', // Removed variable - fundamental accessibility
        whiteSpace: 'nowrap', // Removed variable - fundamental text behavior
        // Transitions
        transition: '0.2s ease-in-out', // Removed variable - fundamental transition
        transitionProperty: 'background-color, border-color' // Removed variable - fundamental properties
    },
    // States
    '.uk-dotnav > * > :hover': {
        borderColor: 'var(--uk-dotnav-dot-hover-border, transparent)',
        backgroundColor: 'var(--uk-dotnav-dot-hover-bg, hsl(var(--primary)))'
    },
    '.uk-dotnav > * > :active': {
        borderColor: 'var(--uk-dotnav-dot-active-border, transparent)',
        backgroundColor: 'var(--uk-dotnav-dot-active-bg, hsl(var(--primary)))'
    },
    '.uk-dotnav > .uk-active > *': {
        borderColor: 'var(--uk-dotnav-dot-current-border, transparent)',
        backgroundColor: 'var(--uk-dotnav-dot-current-bg, hsl(var(--primary)))'
    },
    // Vertical variant
    '.uk-dotnav-vertical': {
        flexDirection: 'column', // Removed variable - fundamental layout
        marginLeft: '0', // Removed variable - fundamental reset
        marginTop: 'var(--uk-dotnav-vertical-margin-top, -0.75rem)'
    },
    '.uk-dotnav-vertical > *': {
        paddingLeft: '0', // Removed variable - fundamental reset
        paddingTop: 'var(--uk-dotnav-vertical-item-padding-top, 0.75rem)'
    }
};
