export default {
    '[uk-cover]:where(canvas, iframe, svg), [data-uk-cover]:where(canvas, iframe, svg)': {
        maxWidth: 'none',
        position: 'absolute',
        left: '50%',
        top: '50%',
        '--uk-position-translate-x': '-50%',
        '--uk-position-translate-y': '-50%',
        transform: 'translate(var(--uk-position-translate-x), var(--uk-position-translate-y))'
    },
    'iframe[uk-cover], iframe[data-uk-cover]': {
        pointerEvents: 'none'
    },
    '[uk-cover]:where(img, video), [data-uk-cover]:where(img, video)': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        objectFit: 'cover',
        objectPosition: 'center'
    },
    '.uk-cover-container': {
        overflow: 'hidden',
        position: 'relative'
    }
};
