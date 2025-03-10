import type { Options } from '../types.js';
export default function (options?: Options): {
    darkMode: string;
    theme: {
        extend: {
            colors: {
                background: string;
                foreground: string;
                muted: string;
                'muted-foreground': string;
                card: string;
                'card-foreground': string;
                popover: string;
                'popover-foreground': string;
                border: string;
                input: string;
                primary: string;
                'primary-foreground': string;
                secondary: string;
                'secondary-foreground': string;
                accent: string;
                'accent-foreground': string;
                destructive: string;
                'destructive-foreground': string;
                ring: string;
            };
            fontFamily: {
                'geist-sans': string[];
                'geist-mono': string[];
            };
            screens: {
                'max-sm': {
                    max: string;
                };
                'max-md': {
                    max: string;
                };
                'max-lg': {
                    max: string;
                };
                'max-xl': {
                    max: string;
                };
            };
        };
    };
    plugins: {
        handler: import("tailwindcss/types/config.js").PluginCreator;
        config?: Partial<import("tailwindcss/types/config.js").Config>;
    }[];
};
