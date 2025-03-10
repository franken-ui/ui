export default {
    '.uk-sortable': {
        position: 'relative' // obvious value, required for positioning sortable items
    },
    '.uk-sortable > :last-child': {
        marginBottom: '0' // obvious value, remove bottom margin from last child
    },
    '.uk-sortable-drag': {
        position: 'fixed !important', // important for dragging functionality, obvious value
        zIndex: 'var(--uk-sortable-drag-z-index, 1050) !important', // Customizable z-index, important for stacking above other elements
        pointerEvents: 'none' // obvious value, prevent interaction with dragged element
    },
    '.uk-sortable-placeholder': {
        opacity: 'var(--uk-sortable-placeholder-opacity, 0)', // Customizable placeholder opacity, default to fully transparent
        pointerEvents: 'none' // obvious value, placeholder should not be interactive
    },
    '.uk-sortable-empty': {
        minHeight: 'var(--uk-sortable-empty-min-height, 3.5rem)' // Customizable minimum height for empty sortable area
    },
    '.uk-sortable-handle:hover': {
        cursor: 'var(--uk-sortable-handle-hover-cursor, move)' // Customizable cursor on handle hover, default to 'move'
    }
};
