import merge from 'lodash/merge.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const rules: CSSRuleObject = {
	'.uk-offcanvas': {
		display: 'none',
		position: 'fixed',
		top: '0',
		bottom: '0',
		left: '0',
		zIndex: '1000'
	},
	'.uk-offcanvas-flip .uk-offcanvas': { right: '0', left: 'auto' },
	'.uk-offcanvas-bar': {
		position: 'absolute',
		top: '0',
		bottom: '0',
		left: '-270px',
		boxSizing: 'border-box',
		width: '270px',
		padding: '20px 20px',
		backgroundColor: '#222',
		overflowY: 'auto'
	},
	'.uk-offcanvas-flip .uk-offcanvas-bar': { left: 'auto', right: '-270px' },
	'.uk-open > .uk-offcanvas-bar': { left: '0' },
	'.uk-offcanvas-flip .uk-open > .uk-offcanvas-bar': {
		left: 'auto',
		right: '0'
	},
	'.uk-offcanvas-bar-animation': { transition: 'left 0.3s ease-out' },
	'.uk-offcanvas-flip .uk-offcanvas-bar-animation': {
		transitionProperty: 'right'
	},
	'.uk-offcanvas-reveal': {
		position: 'absolute',
		top: '0',
		bottom: '0',
		left: '0',
		width: '0',
		overflow: 'hidden',
		transition: 'width 0.3s ease-out'
	},
	'.uk-offcanvas-reveal .uk-offcanvas-bar': { left: '0' },
	'.uk-offcanvas-flip .uk-offcanvas-reveal .uk-offcanvas-bar': {
		left: 'auto',
		right: '0'
	},
	'.uk-open > .uk-offcanvas-reveal': { width: '270px' },
	'.uk-offcanvas-flip .uk-offcanvas-reveal': { right: '0', left: 'auto' },
	'.uk-offcanvas-close': {
		position: 'absolute',
		zIndex: '1000',
		top: '5px',
		right: '5px',
		padding: '5px'
	},
	'.uk-offcanvas-close:first-child + *': { marginTop: '0' },
	'.uk-offcanvas-overlay': { width: '100vw', touchAction: 'none' },
	'.uk-offcanvas-overlay::before': {
		content: "''",
		position: 'absolute',
		top: '0',
		bottom: '0',
		left: '0',
		right: '0',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		opacity: '0',
		transition: 'opacity 0.15s linear'
	},
	'.uk-offcanvas-overlay.uk-open::before': { opacity: '1' },
	'.uk-offcanvas-page, .uk-offcanvas-container': {
		overflowX: ['hidden', 'clip']
	},
	'.uk-offcanvas-container': {
		position: 'relative',
		left: '0',
		transition: 'left 0.3s ease-out',
		boxSizing: 'border-box',
		width: '100%'
	},
	':not(.uk-offcanvas-flip).uk-offcanvas-container-animation': {
		left: '270px'
	},
	'.uk-offcanvas-flip.uk-offcanvas-container-animation': { left: '-270px' }
};

export const media: CSSRuleObject = {
	'@media (min-width: 640px)': {
		'.uk-offcanvas-bar': {
			left: '-350px',
			width: '350px',
			padding: '30px 30px'
		},
		'.uk-offcanvas-flip .uk-offcanvas-bar': { right: '-350px' },
		'.uk-open > .uk-offcanvas-reveal': { width: '350px' },
		'.uk-offcanvas-close': { top: '10px', right: '10px' },
		':not(.uk-offcanvas-flip).uk-offcanvas-container-animation': {
			left: '350px'
		},
		'.uk-offcanvas-flip.uk-offcanvas-container-animation': { left: '-350px' }
	}
};

export interface OffcanvasHooks {
	'hook-bar': CSSRuleObject;
	'hook-close': CSSRuleObject;
	'hook-overlay': CSSRuleObject;
	'hook-misc': CSSRuleObject;
}

export interface Args {
	hooks: Partial<OffcanvasHooks>;
}

export const addHooks = (args: Args): CSSRuleObject => {
	const { hooks } = args;

	const defaultHooks: OffcanvasHooks = {
		'hook-bar': {},
		'hook-close': {},
		'hook-overlay': {},
		'hook-misc': {}
	};

	const _hooks = merge(defaultHooks, hooks);

	return {
		'.uk-offcanvas-bar': {
			..._hooks['hook-bar']
		},
		'.uk-offcanvas-close': {
			..._hooks['hook-close']
		},
		'.uk-offcanvas-overlay::before': {
			..._hooks['hook-overlay']
		},
		..._hooks['hook-misc']
	};
};
