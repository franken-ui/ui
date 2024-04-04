import merge from 'lodash/merge.js';
import defaultTheme from 'tailwindcss/defaultTheme.js';
import hexes from './hexes.js';

import type { AccordionHooks as AccordionHooksType } from '$lib/components/accordion.js';
import type { AlertHooks as AlertHooksType } from '$lib/components/alert.js';
import type { AlignHooks as AlignHooksType } from '$lib/components/align.js';
import type { AnimationHooks as AnimationHooksType } from '$lib/components/animation.js';
import type { ArticleHooks as ArticleHooksType } from '$lib/components/article.js';
import type { BackgroundHooks as BackgroundHooksType } from '$lib/components/background.js';
import type { BadgeHooks as BadgeHooksType } from '$lib/components/badge.js';
import type { BaseHooks as BaseHooksType } from '$lib/components/base.js';
import type { BreadcrumbHooks as BreadcrumbHooksType } from '$lib/components/breadcrumb.js';
import type { ButtonHooks as ButtonHooksType } from '$lib/components/button.js';
import type { CardHooks as CardHooksType } from '$lib/components/card.js';
import type { CloseHooks as CloseHooksType } from '$lib/components/close.js';
import type { ColumnHooks as ColumnHooksType } from '$lib/components/column.js';
import type { CommentHooks as CommentHooksType } from '$lib/components/comment.js';
import type { ContainerHooks as ContainerHooksType } from '$lib/components/container.js';
import type { CountdownHooks as CountdownHooksType } from '$lib/components/countdown.js';
import type { CoverHooks as CoverHooksType } from '$lib/components/cover.js';
import type { DescriptionListHooks as DescriptionListHooksType } from '$lib/components/description-list.js';
import type { DividerHooks as DividerHooksType } from '$lib/components/divider.js';
import type { DotnavHooks as DotnavHooksType } from '$lib/components/dotnav.js';
import type { DropHooks as DropHooksType } from '$lib/components/drop.js';
import type { DropbarHooks as DropbarHooksType } from '$lib/components/dropbar.js';
import type { DropdownHooks as DropdownHooksType } from '$lib/components/dropdown.js';
import type { DropnavHooks as DropnavHooksType } from '$lib/components/dropnav.js';
import type { FlexHooks as FlexHooksType } from '$lib/components/flex.js';
import type { FormRangeHooks as FormRangeHooksType } from '$lib/components/form-range.js';
import type { FormHooks as FormHooksType } from '$lib/components/form.js';
import type { GridHooks as GridHooksType } from '$lib/components/grid.js';
import type { HeadingHooks as HeadingHooksType } from '$lib/components/heading.js';
import type { HeightHooks as HeightHooksType } from '$lib/components/height.js';
import type { IconHooks as IconHooksType } from '$lib/components/icon.js';
import type { IconnavHooks as IconnavHooksType } from '$lib/components/iconnav.js';
import type { LabelHooks as LabelHooksType } from '$lib/components/label.js';
import type { LeaderHooks as LeaderHooksType } from '$lib/components/leader.js';
import type { LightboxHooks as LightboxHooksType } from '$lib/components/lightbox.js';
import type { LinkHooks as LinkHooksType } from '$lib/components/link.js';
import type { ListHooks as ListHooksType } from '$lib/components/list.js';
import type { MarginHooks as MarginHooksType } from '$lib/components/margin.js';
import type { MarkerHooks as MarkerHooksType } from '$lib/components/marker.js';
import type { ModalHooks as ModalHooksType } from '$lib/components/modal.js';
import type { NavHooks as NavHooksType } from '$lib/components/nav.js';
import type { NavbarHooks as NavbarHooksType } from '$lib/components/navbar.js';
import type { NotificationHooks as NotificationHooksType } from '$lib/components/notification.js';
import type { OffcanvasHooks as OffcanvasHooksType } from '$lib/components/offcanvas.js';
import type { OverlayHooks as OverlayHooksType } from '$lib/components/overlay.js';
import type { PaddingHooks as PaddingHooksType } from '$lib/components/padding.js';
import type { PaginationHooks as PaginationHooksType } from '$lib/components/pagination.js';
import type { PlaceholderHooks as PlaceholderHooksType } from '$lib/components/placeholder.js';
import type { PositionHooks as PositionHooksType } from '$lib/components/position.js';
import type { PrintHooks as PrintHooksType } from '$lib/components/print.js';
import type { ProgressHooks as ProgressHooksType } from '$lib/components/progress.js';
import type { SearchHooks as SearchHooksType } from '$lib/components/search.js';
import type { SectionHooks as SectionHooksType } from '$lib/components/section.js';
import type { SliderHooks as SliderHooksType } from '$lib/components/slider.js';
import type { SlidenavHooks as SlidenavHooksType } from '$lib/components/slidenav.js';
import type { SlideshowHooks as SlideshowHooksType } from '$lib/components/slideshow.js';
import type { SortableHooks as SortableHooksType } from '$lib/components/sortable.js';
import type { SpinnerHooks as SpinnerHooksType } from '$lib/components/spinner.js';
import type { StickyHooks as StickyHooksType } from '$lib/components/sticky.js';
import type { SubnavHooks as SubnavHooksType } from '$lib/components/subnav.js';
import type { SwitcherHooks as SwitcherHooksType } from '$lib/components/switcher.js';
import type { SvgHooks as SvgHooksType } from '$lib/components/svg.js';
import type { TabHooks as TabHooksType } from '$lib/components/tab.js';
import type { TableHooks as TableHooksType } from '$lib/components/table.js';
import type { TextHooks as TextHooksType } from '$lib/components/text.js';
import type { ThumbnavHooks as ThumbnavHooksType } from '$lib/components/thumbnav.js';
import type { TileHooks as TileHooksType } from '$lib/components/tile.js';
import type { TooltipHooks as TooltipHooksType } from '$lib/components/tooltip.js';
import type { ToTopHooks as ToTopHooksType } from '$lib/components/totop.js';
import type { TransitionHooks as TransitionHooksType } from '$lib/components/transition.js';
import type { UtilityHooks as UtilityHooksType } from '$lib/components/utility.js';
import type { WidthHooks as WidthHooksType } from '$lib/components/width.js';
import type { VisibilityHooks as VisibilityHooksType } from '$lib/components/visibility.js';

