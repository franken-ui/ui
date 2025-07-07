export default {
    '.uk-slider': {
        WebkitTapHighlightColor: 'transparent' // vendor prefix, obvious value
    },
    '.uk-slider-container': {
        overflow: ['hidden', 'clip'] // obvious value
    },
    '.uk-slider-items': {
        display: 'flex', // obvious value
        willChange: 'transform', // performance optimization, likely static
        position: 'relative', // obvious value
        touchAction: 'pan-y' // touch interaction, likely static
    },
    '.uk-slider-items > *': {
        flex: 'none !important', // important, likely static
        boxSizing: 'border-box', // obvious value
        maxWidth: '100%', // obvious value
        position: 'relative' // obvious value
    },
    // Slidenav
    '.uk-slidenav': {
        boxShadow: 'var(--uk-slidenav-shadow, var(--uk-global-shadow-s))', // Customizable shadow, fallback to global
        display: 'inline-flex', // obvious value
        height: 'var(--uk-slidenav-height, 2.25rem)',
        width: 'var(--uk-slidenav-width, 2.25rem)',
        alignItems: 'center', // obvious value
        justifyContent: 'center', // obvious value
        borderRadius: 'var(--uk-slidenav-radius, 9999px)',
        borderWidth: 'var(--uk-slidenav-border-width, 1px)',
        borderColor: 'var(--uk-slidenav-border-color, hsl(var(--border) / var(--border-alpha, 1)))',
        backgroundColor: 'var(--uk-slidenav-bg, hsl(var(--background)))'
    },
    '.uk-slidenav:hover': {
        backgroundColor: 'var(--uk-slidenav-hover-bg, hsl(var(--accent)))',
        color: 'var(--uk-slidenav-hover-color, hsl(var(--accent-foreground)))'
    },
    '.uk-slidenav:active': {
        backgroundColor: 'var(--uk-slidenav-active-bg, hsl(var(--accent)))', // Reusing accent color for active state, customize if needed
        color: 'var(--uk-slidenav-active-color, hsl(var(--accent-foreground)))' // Reusing accent-foreground color for active state
    },
    '.uk-slidenav-lg': { padding: 'var(--uk-slidenav-large-padding, 10px)' },
    '.uk-slidenav-container': { display: 'flex' }, // obvious value
    '.uk-slidenav svg': {
        height: 'var(--uk-slidenav-svg-height, 1rem)',
        width: 'var(--uk-slidenav-svg-width, 1rem)'
    },
    // Slideshow
    '.uk-slideshow': {
        WebkitTapHighlightColor: 'transparent' // vendor prefix, obvious value
    },
    '.uk-slideshow-items': {
        position: 'relative', // obvious value
        zIndex: '0', // stacking context, likely static
        margin: '0', // reset, likely static
        padding: '0', // reset, likely static
        listStyle: 'none', // reset, obvious value for lists
        overflow: 'hidden', // obvious value
        WebkitTouchCallout: 'none', // vendor prefix, obvious value
        touchAction: 'pan-y' // touch interaction, likely static
    },
    '.uk-slideshow-items > *': {
        position: 'absolute', // required for slideshow layout, obvious value
        top: '0', // required for slideshow layout, obvious value
        left: '0', // required for slideshow layout, obvious value
        right: '0', // required for slideshow layout, obvious value
        bottom: '0', // required for slideshow layout, obvious value
        overflow: 'hidden', // likely static to clip content within slides
        willChange: 'transform, opacity' // performance optimization, likely static
    },
    '.uk-slideshow-items > :not(.uk-active)': {
        display: 'none' // important for slideshow functionality, obvious value
    }
};
