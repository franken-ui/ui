import type { AccordionHooks as AccordionHooksType } from '$lib/components/accordion.js';
import type { AlertHooks as AlertHooksType } from '$lib/components/alert.js';
import type { AlignHooks as AlignHooksType } from '$lib/components/align.js';
import type { AnimationHooks as AnimationHooksType } from '$lib/components/animation.js';
import type { ArticleHooks as ArticleHooksType } from '$lib/components/article.js';
import type { BackgroundHooks as BackgroundHooksType } from '$lib/components/background.js';
import type { BadgeHooks as BadgeHooksType } from '$lib/components/badge.js';
// import type { BaseHooks as BaseHooksType } from '$lib/components/base.js';
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
import type { StepperHooks as StepperHooksType } from '$lib/components/stepper.js';
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

export type Overrides = {
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
	stepper: Partial<StepperHooksType>;
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

export type OptionsType = {
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