type Overrides = {
	accordion: Partial<AccordionHooksType>;
	alert: Partial<AlertHooksType>;
	align: Partial<AlignHooksType>;
	animation: Partial<AnimationHooksType>;
	article: Partial<ArticleHooksType>;
	background: Partial<BackgroundHooksType>;
	badge: Partial<BadgeHooksType>;
	breadcrumb: Partial<BreadcrumbHooksType>;
	button: Partial<ButtonHooksType>;
	card: Partial<CardHooksType>;
	close: Partial<CloseHooksType>;
	column: Partial<ColumnHooksType>;
	comment: Partial<CommentHooksType>;
	container: Partial<ContainerHooksType>;
	countdown: Partial<CountdownHooksType>;
	cover: Partial<CoverHooksType>;
	'description-list': Partial<DescriptionListHooksType>;
	divider: Partial<DividerHooksType>;
	dotnav: Partial<DotnavHooksType>;
	drop: Partial<DropHooksType>;
	dropbar: Partial<DropbarHooksType>;
	dropdown: Partial<DropdownHooksType>;
	dropnav: Partial<DropnavHooksType>;
	flex: Partial<FlexHooksType>;
	'form-range': Partial<FormRangeHooksType>;
	form: Partial<FormHooksType>;
	grid: Partial<GridHooksType>;
	heading: Partial<HeadingHooksType>;
	height: Partial<HeightHooksType>;
	icon: Partial<IconHooksType>;
	iconnav: Partial<IconnavHooksType>;
	label: Partial<LabelHooksType>;
	leader: Partial<LeaderHooksType>;
	lightbox: Partial<LightboxHooksType>;
	link: Partial<LinkHooksType>;
	list: Partial<ListHooksType>;
	margin: Partial<MarginHooksType>;
	marker: Partial<MarkerHooksType>;
	modal: Partial<ModalHooksType>;
	nav: Partial<NavHooksType>;
	navbar: Partial<NavbarHooksType>;
	notification: Partial<NotificationHooksType>;
	offcanvas: Partial<OffcanvasHooksType>;
	overlay: Partial<OverlayHooksType>;
	padding: Partial<PaddingHooksType>;
	pagination: Partial<PaginationHooksType>;
	placeholder: Partial<PlaceholderHooksType>;
	position: Partial<PositionHooksType>;
	progress: Partial<ProgressHooksType>;
	search: Partial<SearchHooksType>;
	section: Partial<SectionHooksType>;
	slidenav: Partial<SlidenavHooksType>;
	slider: Partial<SliderHooksType>;
	slideshow: Partial<SlideshowHooksType>;
	sortable: Partial<SortableHooksType>;
	spinner: Partial<SpinnerHooksType>;
	sticky: Partial<StickyHooksType>;
	subnav: Partial<SubnavHooksType>;
	svg: Partial<SvgHooksType>;
	switcher: Partial<SwitcherHooksType>;
	tab: Partial<TabHooksType>;
	table: Partial<TableHooksType>;
	text: Partial<TextHooksType>;
	thumbnav: Partial<ThumbnavHooksType>;
	tile: Partial<TileHooksType>;
	tooltip: Partial<TooltipHooksType>;
	totop: Partial<ToTopHooksType>;
	transition: Partial<TransitionHooksType>;
	utility: Partial<UtilityHooksType>;
	visibility: Partial<VisibilityHooksType>;
	width: Partial<WidthHooksType>;
	print: Partial<PrintHooksType>;
};

type OptionsType = {
	theme?:
		| 'zinc'
		| 'slate'
		| 'stone'
		| 'gray'
		| 'neutral'
		| 'red'
		| 'rose'
		| 'orange'
		| 'green'
		| 'blue'
		| 'yellow'
		| 'violet';
	overrides?: Partial<Overrides>;
};

