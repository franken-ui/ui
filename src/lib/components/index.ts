import { rules as accordionRules, addHooks as addAccordionHooks } from './accordion.js';
import { rules as alertRules, addHooks as addAlertHooks } from './alert.js';
import { rules as alignRules, media as alignMedia, addHooks as addAlignHooks } from './align.js';
import { rules as animationRules, addHooks as addAnimationHooks } from './animation.js';
import {
	rules as articleRules,
	media as articleMedia,
	addHooks as addArticleHooks
} from './article.js';
import {
	rules as backgroundRules,
	media as backgroundMedia,
	addHooks as addBackgroundHooks
} from './background.js';
import { rules as badgeRules, addHooks as addBadgeHooks } from './badge.js';
import { rules as breadcrumbRules, addHooks as addBreadcrumbHooks } from './breadcrumb.js';
import { rules as buttonRules, addHooks as addButtonHooks } from './button.js';
import { rules as cardRules, media as cardMedia, addHooks as addCardHooks } from './card.js';
import { rules as closeRules, addHooks as addCloseHooks } from './close.js';
import {
	rules as columnRules,
	media as columnMedia,
	addHooks as addColumnHooks
} from './column.js';
import {
	rules as commentRules,
	media as commentMedia,
	addHooks as addCommentHooks
} from './comment.js';
import {
	rules as containerRules,
	media as containerMedia,
	addHooks as addContainerHooks
} from './container.js';
import {
	rules as countdownRules,
	media as countdownMedia,
	addHooks as addCountdownHooks
} from './countdown.js';
import { rules as coverRules, addHooks as addCoverHooks } from './cover.js';
import {
	rules as descriptionListRules,
	addHooks as addDescriptionListHooks
} from './description-list.js';
import { rules as dividerRules, addHooks as addDividerHooks } from './divider.js';
import { rules as dotnavRules, addHooks as addDotnavHooks } from './dotnav.js';
import { rules as dropRules, addHooks as addDropHooks } from './drop.js';
import {
	rules as dropbarRules,
	media as dropbarMedia,
	addHooks as addDropbarHooks
} from './dropbar.js';
import {
	rules as dropdownRules,
	media as dropdownMedia,
	addHooks as addDropdownHooks
} from './dropdown.js';
import { rules as dropnavRules, addHooks as addDropnavHooks } from './dropnav.js';
import { rules as flexRules, media as flexMedia, addHooks as addFlexHooks } from './flex.js';
import { rules as formRangeRules, addHooks as addFormRangeHooks } from './form-range.js';
import { rules as formRules, media as formMedia, addHooks as addFormHooks } from './form.js';
import { rules as gridRules, media as gridMedia, addHooks as addGridHooks } from './grid.js';
import {
	rules as headingRules,
	media as headingMedia,
	addHooks as addHeadingHooks
} from './heading.js';
import { rules as heightRules, addHooks as addHeightHooks } from './height.js';
import { rules as iconRules, addHooks as addIconHooks } from './icon.js';
import { rules as iconnavRules, addHooks as addIconnavHooks } from './iconnav.js';
import { rules as labelRules, addHooks as addLabelHooks } from './label.js';
import { rules as leaderRules, addHooks as addLeaderHooks } from './leader.js';
import { rules as lightboxRules, addHooks as addLightboxHooks } from './lightbox.js';
import { rules as linkRules, addHooks as addLinkHooks } from './link.js';
import { rules as listRules, addHooks as addListHooks } from './list.js';
import { rules as markerRules, addHooks as addMarkerHooks } from './marker.js';
import {
	rules as marginRules,
	media as marginMedia,
	addHooks as addMarginHooks
} from './margin.js';
import { rules as modalRules, media as modalMedia, addHooks as addModalHooks } from './modal.js';
import { rules as navRules, addHooks as addNavHooks } from './nav.js';
import {
	rules as navbarRules,
	media as navbarMedia,
	addHooks as addNavbarHooks
} from './navbar.js';
import { rules as notificationRules, addHooks as addNotificationHooks } from './notification.js';
import {
	rules as offcanvasRules,
	media as offcanvasMedia,
	addHooks as addOffcanvasHooks
} from './offcanvas.js';
import { rules as overlayRules, addHooks as addOverlayHooks } from './overlay.js';
import {
	rules as paddingRules,
	media as paddingMedia,
	addHooks as addPaddingHooks
} from './padding.js';
import { rules as paginationRules, addHooks as addPaginationHooks } from './pagination.js';
import { rules as placeholderRules, addHooks as addPlaceholderHooks } from './placeholder.js';
import {
	rules as positionRules,
	media as positionMedia,
	addHooks as addPositionHooks
} from './position.js';
import { rules as printRules, addHooks as addPrintHooks } from './print.js';
import { rules as progressRules, addHooks as addProgressHooks } from './progress.js';
import { rules as searchRules, addHooks as addSearchHooks } from './search.js';
import {
	rules as sectionRules,
	media as sectionMedia,
	addHooks as addSectionHooks
} from './section.js';
import { rules as slidenavRules, addHooks as addSlidenavHooks } from './slidenav.js';
import { rules as sliderRules, addHooks as addSliderHooks } from './slider.js';
import { rules as slideshowRules, addHooks as addSlideshowHooks } from './slideshow.js';
import { rules as sortableRules, addHooks as addSortableHooks } from './sortable.js';
import { rules as spinnerRules, addHooks as addSpinnerHooks } from './spinner.js';
import { rules as stepperRules, addHooks as addStepperHooks } from './stepper.js';
import { rules as stickyRules, addHooks as addStickyHooks } from './sticky.js';
import { rules as subnavRules, addHooks as addSubnavHooks } from './subnav.js';
import { rules as svgRules, addHooks as addSvgHooks } from './svg.js';
import { rules as switcherRules, addHooks as addSwitcherHooks } from './switcher.js';
import { rules as tabRules, addHooks as addTabHooks } from './tab.js';
import { rules as tableRules, media as tableMedia, addHooks as addTableHooks } from './table.js';
import { rules as textRules, media as textMedia, addHooks as addTextHooks } from './text.js';
import { rules as thumbnavRules, addHooks as addThumbnavHooks } from './thumbnav.js';
import { rules as tileRules, media as tileMedia, addHooks as addTileHooks } from './tile.js';
import { rules as tooltipRules, addHooks as addTooltipHooks } from './tooltip.js';
import { rules as toTopRules, addHooks as addToTopHooks } from './totop.js';
import { rules as transitionRules, addHooks as addTransitionHooks } from './transition.js';
import { rules as utilityRules, addHooks as addUtilityHooks } from './utility.js';
import {
	rules as visibilityRules,
	media as visibilityMedia,
	addHooks as addVisibilityHooks
} from './visibility.js';
import { rules as widthRules, media as widthMedia, addHooks as addWidthHooks } from './width.js';

