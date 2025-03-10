export default {
    ":where(.uk-transition-fade), :where([class*='uk-transition-scale']), :where([class*='uk-transition-slide'])": {
        '--uk-position-translate-x': '0',
        '--uk-position-translate-y': '0'
    },
    ".uk-transition-fade, [class*='uk-transition-scale'], [class*='uk-transition-slide']": {
        '--uk-translate-x': '0',
        '--uk-translate-y': '0',
        '--uk-scale-x': '1',
        '--uk-scale-y': '1',
        transform: 'translate(var(--uk-position-translate-x), var(--uk-position-translate-y)) translate(var(--uk-translate-x), var(--uk-translate-y)) scale(var(--uk-scale-x), var(--uk-scale-y))',
        transition: '0.3s ease-out',
        transitionProperty: 'opacity, transform, filter',
        opacity: '0'
    },
    '.uk-transition-toggle:hover .uk-transition-fade, .uk-transition-toggle:focus .uk-transition-fade, .uk-transition-toggle .uk-transition-fade:focus-within, .uk-transition-active.uk-active .uk-transition-fade': {
        opacity: '1'
    },
    "[class*='uk-transition-scale']": {
        WebkitBackfaceVisibility: 'hidden'
    },
    '.uk-transition-scale-up': {
        '--uk-scale-x': '1',
        '--uk-scale-y': '1'
    },
    '.uk-transition-scale-down': {
        '--uk-scale-x': '1.03',
        '--uk-scale-y': '1.03'
    },
    '.uk-transition-toggle:hover .uk-transition-scale-up, .uk-transition-toggle:focus .uk-transition-scale-up, .uk-transition-toggle .uk-transition-scale-up:focus-within, .uk-transition-active.uk-active .uk-transition-scale-up': {
        '--uk-scale-x': '1.03',
        '--uk-scale-y': '1.03',
        opacity: '1'
    },
    '.uk-transition-toggle:hover .uk-transition-scale-down, .uk-transition-toggle:focus .uk-transition-scale-down, .uk-transition-toggle .uk-transition-scale-down:focus-within, .uk-transition-active.uk-active .uk-transition-scale-down': {
        '--uk-scale-x': '1',
        '--uk-scale-y': '1',
        opacity: '1'
    },
    '.uk-transition-slide-top': {
        '--uk-translate-y': '-100%'
    },
    '.uk-transition-slide-bottom': {
        '--uk-translate-y': '100%'
    },
    '.uk-transition-slide-left': {
        '--uk-translate-x': '-100%'
    },
    '.uk-transition-slide-right': {
        '--uk-translate-x': '100%'
    },
    '.uk-transition-slide-top-sm': {
        '--uk-translate-y': 'calc(-1 * 10px)'
    },
    '.uk-transition-slide-bottom-sm': {
        '--uk-translate-y': '10px'
    },
    '.uk-transition-slide-left-sm': {
        '--uk-translate-x': 'calc(-1 * 10px)'
    },
    '.uk-transition-slide-right-sm': {
        '--uk-translate-x': '10px'
    },
    '.uk-transition-slide-top-md': {
        '--uk-translate-y': 'calc(-1 * 3.5rem)'
    },
    '.uk-transition-slide-bottom-md': {
        '--uk-translate-y': '3.5rem'
    },
    '.uk-transition-slide-left-md': {
        '--uk-translate-x': 'calc(-1 * 3.5rem)'
    },
    '.uk-transition-slide-right-md': {
        '--uk-translate-x': '3.5rem'
    },
    ".uk-transition-toggle:hover [class*='uk-transition-slide'], .uk-transition-toggle:focus [class*='uk-transition-slide'], .uk-transition-toggle [class*='uk-transition-slide']:focus-within, .uk-transition-active.uk-active [class*='uk-transition-slide']": {
        '--uk-translate-x': '0',
        '--uk-translate-y': '0',
        opacity: '1'
    },
    '.uk-transition-opaque': {
        opacity: '1'
    },
    '.uk-transition-slow': {
        transitionDuration: '0.7s'
    },
    '.uk-transition-disable, .uk-transition-disable *': {
        transition: 'none !important'
    }
};
