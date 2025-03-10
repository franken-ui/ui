export default {
    '@media print': {
        '*,*::before,*::after': {
            background: 'transparent !important',
            color: 'black !important',
            boxShadow: 'none !important',
            textShadow: 'none !important'
        },
        'a,a:visited': {
            textDecoration: 'underline'
        },
        'pre,blockquote': {
            border: '1px solid #999',
            pageBreakInside: 'avoid'
        },
        thead: {
            display: 'table-header-group'
        },
        'tr,img': {
            pageBreakInside: 'avoid'
        },
        img: {
            maxWidth: '100% !important'
        },
        '@page': {
            margin: '0.5cm'
        },
        'p,h2,h3': {
            orphans: '3',
            widows: '3'
        },
        'h2,h3': {
            pageBreakAfter: 'avoid'
        }
    }
};
