<script>
	import TestItem from 'franken/test-item.svelte';
	import Test from 'franken/test.svelte';
</script>

<svelte:head>
	<title>Form</title>
</svelte:head>

<h1 class="uk-h1 mb-10">Form</h1>

<Test>
	<TestItem open={true} title="Basic">
		<form>
			<fieldset class="uk-fieldset space-y-4">
				<div class="">
					<input class="uk-input" type="text" placeholder="Input" aria-label="Input" />
				</div>

				<div class="">
					<select class="uk-select" aria-label="Select">
						<option>Option 01</option>
						<option>Option 02</option>
					</select>
				</div>

				<div class="">
					<textarea class="uk-textarea" rows="5" placeholder="Textarea" aria-label="Textarea"
					></textarea>
				</div>

				<div class="">
					<label class="mr-2">
						<input class="uk-radio mr-1" type="radio" name="radio2" checked />
						Option 1
					</label>
					<label>
						<input class="uk-radio mr-1" type="radio" name="radio2" /> Option 2
					</label>
				</div>

				<div class="">
					<label class="mr-2">
						<input class="uk-checkbox mr-1" type="checkbox" checked /> Option 1
					</label>
					<label><input class="uk-checkbox mr-1" type="checkbox" /> Option 2</label>
				</div>

				<div class="">
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
			</fieldset>
		</form>
	</TestItem>
	<TestItem title="Destructive modifier">
		<div>
			<input
				class="uk-input uk-form-destructive"
				type="text"
				placeholder="form-destructive"
				aria-label="form-destructive"
				value="form-destructive"
			/>
		</div>

		<div class="mt-4">
			<input
				class="uk-input"
				type="text"
				placeholder="disabled"
				aria-label="disabled"
				value="disabled"
				disabled
			/>
		</div>
	</TestItem>
	<TestItem title="Size modifiers">
		<form>
			<div class="">
				<input class="uk-input uk-form-xs" type="text" placeholder="xs" aria-label="xs" />
			</div>

			<div class="mt-4">
				<input class="uk-input uk-form-sm" type="text" placeholder="sm" aria-label="sm" />
			</div>

			<div class="mt-4">
				<input class="uk-input uk-form-md" type="text" placeholder="md" aria-label="md" />
			</div>

			<div class="mt-4">
				<input class="uk-input uk-form-lg" type="text" placeholder="lg" aria-label="lg" />
			</div>
		</form>
	</TestItem>
	<TestItem title="Width modifiers">
		<div class="space-y-4">
			<div class="w-40">
				<input class="uk-input" type="text" placeholder="w-40" aria-label="w-40" />
			</div>
			<div class="w-1/2">
				<input class="uk-input" type="text" placeholder="w-1/2" aria-label="w-1/2" />
			</div>
			<div class="w-full">
				<input class="uk-input" type="text" placeholder="w-full" aria-label="w-full" />
			</div>
		</div>
	</TestItem>
	<TestItem title="Blank modifier">
		<form>
			<input class="uk-input uk-form-blank" type="text" placeholder="Form blank" />
		</form>
	</TestItem>
	<TestItem title="Layout">
		<form class="uk-form-stacked space-y-4">
			<div class="">
				<label class="uk-form-label uk-form-label-required" for="form-stacked-text"> Text </label>
				<div class="uk-form-controls">
					<input class="uk-input" id="form-stacked-text" type="text" placeholder="Some text" />
				</div>
			</div>

			<div class="">
				<label class="uk-form-label" for="form-stacked-select">Select</label>
				<div class="uk-form-controls">
					<select class="uk-select" id="form-stacked-select">
						<option>Option 01</option>
						<option>Option 02</option>
					</select>
				</div>
			</div>

			<div class="">
				<div class="uk-form-label">Radio</div>
				<div class="uk-form-controls">
					<label class="mr-2">
						<input class="uk-radio mr-1" type="radio" name="radio1" /> Option 01
					</label>
					<label>
						<input class="uk-radio mr-1" type="radio" name="radio1" /> Option 02
					</label>
				</div>
			</div>
		</form>
	</TestItem>
	<TestItem title="Horizontal form">
		<form class="uk-form-horizontal space-y-4">
			<div class="">
				<label class="uk-form-label" for="form-horizontal-text">Text</label>
				<div class="uk-form-controls">
					<input class="uk-input" id="form-horizontal-text" type="text" placeholder="Some text" />
				</div>
			</div>

			<div class="">
				<label class="uk-form-label" for="form-horizontal-select">Select</label>
				<div class="uk-form-controls">
					<select class="uk-select" id="form-horizontal-select">
						<option>Option 01</option>
						<option>Option 02</option>
					</select>
				</div>
			</div>

			<div class="">
				<div class="uk-form-label">Radio</div>
				<div class="uk-form-controls uk-form-controls-text">
					<label class="mr-2">
						<input class="uk-radio mr-1" type="radio" name="radio1" /> Option 01
					</label>
					<label>
						<input class="uk-radio mr-1" type="radio" name="radio1" /> Option 02
					</label>
				</div>
			</div>
		</form>
	</TestItem>
	<TestItem title="Form and icons">
		<form class="space-y-4">
			<div class="">
				<div class="uk-inline">
					<span class="uk-form-icon">
						<uk-icon icon="user"></uk-icon>
					</span>
					<input class="uk-input" type="text" aria-label="Not clickable icon" />
				</div>
			</div>

			<div class="">
				<div class="uk-inline">
					<span class="uk-form-icon uk-form-icon-flip">
						<uk-icon icon="user"></uk-icon>
					</span>
					<input class="uk-input" type="text" aria-label="Not clickable icon" />
				</div>
			</div>
		</form>
	</TestItem>
	<TestItem title="Custom controls">
		<form>
			<div class="">
				<div data-uk-form-custom>
					<input type="file" aria-label="Custom controls" />
					<button class="uk-btn uk-btn-default" type="button" tabindex="-1"> Select </button>
				</div>
			</div>

			<div class="mt-4">
				<span class="uk-text-middle">Here is a text</span>
				<div data-uk-form-custom>
					<input type="file" aria-label="Custom controls" />
					<span class="uk-link">upload</span>
				</div>
			</div>

			<div class="mt-4">
				<div data-uk-form-custom="target: true">
					<input type="file" aria-label="Custom controls" />
					<input
						class="uk-input max-w-sm"
						type="text"
						placeholder="Select file"
						aria-label="Custom controls"
						disabled
					/>
				</div>
				<button class="uk-btn uk-btn-default">Submit</button>
			</div>
		</form>

		<form class="mt-4">
			<div class="">
				<div data-uk-form-custom="target: true">
					<select aria-label="Custom controls">
						<option value="1">Option 01</option>
						<option value="2">Option 02</option>
						<option value="3">Option 03</option>
						<option value="4">Option 04</option>
					</select>
					<span></span>
				</div>
			</div>

			<div class="mt-4">
				<div data-uk-form-custom="target: > * > span:last-child">
					<select aria-label="Custom controls">
						<option value="1">Option 01</option>
						<option value="2">Option 02</option>
						<option value="3">Option 03</option>
						<option value="4">Option 04</option>
					</select>
					<span class="uk-flex-middle uk-link uk-flex">
						<span class="mr-2">
							<uk-icon icon="pencil-line"></uk-icon>
						</span>
						<span></span>
					</span>
				</div>
			</div>

			<div class="mt-4">
				<div data-uk-form-custom="target: > * > span:first-child">
					<select aria-label="Custom controls">
						<option value="">Please select...</option>
						<option value="1">Option 01</option>
						<option value="2">Option 02</option>
						<option value="3">Option 03</option>
						<option value="4">Option 04</option>
					</select>
					<button class="uk-btn uk-btn-default" type="button" tabindex="-1">
						<span></span>
						<span class="ml-2">
							<uk-icon icon="chevron-down"></uk-icon>
						</span>
					</button>
				</div>
			</div>
		</form>
	</TestItem>
	<TestItem title="Help block">
		<div class="space-y-2">
			<label for="name" class="uk-form-label">Name</label>
			<input
				type="text"
				id="name"
				class="uk-input"
				aria-describedby="name-help-block"
				placeholder="Name"
			/>
			<div class="uk-form-help" id="name-help-block">
				This is your public display name. It can be your real name or a pseudonym. You can only
				change this once every 30 days.
			</div>
		</div>
	</TestItem>
	<TestItem title="Toggle Switch">
		<div class="flex items-center space-x-2">
			<input class="uk-toggle-switch uk-toggle-switch-primary" id="toggle-switch" type="checkbox" />
			<label class="uk-form-label" for="toggle-switch">Toggle me</label>
		</div>

		<div class="mt-4 flex items-center space-x-2">
			<input
				class="uk-toggle-switch uk-toggle-switch-primary"
				checked
				id="toggle-checked"
				type="checkbox"
			/>
			<label class="uk-form-label" for="toggle-checked">Checked toggle</label>
		</div>

		<div class="mt-4 flex items-center space-x-2">
			<input
				class="uk-toggle-switch uk-toggle-switch-primary"
				disabled
				id="toggle-disabled"
				type="checkbox"
			/>
			<label class="uk-form-label" for="toggle-disabled">Disabled toggle</label>
		</div>

		<div class="mt-4 flex items-center space-x-2">
			<input
				class="uk-toggle-switch uk-toggle-switch-primary"
				checked
				disabled
				id="toggle-disabled-checked"
				type="checkbox"
			/>
			<label class="uk-form-label" for="toggle-disabled-checked">Disabled checked toggle</label>
		</div>

		<div class="mt-4 flex items-center space-x-2">
			<input
				class="uk-toggle-switch uk-toggle-switch-destructive"
				checked
				id="toggle-checked"
				type="checkbox"
			/>
			<label class="uk-form-label" for="toggle-checked">Destructive</label>
		</div>
	</TestItem>
</Test>
