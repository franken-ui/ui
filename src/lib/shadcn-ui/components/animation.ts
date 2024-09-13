export default {
	"[class*='uk-animation-']": {
		animation: '0.5s ease-out both'
	},
	'.uk-animation-fade': {
		animationName: 'uk-fade',
		animationDuration: '0.8s',
		animationTimingFunction: 'linear'
	},
	'.uk-animation-scale-up': {
		animationName: 'uk-fade, uk-scale-up'
	},
	'.uk-animation-scale-down': {
		animationName: 'uk-fade, uk-scale-down'
	},
	'.uk-animation-slide-top': {
		animationName: 'uk-fade, uk-slide-top'
	},
	'.uk-animation-slide-bottom': {
		animationName: 'uk-fade, uk-slide-bottom'
	},
	'.uk-animation-slide-left': {
		animationName: 'uk-fade, uk-slide-left'
	},
	'.uk-animation-slide-right': {
		animationName: 'uk-fade, uk-slide-right'
	},
	'.uk-animation-slide-top-small': {
		animationName: 'uk-fade, uk-slide-top-small'
	},
	'.uk-animation-slide-bottom-small': {
		animationName: 'uk-fade, uk-slide-bottom-small'
	},
	'.uk-animation-slide-left-small': {
		animationName: 'uk-fade, uk-slide-left-small'
	},
	'.uk-animation-slide-right-small': {
		animationName: 'uk-fade, uk-slide-right-small'
	},
	'.uk-animation-slide-top-medium': {
		animationName: 'uk-fade, uk-slide-top-medium'
	},
	'.uk-animation-slide-bottom-medium': {
		animationName: 'uk-fade, uk-slide-bottom-medium'
	},
	'.uk-animation-slide-left-medium': {
		animationName: 'uk-fade, uk-slide-left-medium'
	},
	'.uk-animation-slide-right-medium': {
		animationName: 'uk-fade, uk-slide-right-medium'
	},
	'.uk-animation-kenburns': {
		animationName: 'uk-kenburns',
		animationDuration: '15s'
	},
	'.uk-animation-shake': {
		animationName: 'uk-shake'
	},
	'.uk-animation-stroke': {
		animationName: 'uk-stroke',
		animationDuration: '2s',
		strokeDasharray: 'var(--uk-animation-stroke)'
	},
	'.uk-animation-reverse': {
		animationDirection: 'reverse',
		animationTimingFunction: 'ease-in'
	},
	'.uk-animation-fast': {
		animationDuration: '0.1s'
	},
	".uk-animation-toggle:not(:hover):not(:focus) [class*='uk-animation-']": {
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
	'@keyframes uk-slide-top-small': {
		'0%': {
			transform: 'translateY(-10px)'
		},
		'100%': {
			transform: 'translateY(0)'
		}
	},
	'@keyframes uk-slide-bottom-small': {
		'0%': {
			transform: 'translateY(10px)'
		},
		'100%': {
			transform: 'translateY(0)'
		}
	},
	'@keyframes uk-slide-left-small': {
		'0%': {
			transform: 'translateX(-10px)'
		},
		'100%': {
			transform: 'translateX(0)'
		}
	},
	'@keyframes uk-slide-right-small': {
		'0%': {
			transform: 'translateX(10px)'
		},
		'100%': {
			transform: 'translateX(0)'
		}
	},
	'@keyframes uk-slide-top-medium': {
		'0%': {
			transform: 'translateY(-50px)'
		},
		'100%': {
			transform: 'translateY(0)'
		}
	},
	'@keyframes uk-slide-bottom-medium': {
		'0%': {
			transform: 'translateY(50px)'
		},
		'100%': {
			transform: 'translateY(0)'
		}
	},
	'@keyframes uk-slide-left-medium': {
		'0%': {
			transform: 'translateX(-50px)'
		},
		'100%': {
			transform: 'translateX(0)'
		}
	},
	'@keyframes uk-slide-right-medium': {
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
			strokeDashoffset: 'var(--uk-animation-stroke)'
		},
		'100%': {
			strokeDashoffset: '0'
		}
	}
};
