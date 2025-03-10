export default {
    '.uk-stepper': {
        display: 'flex' // obvious value, layout property
    },
    '.uk-stepper-counter': {
        counterReset: 'item-counter' // Renamed counter reset for clarity, static value
    },
    '.uk-stepper-counter li': {
        counterIncrement: 'item-counter' // Renamed counter increment for clarity, static value
    },
    '.uk-stepper-default': {
        justifyContent: 'var(--uk-stepper-default-justify-content, start)', // Customizable content alignment
        color: 'var(--uk-stepper-default-color, hsl(var(--muted-foreground)))', // Customizable default color
        flexWrap: 'var(--uk-stepper-default-flex-wrap, wrap)', // Customizable wrapping behavior
        fontSize: 'var(--uk-stepper-default-font-size, .875rem)' // Customizable default font size
    },
    '.uk-stepper-default li': {
        display: 'flex', // obvious value, layout property
        alignItems: 'center', // obvious value, layout property
        width: 'var(--uk-stepper-item-width, auto)', // Customizable item width
        textWrap: 'nowrap', // obvious value to keep text in one line
        position: 'relative' // obvious value, for positioning pseudo-elements or absolute children
    },
    '.uk-stepper-default:has(li.uk-active) li.uk-active ~ li': {
        color: 'var(--uk-stepper-default-inactive-color, hsl(var(--muted-foreground)))' // Customizable color for inactive steps after active step
    },
    '.uk-stepper-default li.uk-active,.uk-stepper-default li.uk-stepper-checked, .uk-stepper-default:has(li.uk-active) li': {
        color: 'var(--uk-stepper-default-active-color, hsl(var(--foreground)))' // Customizable color for active, checked steps and steps before active step
    },
    '.uk-stepper-default .uk-stepper-checked a::before': {
        content: '""', // required for pseudo-element, obvious value
        display: 'var(--uk-stepper-checked-indicator-display, none)', // Customizable display of checked indicator - can be hidden or shown
        backgroundImage: 'var(--uk-stepper-checked-indicator-image, var(--uk-stepper-check-image))', // Customizable checked indicator image, can fallback to global check image variable if defined later
        backgroundRepeat: 'no-repeat', // obvious value, ensure image doesn't repeat
        backgroundPosition: '50% 50%', // obvious value, center image
        position: 'absolute', // obvious value, for positioning indicator
        height: 'var(--uk-stepper-checked-indicator-size, 1rem)', // Customizable checked indicator size
        width: 'var(--uk-stepper-checked-indicator-size, 1rem)', // Customizable checked indicator size (width and height same for square)
        justifyContent: 'center', // obvious value, center content (though content is empty string here, might be relevant if content is changed later)
        alignItems: 'center', // obvious value, center content
        left: 'var(--uk-stepper-checked-indicator-offset-horizontal, 0)', // Customizable horizontal offset of indicator
        margin: '0', // reset, obvious value
        border: 'var(--uk-stepper-checked-indicator-border, 1px solid)', // Customizable checked indicator border - shorthand variable
        borderColor: 'var(--uk-stepper-checked-indicator-border-color, hsl(var(--primary)))', // Customizable checked indicator border color
        borderRadius: 'var(--uk-stepper-checked-indicator-radius, 50%)' // Customizable checked indicator border radius
    },
    '.uk-stepper-default li:not(:last-child)::after': {
        content: 'var(--uk-stepper-separator-content, "/")', // Customizable separator content, default to "/"
        color: 'var(--uk-stepper-separator-color, hsl(var(--muted-foreground)))', // Customizable separator color
        marginLeft: 'var(--uk-stepper-separator-margin-horizontal-start, .5rem)', // Customizable separator horizontal margin start
        marginRight: 'var(--uk-stepper-separator-margin-horizontal-end, .75rem)' // Customizable separator horizontal margin end
    }
};