import type { AccordionHooks as AccordionHooksType } from './accordion.js';
import type { AlertHooks as AlertHooksType } from './alert.js';
import type { AlignHooks as AlignHooksType } from './align.js';
import type { AnimationHooks as AnimationHooksType } from './animation.js';
import type { ArticleHooks as ArticleHooksType } from './article.js';
import type { BackgroundHooks as BackgroundHooksType } from './background.js';
import type { BadgeHooks as BadgeHooksType } from './badge.js';
import type { BaseHooks as BaseHooksType } from './base.js';
import type { BreadcrumbHooks as BreadcrumbHooksType } from './breadcrumb.js';
import type { ButtonHooks as ButtonHooksType } from './button.js';
import type { CardHooks as CardHooksType } from './card.js';
import type { CloseHooks as CloseHooksType } from './close.js';
import type { ColumnHooks as ColumnHooksType } from './column.js';
import type { CommentHooks as CommentHooksType } from './comment.js';
import type { ContainerHooks as ContainerHooksType } from './container.js';
import type { CountdownHooks as CountdownHooksType } from './countdown.js';
import type { CoverHooks as CoverHooksType } from './cover.js';
import type { DescriptionListHooks as DescriptionListHooksType } from './description-list.js';
import type { DividerHooks as DividerHooksType } from './divider.js';
import type { DotnavHooks as DotnavHooksType } from './dotnav.js';
import type { DropHooks as DropHooksType } from './drop.js';
import type { DropbarHooks as DropbarHooksType } from './dropbar.js';
import type { DropdownHooks as DropdownHooksType } from './dropdown.js';
import type { DropnavHooks as DropnavHooksType } from './dropnav.js';
import type { FlexHooks as FlexHooksType } from './flex.js';
import type { FormRangeHooks as FormRangeHooksType } from './form-range.js';
import type { FormHooks as FormHooksType } from './form.js';
import type { GridHooks as GridHooksType } from './grid.js';
import type { HeadingHooks as HeadingHooksType } from './heading.js';
import type { HeightHooks as HeightHooksType } from './height.js';
import type { IconHooks as IconHooksType } from './icon.js';
import type { IconnavHooks as IconnavHooksType } from './iconnav.js';
import type { LabelHooks as LabelHooksType } from './label.js';
import type { LeaderHooks as LeaderHooksType } from './leader.js';
import type { LightboxHooks as LightboxHooksType } from './lightbox.js';
import type { LinkHooks as LinkHooksType } from './link.js';
import type { ListHooks as ListHooksType } from './list.js';
import type { MarginHooks as MarginHooksType } from './margin.js';
import type { MarkerHooks as MarkerHooksType } from './marker.js';
import type { ModalHooks as ModalHooksType } from './modal.js';
import type { NavHooks as NavHooksType } from './nav.js';
import type { NavbarHooks as NavbarHooksType } from './navbar.js';
import type { NotificationHooks as NotificationHooksType } from './notification.js';
import type { OffcanvasHooks as OffcanvasHooksType } from './offcanvas.js';
import type { OverlayHooks as OverlayHooksType } from './overlay.js';
import type { PaddingHooks as PaddingHooksType } from './padding.js';
import type { PaginationHooks as PaginationHooksType } from './pagination.js';
import type { PlaceholderHooks as PlaceholderHooksType } from './placeholder.js';
import type { PositionHooks as PositionHooksType } from './position.js';
import type { PrintHooks as PrintHooksType } from './print.js';
import type { ProgressHooks as ProgressHooksType } from './progress.js';
import type { SearchHooks as SearchHooksType } from './search.js';
import type { SectionHooks as SectionHooksType } from './section.js';
import type { SliderHooks as SliderHooksType } from './slider.js';
import type { SlidenavHooks as SlidenavHooksType } from './slidenav.js';
import type { SlideshowHooks as SlideshowHooksType } from './slideshow.js';
import type { SortableHooks as SortableHooksType } from './sortable.js';
import type { SpinnerHooks as SpinnerHooksType } from './spinner.js';
import type { StepperHooks as StepperHooksType } from './stepper.js';
import type { StickyHooks as StickyHooksType } from './sticky.js';
import type { SubnavHooks as SubnavHooksType } from './subnav.js';
import type { SwitcherHooks as SwitcherHooksType } from './switcher.js';
import type { SvgHooks as SvgHooksType } from './svg.js';
import type { TabHooks as TabHooksType } from './tab.js';
import type { TableHooks as TableHooksType } from './table.js';
import type { TextHooks as TextHooksType } from './text.js';
import type { ThumbnavHooks as ThumbnavHooksType } from './thumbnav.js';
import type { TileHooks as TileHooksType } from './tile.js';
import type { TooltipHooks as TooltipHooksType } from './tooltip.js';
import type { ToTopHooks as ToTopHooksType } from './totop.js';
import type { TransitionHooks as TransitionHooksType } from './transition.js';
import type { UtilityHooks as UtilityHooksType } from './utility.js';
import type { WidthHooks as WidthHooksType } from './width.js';
import type { VisibilityHooks as VisibilityHooksType } from './visibility.js';

