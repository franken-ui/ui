export default {
    '.uk-container': {
        display: 'var(--uk-container-display, flow-root)',
        boxSizing: 'var(--uk-container-box-sizing, content-box)',
        maxWidth: 'var(--uk-container-max-width, 1200px)',
        marginLeft: 'var(--uk-container-margin-x, auto)',
        marginRight: 'var(--uk-container-margin-x, auto)',
        paddingLeft: 'var(--uk-container-padding-x, 1rem)',
        paddingRight: 'var(--uk-container-padding-x, 1rem)'
    },
    '.uk-container > :last-child': {
        marginBottom: 'var(--uk-container-last-child-margin, 0)'
    },
    '.uk-container .uk-container': {
        paddingLeft: 'var(--uk-nested-container-padding-x, 0)',
        paddingRight: 'var(--uk-nested-container-padding-x, 0)'
    },
    '.uk-container-xs': {
        maxWidth: 'var(--uk-container-xs-max-width, 750px)'
    },
    '.uk-container-sm': {
        maxWidth: 'var(--uk-container-sm-max-width, 900px)'
    },
    '.uk-container-lg': {
        maxWidth: 'var(--uk-container-lg-max-width, 1400px)'
    },
    '.uk-container-xl': {
        maxWidth: 'var(--uk-container-xl-max-width, 1600px)'
    },
    '.uk-container-expand': {
        maxWidth: 'var(--uk-container-expand-max-width, none)'
    },
    '.uk-container-expand-left': {
        marginLeft: 'var(--uk-container-expand-left-margin, 0)'
    },
    '.uk-container-expand-right': {
        marginRight: 'var(--uk-container-expand-right-margin, 0)'
    },
    '.uk-container-item-padding-remove-left, .uk-container-item-padding-remove-right': {
        width: 'var(--uk-container-item-padding-remove-width, calc(100% + 1rem))'
    },
    '.uk-container-item-padding-remove-left': {
        marginLeft: 'var(--uk-container-item-padding-remove-left-margin, -1rem)'
    },
    '.uk-container-item-padding-remove-right': {
        marginRight: 'var(--uk-container-item-padding-remove-right-margin, -1rem)'
    }
};
