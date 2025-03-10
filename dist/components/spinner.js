export default {
    '.uk-spinner > *': {
        animation: 'uk-spinner-rotate 1.4s linear infinite'
    },
    '@keyframes uk-spinner-rotate': {
        '0%': {
            transform: 'rotate(0deg)'
        },
        '100%': {
            transform: 'rotate(270deg)'
        }
    },
    '.uk-spinner > * > *': {
        strokeDasharray: '88px',
        strokeDashoffset: '0',
        transformOrigin: 'center',
        animation: 'uk-spinner-dash 1.4s ease-in-out infinite',
        strokeWidth: '1',
        strokeLinecap: 'round'
    },
    '@keyframes uk-spinner-dash': {
        '0%': {
            strokeDashoffset: '88px'
        },
        '50%': {
            strokeDashoffset: '22px',
            transform: 'rotate(135deg)'
        },
        '100%': {
            strokeDashoffset: '88px',
            transform: 'rotate(450deg)'
        }
    },
    '.uk-spinner': {}
};
