export default {
    '.uk-thumbnav': {
        display: 'flex', // obvious value, layout property
        flexWrap: 'wrap', // obvious value, layout property
        margin: '0', // reset, obvious value
        padding: '0', // reset, obvious value
        listStyle: 'none', // reset, obvious value for lists
        marginLeft: 'var(--uk-thumbnav-margin-horizontal, -1rem)' // Customizable horizontal margin for spacing
    },
    '.uk-thumbnav > *': {
        paddingLeft: 'var(--uk-thumbnav-item-padding-horizontal, 1rem)' // Customizable horizontal padding for item spacing, consistent with container margin
    },
    '.uk-thumbnav > * > *': {
        display: 'inline-block', // obvious value, layout property
        position: 'relative' // obvious value, for positioning pseudo-element
    },
    '.uk-thumbnav > * > *::after': {
        content: "''", // required for pseudo-element, obvious value
        position: 'absolute', // required for overlay, obvious value
        top: '0', // position fill, obvious value
        bottom: '0', // position fill, obvious value
        left: '0', // position fill, obvious value
        right: '0', // position fill, obvious value
        backgroundImage: 'var(--uk-thumbnav-overlay-background, linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4)))', // Customizable overlay gradient
        transition: 'var(--uk-thumbnav-overlay-transition, opacity 0.1s ease-in-out)' // Customizable overlay transition
    },
    '.uk-thumbnav > * > :hover::after': {
        opacity: 'var(--uk-thumbnav-overlay-hover-opacity, 0)' // Customizable overlay opacity on hover
    },
    '.uk-thumbnav > .uk-active > *::after': {
        opacity: 'var(--uk-thumbnav-overlay-active-opacity, 0)' // Customizable overlay opacity on active state
    },
    '.uk-thumbnav-vertical': {
        flexDirection: 'column', // obvious value, layout change for vertical
        marginLeft: 'var(--uk-thumbnav-vertical-margin-horizontal, 0)', // Customizable horizontal margin reset for vertical layout
        marginTop: 'var(--uk-thumbnav-margin-vertical, -1rem)' // Customizable vertical margin for vertical spacing
    },
    '.uk-thumbnav-vertical > *': {
        paddingLeft: '0', // reset horizontal padding for vertical layout, obvious value
        paddingTop: 'var(--uk-thumbnav-item-padding-vertical, 1rem)' // Customizable vertical padding for item spacing in vertical layout
    }
};
