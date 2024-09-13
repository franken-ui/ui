<script>
	import { browser } from '$app/environment';

	if (browser) {
		import('uikit');
	}
</script>

<svelte:head>
	<script>
		const htmlElement = document.documentElement;

		if (
			localStorage.getItem('mode') === 'dark' ||
			(!('mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			htmlElement.classList.add('dark');
		} else {
			htmlElement.classList.remove('dark');
		}

		htmlElement.classList.add(localStorage.getItem('theme') || 'uk-theme-zinc');
	</script>
	<title>Franken UI</title>
</svelte:head>

<div class="border-b border-border">
	<div class="mx-auto max-w-7xl py-4">
		<button class="uk-button uk-button-default" id="theme-toggle">
			<span class="hidden dark:block">Light</span>
			<span class="dark:hidden">Dark</span>
		</button>
	</div>
</div>

<div class="mx-auto mt-20 max-w-7xl">
	<form>
		<fieldset class="uk-fieldset">
			<legend class="uk-legend">Legend</legend>

			<div class="mt-4">
				<input class="uk-input" type="text" placeholder="Input" aria-label="Input" />
			</div>

			<div class="mt-4">
				<select class="uk-select" aria-label="Select">
					<option>Option 01</option>
					<option>Option 02</option>
				</select>
			</div>

			<div class="mt-4">
				<textarea class="uk-textarea" rows="5" placeholder="Textarea" aria-label="Textarea"
				></textarea>
			</div>

			<div class="uk-grid uk-grid-small uk-child-width-auto mt-4">
				<label><input class="uk-radio" type="radio" name="radio2" checked /> A</label>
				<label><input class="uk-radio" type="radio" name="radio2" /> B</label>
			</div>

			<div class="uk-grid uk-grid-small uk-child-width-auto mt-4">
				<label><input class="uk-checkbox" type="checkbox" checked /> A</label>
				<label><input class="uk-checkbox" type="checkbox" /> B</label>
			</div>

			<div class="mt-4">
				<input
					class="uk-range"
					type="range"
					value="2"
					min="0"
					max="10"
					step="0.1"
					aria-label="Range"
				/>
			</div>

			<div class="mt-4">
				<input class="uk-input" list="browsers" name="browser" id="browser" />

				<datalist id="browsers">
					<option value="Edge"> </option><option value="Firefox"> </option><option value="Chrome">
					</option><option value="Opera"> </option><option value="Safari"> </option></datalist
				>
			</div>

			<div class="mt-4 flex items-center space-x-2">
				<input
					class="uk-toggle-switch uk-toggle-switch-primary"
					id="toggle-switch"
					type="checkbox"
				/>
				<label class="uk-form-label" for="toggle-switch">Toggle me</label>
			</div>

			<div class="mt-3 flex items-center space-x-2">
				<input
					class="uk-toggle-switch uk-toggle-switch-primary"
					checked
					id="toggle-checked"
					type="checkbox"
				/>
				<label class="uk-form-label" for="toggle-checked">Checked toggle</label>
			</div>

			<div class="mt-3 flex items-center space-x-2">
				<input
					class="uk-toggle-switch uk-toggle-switch-primary"
					disabled
					id="toggle-disabled"
					type="checkbox"
				/>
				<label class="uk-form-label" for="toggle-disabled">Disabled toggle</label>
			</div>

			<div class="mt-3 flex items-center space-x-2">
				<input
					class="uk-toggle-switch uk-toggle-switch-primary"
					checked
					disabled
					id="toggle-disabled-checked"
					type="checkbox"
				/>
				<label class="uk-form-label" for="toggle-disabled-checked">Disabled checked toggle</label>
			</div>
		</fieldset>
	</form>
</div>
