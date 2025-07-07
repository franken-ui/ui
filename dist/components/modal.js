export default {
    '.uk-modal': {
        display: 'none', // Static - core modal behavior
        position: 'fixed', // Static - core modal behavior
        top: '0', // Static - core modal behavior
        right: '0', // Static - core modal behavior
        bottom: '0', // Static - core modal behavior
        left: '0', // Static - core modal behavior
        zIndex: 'var(--uk-modal-z-index, 1010)',
        overflowY: 'auto', // Static - core scrolling behavior
        backgroundColor: 'var(--uk-modal-bg, rgba(0, 0, 0, 0.8))',
        opacity: '0', // Static - initial state
        transition: 'var(--uk-modal-transition, opacity 0.15s linear)',
        padding: 'var(--uk-modal-padding)',
        WebkitBackdropFilter: 'blur(var(--uk-modal-overlay-blur))', // Customizable overlay blur, default 4px, vendor prefix
        backdropFilter: 'blur(var(--uk-modal-overlay-blur))' // Customizable overlay blur, default 4px
    },
    '.uk-modal.uk-open': {
        opacity: '1'
    },
    '.uk-modal-page': {
        overflow: 'hidden'
    },
    '.uk-modal-dialog': {
        position: 'relative', // Static - core positioning
        boxSizing: 'border-box', // Static - core sizing
        margin: '0 auto', // Static - core centering
        width: 'var(--uk-modal-dialog-width, 32rem)',
        maxWidth: '100%', // Static - core responsive behavior
        opacity: '0', // Static - initial state
        transform: 'var(--uk-modal-dialog-transform, translateY(-100px))',
        transition: 'var(--uk-modal-dialog-transition, 0.3s linear)',
        transitionProperty: 'opacity, transform', // Static - core animation properties
        borderRadius: 'var(--uk-modal-radius)',
        overflow: 'hidden', // Static - core content clipping
        borderWidth: 'var(--uk-modal-dialog-border-width, 1px)',
        borderStyle: 'solid', // Static - core border style
        borderColor: 'var(--uk-modal-dialog-border-color, hsl(var(--border) / var(--border-alpha, 1)))',
        backgroundColor: 'var(--uk-modal-dialog-bg, hsl(var(--background)))'
    },
    '.uk-open > .uk-modal-dialog': {
        opacity: '1',
        transform: 'translateY(0)'
    },
    '.uk-modal-container .uk-modal-dialog': {
        width: '1200px'
    },
    '.uk-modal-full': {
        padding: '0 !important',
        background: 'none'
    },
    '.uk-modal-full .uk-modal-dialog': {
        margin: '0', // Reset margin for full modal, static
        maxWidth: '100%', // Ensure full width, static
        transform: 'translateY(0)', // Reset transform for full modal, static
        width: '100%', // Full width, static
        borderRadius: 'var(--uk-modal-full-dialog-radius, 0px)', // Customizable border radius for full modal dialog
        borderStyle: 'var(--uk-modal-full-dialog-border-style, none)' // Customizable border style for full modal dialog
    },
    '.uk-modal-body': {
        display: 'flow-root', // Static - core layout behavior
        padding: 'var(--uk-modal-padding-body)'
    },
    '.uk-modal-header': {
        display: 'flow-root', // Static - core layout behavior
        padding: 'var(--uk-modal-padding-header)'
    },
    '.uk-modal-footer': {
        display: 'flow-root', // Static - core layout behavior
        padding: 'var(--uk-modal-padding-footer)'
    },
    '.uk-modal-body > :last-child, .uk-modal-header > :last-child, .uk-modal-footer > :last-child': {
        marginBottom: '0'
    },
    '.uk-modal-title': {
        fontSize: 'var(--uk-modal-title-size, 1.125rem)',
        fontWeight: 'var(--uk-modal-title-weight, 600)',
        lineHeight: 'var(--uk-modal-title-leading, 1)',
        letterSpacing: 'var(--uk-modal-title-tracking, -0.025em)'
    },
    '.uk-modal-header + .uk-modal-body, .uk-modal-body + .uk-modal-footer': {
        paddingTop: 'var(--uk-modal-padding-top-between)'
    },
    '.uk-modal-header ~ .uk-modal-footer': {
        paddingTop: 'var(--uk-modal-padding-top-after-header)'
    },
    '.uk-modal-header + .uk-modal-body.uk-overflow-auto': {
        paddingBottom: 'var(--uk-modal-padding-bottom-scrollable)'
    },
    '.uk-modal-body.uk-overflow-auto + .uk-modal-footer': {
        paddingTop: 'var(--uk-modal-padding-top-after-scrollable)'
    }
};