type ComponentsType = {
	accordion: {
		hooks?: Partial<AccordionHooksType>;
	};
	alert: {
		hooks?: Partial<AlertHooksType>;
	};
	align: {
		media?: boolean;
		hooks?: Partial<AlignHooksType>;
	};
	animation: {
		hooks?: Partial<AnimationHooksType>;
	};
	article: {
		media?: boolean;
		hooks?: Partial<ArticleHooksType>;
	};
	background: {
		media?: boolean;
		hooks?: Partial<BackgroundHooksType>;
	};
	badge: {
		hooks?: Partial<BadgeHooksType>;
	};
	breadcrumb: {
		hooks?: Partial<BreadcrumbHooksType>;
	};
	button: {
		hooks?: Partial<ButtonHooksType>;
	};
	card: {
		media?: boolean;
		hooks?: Partial<CardHooksType>;
	};
	close: {
		hooks?: Partial<CloseHooksType>;
	};
	column: {
		media?: boolean;
		hooks?: Partial<ColumnHooksType>;
	};
	comment: {
		media?: boolean;
		hooks?: Partial<CommentHooksType>;
	};
	container: {
		media?: boolean;
		hooks?: Partial<ContainerHooksType>;
	};
	countdown: {
		media?: boolean;
		hooks?: Partial<CountdownHooksType>;
	};
	cover: {
		hooks?: Partial<CoverHooksType>;
	};
	'description-list': {
		hooks?: Partial<DescriptionListHooksType>;
	};
	divider: {
		hooks?: Partial<DividerHooksType>;
	};
	dotnav: {
		hooks?: Partial<DotnavHooksType>;
	};
	drop: {
		hooks?: Partial<DropHooksType>;
	};
	dropbar: {
		media?: boolean;
		hooks?: Partial<DropbarHooksType>;
	};
	dropdown: {
		media?: boolean;
		hooks?: Partial<DropdownHooksType>;
	};
	dropnav: {
		hooks?: Partial<DropnavHooksType>;
	};
	flex: {
		media?: boolean;
		hooks?: Partial<FlexHooksType>;
	};
	'form-range': {
		hooks?: Partial<FormRangeHooksType>;
	};
	form: {
		media?: boolean;
		hooks?: Partial<FormHooksType>;
	};
	grid: {
		media?: boolean;
		hooks?: Partial<GridHooksType>;
	};
	heading: {
		media?: boolean;
		hooks?: Partial<HeadingHooksType>;
	};
	height: {
		hooks?: Partial<HeightHooksType>;
	};
	icon: {
		hooks?: Partial<IconHooksType>;
	};
	iconnav: {
		hooks?: Partial<IconnavHooksType>;
	};
	label: {
		hooks?: Partial<LabelHooksType>;
	};
	leader: {
		hooks?: Partial<LeaderHooksType>;
	};
	lightbox: {
		hooks?: Partial<LightboxHooksType>;
	};
	link: {
		hooks?: Partial<LinkHooksType>;
	};
	list: {
		hooks?: Partial<ListHooksType>;
	};
	margin: {
		media?: boolean;
		hooks?: Partial<MarginHooksType>;
	};
	marker: {
		hooks?: Partial<MarkerHooksType>;
	};
	modal: {
		media?: boolean;
		hooks?: Partial<ModalHooksType>;
	};
	nav: {
		hooks?: Partial<NavHooksType>;
	};
	navbar: {
		media?: boolean;
		hooks?: Partial<NavbarHooksType>;
	};
	notification: {
		media?: boolean;
		hooks?: Partial<NotificationHooksType>;
	};
	offcanvas: {
		media?: boolean;
		hooks?: Partial<OffcanvasHooksType>;
	};
	overlay: {
		hooks?: Partial<OverlayHooksType>;
	};
	padding: {
		media?: boolean;
		hooks?: Partial<PaddingHooksType>;
	};
	pagination: {
		hooks?: Partial<PaginationHooksType>;
	};
	placeholder: {
		hooks?: Partial<PlaceholderHooksType>;
	};
	position: {
		media?: boolean;
		hooks?: Partial<PositionHooksType>;
	};
	progress: {
		hooks?: Partial<ProgressHooksType>;
	};
	search: {
		hooks?: Partial<SearchHooksType>;
	};
	section: {
		media?: boolean;
		hooks?: Partial<SectionHooksType>;
	};
	slidenav: {
		hooks?: Partial<SlidenavHooksType>;
	};
	slider: {
		hooks?: Partial<SliderHooksType>;
	};
	slideshow: {
		hooks?: Partial<SlideshowHooksType>;
	};
	sortable: {
		hooks?: Partial<SortableHooksType>;
	};
	spinner: {
		hooks?: Partial<SpinnerHooksType>;
	};
	stepper: {
		hooks?: Partial<StepperHooksType>;
	};
	sticky: {
		hooks?: Partial<StickyHooksType>;
	};
	subnav: {
		hooks?: Partial<SubnavHooksType>;
	};
	svg: {
		hooks?: Partial<SvgHooksType>;
	};
	switcher: {
		hooks?: Partial<SwitcherHooksType>;
	};
	tab: {
		hooks?: Partial<TabHooksType>;
	};
	table: {
		media?: boolean;
		hooks?: Partial<TableHooksType>;
	};
	text: {
		media?: boolean;
		hooks?: Partial<TextHooksType>;
	};
	thumbnav: {
		hooks?: Partial<ThumbnavHooksType>;
	};
	tile: {
		media?: boolean;
		hooks?: Partial<TileHooksType>;
	};
	tooltip: {
		hooks?: Partial<TooltipHooksType>;
	};
	totop: {
		hooks?: Partial<ToTopHooksType>;
	};
	transition: {
		hooks?: Partial<TransitionHooksType>;
	};
	utility: {
		hooks?: Partial<UtilityHooksType>;
	};
	visibility: {
		media?: boolean;
		hooks?: Partial<VisibilityHooksType>;
	};
	width: {
		media?: boolean;
		hooks?: Partial<WidthHooksType>;
	};
	print: {
		hooks?: Partial<PrintHooksType>;
	};
};

