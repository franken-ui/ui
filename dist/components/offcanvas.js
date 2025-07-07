export default {
    '.uk-offcanvas': {
        display: 'none', // Static - core visibility
        position: 'fixed', // Static - core positioning
        top: '0', // Static - core positioning
        bottom: '0', // Static - core positioning
        left: '0', // Static - core positioning
        zIndex: 'var(--uk-offcanvas-z-index, 1000)'
    },
    '.uk-offcanvas-flip .uk-offcanvas': {
        right: '0', // Static - core flip positioning
        left: 'auto' // Static - core flip positioning
    },
    '.uk-offcanvas-bar': {
        position: 'absolute', // Static - core positioning
        top: '0', // Static - core positioning
        bottom: '0', // Static - core positioning
        left: 'var(--uk-offcanvas-bar-width-i)', // Initial offscreen position
        boxSizing: 'border-box', // Static - core sizing
        width: 'var(--uk-offcanvas-bar-width)',
        overflowY: 'auto', // Static - core scrolling
        borderRightWidth: 'var(--uk-offcanvas-bar-border-width, 1px)',
        borderColor: 'var(--uk-offcanvas-bar-border-color, hsl(var(--border) / var(--border-alpha, 1)))',
        backgroundColor: 'var(--uk-offcanvas-bar-bg, hsl(var(--background)))'
    },
    '.uk-offcanvas-flip .uk-offcanvas-bar': {
        left: 'auto', // Static - core flip positioning
        right: 'var(--uk-offcanvas-bar-width-i)', // Initial offscreen position
        borderRight: 'none', // Static - core border
        borderLeftWidth: 'var(--uk-offcanvas-bar-border-width, 1px)',
        borderColor: 'var(--uk-offcanvas-bar-border-color, hsl(var(--border) / var(--border-alpha, 1)))'
    },
    '.uk-open > .uk-offcanvas-bar': {
        left: '0' // Static - core positioning when open
    },
    '.uk-offcanvas-flip .uk-open > .uk-offcanvas-bar': {
        left: 'auto', // Static - core flip positioning
        right: '0' // Static - core flip positioning
    },
    '.uk-offcanvas-bar-animation': {
        transition: 'var(--uk-offcanvas-bar-transition, left 0.3s ease-out)'
    },
    '.uk-offcanvas-flip .uk-offcanvas-bar-animation': {
        transitionProperty: 'right' // Static - core animation property
    },
    '.uk-offcanvas-reveal': {
        position: 'absolute', // Static - core positioning
        top: '0', // Static - core positioning
        bottom: '0', // Static - core positioning
        left: '0', // Static - core positioning
        width: '0', // Static - initial reveal state
        overflow: 'hidden', // Static - content clipping
        transition: 'var(--uk-offcanvas-reveal-transition, width 0.3s ease-out)'
    },
    '.uk-offcanvas-reveal .uk-offcanvas-bar': {
        left: 'var(--uk-offcanvas-reveal-bar-left, 0)' // Bar position in reveal effect
    },
    '.uk-offcanvas-flip .uk-offcanvas-reveal .uk-offcanvas-bar': {
        left: 'var(--uk-offcanvas-flip-reveal-bar-left, auto)', // Flip modifier, reset left
        right: 'var(--uk-offcanvas-flip-reveal-bar-right, 0)' // Flip modifier, bar position in reveal effect
    },
    '.uk-open > .uk-offcanvas-reveal': {
        width: 'var(--uk-offcanvas-bar-width)' // Reveal to full bar width when opened
    },
    '.uk-offcanvas-flip .uk-offcanvas-reveal': {
        right: 'var(--uk-offcanvas-flip-reveal-right, 0)', // Flip modifier, right position for reveal
        left: 'var(--uk-offcanvas-flip-reveal-left, auto)' // Flip modifier, reset left for reveal
    },
    '.uk-offcanvas-overlay': {
        width: '100vw', // Static - full viewport width
        touchAction: 'none' // Static - disable touch events
    },
    '.uk-offcanvas-overlay::before': {
        content: '""', // Static - pseudo-element content
        position: 'absolute', // Static - overlay positioning
        top: '0', // Static - overlay positioning
        bottom: '0', // Static - overlay positioning
        left: '0', // Static - overlay positioning
        right: '0', // Static - overlay positioning
        backgroundColor: 'var(--uk-offcanvas-overlay-bg, rgba(0, 0, 0, 0.8))',
        opacity: '0', // Static - initial state
        transition: 'var(--uk-offcanvas-overlay-transition, opacity 0.15s linear)',
        WebkitBackdropFilter: 'blur(var(--uk-offcanvas-overlay-blur))',
        backdropFilter: 'blur(var(--uk-offcanvas-overlay-blur))'
    },
    '.uk-offcanvas-overlay.uk-open::before': {
        opacity: 'var(--uk-offcanvas-overlay-opacity, 1)'
    },
    '.uk-offcanvas-page, .uk-offcanvas-container': {
        overflowX: 'hidden clip' // Static - prevent horizontal scroll
    },
    '.uk-offcanvas-container': {
        position: 'relative', // Static - container positioning
        left: '0', // Static - initial position
        transition: 'var(--uk-offcanvas-container-transition, left 0.3s ease-out)',
        boxSizing: 'border-box', // Static - core sizing
        width: '100%' // Static - container width
    },
    ':not(.uk-offcanvas-flip).uk-offcanvas-container-animation': {
        left: 'var(--uk-offcanvas-container-animation-left, var(--uk-offcanvas-bar-width))' // Container animation left offset
    },
    '.uk-offcanvas-flip.uk-offcanvas-container-animation': {
        left: 'var(--uk-offcanvas-container-flip-animation-left, var(--uk-offcanvas-bar-width-i))' // Flip modifier, container animation left offset
    }
};
