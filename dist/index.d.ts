import type { Colors, Options } from './types.js';
export declare const variables: {
    [key: string]: Colors;
};
declare const _default: {
    (options: Options): {
        handler: import("tailwindcss/types/config.js").PluginCreator;
        config?: Partial<import("tailwindcss/types/config.js").Config>;
    };
    __isOptionsFunction: true;
};
export default _default;
