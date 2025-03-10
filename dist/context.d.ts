import type { Components, CSSRuleObject, Options } from './types.js';
export declare const defaults: {
    '.uk-text-truncate': {
        maxWidth: string;
        overflow: string;
        textOverflow: string;
        whiteSpace: string;
    };
    'th.uk-text-truncate, td.uk-text-truncate': {
        maxWidth: string;
    };
    '.uk-text-break': {
        overflowWrap: string;
    };
    'th.uk-text-break, td.uk-text-break': {
        wordBreak: string;
    };
    ":where(.uk-transition-fade), :where([class*='uk-transition-scale']), :where([class*='uk-transition-slide'])": {
        '--uk-position-translate-x': string;
        '--uk-position-translate-y': string;
    };
    ".uk-transition-fade, [class*='uk-transition-scale'], [class*='uk-transition-slide']": {
        '--uk-translate-x': string;
        '--uk-translate-y': string;
        '--uk-scale-x': string;
        '--uk-scale-y': string;
        transform: string;
        transition: string;
        transitionProperty: string;
        opacity: string;
    };
    '.uk-transition-toggle:hover .uk-transition-fade, .uk-transition-toggle:focus .uk-transition-fade, .uk-transition-toggle .uk-transition-fade:focus-within, .uk-transition-active.uk-active .uk-transition-fade': {
        opacity: string;
    };
    "[class*='uk-transition-scale']": {
        WebkitBackfaceVisibility: string;
    };
    '.uk-transition-scale-up': {
        '--uk-scale-x': string;
        '--uk-scale-y': string;
    };
    '.uk-transition-scale-down': {
        '--uk-scale-x': string;
        '--uk-scale-y': string;
    };
    '.uk-transition-toggle:hover .uk-transition-scale-up, .uk-transition-toggle:focus .uk-transition-scale-up, .uk-transition-toggle .uk-transition-scale-up:focus-within, .uk-transition-active.uk-active .uk-transition-scale-up': {
        '--uk-scale-x': string;
        '--uk-scale-y': string;
        opacity: string;
    };
    '.uk-transition-toggle:hover .uk-transition-scale-down, .uk-transition-toggle:focus .uk-transition-scale-down, .uk-transition-toggle .uk-transition-scale-down:focus-within, .uk-transition-active.uk-active .uk-transition-scale-down': {
        '--uk-scale-x': string;
        '--uk-scale-y': string;
        opacity: string;
    };
    '.uk-transition-slide-top': {
        '--uk-translate-y': string;
    };
    '.uk-transition-slide-bottom': {
        '--uk-translate-y': string;
    };
    '.uk-transition-slide-left': {
        '--uk-translate-x': string;
    };
    '.uk-transition-slide-right': {
        '--uk-translate-x': string;
    };
    '.uk-transition-slide-top-sm': {
        '--uk-translate-y': string;
    };
    '.uk-transition-slide-bottom-sm': {
        '--uk-translate-y': string;
    };
    '.uk-transition-slide-left-sm': {
        '--uk-translate-x': string;
    };
    '.uk-transition-slide-right-sm': {
        '--uk-translate-x': string;
    };
    '.uk-transition-slide-top-md': {
        '--uk-translate-y': string;
    };
    '.uk-transition-slide-bottom-md': {
        '--uk-translate-y': string;
    };
    '.uk-transition-slide-left-md': {
        '--uk-translate-x': string;
    };
    '.uk-transition-slide-right-md': {
        '--uk-translate-x': string;
    };
    ".uk-transition-toggle:hover [class*='uk-transition-slide'], .uk-transition-toggle:focus [class*='uk-transition-slide'], .uk-transition-toggle [class*='uk-transition-slide']:focus-within, .uk-transition-active.uk-active [class*='uk-transition-slide']": {
        '--uk-translate-x': string;
        '--uk-translate-y': string;
        opacity: string;
    };
    '.uk-transition-opaque': {
        opacity: string;
    };
    '.uk-transition-slow': {
        transitionDuration: string;
    };
    '.uk-transition-disable, .uk-transition-disable *': {
        transition: string;
    };
    "[class*='uk-position-top'], [class*='uk-position-bottom'], [class*='uk-position-left'], [class*='uk-position-right'], [class*='uk-position-center']": {
        position: string;
        maxWidth: string;
        boxSizing: string;
    };
    '.uk-position-top': {
        top: string;
        left: string;
        right: string;
    };
    '.uk-position-bottom': {
        bottom: string;
        left: string;
        right: string;
    };
    '.uk-position-left': {
        top: string;
        bottom: string;
        left: string;
    };
    '.uk-position-right': {
        top: string;
        bottom: string;
        right: string;
    };
    '.uk-position-top-left': {
        top: string;
        left: string;
    };
    '.uk-position-top-right': {
        top: string;
        right: string;
    };
    '.uk-position-bottom-left': {
        bottom: string;
        left: string;
    };
    '.uk-position-bottom-right': {
        bottom: string;
        right: string;
    };
    '.uk-position-center': {
        top: string;
        left: string;
        '--uk-position-translate-x': string;
        '--uk-position-translate-y': string;
        transform: string;
        width: string;
    };
    ".uk-position-center-vertical, [class*='uk-position-center-left'], [class*='uk-position-center-right']": {
        top: string;
        '--uk-position-translate-y': string;
        transform: string;
    };
    '.uk-position-center-left': {
        left: string;
    };
    '.uk-position-center-right': {
        right: string;
    };
    '.uk-position-center-vertical': {
        left: string;
        right: string;
    };
    '.uk-position-center-left-out': {
        right: string;
        width: string;
    };
    '.uk-position-center-right-out': {
        left: string;
        width: string;
    };
    '.uk-position-bottom-center, .uk-position-center-horizontal, .uk-position-top-center': {
        left: string;
        '--uk-position-translate-x': string;
        transform: string;
        width: string;
    };
    '.uk-position-top-center': {
        top: string;
    };
    '.uk-position-bottom-center': {
        bottom: string;
    };
    '.uk-position-center-horizontal': {
        top: string;
        bottom: string;
    };
    '.uk-position-cover': {
        position: string;
        top: string;
        bottom: string;
        left: string;
        right: string;
    };
    '.uk-position-sm': {
        margin: string;
        '--uk-position-margin-offset': string;
    };
    '.uk-position-md': {
        margin: string;
        '--uk-position-margin-offset': string;
    };
    '.uk-position-lg': {
        margin: string;
        '--uk-position-margin-offset': string;
    };
    '.uk-position-relative': {
        position: string;
    };
    '.uk-position-absolute': {
        position: string;
    };
    '.uk-position-fixed': {
        position: string;
    };
    '.uk-position-sticky': {
        position: string;
    };
    '.uk-position-z-index': {
        zIndex: string;
    };
    '.uk-position-z-index-zero': {
        zIndex: string;
    };
    '.uk-position-z-index-negative': {
        zIndex: string;
    };
    '.uk-position-z-index-high': {
        zIndex: string;
    };
    '.uk-position-xs': {
        margin: string;
        '--uk-position-margin-offset': string;
    };
    '.uk-position': {
        margin: string;
        '--uk-position-margin-offset': string;
    };
    '.uk-position-xl': {
        margin: string;
        '--uk-position-margin-offset': string;
    };
    '.uk-flex': {
        display: string;
    };
    '.uk-flex-top': {
        alignItems: string;
    };
    '.uk-flex-wrap-top': {
        alignContent: string;
    };
    '.uk-margin-auto-vertical': {
        marginTop: string;
        marginBottom: string;
    };
    '.uk-overflow-auto': {
        overflow: string;
    };
    '.uk-overflow-auto > :last-child': {
        marginBottom: string;
    };
    ':root': {
        '--chart-1': string;
        '--chart-2': string;
        '--chart-3': string;
        '--chart-4': string;
        '--chart-5': string;
        '--uk-breakpoint-s': string;
        '--uk-breakpoint-m': string;
        '--uk-breakpoint-l': string;
        '--uk-breakpoint-xl': string;
        '--uk-global-blur': string;
        '--uk-global-font-size': string;
        '--uk-global-leading': string;
        '--uk-global-font-size-s': string;
        '--uk-global-leading-s': string;
        '--uk-global-radius-s': string;
        '--uk-global-radius': string;
        '--uk-global-shadow-s': string;
        '--uk-global-shadow': string;
        '--uk-btn-font-size': string;
        '--uk-btn-leading': string;
        '--uk-btn-padding': string;
        '--uk-btn-height': string;
        '--uk-btn-radius': string;
        '--uk-btn-shadow': string;
        '--uk-cal-cell-size': string;
        '--uk-cal-cell-radius': string;
        '--uk-cal-cell-header-font-size': string;
        '--uk-cal-cell-body-font-size': string;
        '--uk-datepicker-spacing': string;
        '--uk-form-input-radius': string;
        '--uk-form-input-shadow': string;
        '--uk-form-input-height': string;
        '--uk-form-input-font-size': string;
        '--uk-form-input-leading': string;
        '--uk-form-input-padding': string;
        '--uk-form-list-image-position': string;
        '--uk-form-toggle-switch-shadow': string;
        '--uk-form-radio-radius': string;
        '--uk-form-radio-shadow': string;
        '--uk-leader-fill-content': string;
        '--uk-modal-padding': string;
        '--uk-modal-padding-header': string;
        '--uk-modal-padding-body': string;
        '--uk-modal-padding-footer': string;
        '--uk-modal-padding-top-between': string;
        '--uk-modal-padding-top-after-header': string;
        '--uk-modal-padding-bottom-scrollable': string;
        '--uk-modal-padding-top-after-scrollable': string;
        '--uk-modal-radius': string;
        '--uk-modal-overlay-blur': string;
        '--uk-offcanvas-bar-width': string;
        '--uk-offcanvas-bar-width-i': string;
        '--uk-offcanvas-overlay-blur': string;
        '--uk-nav-item-padding': string;
        '--uk-nav-item-margin': string;
        '--uk-nav-sub-item-padding': string;
        '--uk-nav-sub-item-margin': string;
        '--uk-nav-sub-width': string;
        '--uk-position-margin-offset': string;
    };
    '.dark': {
        '--chart-1': string;
        '--chart-5': string;
        '--chart-3': string;
        '--chart-4': string;
        '--chart-2': string;
    };
    body: {
        fontSize: string;
        lineHeight: string;
    };
    '.uk-accordion-title:focus-visible, .uk-alert-close:focus-visible, .uk-alert a:not([class]):focus-visible, .uk-badge:focus-visible, .uk-breadcrumb > * > *:focus-visible, .uk-btn:focus-visible, .uk-cal table tbody tr td button:focus-visible, .uk-close:focus-visible, .uk-input-range-knob:focus-visible, .uk-toggle-switch:focus-visible, a.uk-link-muted:focus-visible, .uk-link-muted a:focus-visible, .uk-link-toggle:focus-visible .uk-link-muted:focus-visible, a.uk-link-reset:focus-visible, .uk-link-reset a:focus-visible, .uk-link-toggle:focus-visible, .uk-link:focus-visible, .uk-nav li > a:focus-visible, .uk-slidenav:focus-visible, .uk-tab > * > a:focus-visible, .uk-tab-alt > * > a:focus-visible, .uk-ts-value button:focus-visible, .uk-lightbox :focus-visible': {
        outlineWidth: string;
        outlineStyle: string;
        outlineColor: string;
        transitionProperty: string;
        transitionDuration: string;
        transitionTimingFunction: string;
    };
};
export declare const components: Components;
export declare function palettes(options?: Options): CSSRuleObject;