export type OptionsType = {
	base?: boolean;
	hooks?: Partial<BaseHooksType>;
	components?: Partial<ComponentsType>;
};

export const components = {
	accordion: {
		rules: accordionRules,
		addHooks: addAccordionHooks
	},
	alert: {
		rules: alertRules,
		addHooks: addAlertHooks
	},
	align: {
		rules: alignRules,
		media: alignMedia,
		addHooks: addAlignHooks
	},
	animation: {
		rules: animationRules,
		addHooks: addAnimationHooks
	},
	article: {
		rules: articleRules,
		media: articleMedia,
		addHooks: addArticleHooks
	},
	background: {
		rules: backgroundRules,
		media: backgroundMedia,
		addHooks: addBackgroundHooks
	},
	badge: {
		rules: badgeRules,
		addHooks: addBadgeHooks
	},
	breadcrumb: {
		rules: breadcrumbRules,
		addHooks: addBreadcrumbHooks
	},
	button: {
		rules: buttonRules,
		addHooks: addButtonHooks
	},
	card: {
		rules: cardRules,
		media: cardMedia,
		addHooks: addCardHooks
	},
	close: {
		rules: closeRules,
		addHooks: addCloseHooks
	},
	column: {
		rules: columnRules,
		media: columnMedia,
		addHooks: addColumnHooks
	},
	comment: {
		rules: commentRules,
		media: commentMedia,
		addHooks: addCommentHooks
	},
	container: {
		rules: containerRules,
		media: containerMedia,
		addHooks: addContainerHooks
	},
	countdown: {
		rules: countdownRules,
		media: countdownMedia,
		addHooks: addCountdownHooks
	},
	cover: {
		rules: coverRules,
		addHooks: addCoverHooks
	},
	'description-list': {
		rules: descriptionListRules,
		addHooks: addDescriptionListHooks
	},
	divider: {
		rules: dividerRules,
		addHooks: addDividerHooks
	},
	dotnav: {
		rules: dotnavRules,
		addHooks: addDotnavHooks
	},
	drop: {
		rules: dropRules,
		addHooks: addDropHooks
	},
	dropbar: {
		rules: dropbarRules,
		media: dropbarMedia,
		addHooks: addDropbarHooks
	},
	dropdown: {
		rules: dropdownRules,
		media: dropdownMedia,
		addHooks: addDropdownHooks
	},
	dropnav: {
		rules: dropnavRules,
		addHooks: addDropnavHooks
	},
	flex: {
		rules: flexRules,
		media: flexMedia,
		addHooks: addFlexHooks
	},
	'form-range': {
		rules: formRangeRules,
		addHooks: addFormRangeHooks
	},
	form: {
		rules: formRules,
		media: formMedia,
		addHooks: addFormHooks
	},
	grid: {
		rules: gridRules,
		media: gridMedia,
		addHooks: addGridHooks
	},
	heading: {
		rules: headingRules,
		media: headingMedia,
		addHooks: addHeadingHooks
	},
	height: {
		rules: heightRules,
		addHooks: addHeightHooks
	},
	icon: {
		rules: iconRules,
		addHooks: addIconHooks
	},
	iconnav: {
		rules: iconnavRules,
		addHooks: addIconnavHooks
	},
	label: {
		rules: labelRules,
		addHooks: addLabelHooks
	},
	leader: {
		rules: leaderRules,
		addHooks: addLeaderHooks
	},
	lightbox: {
		rules: lightboxRules,
		addHooks: addLightboxHooks
	},
	link: {
		rules: linkRules,
		addHooks: addLinkHooks
	},
	list: {
		rules: listRules,
		addHooks: addListHooks
	},
	margin: {
		rules: marginRules,
		media: marginMedia,
		addHooks: addMarginHooks
	},
	marker: {
		rules: markerRules,
		addHooks: addMarkerHooks
	},
	modal: {
		rules: modalRules,
		media: modalMedia,
		addHooks: addModalHooks
	},
	nav: {
		rules: navRules,
		addHooks: addNavHooks
	},
	navbar: {
		rules: navbarRules,
		media: navbarMedia,
		addHooks: addNavbarHooks
	},
	notification: {
		rules: notificationRules,
		addHooks: addNotificationHooks
	},
	offcanvas: {
		rules: offcanvasRules,
		media: offcanvasMedia,
		addHooks: addOffcanvasHooks
	},
	overlay: {
		rules: overlayRules,
		addHooks: addOverlayHooks
	},
	padding: {
		rules: paddingRules,
		media: paddingMedia,
		addHooks: addPaddingHooks
	},
	pagination: {
		rules: paginationRules,
		addHooks: addPaginationHooks
	},
	placeholder: {
		rules: placeholderRules,
		addHooks: addPlaceholderHooks
	},
	position: {
		rules: positionRules,
		media: positionMedia,
		addHooks: addPositionHooks
	},
	print: {
		rules: printRules,
		addHooks: addPrintHooks
	},
	progress: {
		rules: progressRules,
		addHooks: addProgressHooks
	},
	search: {
		rules: searchRules,
		addHooks: addSearchHooks
	},
	section: {
		rules: sectionRules,
		media: sectionMedia,
		addHooks: addSectionHooks
	},
	slidenav: {
		rules: slidenavRules,
		addHooks: addSlidenavHooks
	},
	slider: {
		rules: sliderRules,
		addHooks: addSliderHooks
	},
	slideshow: {
		rules: slideshowRules,
		addHooks: addSlideshowHooks
	},
	sortable: {
		rules: sortableRules,
		addHooks: addSortableHooks
	},
	spinner: {
		rules: spinnerRules,
		addHooks: addSpinnerHooks
	},
	stepper: {
		rules: stepperRules,
		addHooks: addStepperHooks
	},
	sticky: {
		rules: stickyRules,
		addHooks: addStickyHooks
	},
	subnav: {
		rules: subnavRules,
		addHooks: addSubnavHooks
	},
	svg: {
		rules: svgRules,
		addHooks: addSvgHooks
	},
	switcher: {
		rules: switcherRules,
		addHooks: addSwitcherHooks
	},
	tab: {
		rules: tabRules,
		addHooks: addTabHooks
	},
	table: {
		rules: tableRules,
		media: tableMedia,
		addHooks: addTableHooks
	},
	text: {
		rules: textRules,
		media: textMedia,
		addHooks: addTextHooks
	},
	thumbnav: {
		rules: thumbnavRules,
		addHooks: addThumbnavHooks
	},
	tile: {
		rules: tileRules,
		media: tileMedia,
		addHooks: addTileHooks
	},
	tooltip: {
		rules: tooltipRules,
		addHooks: addTooltipHooks
	},
	totop: {
		rules: toTopRules,
		addHooks: addToTopHooks
	},
	transition: {
		rules: transitionRules,
		addHooks: addTransitionHooks
	},
	utility: {
		rules: utilityRules,
		addHooks: addUtilityHooks
	},
	visibility: {
		rules: visibilityRules,
		media: visibilityMedia,
		addHooks: addVisibilityHooks
	},
	width: {
		rules: widthRules,
		media: widthMedia,
		addHooks: addWidthHooks
	}
};
