export default {
    "[class*='uk-position-top'], [class*='uk-position-bottom'], [class*='uk-position-left'], [class*='uk-position-right'], [class*='uk-position-center']": {
        position: 'absolute !important',
        maxWidth: 'calc(100% - (var(--uk-position-margin-offset) * 2))',
        boxSizing: 'border-box'
    },
    '.uk-position-top': {
        top: '0',
        left: '0',
        right: '0'
    },
    '.uk-position-bottom': {
        bottom: '0',
        left: '0',
        right: '0'
    },
    '.uk-position-left': {
        top: '0',
        bottom: '0',
        left: '0'
    },
    '.uk-position-right': {
        top: '0',
        bottom: '0',
        right: '0'
    },
    '.uk-position-top-left': {
        top: '0',
        left: '0'
    },
    '.uk-position-top-right': {
        top: '0',
        right: '0'
    },
    '.uk-position-bottom-left': {
        bottom: '0',
        left: '0'
    },
    '.uk-position-bottom-right': {
        bottom: '0',
        right: '0'
    },
    '.uk-position-center': {
        top: 'calc(50% - var(--uk-position-margin-offset))',
        left: 'calc(50% - var(--uk-position-margin-offset))',
        '--uk-position-translate-x': '-50%',
        '--uk-position-translate-y': '-50%',
        transform: 'translate(var(--uk-position-translate-x), var(--uk-position-translate-y))',
        width: 'max-content'
    },
    ".uk-position-center-vertical, [class*='uk-position-center-left'], [class*='uk-position-center-right']": {
        top: 'calc(50% - var(--uk-position-margin-offset))',
        '--uk-position-translate-y': '-50%',
        transform: 'translate(0, var(--uk-position-translate-y))'
    },
    '.uk-position-center-left': {
        left: '0'
    },
    '.uk-position-center-right': {
        right: '0'
    },
    '.uk-position-center-vertical': {
        left: '0',
        right: '0'
    },
    '.uk-position-center-left-out': {
        right: '100%',
        width: 'max-content'
    },
    '.uk-position-center-right-out': {
        left: '100%',
        width: 'max-content'
    },
    '.uk-position-bottom-center, .uk-position-center-horizontal, .uk-position-top-center': {
        left: 'calc(50% - var(--uk-position-margin-offset))',
        '--uk-position-translate-x': '-50%',
        transform: 'translate(var(--uk-position-translate-x), 0)',
        width: 'max-content'
    },
    '.uk-position-top-center': {
        top: '0'
    },
    '.uk-position-bottom-center': {
        bottom: '0'
    },
    '.uk-position-center-horizontal': {
        top: '0',
        bottom: '0'
    },
    '.uk-position-cover': {
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0'
    },
    '.uk-position-sm': {
        margin: '0.5rem',
        '--uk-position-margin-offset': '0.5rem'
    },
    '.uk-position-md': {
        margin: '2.5rem',
        '--uk-position-margin-offset': '2.5rem'
    },
    '.uk-position-lg': {
        margin: '5rem',
        '--uk-position-margin-offset': '5rem'
    },
    '.uk-position-relative': {
        position: 'relative !important'
    },
    '.uk-position-absolute': {
        position: 'absolute !important'
    },
    '.uk-position-fixed': {
        position: 'fixed !important'
    },
    '.uk-position-sticky': {
        position: 'sticky !important'
    },
    '.uk-position-z-index': {
        zIndex: '1'
    },
    '.uk-position-z-index-zero': {
        zIndex: '0'
    },
    '.uk-position-z-index-negative': {
        zIndex: '-1'
    },
    '.uk-position-z-index-high': {
        zIndex: '990'
    },
    '.uk-position-xs': {
        margin: '0.25rem',
        '--uk-position-margin-offset': '0.25rem'
    },
    '.uk-position': {
        margin: '1rem',
        '--uk-position-margin-offset': '1rem'
    },
    '.uk-position-xl': {
        margin: '10rem',
        '--uk-position-margin-offset': '10rem'
    }
};
