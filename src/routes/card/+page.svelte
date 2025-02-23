<script>
	import TestItem from 'franken/test-item.svelte';
	import Test from 'franken/test.svelte';
</script>

<svelte:head>
	<title>Card</title>
</svelte:head>

<h1 class="uk-h1 mb-10">Card</h1>

<Test>
	<TestItem open={true} title="Basic">
		<div class="uk-card uk-card-body max-w-sm">
			<h3 class="uk-card-title">Default</h3>
			<p class="mt-4">
				Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua.
			</p>
		</div>
	</TestItem>
	<TestItem title="Style modifiers">
		<div class="grid gap-4 md:grid-cols-2">
			<div>
				<div class="uk-card uk-card-body">
					<h3 class="uk-card-title">Default</h3>
					<p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
			</div>
			<div>
				<div class="uk-card uk-card-body uk-card-primary">
					<h3 class="uk-card-title">Primary</h3>
					<p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
			</div>
			<div>
				<div class="uk-card uk-card-body uk-card-secondary">
					<h3 class="uk-card-title">Secondary</h3>
					<p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
			</div>
			<div>
				<div class="uk-card uk-card-body uk-card-destructive">
					<h3 class="uk-card-title">Destructive</h3>
					<p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
			</div>
		</div>
	</TestItem>
	<TestItem title="Header and footer">
		<div class="uk-card max-w-sm">
			<div class="uk-card-header">
				<h3 class="uk-card-title">Create project</h3>
				<p class="mt-2 text-muted-foreground">Deploy your new project in one-click.</p>
			</div>
			<div class="uk-card-body">
				<div class="">
					<label class="uk-form-label" for="name">Name</label>
					<div class="uk-form-controls mt-2">
						<input
							class="uk-input"
							id="name"
							type="text"
							aria-describedby="name-help-block"
							placeholder="Name"
						/>
						<div id="name-help-block" class="uk-form-help mt-2">The name of your project.</div>
					</div>
				</div>

				<div class="mt-4">
					<label class="uk-form-label" for="framework">Framework</label>
					<div class="uk-form-controls mt-2">
						<select class="uk-select" name="framework">
							<option value="sveltekit">Sveltekit</option>
							<option value="astro" selected>Astro</option>
						</select>
					</div>
				</div>
			</div>

			<div class="uk-card-footer flex justify-between">
				<button class="uk-btn-default uk-btn">Cancel</button>
				<button class="uk-btn-primary uk-btn">Deploy</button>
			</div>
		</div>
	</TestItem>
</Test>
