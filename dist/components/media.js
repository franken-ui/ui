export default {
    '@media (min-width: 640px)': {
        '.uk-dropbar': {
            paddingLeft: 'var(--uk-dropbar-padding-x-sm, 2rem)',
            paddingRight: 'var(--uk-dropbar-padding-x-sm, 2rem)'
        },
        '.uk-dropdown-dropbar': {
            '--uk-position-viewport-offset': '2rem'
        },
        '.uk-container': {
            '--uk-container-padding-x': '2rem'
        },
        '.uk-container-expand-left.uk-container-xs, .uk-container-expand-right.uk-container-xs': {
            '--uk-container-xs-max-width': 'calc(50% + (750px / 2) - 2rem)'
        },
        '.uk-container-expand-left.uk-container-sm, .uk-container-expand-right.uk-container-sm': {
            '--uk-container-sm-max-width': 'calc(50% + (900px / 2) - 2rem)'
        },
        '.uk-container-item-padding-remove-left, .uk-container-item-padding-remove-right': {
            '--uk-container-item-padding-remove-width': 'calc(100% + 2rem)'
        },
        '.uk-container-item-padding-remove-left': {
            '--uk-container-item-padding-remove-left-margin': '-2rem'
        },
        '.uk-container-item-padding-remove-right': {
            '--uk-container-item-padding-remove-right-margin': '-2rem'
        },
        '.uk-stepper': {
            justifyContent: 'center', // overrides default 'start' from stepper.ts
            flexWrap: 'nowrap' // overrides default 'wrap' from stepper.ts
        },
        '.uk-stepper-default li': {
            width: 'var(--uk-stepper-item-width-sm, 100%)' // added -sm suffix for breakpoint specificity
        },
        '.uk-stepper-counter.uk-stepper-default li::before': {
            content: 'counter(item-counter)', // align with stepper.ts counter name
            display: 'inline-flex', // obvious value for layout
            marginRight: 'var(--uk-stepper-counter-margin-horizontal-end, .5rem)' // align with stepper.ts naming pattern
        },
        '.uk-stepper-default li:not(:last-child)::after': {
            content: '""', // different from stepper.ts default "/" separator
            width: 'var(--uk-stepper-separator-width-sm, 100%)',
            height: 'var(--uk-stepper-separator-height-sm, 1px)',
            background: 'var(--uk-stepper-separator-color, hsl(var(--border) / var(--border-alpha, 1)))',
            marginLeft: 'var(--uk-stepper-separator-margin-horizontal-start, 1.5rem)',
            marginRight: 'var(--uk-stepper-separator-margin-horizontal-end, 1.5rem)'
        },
        '.uk-stepper-default li:last-child': {
            width: 'var(--uk-stepper-last-item-width-sm, auto)'
        },
        '.uk-stepper-default li.uk-stepper-checked::before': {
            display: 'none'
        },
        '.uk-stepper-default .uk-stepper-checked a': {
            paddingLeft: 'var(--uk-stepper-checked-padding-left, 1.5rem)',
            display: 'inline-flex', // obvious value for layout
            alignItems: 'center' // obvious value for layout
        },
        '.uk-stepper-default .uk-stepper-checked a::before': {
            display: 'inline-flex'
        }
    },
    '@media (min-width: 768px)': {
        '.uk-dropbar': {
            paddingLeft: 'var(--uk-dropbar-padding-x, 2.5rem)',
            paddingRight: 'var(--uk-dropbar-padding-x, 2.5rem)'
        },
        '.uk-dropdown-dropbar': {
            '--uk-position-viewport-offset': 'var(--uk-dropdown-dropbar-offset, 2.5rem)'
        },
        '.uk-form-horizontal .uk-form-label': {
            width: 'var(--uk-form-label-width, 200px)',
            margin: 'var(--uk-form-label-margin, 7px 0 0 0)',
            cssFloat: 'left' // obvious value for horizontal form
        },
        '.uk-form-horizontal .uk-form-controls': {
            margin: 'var(--uk-form-controls-margin, 0 0 0 21rem)'
        },
        '.uk-form-horizontal .uk-form-controls-text': {
            padding: 'var(--uk-form-controls-text-padding, 7px 0 0 0)'
        }
    },
    '@media (min-width: 960px)': {
        '.uk-container-expand-left, .uk-container-expand-right': {
            maxWidth: 'calc(50% + (1200px / 2) - 2.5rem)'
        },
        '.uk-container-expand-left.uk-container-xs, .uk-container-expand-right.uk-container-xs': {
            '--uk-container-xs-max-width': 'calc(50% + (750px / 2) - 2.5rem)'
        },
        '.uk-container-expand-left.uk-container-sm, .uk-container-expand-right.uk-container-sm': {
            '--uk-container-sm-max-width': 'calc(50% + (900px / 2) - 2.5rem)'
        },
        '.uk-container-expand-left.uk-container-lg, .uk-container-expand-right.uk-container-lg': {
            '--uk-container-lg-max-width': 'calc(50% + (1400px / 2) - 2.5rem)'
        },
        '.uk-container-expand-left.uk-container-xl, .uk-container-expand-right.uk-container-xl': {
            '--uk-container-xl-max-width': 'calc(50% + (1600px / 2) - 2.5rem)'
        },
        '.uk-container-item-padding-remove-left, .uk-container-item-padding-remove-right': {
            '--uk-container-item-padding-remove-width': 'calc(100% + 2.5rem)'
        },
        '.uk-container-item-padding-remove-left': {
            '--uk-container-item-padding-remove-left-margin': '-2.5rem'
        },
        '.uk-container-item-padding-remove-right': {
            '--uk-container-item-padding-remove-right-margin': '-2.5rem'
        }
    },
    '@media (max-width: 768px)': {
        '.uk-form-horizontal .uk-form-label': {
            display: 'var(--uk-form-label-display-md, block)',
            margin: 'var(--uk-form-label-margin-md, 0 0 5px 0)'
        },
        '.uk-table-responsive, .uk-table-responsive tbody, .uk-table-responsive th, .uk-table-responsive td, .uk-table-responsive tr': {
            display: 'block'
        },
        '.uk-table-responsive thead': {
            display: 'none'
        },
        '.uk-table-responsive th, .uk-table-responsive td': {
            width: 'auto !important',
            maxWidth: 'none !important',
            minWidth: '0 !important',
            overflow: 'visible !important',
            whiteSpace: 'normal !important'
        },
        // Enhanced responsive table with header labels
        '.uk-table-responsive td[data-label]': {
            position: 'relative',
            paddingLeft: 'var(--uk-table-responsive-label-width, 50%)',
            textAlign: 'var(--uk-table-responsive-data-align, right)',
            borderBottom: 'var(--uk-table-responsive-row-border, 1px solid hsl(var(--border) / var(--border-alpha, 1)))'
        },
        '.uk-table-responsive td[data-label]::before': {
            content: 'attr(data-label) ":"',
            position: 'absolute',
            left: 'var(--uk-table-cell-padding, 1rem)',
            top: 'var(--uk-table-cell-padding, 1rem)',
            width: 'var(--uk-table-responsive-label-width, calc(50% - 1rem))',
            textAlign: 'var(--uk-table-responsive-label-align, left)',
            fontWeight: 'var(--uk-table-responsive-label-weight, 500)',
            color: 'var(--uk-table-responsive-label-color, hsl(var(--muted-foreground)))',
            fontSize: 'var(--uk-table-responsive-label-size, 0.875rem)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        '.uk-table-responsive tr:last-child td[data-label]:last-child': {
            borderBottom: 'none'
        },
        // Fallback for tables without data-label attributes (original behavior)
        '.uk-table-responsive th:not(:first-child):not(.uk-table-link), .uk-table-responsive td:not(:first-child):not(.uk-table-link):not([data-label]), .uk-table-responsive .uk-table-link:not(:first-child) > a': {
            paddingTop: 'var(--uk-table-responsive-padding-y, 5px) !important'
        },
        '.uk-table-responsive th:not(:last-child):not(.uk-table-link), .uk-table-responsive td:not(:last-child):not(.uk-table-link):not([data-label]), .uk-table-responsive .uk-table-link:not(:last-child) > a': {
            paddingBottom: 'var(--uk-table-responsive-padding-y, 5px) !important'
        },
        '.uk-table-justify.uk-table-responsive th, .uk-table-justify.uk-table-responsive td': {
            paddingLeft: '0',
            paddingRight: '0'
        }
    },
    '@media (max-width: 640px)': {
        '.uk-notification': {
            '--uk-notification-offset-x': '10px',
            left: 'var(--uk-notification-offset-x)',
            right: 'var(--uk-notification-offset-x)',
            width: 'auto', // obvious value for small screens
            margin: '0' // obvious value for small screens
        }
    },
    '@media (hover: none)': {
        '.uk-hidden-touch': {
            display: 'none !important'
        }
    },
    '@media (hover)': {
        '.uk-hidden-notouch': {
            display: 'none !important'
        }
    },
    '@media (pointer: coarse)': {
        '.uk-background-fixed': {
            backgroundAttachment: 'scroll'
        }
    }
};
