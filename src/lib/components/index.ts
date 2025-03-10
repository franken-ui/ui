import basic from './form/basic.js';
import customSelect from './form/custom-select.js';
import pin from './form/pin.js';
import range from './form/range.js';
import tag from './form/tag.js';
import position from './position.js';
import transition from './transition.js';

export const core = {
	'.uk-flex': {
		display: 'flex !important'
	},
	'.uk-flex-top': {
		alignItems: 'flex-start'
	},
	'.uk-flex-wrap-top': {
		alignContent: 'flex-start'
	},
	'.uk-margin-auto-vertical': {
		marginTop: 'auto !important',
		marginBottom: 'auto !important'
	},
	'.uk-overflow-auto': {
		overflow: 'auto'
	},
	'.uk-overflow-auto > :last-child': {
		marginBottom: '0'
	},
	...position,
	...transition,
	'.uk-text-truncate': {
		maxWidth: '100%',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap'
	},
	'th.uk-text-truncate, td.uk-text-truncate': {
		maxWidth: '0'
	},
	'.uk-text-break': {
		overflowWrap: 'break-word'
	},
	'th.uk-text-break, td.uk-text-break': {
		wordBreak: 'break-word'
	}
};

export const form = {
	...basic,
	...customSelect,
	...pin,
	...range,
	...tag,
	'.uk-form-xs': {
		'--uk-form-input-font-size': 'var(--uk-global-font-size-s)',
		'--uk-form-input-leading': 'var(--uk-global-leading-s)',
		'--uk-form-input-height': '1.75rem',
		'--uk-form-input-padding': '0.25rem 0.5rem'
	},
	'.uk-form-sm': {
		'--uk-form-input-font-size': 'var(--uk-global-font-size-s)',
		'--uk-form-input-leading': 'var(--uk-global-leading-s)',
		'--uk-form-input-height': '2rem',
		'--uk-form-input-padding': '0.25rem 0.5rem'
	},
	'.uk-form-md': {
		'--uk-form-input-height': '3rem',
		'--uk-form-input-padding': '0.5rem 1rem',
		'--uk-form-list-image-position': 'right 4px center'
	},
	'.uk-form-lg': {
		'--uk-form-input-height': '3.5rem',
		'--uk-form-input-padding': '0.5rem 1rem',
		'--uk-form-list-image-position': 'right 8px center'
	}
};

export { default as accordion } from './accordion.js';
export { default as alert } from './alert.js';
export { default as animation } from './animation.js';
export { default as badge } from './badge.js';
export { default as breadcrumb } from './breadcrumb.js';
export { default as button } from './button.js';
export { default as card } from './card.js';
export { default as chart } from './chart.js';
export { default as cmd } from './cmd.js';
export { default as comment } from './comment.js';
export { default as container } from './container.js';
export { default as cover } from './cover.js';
export { default as date } from './date.js';
export { default as divider } from './divider.js';
export { default as dotnav } from './dotnav.js';
export { default as drop } from './drop.js';
export { default as icon } from './icon.js';
export { default as label } from './label.js';
export { default as leader } from './leader.js';
export { default as lightbox } from './lightbox.js';
export { default as link } from './link.js';
export { default as list } from './list.js';
export { default as media } from './media.js';
export { default as modal } from './modal.js';
export { default as nav } from './nav.js';
export { default as notification } from './notification.js';
export { default as offcanvas } from './offcanvas.js';
export { default as pagination } from './pagination.js';
export { default as placeholder } from './placeholder.js';
export { default as preflight } from './preflight.js';
export { default as print } from './print.js';
export { default as progress } from './progress.js';
export { default as root } from './root.js';
export { default as slider } from './slider.js';
export { default as sortable } from './sortable.js';
export { default as spinner } from './spinner.js';
export { default as stepper } from './stepper.js';
export { default as sticky } from './sticky.js';
export { default as svg } from './svg.js';
export { default as switcher } from './switcher.js';
export { default as tab } from './tab.js';
export { default as table } from './table.js';
export { default as tag } from './tag.js';
export { default as themeSwitcher } from './theme-switcher.js';
export { default as thumbnav } from './thumbnav.js';
export { default as tooltip } from './tooltip.js';
export { default as typography } from './typography.js';
export { default as utility } from './utility.js';
