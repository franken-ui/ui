<script>
	import Test from 'franken/test.svelte';
	import TestItem from 'franken/test-item.svelte';
</script>

<svelte:head>
	<title>Input PIN</title>
</svelte:head>

<h1 class="uk-h1 mb-10">Input PIN</h1>

<Test>
	<TestItem open={true} title="Basic">
		<uk-input-pin></uk-input-pin>
	</TestItem>
	<TestItem title="Separated input">
		<uk-input-pin cls-custom="uk-input-pin-separated"></uk-input-pin>
	</TestItem>
	<TestItem title="Size modifiers">
		<div class="h-7">
			<uk-input-pin cls-custom="uk-form-xs"></uk-input-pin>
		</div>

		<div class="mt-4 h-8">
			<uk-input-pin cls-custom="uk-form-sm"></uk-input-pin>
		</div>

		<div class="mt-4 h-12">
			<uk-input-pin cls-custom="uk-form-md"></uk-input-pin>
		</div>

		<div class="mt-4 h-14">
			<uk-input-pin cls-custom="uk-form-lg"></uk-input-pin>
		</div>
	</TestItem>
	<TestItem title="Disable input">
		<uk-input-pin disabled></uk-input-pin>
	</TestItem>
	<TestItem title="Error state">
		<div class="space-y-2">
			<label class="uk-form-label text-destructive">PIN</label>
			<div class="uk-form-controls">
				<uk-input-pin cls-custom="uk-form-destructive"></uk-input-pin>
			</div>
			<p class="uk-form-help text-destructive">This field is required.</p>
		</div>
	</TestItem>
</Test>