export default (options: OptionsType = {}) => {
	const scheme = hexes[options.theme || 'zinc'];

	const defaultHooks = {
		accordion: {
			// 'hook-accordion': {},
			'hook-item': {
				marginTop: null
			},
			'hook-title': {
				fontSize: null,
				lineHeight: null,
				color: null,
				'@apply font-medium px-0 py-3 text-foreground': {}
			},
			'hook-title-hover': {
				color: null,
				textDecoration: null,
				'@apply underline': {}
			},
			// 'hook-title-focus': {},
			// 'hook-title-active': {},
			'hook-content': {
				marginTop: null,
				'@apply pb-4 text-foreground': {}
			},
			'hook-misc': {
				'.uk-accordion > li': {
					'@apply border-b border-border': {}
				},
				'.uk-accordion-icon': {
					'@apply text-muted-foreground': {}
				},
				'.uk-accordion-content > :last-child': {
					marginBottom: null
				}
			}
		},
		alert: {
			'hook-alert': {
				marginBottom: null,
				padding: `${defaultTheme.spacing[3]} 30px ${defaultTheme.spacing[3]} ${defaultTheme.spacing[4]}`,
				backgroundColor: null,
				color: null,
				'@apply border border-border': {}
			},
			'hook-close': {
				top: null,
				right: null,
				color: null,
				opacity: null,
				'@apply top-1 right-1': {}
			},
			'hook-close-hover': {
				color: null,
				opacity: null
			},
			// 'hook-close-focus': {},
			// 'hook-default': {},
			// 'hook-primary': {},
			// 'hook-success': {},
			// 'hook-warning': {},
			'hook-danger': {
				backgroundColor: null,
				color: null,
				'@apply text-destructive border border-destructive': {}
			},
			'hook-misc': {
				'* + .uk-alert': {
					marginTop: null
				},
				'.uk-alert > :last-child': {
					marginBottom: null
				},
				'.uk-alert-close:first-child + *': {
					marginTop: null
				},
				'.uk-alert-primary': null,
				'.uk-alert-success': null,
				'.uk-alert-warning': null,
				'.uk-alert a:not([class]):hover': {
					color: null,
					textDecoration: null
				}
			}
		},
		// align: {},
		animation: {},
		// article: {},
		// background: {},
		badge: {
			'hook-badge': {
				verticalAlign: null,
				backgroundColor: null,
				color: null,
				fontSize: null,
				lineHeight: null,
				'@apply text-xs font-semibold border border-border text-foreground': {}
			},
			'hook-hover': {
				textDecoration: null
			},
			'hook-misc': {
				'.uk-badge-primary': {
					'@apply border-transparent bg-primary text-primary-foreground hover:bg-primary/80': {}
				},
				'.uk-badge-secondary': {
					'@apply border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80':
						{}
				},
				'.uk-badge-danger': {
					'@apply border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80':
						{}
				}
			}
		},
		breadcrumb: {
			'hook-breadcrumb': {},
			'hook-breadcrumb-solid': {
				padding: `${defaultTheme.spacing[1]} ${defaultTheme.spacing[3]}`,
				'@apply border border-border bg-muted text-muted-foreground': {}
			},
			'hook-item': {
				display: 'inline-flex',
				alignItems: 'center',
				fontSize: null,
				fontWeight: null,
				textDecoration: 'none',
				color: null,
				'@apply text-muted-foreground': {}
			},
			// 'hook-item-hover': {},
			'hook-item-disabled': {
				'@apply opacity-50': {}
			},
			'hook-item-active': {
				'@apply text-foreground font-medium': {}
			},
			'hook-divider': {
				margin: `0 ${defaultTheme.spacing[3]} 0 ${defaultTheme.spacing[2]}`,
				color: null,
				'@apply text-muted-foreground': {}
			}
			// 'hook-misc': {}
		},
		button: {
			'hook-button': {
				border: null,
				color: null,
				fontWeight: null,
				textTransform: null,
				display: 'inline-flex',
				'@apply font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring':
					{}
			},
			'hook-disabled': {
				backgroundColor: null,
				color: null,
				borderColor: null,
				'@apply opacity-50': {}
			},
			'hook-default': {
				backgroundColor: null,
				color: null,
				borderColor: null,
				'@apply bg-background text-accent-foreground border border-input': {}
			},
			'hook-default-hover': {
				backgroundColor: null,
				color: null,
				borderColor: null,
				'@apply bg-accent': {}
			},
			'hook-default-active': {
				backgroundColor: null,
				color: null,
				borderColor: null
			},
			'hook-primary': {
				backgroundColor: null,
				color: null,
				borderColor: null,
				'@apply bg-primary text-primary-foreground': {}
			},
			'hook-primary-hover': {
				backgroundColor: null,
				color: null,
				borderColor: null,
				'@apply opacity-90': {}
			},
			'hook-primary-active': {
				backgroundColor: null,
				color: null,
				borderColor: null
			},
			'hook-secondary': {
				backgroundColor: null,
				color: null,
				borderColor: null,
				'@apply bg-secondary text-secondary-foreground': {}
			},
			'hook-secondary-hover': {
				backgroundColor: null,
				color: null,
				borderColor: null,
				'@apply opacity-90': {}
			},
			'hook-secondary-active': {
				backgroundColor: null,
				color: null,
				borderColor: null
			},
			'hook-danger': {
				backgroundColor: null,
				color: null,
				borderColor: null,
				'@apply bg-destructive text-destructive-foreground': {}
			},
			'hook-danger-hover': {
				backgroundColor: null,
				color: null,
				borderColor: null,
				'@apply opacity-90': {}
			},
			'hook-danger-active': {
				backgroundColor: null,
				color: null,
				borderColor: null
			},
			'hook-link': {
				color: null
			},
			'hook-link-hover': {
				color: null
			},
			'hook-link-disabled': {
				color: null,
				'@apply opacity-50': {}
			},
			'hook-text': {
				color: null
			},
			'hook-text-hover': {
				color: null
			},
			'hook-text-disabled': {
				color: null,
				'@apply opacity-50': {}
			},
			'hook-small': {},
			'hook-large': {},
			'hook-misc': {}
		},
		card: {
			'hook-card': {
				'@apply border border-border shadow': {}
			},
			// 'hook-body': {},
			// 'hook-header': {},
			// 'hook-footer': {},
			// 'hook-media': {},
			// 'hook-media-top': {},
			// 'hook-media-bottom': {},
			// 'hook-media-left': {},
			// 'hook-media-right': {},
			'hook-title': {
				fontSize: null,
				lineHeight: null,
				'@apply text-2xl font-semibold': {}
			},
			// 'hook-badge': {},
			'hook-hover': {
				backgroundColor: null,
				boxShadow: null
			},
			'hook-default': {
				backgroundColor: null,
				color: null,
				boxShadow: null,
				'@apply bg-card text-card-foreground': {}
			},
			'hook-default-title': {
				color: null
			},
			'hook-default-hover': {
				backgroundColor: null,
				boxShadow: null
			},
			'hook-default-header': {
				borderBottom: '1px solid',
				'@apply border-border': {}
			},
			'hook-default-footer': {
				borderTop: '1px solid',
				'@apply border-border': {}
			},
			'hook-primary': {
				backgroundColor: null,
				color: null,
				boxShadow: null,
				'@apply bg-primary text-primary-foreground': {}
			},
			'hook-primary-title': {
				color: null
			},
			'hook-primary-hover': {
				backgroundColor: null,
				boxShadow: null
			},
			'hook-secondary': {
				backgroundColor: null,
				color: null,
				boxShadow: null,
				'@apply bg-secondary text-secondary-foreground': {}
			},
			'hook-secondary-title': {
				color: null
			},
			'hook-secondary-hover': {
				backgroundColor: null,
				boxShadow: null
			},
			'hook-misc': {
				'.uk-card-badge': null,
				'.uk-card-badge:first-child + *': null,
				'.uk-card-body > .uk-nav-default': null,
				'.uk-card-body > .uk-nav-default:only-child': null,
				'.uk-card-body > .uk-nav-default > li > a, .uk-card-body > .uk-nav-default .uk-nav-header, .uk-card-body > .uk-nav-default .uk-nav-divider':
					null,
				'.uk-card-body > .uk-nav-default .uk-nav-sub': null,
				'.uk-card-small > .uk-nav-default:only-child': null,
				'.uk-card-small > .uk-nav-default > li > a, .uk-card-small > .uk-nav-default .uk-nav-header, .uk-card-small > .uk-nav-default .uk-nav-divider':
					null,
				'.uk-card-small > .uk-nav-default .uk-nav-sub': null
			}
		},
		close: {
			'hook-close': {
				color: null,
				transition: null,
				transitionProperty: null
			},
			'hook-hover': {
				color: null
			}
		},
		// column: {},
		// comment: {},
		// container: {},
		// countdown: {},
		// cover: {},
		// "description-list": {},
		divider: {
			'hook-icon-line': {
				borderBottom: '1px solid',
				'@apply border-border': {}
			},
			'hook-small': {
				borderBottom: '1px solid',
				'@apply border-border': {}
			},
			'hook-vertical': {
				borderBottom: '1px solid',
				'@apply border-border': {}
			},
			'hook-misc': {
				'.uk-divider-icon': {
					backgroundImage: `url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22none%22%20stroke%3D%22${encodeURIComponent(scheme.light.border)}%22%20stroke-width%3D%222%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%227%22%20%2F%3E%0A%3C%2Fsvg%3E%0A')`
				},
				'.dark .uk-divider-icon': {
					backgroundImage: `url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22none%22%20stroke%3D%22${encodeURIComponent(scheme.dark.border)}%22%20stroke-width%3D%222%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%227%22%20%2F%3E%0A%3C%2Fsvg%3E%0A')`
				},
				"[class*='uk-divider']": {
					marginBottom: null
				},
				"* + [class*='uk-divider']": {
					marginTop: null
				}
			}
		},
		dotnav: {
			'hook-item': {
				border: null,
				'@apply border border-primary': {}
			},
			'hook-item-hover': {
				backgroundColor: null,
				'@apply bg-primary': {}
			},
			'hook-item-onclick': {
				backgroundColor: null,
				'@apply bg-primary': {}
			},
			'hook-item-active': {
				backgroundColor: null,
				'@apply bg-primary': {}
			}
		},
		drop: {},
		dropbar: {},
		dropdown: {
			'hook-dropdown': {
				padding: null,
				backgroundColor: null,
				color: null,
				boxShadow: null,
				'@apply bg-popover text-popover-foreground border border-border': {}
			},
			'hook-dropbar': {
				padding: null
			},
			'hook-nav-item': {
				color: null,
				padding: null,
				'@apply px-2 py-1.5 flex select-none items-center m-1': {}
			},
			'hook-nav-item-hover': {
				color: null,
				'@apply bg-accent text-accent-foreground': {}
			},
			'hook-nav-header': {
				color: null,
				padding: null,
				textTransform: 'none',
				'@apply px-2 py-1.5 m-1 font-semibold': {}
			},
			'hook-nav-divider': {
				borderTop: null,
				margin: `0 !important`,
				'@apply border-t border-border': {}
			},
			'hook-text': {
				backgroundColor: null,
				color: null,
				'@apply focus-visible:ring-0': {}
			},
			'hook-text-hover': {
				color: null
			},
			'hook-text-disabled': {
				color: null,
				'@apply opacity-50': {}
			},
			'hook-misc': {
				'.uk-button-ghost:hover': {
					'@apply bg-accent': {}
				}
			}
		},
		dropnav: {},
		flex: {},
		'form-range': {
			'hook-form-range': {},
			'hook-track': {
				backgroundColor: null,
				'@apply bg-primary/20': {}
			},
			'hook-track-focus': {
				backgroundColor: null,
				'@apply bg-primary/20': {}
			},
			'hook-thumb': {
				backgroundColor: null,
				border: '1px solid',
				'@apply border-primary/50': {}
			},
			'hook-misc': {}
		},
		form: {
			'hook-form': {
				border: null,
				backgroundColor: null,
				color: null,
				fontSize: null,
				'@apply bg-transparent text-foreground border border-input': {}
			},
			'hook-focus': {
				backgroundColor: null,
				color: null,
				borderColor: null,
				'@apply outline-none ring-1 ring-ring': {}
			},
			'hook-disabled': {
				backgroundColor: null,
				color: null,
				borderColor: null,
				'@apply opacity-50': {}
			},
			'hook-danger': {
				color: null,
				borderColor: null,
				'@apply ring-destructive': {}
			},
			'hook-placeholder': {
				color: null,
				'@apply text-muted-foreground': {}
			},
			'hook-radio': {
				backgroundColor: null,
				border: null,
				'@apply border border-primary': {}
			},
			'hook-radio-focus': {
				backgroundColor: null,
				borderColor: null,
				'@apply outline-none ring-1 ring-ring': {}
			},
			'hook-radio-checked': {
				backgroundColor: null,
				borderColor: null
			},
			'hook-radio-checked-focus': {
				backgroundColor: null,
				'@apply outline-none ring-1 ring-ring': {}
			},
			'hook-radio-disabled': {
				backgroundColor: null,
				borderColor: null
			},
			'hook-legend': {
				color: null
			},
			'hook-label': {
				color: null,
				'@apply text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70':
					{}
			},
			'hook-icon': {
				color: null
			},
			'hook-icon-hover': {
				color: null
			},
			'hook-toggle-switch': {
				backgroundColor: null,
				'@apply bg-input': {}
			},
			'hook-toggle-switch-before': {
				backgroundColor: null,
				'@apply bg-background': {}
			},
			'hook-toggle-switch-primary': {
				backgroundColor: null,
				'@apply bg-primary': {}
			},
			'hook-misc': {
				'.uk-form-success, .uk-form-success:focus': null,
				'.uk-form-help': {
					fontSize: '0.8rem',
					fontWeight: defaultTheme.fontWeight.medium
				},
				'.uk-radio:checked': {
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(
						scheme.light.primary
					)}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E%0A")`
				},
				'.uk-radio:disabled:checked': {
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(
						scheme.light.primary
					)}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E%0A")`
				},
				'.dark .uk-radio:checked': {
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(
						scheme.dark.primary
					)}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E%0A")`
				},
				'.dark .uk-radio:disabled:checked': {
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(
						scheme.dark.primary
					)}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E%0A")`
				},

				'.uk-checkbox:indeterminate': {
					backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22${encodeURIComponent(
						scheme.light.primary
					)}%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E")`
				},
				'.dark .uk-checkbox:indeterminate': {
					backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22${encodeURIComponent(
						scheme.dark.primary
					)}%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E")`
				},
				'.uk-checkbox:disabled:indeterminate': {
					backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22${encodeURIComponent(
						scheme.light.primary
					)}%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E")`
				},
				'.dark .uk-checkbox:disabled:indeterminate': {
					backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22${encodeURIComponent(
						scheme.dark.primary
					)}%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E")`
				},

				'.uk-checkbox:checked': {
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='${encodeURIComponent(
						scheme.light.primary
					)}' /%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(
						scheme.light.primaryForeground
					)}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E")`
				},
				'.uk-checkbox:disabled:checked': {
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='${encodeURIComponent(
						scheme.light.primary
					)}' /%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(
						scheme.light.primaryForeground
					)}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E")`
				},
				'.dark .uk-checkbox:checked': {
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='${encodeURIComponent(
						scheme.dark.primary
					)}' /%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(
						scheme.dark.primaryForeground
					)}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E")`
				},
				'.dark .uk-checkbox:disabled:checked': {
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='${encodeURIComponent(
						scheme.dark.primary
					)}' /%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(
						scheme.dark.primaryForeground
					)}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E")`
				},

				'.uk-select:not([multiple]):not([size]) option': {
					color: scheme.light.primary
				},
				'.uk-select:not([multiple]):not([size])': {
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon fill='${encodeURIComponent(
						scheme.light.primary
					)}' points='12 1 9 6 15 6' /%3E%3Cpolygon fill='${encodeURIComponent(
						scheme.light.primary
					)}' points='12 13 9 8 15 8' /%3E%3C/svg%3E%0A")`
				},
				'.dark .uk-select:not([multiple]):not([size])': {
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon fill='${encodeURIComponent(
						scheme.dark.primary
					)}' points='12 1 9 6 15 6' /%3E%3Cpolygon fill='${encodeURIComponent(
						scheme.dark.primary
					)}' points='12 13 9 8 15 8' /%3E%3C/svg%3E")`
				},

				'.uk-input[list]:hover, .uk-input[list]:focus': {
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon fill='${encodeURIComponent(
						scheme.light.primary
					)}' points='12 12 8 6 16 6' /%3E%3C/svg%3E")`
				},
				'.dark .uk-input[list]:hover,.dark .uk-input[list]:focus': {
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon fill='${encodeURIComponent(
						scheme.dark.primary
					)}' points='12 12 8 6 16 6' /%3E%3C/svg%3E")`
				}
			}
		},
		// grid: {},
		// heading: {},
		// height: {},
		icon: {
			'hook-icon': {
				display: 'inline-flex'
			},
			'hook-link': {
				color: null
			},
			'hook-link-hover': {
				color: null
			},
			'hook-link-active': {
				color: null
			},
			'hook-button': {
				boxSizing: null,
				width: null,
				height: null,
				borderRadius: null,
				backgroundColor: null,
				color: null,
				verticalAlign: null,
				display: null,
				justifyContent: null,
				alignItems: null,
				transition: null,
				transitionProperty: null,
				'@apply inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background h-9 w-9':
					{}
			},
			'hook-button-hover': {
				backgroundColor: null,
				color: null,
				'@apply bg-accent text-accent-foreground': {}
			},
			'hook-button-active': {
				backgroundColor: null,
				color: null
			}
		},
		iconnav: {
			'hook-iconnav': {
				gap: defaultTheme.spacing[1],
				marginLeft: '0px'
			},
			'hook-item': {
				display: 'inline-flex',
				justifyContent: 'center',
				height: null,
				width: null,
				color: null,
				'@apply h-9 w-9': {}
			},
			'hook-item-hover': {
				color: null,
				'@apply bg-muted': {}
			},
			'hook-item-active': {
				color: null,
				'@apply bg-accent text-accent-foreground': {}
			},
			'hook-misc': {
				'.uk-iconnav > * > a:focus-visible': {
					'@apply outline-none ring-1 ring-ring': {}
				},
				'.uk-iconnav > *': {
					paddingLeft: '0'
				},
				'.uk-iconnav-vertical': {
					marginTop: '0'
				},
				'.uk-iconnav-vertical > *': {
					paddingTop: '0'
				}
			}
		},
		label: {
			'hook-label': {
				display: null,
				padding: null,
				backgroundColor: null,
				lineHeight: null,
				fontSize: null,
				color: null,
				verticalAlign: null,
				whiteSpace: null,
				borderRadius: null,
				textTransform: null,
				'@apply inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors border-border text-foreground':
					{}
			},
			'hook-danger': {
				backgroundColor: null,
				color: null,
				'@apply border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80':
					{}
			},
			'hook-misc': {
				'.uk-label-success': null,
				'.uk-label-warning': null,
				'.uk-label-primary': {
					'@apply border-transparent bg-primary text-primary-foreground hover:bg-primary/80': {}
				},
				'.uk-label-secondary': {
					'@apply border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80':
						{}
				}
			}
		},
		// leader: {},
		lightbox: {},
		// link: {},
		// list: {},
		margin: {},
		// marker: {},
		modal: {
			'hook-modal': {
				backgroundColor: `rgba(0, 0, 0, 0.8)`,
				'@apply backdrop-blur-sm': {}
			},
			'hook-dialog': {
				backgroundColor: null,
				'@apply border border-border bg-background overflow-hidden': {}
			},
			'hook-full': {
				backgroundColor: null,
				'@apply border-none': {}
			},
			'hook-header': {
				backgroundColor: null,
				borderBottom: null,
				'@apply border-b border-border': {}
			},
			'hook-footer': {
				backgroundColor: null,
				borderBottom: null,
				'@apply border-t border-border': {}
			},
			'hook-title': {
				fontSize: null,
				lineHeight: null,
				'@apply text-2xl font-semibold': {}
			},
			'hook-close-full': {
				backgroundColor: null
			},
			'hook-misc': {
				'.uk-modal-full': {
					padding: '0 !important'
				}
			}
		},
		nav: {
			'hook-sub': {
				padding: null
			},

			'hook-header': {
				textTransform: null,
				padding: null,
				'@apply font-semibold': {}
			},

			'hook-divider': {
				margin: null
			},

			'hook-default': {
				fontSize: null
			},
			'hook-default-item': {
				color: null,
				'@apply px-2 py-1 text-muted-foreground': {}
			},
			'hook-default-item-hover': {
				color: null,
				'@apply underline': {}
			},
			'hook-default-item-active': {
				color: null,
				'@apply font-medium text-foreground': {}
			},

			'hook-default-subtitle': {
				fontSize: null
			},

			'hook-default-header': {
				color: null,
				'@apply px-2 py-1': {}
			},

			'hook-default-divider': {
				borderTop: '1px solid',
				'@apply border-border': {}
			},

			'hook-default-sublist': {
				color: null,
				'@apply px-2 py-1 text-muted-foreground': {}
			},
			'hook-default-sublist-hover': {
				color: null,
				'@apply underline': {}
			},
			'hook-default-sublist-active': {
				color: null,
				'@apply text-foreground': {}
			},

			'hook-primary': {
				fontSize: null,
				lineHeight: null
			},
			'hook-primary-item': {
				color: null,
				'@apply px-2 py-1.5 m-1': {}
			},
			'hook-primary-item-hover': {
				color: null,
				'@apply bg-accent text-accent-foreground': {}
			},
			'hook-primary-item-active': {
				color: null,
				'@apply bg-primary text-primary-foreground': {}
			},

			'hook-primary-subtitle': {
				fontSize: null
			},

			'hook-primary-header': {
				color: null,
				'@apply px-2 py-1.5 m-1': {}
			},

			'hook-primary-divider': {
				borderTop: '1px solid',
				'@apply border-border': {}
			},

			'hook-primary-sublist': {
				color: null,
				'@apply px-2 py-1.5 ml-1': {}
			},
			'hook-primary-sublist-hover': {
				color: null,
				'@apply bg-accent text-accent-foreground': {}
			},
			'hook-primary-sublist-active': {
				color: null,
				'@apply bg-primary text-primary-foreground': {}
			},

			'hook-secondary': {
				fontSize: null,
				lineHeight: null
			},
			'hook-secondary-item': {
				color: null,
				padding: null,
				'@apply px-2 py-1.5 m-1': {}
			},
			'hook-secondary-item-hover': {
				color: null,
				backgroundColor: null,
				'@apply bg-secondary text-secondary-foreground': {}
			},
			'hook-secondary-item-active': {
				color: null,
				backgroundColor: null,
				'@apply bg-secondary text-secondary-foreground': {}
			},

			'hook-secondary-subtitle': {
				color: null,
				fontSize: null
			},
			'hook-secondary-subtitle-hover': {
				color: null
			},
			'hook-secondary-subtitle-active': {
				color: null
			},

			'hook-secondary-header': {
				color: null,
				'@apply px-2 py-1.5 m-1': {}
			},

			'hook-secondary-divider': {
				borderTop: '1px solid',
				'@apply border-border': {}
			},

			'hook-secondary-sublist': {
				color: null,
				'@apply px-2 py-1.5 ml-1': {}
			},
			'hook-secondary-sublist-hover': {
				color: null,
				'@apply bg-accent text-accent-foreground': {}
			},
			'hook-secondary-sublist-active': {
				color: null,
				'@apply bg-secondary text-secondary-foreground': {}
			},

			'hook-misc': {
				'.uk-nav li > a': {
					columnGap: null
				},
				'.uk-nav > li > a': {
					padding: null,
					columnGap: null
				},
				'ul.uk-nav-sub': {
					padding: null,
					'@apply ml-5 mr-1 border-l border-border space-y-1': {}
				},
				'.uk-nav-sub ul': {
					paddingLeft: null,
					'@apply ml-5 mt-1 border-l border-border space-y-1': {}
				},
				'.uk-nav-sub a': {
					padding: null
				},
				'.uk-nav > li.uk-open > a .uk-nav-parent-icon': {
					transform: 'rotate(180deg)'
				},
				'.uk-nav-default .uk-nav-sub': {
					fontSize: null,
					lineHeight: null
				},
				'.uk-nav-primary .uk-nav-sub': {
					fontSize: null,
					lineHeight: null
				},
				'.uk-nav-header:not(:first-child)': {
					marginTop: null
				},
				'.uk-nav-center': null,
				'.uk-nav-center li > a': null,
				'.uk-nav-center .uk-nav-sub, .uk-nav-center .uk-nav-sub ul': null,
				'.uk-nav-center .uk-nav-parent-icon': null,
				'.uk-nav.uk-nav-divider> :not(.uk-nav-header, .uk-nav-divider)+ :not(.uk-nav-header, .uk-nav-divider)':
					null
			}
		},
		navbar: {
			'hook-navbar': {},
			'hook-container': {
				backgroundColor: null,
				'@apply bg-muted': {}
			},
			'hook-nav-item': {
				color: null,
				textTransform: null,
				'@apply text-muted-foreground': {}
			},
			'hook-nav-item-hover': {
				color: null,
				'@apply text-foreground': {}
			},
			'hook-nav-item-onclick': {
				color: null
			},
			'hook-nav-item-active': {
				color: null
			},
			'hook-item': {
				color: null
			},
			'hook-toggle': {
				color: null
			},
			'hook-toggle-hover': {
				color: null
			},
			'hook-toggle-icon': {
				color: null
			},
			'hook-toggle-icon-hover': {
				color: null
			},
			'hook-subtitle': {},
			'hook-primary': {},
			'hook-transparent': {},
			'hook-sticky': {},
			'hook-dropdown': {
				backgroundColor: null,
				color: null,
				boxShadow: null,
				'@apply bg-popover text-popover-foreground': {}
			},
			'hook-dropdown-large': {},
			'hook-dropdown-dropbar': {},
			'hook-dropdown-dropbar-large': {},
			'hook-dropdown-nav': {},
			'hook-dropdown-nav-item': {
				color: null
			},
			'hook-dropdown-nav-item-hover': {
				color: null
			},
			'hook-dropdown-nav-item-active': {
				color: null
			},
			'hook-dropdown-nav-subtitle': {},
			'hook-dropdown-nav-header': {
				color: null
			},
			'hook-dropdown-nav-divider': {
				borderTop: '1px solid',
				'@apply border-border': {}
			},
			'hook-dropbar': {},
			'hook-misc': {
				'.uk-navbar-dropdown-nav .uk-nav-sub a': {
					color: null
				},
				'.uk-navbar-dropdown-nav .uk-nav-sub a:hover': {
					color: null
				},
				'.uk-navbar-dropdown-nav .uk-nav-sub li.uk-active > a': {
					color: null
				}
			}
		},
		notification: {
			'hook-message': {
				padding: null,
				backgroundColor: null,
				color: null,
				fontSize: null,
				lineHeight: null,
				'@apply bg-background p-4 pr-6 text-foreground border border-border text-sm': {}
			},
			'hook-close': {
				top: null,
				right: null,
				'@apply right-1 top-1 p-1 text-foreground/50': {}
			},
			'hook-danger': {
				color: null,
				'@apply bg-destructive text-destructive-foreground border-destructive': {}
			},
			'hook-misc': {
				'.uk-notification-message-danger .uk-notification-close': {
					'@apply text-destructive-foreground/50': {}
				}
			}
		},
		offcanvas: {
			'hook-bar': {
				padding: null,
				backgroundColor: null,
				'@apply bg-background border-r border-border': {}
			},
			'hook-overlay': {
				backgroundColor: `rgba(0, 0, 0, 0.8)`,
				'@apply backdrop-blur-sm': {}
			},
			'hook-misc': {
				'.uk-offcanvas-flip .uk-offcanvas-bar': {
					borderRight: 'none',
					'@apply border-l border-border': {}
				}
			}
		},
		overlay: {},
		// padding: {},
		pagination: {
			'hook-pagination': {
				gap: defaultTheme.spacing[1],
				fontSize: null,
				marginLeft: null,
				padding: null
			},
			'hook-item': {
				padding: null,
				color: null,
				textDecoration: 'none',
				fontWeight: null,
				display: 'inline-flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: defaultTheme.spacing[9],
				minWidth: defaultTheme.spacing[9],
				whiteSpace: 'nowrap'
			},
			'hook-item-hover': {
				color: null,
				'@apply bg-accent text-accent-foreground': {}
			},
			'hook-item-active': {
				color: null,
				'@apply border border-input': {}
			},
			'hook-item-disabled': {
				color: null,
				'@apply opacity-50': {}
			},
			'hook-misc': {
				'.uk-pagination > *': {
					paddingLeft: null
				}
			}
		},
		placeholder: {
			'hook-placeholder': {
				border: '1px dashed',
				'@apply border-border': {}
			},
			'hook-misc': {
				'* + .uk-placeholder': {
					marginTop: null
				}
			}
		},
		position: {},
		progress: {
			'hook-progress': {
				backgroundColor: null,
				'@apply bg-primary/20': {}
			},
			'hook-bar': {
				backgroundColor: null,
				'@apply bg-primary': {}
			},
			'hook-misc': {
				'* + .uk-progress': {
					marginTop: null
				}
			}
		},
		// search: {},
		// section: {},
		slidenav: {},
		slider: {},
		slideshow: {},
		// sortable: {},
		spinner: {},
		sticky: {},
		subnav: {
			'hook-subnav': {
				display: null,
				flexWrap: null,
				alignItems: null,
				marginLeft: null,
				padding: null,
				listStyle: null,
				'@apply flex items-center': {}
			},
			'hook-item': {
				display: null,
				alignItems: null,
				columnGap: null,
				color: null,
				fontSize: null,
				textTransform: null,
				'@apply flex items-center justify-center rounded-full px-4 font-medium text-center text-muted-foreground':
					{}
			},
			'hook-item-hover': {
				color: null,
				textDecoration: null,
				'@apply text-primary': {}
			},
			'hook-item-active': {
				color: null
			},
			'hook-pill-item': {},
			'hook-pill-item-hover': {},
			'hook-pill-item-onclick': {},
			'hook-pill-item-active': {
				'@apply bg-muted': {}
			},
			'hook-item-disabled': {
				'@apply opacity-50 pointer-events-none': {}
			},
			'hook-misc': {
				'.uk-subnav > *': {
					flex: null,
					paddingLeft: null,
					position: null
				},
				'.uk-subnav-divider': null,
				'.uk-subnav-divider > *': null,
				'.uk-subnav-divider > ::before': null,
				'.uk-subnav-divider > :nth-child(n + 2):not(.uk-first-column)::before': null,
				'.uk-subnav-pill > * > :first-child': null,
				'.uk-subnav-pill > * > a:hover': null,
				'.uk-subnav-pill > * > a:active': null,
				'.uk-subnav-pill > .uk-active > a': null,
				'.uk-subnav > .uk-disabled > a': null,
				'.uk-subnav-primary > .uk-active > a': {
					'@apply bg-primary text-primary-foreground hover:text-primary-foreground hover:bg-primary/80':
						{}
				},
				'.uk-subnav-secondary > .uk-active > a': {
					'@apply bg-secondary text-secondary-foreground hover:text-secondary-foreground hover:bg-secondary/80':
						{}
				},
				'.uk-subnav-danger > .uk-active > a': {
					'@apply bg-destructive text-destructive-foreground hover:text-destructive-foreground hover:bg-destructive/80':
						{}
				}
			}
		},
		svg: {},
		switcher: {},
		tab: {
			'hook-tab': {
				marginLeft: null,
				padding: null,
				'@apply text-muted-foreground': {}
			},
			'hook-tab-before': {
				borderBottom: '1px solid',
				left: '0',
				'@apply border-border': {}
			},
			'hook-item': {
				color: null,
				textTransform: 'none',
				borderBottom: '2px solid transparent',
				padding: null,
				'@apply font-semibold text-muted-foreground': {}
			},
			'hook-item-hover': {
				color: null
			},
			'hook-bottom-item': {
				borderTop: '2px solid transparent'
			},
			'hook-left-item': {
				borderRight: '2px solid transparent'
			},
			'hook-right-item': {
				borderLeft: '2px solid transparent'
			},
			'hook-item-active': {
				'@apply bg-background border-primary text-foreground': {}
			},
			'hook-item-disabled': {
				'@apply opacity-50 disabled:pointer-events-none': {}
			},
			'hook-misc': {
				'.uk-tab > *': {
					paddingLeft: null
				},
				'.uk-tab-alt': {
					'@apply flex h-9 w-full items-center justify-center bg-muted p-1 text-muted-foreground':
						{}
				},
				'.uk-tab-alt > *': {
					'@apply flex-grow': {}
				},
				'.uk-tab-alt > * > a': {
					'@apply h-auto inline-flex w-full items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium no-underline':
						{}
				},
				'.uk-tab-alt > .uk-active > a': {
					'@apply border-b-0 bg-background text-foreground': {}
				}
			}
		},
		table: {
			'hook-table': {
				marginBottom: null
			},
			'hook-header-cell': {
				padding: null,
				verticalAlign: null,
				color: null,
				textTransform: null,
				'@apply text-muted-foreground': {}
			},
			'hook-cell': {
				padding: null
			},
			'hook-footer': {},
			'hook-caption': {
				textAlign: null,
				color: null,
				'@apply text-muted-foreground': {}
			},
			'hook-row-active': {
				'@apply bg-muted': {}
			},
			'hook-divider': {
				borderTop: null,
				'@apply border-t border-border': {}
			},
			'hook-striped': {
				backgroundColor: null,
				borderTop: null,
				borderBottom: null,
				'@apply bg-muted/50 border-t border-b border-border': {}
			},
			'hook-hover': {
				backgroundColor: null,
				'@apply bg-muted/50': {}
			},
			'hook-small': {
				padding: null
			},
			'hook-large': {
				padding: null
			},
			'hook-misc': {
				'* + .uk-table': {
					marginTop: null
				},
				'.uk-table td > :last-child': {
					marginBottom: null
				},
				'.uk-table-link > a': {
					display: null,
					padding: null
				},
				'.uk-table-striped > tr:nth-of-type(even):last-child, .uk-table-striped tbody tr:nth-of-type(even):last-child':
					{
						borderBottom: null,
						'@apply border-b border-border': {}
					}
			}
		},
		text: {},
		// thumbnav: {},
		// tile: {},
		tooltip: {
			'hook-tooltip': {
				fontSize: '0.75rem',
				padding: `${defaultTheme.spacing['1.5']} ${defaultTheme.spacing[3]}`,
				borderRadius: null,
				backgroundColor: null,
				color: null,
				'@apply bg-primary text-primary-foreground': {}
			}
		},
		// totop: {},
		transition: {},
		utility: {}
		// visibility: {},
		// width: {},
		// print: {},
	};

	return merge({}, defaultHooks, options.overrides);
};
