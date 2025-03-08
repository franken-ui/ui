<script lang="ts">
	import 'css/app.css';
	import core from 'franken-wc/dist/js/core.iife?url';
	import chart from 'franken-wc/dist/js/chart.iife?url';
	import icon from 'franken-wc/dist/js/icon.iife?url';

	let { children } = $props();
</script>

<svelte:head>
	<script type="module" src={core}></script>
	<script type="module" src={chart}></script>
	<script type="module" src={icon}></script>
</svelte:head>

<div class="uk-container-xl">
	<div class="flex flex-col xl:flex-row">
		<div class="flex-1">
			<div class="mt-10 px-4">
				{@render children()}
			</div>
		</div>

		<div class="flex-none px-8 xl:w-1/5">
			<div class="mt-10 pb-10">
				<uk-theme-switcher>
					<select hidden>
						<optgroup data-key="mode" label="Mode">
							<option data-icon="sun" value="light">Light</option>
							<option data-icon="moon" value="dark">Dark</option>
						</optgroup>

						<optgroup data-key="theme" label="Theme">
							<option data-hex="#52525b" value="uk-theme-zinc" selected>Zinc</option>
							<option data-hex="#64748b" value="uk-theme-slate">Slate</option>
							<option data-hex="#78716c" value="uk-theme-stone">Stone</option>
							<option data-hex="#6b7280" value="uk-theme-gray">Gray</option>
							<option data-hex="#737373" value="uk-theme-neutral">Neutral</option>
							<option data-hex="#dc2626" value="uk-theme-red">Red</option>
							<option data-hex="#e11d48" value="uk-theme-rose">Rose</option>
							<option data-hex="#f97316" value="uk-theme-orange">Orange</option>
							<option data-hex="#16a34a" value="uk-theme-green">Green</option>
							<option data-hex="#2563eb" value="uk-theme-blue">Blue</option>
							<option data-hex="#facc15" value="uk-theme-yellow">Yellow</option>
							<option data-hex="#7c3aed" value="uk-theme-violet">Violet</option>
						</optgroup>

						<optgroup data-key="radii" label="Radii">
							<option value="uk-radii-none">None</option>
							<option value="uk-radii-sm">Small</option>
							<option value="uk-radii-md">Medium</option>
							<option value="uk-radii-lg">Large</option>
						</optgroup>

						<optgroup data-key="shadows" label="Shadows">
							<option value="uk-shadows-none">None</option>
							<option value="uk-shadows-sm">Small</option>
							<option value="uk-shadows-md">Medium</option>
							<option value="uk-shadows-lg">Large</option>
						</optgroup>

						<optgroup data-key="font" label="Font">
							<option value="uk-font-sm">Small</option>
							<option value="uk-font-base">Default</option>
						</optgroup>

						<optgroup data-key="chart" label="Chart">
							<option data-hex="#e76e50" value="uk-chart-default" selected>Default</option>
							<option data-hex="#2563eb" value="uk-chart-sapphire">Sapphire</option>
							<option data-hex="#e21d48" value="uk-chart-ruby">Ruby</option>
							<option data-hex="#1dc355" value="uk-chart-emerald">Emerald</option>
							<option data-hex="#ad7c48" value="uk-chart-daylight">Daylight</option>
							<option data-hex="#959593" value="uk-chart-midnight">Midnight</option>
						</optgroup>
					</select>
				</uk-theme-switcher>
			</div>
		</div>
	</div>
</div>
