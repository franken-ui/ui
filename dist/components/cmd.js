export default {
    '.uk-cmd-header': {
        display: 'flex', // obvious - standard header layout
        alignItems: 'center', // obvious - standard header layout
        gap: 'var(--uk-cmd-header-gap, 0.5rem)',
        padding: 'var(--uk-cmd-header-padding, 0 0.75rem)'
    },
    '.uk-cmd-header-input': {
        flex: '1', // obvious - should take remaining space
        padding: 'var(--uk-cmd-header-input-padding, 0.75rem 0)'
    },
    '.uk-cmd-header-input input': {
        width: '100%', // obvious - should fill container
        backgroundColor: 'transparent' // obvious - input should be transparent
    },
    '.uk-cmd-header-input input:focus': {
        outline: 'none'
    },
    '.uk-cmd-header-input input::placeholder': {
        color: 'var(--uk-cmd-input-placeholder-color, hsl(var(--muted-foreground)))'
    },
    '.uk-cmd-header-icon': {
        width: 'var(--uk-cmd-header-icon-size, 1rem)',
        height: 'var(--uk-cmd-header-icon-size, 1rem)',
        flex: 'none', // obvious - icon shouldn't grow/shrink
        color: 'var(--uk-cmd-header-icon-color, hsl(var(--muted-foreground)))'
    },
    '.uk-cmd-header-esc': {
        flex: 'none' // obvious - escape button shouldn't grow/shrink
    },
    '.uk-cmd-body': {
        maxHeight: 'var(--uk-cmd-body-max-height, 20rem)'
    },
    '.uk-cmd-item-wrapper': {
        display: 'flex', // obvious - standard item layout
        flex: '1', // obvious - should take full width
        alignItems: 'center' // obvious - vertical alignment
    },
    '.uk-cmd-item-icon': {
        marginRight: 'var(--uk-cmd-item-icon-margin, 0.5rem)',
        width: 'var(--uk-cmd-item-icon-size, 1rem)',
        height: 'var(--uk-cmd-item-icon-size, 1rem)',
        flex: 'none' // obvious - icon shouldn't grow/shrink
    },
    '.uk-cmd-item-text': {
        flex: '1' // obvious - should take remaining space
    },
    '.uk-cmd-item-key': {
        fontFamily: 'var(--uk-cmd-item-key-font-family, var(--uk-global-font-family-mono))',
        fontSize: 'var(--uk-cmd-item-key-font-size, var(--uk-global-font-size-s))',
        lineHeight: 'var(--uk-cmd-item-key-leading, var(--uk-global-leading-s))',
        letterSpacing: 'var(--uk-cmd-item-key-tracking, 0.1em)',
        color: 'var(--uk-cmd-item-key-color, hsl(var(--muted-foreground)))'
    }
};
