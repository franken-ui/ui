import { root, accordion, alert, animation, badge, breadcrumb, button, card, chart, cmd, comment, container, core, cover, customSelect, date, divider, dotnav, drop, form, icon, inputPin, inputRange, inputTag, media, modal, nav, notification, offcanvas, label, leader, lightbox, link, list, keyval, pagination, placeholder, position, print, progress, rte, slider, sortable, spinner, stepper, sticky, svg, switcher, tab, table, tag, themeSwitcher, thumbnav, tooltip, transition, typography, utility } from './components/index.js';
import { variables } from './index.js';
import palette from './palette.js';
export const defaults = {
    ':root': root[':root'],
    '.dark': root['.dark'],
    body: {
        fontSize: 'var(--uk-global-font-size)',
        lineHeight: 'var(--uk-global-leading)'
    },
    '.uk-accordion-title:focus-visible, .uk-alert-close:focus-visible, .uk-alert a:not([class]):focus-visible, .uk-badge:focus-visible, .uk-breadcrumb > * > *:focus-visible, .uk-btn:focus-visible, .uk-cal table tbody tr td button:focus-visible, .uk-close:focus-visible, .uk-input-range-knob:focus-visible, .uk-toggle-switch:focus-visible, a.uk-link-muted:focus-visible, .uk-link-muted a:focus-visible, .uk-link-toggle:focus-visible .uk-link-muted:focus-visible, a.uk-link-reset:focus-visible, .uk-link-reset a:focus-visible, .uk-link-toggle:focus-visible, .uk-link:focus-visible, .uk-nav li > a:focus-visible, .uk-slidenav:focus-visible, .uk-tab > * > a:focus-visible, .uk-tab-alt > * > a:focus-visible, .uk-ts-value button:focus-visible, .uk-lightbox :focus-visible': {
        // Split outline into individual properties
        outlineWidth: 'var(--uk-global-focus-outline-width, 2px)',
        outlineStyle: 'var(--uk-global-focus-outline-style, dotted)',
        outlineColor: 'var(--uk-global-focus-outline-color, hsl(var(--ring)))',
        // Add transition for focus state
        transitionProperty: 'var(--uk-global-focus-transition-property, outline)',
        transitionDuration: 'var(--uk-global-focus-transition-duration, 150ms)',
        transitionTimingFunction: 'var(--uk-global-focus-transition-timing, ease-in-out)'
    },
    ...core
};
export const components = {
    accordion,
    alert,
    animation,
    badge,
    breadcrumb,
    button,
    card,
    chart,
    cmd,
    comment,
    container,
    cover,
    'custom-select': customSelect,
    date,
    divider,
    dotnav,
    drop,
    form,
    icon,
    'input-pin': inputPin,
    'input-range': inputRange,
    'input-tag': inputTag,
    label,
    leader,
    lightbox,
    link,
    keyval,
    list,
    modal,
    nav,
    notification,
    offcanvas,
    pagination,
    placeholder,
    position,
    progress,
    rte,
    slider,
    sortable,
    spinner,
    stepper,
    sticky,
    svg,
    switcher,
    tab,
    table,
    tag,
    'theme-switcher': themeSwitcher,
    thumbnav,
    tooltip,
    transition,
    typography,
    utility,
    media,
    print
};
export function palettes(options) {
    const all = options?.customPalette ? { ...variables, ...options.customPalette } : variables;
    return palette(all);
}
