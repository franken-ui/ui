export interface RecursiveKeyValuePair<K extends keyof any = string, V = string> {
    [key: string]: V | RecursiveKeyValuePair<K, V>;
}
export type CSSRuleObject = RecursiveKeyValuePair<string, null | string | string[]>;
export type Colors = {
    '--background': string;
    '--foreground': string;
    '--muted': string;
    '--muted-foreground': string;
    '--popover': string;
    '--popover-foreground': string;
    '--card': string;
    '--card-foreground': string;
    '--border': string;
    '--input': string;
    '--primary': string;
    '--primary-foreground': string;
    '--secondary': string;
    '--secondary-foreground': string;
    '--accent': string;
    '--accent-foreground': string;
    '--destructive': string;
    '--destructive-foreground': string;
    '--ring': string;
};
export type Palette = {
    [key: string]: Colors;
};
export type Options = {
    preflight?: boolean;
    layer?: boolean;
    customPalette?: Palette;
    extensions?: Extensions;
};
declare const components: readonly ["accordion", "alert", "animation", "badge", "breadcrumb", "button", "card", "chart", "cmd", "comment", "container", "cover", "date", "divider", "dotnav", "drop", "form", "heading", "icon", "label", "leader", "lightbox", "link", "list", "modal", "nav", "notification", "offcanvas", "pagination", "sizing", "slider", "sortable", "spinner", "stepper", "sticky", "svg", "switcher", "tab", "table", "theme-switcher", "thumbnav", "tooltip", "utility", "media", "print"];
export type ComponentKey = (typeof components)[number] | string;
export type Component = {
    [key: string]: CSSRuleObject;
};
export type Components = {
    [K in ComponentKey]: Component;
} & {
    [key: string]: Component;
};
export type Context = {
    defaults: {
        ':root': CSSRuleObject;
        '.dark': CSSRuleObject;
        [key: string]: CSSRuleObject;
    };
    palettes: CSSRuleObject;
    components: Components;
};
export type Extension = (context: Context, config: ExtensionConfig) => Context;
export type ExtensionConfig = Record<string, any>;
export type Extensions = [Function, ExtensionConfig][];
export {};
