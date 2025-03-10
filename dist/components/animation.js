export default {
    "[class*='uk-anmt-']": {
        animation: '0.5s ease-out both'
    },
    '.uk-anmt-fade': {
        animationName: 'uk-fade',
        animationDuration: '0.8s',
        animationTimingFunction: 'linear'
    },
    '.uk-anmt-scale-up': {
        animationName: 'uk-fade, uk-scale-up'
    },
    '.uk-anmt-scale-down': {
        animationName: 'uk-fade, uk-scale-down'
    },
    '.uk-anmt-slide-top': {
        animationName: 'uk-fade, uk-slide-top'
    },
    '.uk-anmt-slide-bottom': {
        animationName: 'uk-fade, uk-slide-bottom'
    },
    '.uk-anmt-slide-left': {
        animationName: 'uk-fade, uk-slide-left'
    },
    '.uk-anmt-slide-right': {
        animationName: 'uk-fade, uk-slide-right'
    },
    '.uk-anmt-slide-top-sm': {
        animationName: 'uk-fade, uk-slide-top-sm'
    },
    '.uk-anmt-slide-bottom-sm': {
        animationName: 'uk-fade, uk-slide-bottom-sm'
    },
    '.uk-anmt-slide-left-sm': {
        animationName: 'uk-fade, uk-slide-left-sm'
    },
    '.uk-anmt-slide-right-sm': {
        animationName: 'uk-fade, uk-slide-right-sm'
    },
    '.uk-anmt-slide-top-md': {
        animationName: 'uk-fade, uk-slide-top-md'
    },
    '.uk-anmt-slide-bottom-md': {
        animationName: 'uk-fade, uk-slide-bottom-md'
    },
    '.uk-anmt-slide-left-md': {
        animationName: 'uk-fade, uk-slide-left-md'
    },
    '.uk-anmt-slide-right-md': {
        animationName: 'uk-fade, uk-slide-right-md'
    },
    '.uk-anmt-kenburns': {
        animationName: 'uk-kenburns',
        animationDuration: '15s'
    },
    '.uk-anmt-shake': {
        animationName: 'uk-shake'
    },
    '.uk-anmt-stroke': {
        animationName: 'uk-stroke',
        animationDuration: '2s',
        strokeDasharray: 'var(--uk-anmt-stroke)'
    },
    '.uk-anmt-reverse': {
        animationDirection: 'reverse',
        animationTimingFunction: 'ease-in'
    },
    '.uk-anmt-fast': {
        animationDuration: '0.1s'
    },
    ".uk-anmt-toggle:not(:hover):not(:focus) [class*='uk-anmt-']": {
        animationName: 'none'
    },
    '@keyframes uk-fade': {
        '0%': {
            opacity: '0'
        },
        '100%': {
            opacity: '1'
        }
    },
    '@keyframes uk-scale-up': {
        '0%': {
            transform: 'scale(0.9)'
        },
        '100%': {
            transform: 'scale(1)'
        }
    },
    '@keyframes uk-scale-down': {
        '0%': {
            transform: 'scale(1.1)'
        },
        '100%': {
            transform: 'scale(1)'
        }
    },
    '@keyframes uk-slide-top': {
        '0%': {
            transform: 'translateY(-100%)'
        },
        '100%': {
            transform: 'translateY(0)'
        }
    },
    '@keyframes uk-slide-bottom': {
        '0%': {
            transform: 'translateY(100%)'
        },
        '100%': {
            transform: 'translateY(0)'
        }
    },
    '@keyframes uk-slide-left': {
        '0%': {
            transform: 'translateX(-100%)'
        },
        '100%': {
            transform: 'translateX(0)'
        }
    },
    '@keyframes uk-slide-right': {
        '0%': {
            transform: 'translateX(100%)'
        },
        '100%': {
            transform: 'translateX(0)'
        }
    },
    '@keyframes uk-slide-top-sm': {
        '0%': {
            transform: 'translateY(-10px)'
        },
        '100%': {
            transform: 'translateY(0)'
        }
    },
    '@keyframes uk-slide-bottom-sm': {
        '0%': {
            transform: 'translateY(10px)'
        },
        '100%': {
            transform: 'translateY(0)'
        }
    },
    '@keyframes uk-slide-left-sm': {
        '0%': {
            transform: 'translateX(-10px)'
        },
        '100%': {
            transform: 'translateX(0)'
        }
    },
    '@keyframes uk-slide-right-sm': {
        '0%': {
            transform: 'translateX(10px)'
        },
        '100%': {
            transform: 'translateX(0)'
        }
    },
    '@keyframes uk-slide-top-md': {
        '0%': {
            transform: 'translateY(-50px)'
        },
        '100%': {
            transform: 'translateY(0)'
        }
    },
    '@keyframes uk-slide-bottom-md': {
        '0%': {
            transform: 'translateY(50px)'
        },
        '100%': {
            transform: 'translateY(0)'
        }
    },
    '@keyframes uk-slide-left-md': {
        '0%': {
            transform: 'translateX(-50px)'
        },
        '100%': {
            transform: 'translateX(0)'
        }
    },
    '@keyframes uk-slide-right-md': {
        '0%': {
            transform: 'translateX(50px)'
        },
        '100%': {
            transform: 'translateX(0)'
        }
    },
    '@keyframes uk-kenburns': {
        '0%': {
            transform: 'scale(1)'
        },
        '100%': {
            transform: 'scale(1.2)'
        }
    },
    '@keyframes uk-shake': {
        '0%,100%': {
            transform: 'translateX(0)'
        },
        '10%': {
            transform: 'translateX(-9px)'
        },
        '20%': {
            transform: 'translateX(8px)'
        },
        '30%': {
            transform: 'translateX(-7px)'
        },
        '40%': {
            transform: 'translateX(6px)'
        },
        '50%': {
            transform: 'translateX(-5px)'
        },
        '60%': {
            transform: 'translateX(4px)'
        },
        '70%': {
            transform: 'translateX(-3px)'
        },
        '80%': {
            transform: 'translateX(2px)'
        },
        '90%': {
            transform: 'translateX(-1px)'
        }
    },
    '@keyframes uk-stroke': {
        '0%': {
            strokeDashoffset: 'var(--uk-anmt-stroke)'
        },
        '100%': {
            strokeDashoffset: '0'
        }
    }
};
