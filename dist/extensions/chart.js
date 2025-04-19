export default (context) => {
    context.components['chart'] = {
        ':root': {
            '--chart-1': '12 76% 61%',
            '--chart-2': '173 58% 39%',
            '--chart-3': '197 37% 24%',
            '--chart-4': '43 74% 66%',
            '--chart-5': '27 87% 67%'
        },
        '.dark': {
            '--chart-1': '220 70% 50%',
            '--chart-5': '160 60% 45%',
            '--chart-3': '30 80% 55%',
            '--chart-4': '280 65% 60%',
            '--chart-2': '340 75% 55%'
        },
        '.uk-chart .apexcharts-tooltip': {
            // Visual
            borderRadius: 'var(--uk-chart-tooltip-radius, var(--uk-global-radius))',
            boxShadow: 'var(--uk-chart-tooltip-shadow, var(--uk-global-shadow))',
            // Typography
            fontSize: 'var(--uk-chart-tooltip-font-size, var(--uk-global-font-size-s))',
            lineHeight: 'var(--uk-chart-tooltip-leading, var(--uk-global-leading-s))',
            color: 'var(--uk-chart-tooltip-color, hsl(var(--foreground)))'
        },
        '.uk-chart .apexcharts-tooltip.apexcharts-theme-light, .uk-chart .apexcharts-tooltip.apexcharts-theme-dark': {
            // Split border properties
            borderWidth: 'var(--uk-chart-tooltip-border-width, 1px)',
            borderStyle: 'var(--uk-chart-tooltip-border-style, solid)',
            borderColor: 'var(--uk-chart-tooltip-border-color, hsl(var(--border)))',
            backgroundColor: 'var(--uk-chart-tooltip-bg, hsl(var(--background)))'
        },
        '.uk-chart .apexcharts-tooltip-title': {
            // Layout
            padding: 'var(--uk-chart-tooltip-title-padding, 6px)',
            // Typography
            fontSize: 'var(--uk-chart-tooltip-title-font-size, var(--uk-global-font-size-s))',
            lineHeight: 'var(--uk-chart-tooltip-title-leading, var(--uk-global-leading-s))',
            fontWeight: 'var(--uk-chart-tooltip-title-font-weight, 600)'
        },
        '.uk-chart .apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title, .uk-chart .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title': {
            backgroundColor: 'var(--uk-chart-tooltip-title-bg, hsl(var(--background)))',
            // Split border properties
            borderBottomWidth: 'var(--uk-chart-tooltip-title-border-width, 1px)',
            borderBottomStyle: 'var(--uk-chart-tooltip-title-border-style, solid)',
            borderBottomColor: 'var(--uk-chart-tooltip-title-border-color, hsl(var(--border)))'
        },
        '.uk-chart .apexcharts-tooltip-marker::before': {
            fontSize: 'var(--uk-chart-tooltip-marker-font-size, inherit)'
        },
        '.uk-chart-container': {
            borderRadius: 'var(--uk-chart-container-radius, var(--uk-global-radius))',
            boxShadow: 'var(--uk-chart-container-shadow, var(--uk-global-shadow))',
            border: 'var(--uk-chart-container-border, 1px solid hsl(var(--border)))',
            backgroundColor: 'var(--uk-chart-container-background, hsl(var(--background)))',
            color: 'var(--uk-chart-container-color, hsl(var(--foreground)))'
        },
        '.uk-chart-container .text-muted-foreground': {
            color: 'var(--uk-chart-muted-color, hsl(var(--muted-foreground)))'
        },
        '.uk-chart .apexcharts-tooltip-series-group.apexcharts-active, .uk-chart .apexcharts-tooltip-series-group:last-child': {
            paddingBottom: 'var(--uk-chart-series-group-padding-bottom, 0)'
        },
        '.uk-chart .apexcharts-tooltip-series-group': {
            padding: 'var(--uk-chart-series-group-padding, 0 8px)'
        },
        '.uk-chart .apexcharts-legend-text': {
            color: 'var(--uk-chart-legend-color, hsl(var(--foreground))) !important',
            fontSize: 'var(--uk-chart-legend-font-size, var(--uk-global-font-size-s))',
            lineHeight: 'var(--uk-chart-legend-leading, var(--uk-global-leading-s))',
            paddingLeft: 'var(--uk-chart-legend-padding-left, 18px)',
            marginLeft: 'var(--uk-chart-legend-margin-left, -16px)'
        },
        '.uk-chart-sapphire': {
            '--chart-1': '221.2 83.2% 53.3%',
            '--chart-2': '212 95% 68%',
            '--chart-3': '216 92% 60%',
            '--chart-4': '210 98% 78%',
            '--chart-5': '212 97% 87%'
        },
        '.dark.uk-chart-sapphire': {
            '--chart-1': '221.2 83.2% 53.3%',
            '--chart-2': '212 95% 68%',
            '--chart-3': '216 92% 60%',
            '--chart-4': '210 98% 78%',
            '--chart-5': '212 97% 87%'
        },
        '.uk-chart-ruby': {
            '--chart-1': '347 77% 50%',
            '--chart-2': '352 83% 91%',
            '--chart-3': '350 80% 72%',
            '--chart-4': '351 83% 82%',
            '--chart-5': '349 77% 62%'
        },
        '.dark.uk-chart-ruby': {
            '--chart-1': '347 77% 50%',
            '--chart-2': '349 77% 62%',
            '--chart-3': '350 80% 72%',
            '--chart-4': '351 83% 82%',
            '--chart-5': '352 83% 91%'
        },
        '.uk-chart-emerald': {
            '--chart-1': '139 65% 20%',
            '--chart-2': '140 74% 44%',
            '--chart-3': '142 88% 28%',
            '--chart-4': '137 55% 15%',
            '--chart-5': '141 40% 9%'
        },
        '.dark.uk-chart-emerald': {
            '--chart-1': '142 88% 28%',
            '--chart-2': '139 65% 20%',
            '--chart-3': '140 74% 24%',
            '--chart-4': '137 55% 15%',
            '--chart-5': '141 40% 9%'
        },
        '.uk-chart-daylight, .dark.uk-chart-daylight': {
            '--chart-1': '25 34% 28%',
            '--chart-2': '26 36% 34%',
            '--chart-3': '28 40% 40%',
            '--chart-4': '31 41% 48%',
            '--chart-5': '35 43% 53%'
        },
        '.uk-chart-daylight .uk-chart-container': {
            '--background': '36 39% 88%',
            '--foreground': '36 45% 15%',
            '--primary': '36 45% 70%',
            '--primary-foreground': '36 45% 11%',
            '--secondary': '40 35% 77%',
            '--secondary-foreground': '36 45% 25%',
            '--accent': '36 64% 57%',
            '--accent-foreground': '36 72% 17%',
            '--destructive': '0 84% 37%',
            '--destructive-foreground': '0 0% 98%',
            '--muted': '36 33% 75%',
            '--muted-foreground': '36 45% 25%',
            '--card': '36 46% 82%',
            '--card-foreground': '36 45% 20%',
            '--popover': '0 0% 100%',
            '--popover-foreground': '240 10% 3.9%',
            '--border': '36 45% 60%',
            '--input': '36 45% 60%',
            '--ring': '36 45% 30%'
        },
        '.uk-chart-midnight, .dark.uk-chart-midnight': {
            '--chart-1': '359 2% 90%',
            '--chart-2': '240 1% 74%',
            '--chart-3': '240 1% 58%',
            '--chart-4': '240 1% 42%',
            '--chart-5': '240 2% 26%'
        },
        '.uk-chart-midnight .uk-chart-container': {
            '--background': '240 5% 6%',
            '--foreground': '60 5% 90%',
            '--primary': '240 0% 90%',
            '--primary-foreground': '60 0% 0%',
            '--secondary': '240 4% 15%',
            '--secondary-foreground': '60 5% 85%',
            '--accent': '240 0% 13%',
            '--accent-foreground': '60 0% 100%',
            '--destructive': '0 60% 50%',
            '--destructive-foreground': '0 0% 98%',
            '--muted': '240 5% 25%',
            '--muted-foreground': '60 5% 85%',
            '--card': '240 4% 10%',
            '--card-foreground': '60 5% 90%',
            '--popover': '240 5% 15%',
            '--popover-foreground': '60 5% 85%',
            '--border': '240 6% 20%',
            '--input': '240 6% 20%',
            '--ring': '240 5% 90%'
        }
    };
    return context;
};
