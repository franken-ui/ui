declare const _default: {
    '@media print': {
        '*,*::before,*::after': {
            background: string;
            color: string;
            boxShadow: string;
            textShadow: string;
        };
        'a,a:visited': {
            textDecoration: string;
        };
        'pre,blockquote': {
            border: string;
            pageBreakInside: string;
        };
        thead: {
            display: string;
        };
        'tr,img': {
            pageBreakInside: string;
        };
        img: {
            maxWidth: string;
        };
        '@page': {
            margin: string;
        };
        'p,h2,h3': {
            orphans: string;
            widows: string;
        };
        'h2,h3': {
            pageBreakAfter: string;
        };
    };
};
export default _default;
