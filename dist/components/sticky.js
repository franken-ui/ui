export default {
    '.uk-sticky': {
        position: 'relative',
        zIndex: '980',
        boxSizing: 'border-box'
    },
    '.uk-sticky-fixed': {
        margin: '0 !important',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
    },
    ".uk-sticky[class*='uk-anmt-']": {
        animationDuration: '0.2s'
    },
    '.uk-sticky.uk-anmt-reverse': {
        animationDuration: '0.2s'
    },
    '.uk-sticky-placeholder': {
        pointerEvents: 'none'
    }
};
