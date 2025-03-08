<script>
	import Test from 'franken/test.svelte';
	import TestItem from 'franken/test-item.svelte';
</script>

<svelte:head>
	<title>Input Tag</title>
</svelte:head>

<h1 class="uk-h1 mb-10">Input Tag</h1>

<Test>
	<TestItem open={true} title="Basic">
		<form>
			<uk-input-tag placeholder="Add a fruit"></uk-input-tag>
		</form>
	</TestItem>
	<TestItem title="State modifiers">
		<form>
			<div>
				<uk-input-tag placeholder="Add a tag" state="primary" value="Featured,Recommended,Verified"
				></uk-input-tag>
			</div>

			<div class="mt-4">
				<uk-input-tag placeholder="Add a tag" value="Category,Topic,Tag,Label,Filter"
				></uk-input-tag>
			</div>

			<div class="mt-4">
				<uk-input-tag
					placeholder="Add a tag"
					state="destructive"
					value="Deprecated,Error,Unsupported"
				></uk-input-tag>
			</div>
		</form>
	</TestItem>
	<TestItem title="Disable input">
		<form>
			<uk-input-tag
				placeholder="Add a tag"
				slugify
				value="Verified,Exclusive"
				state="primary"
				disabled
			></uk-input-tag>
		</form>
	</TestItem>
	<TestItem title="Error state">
		<form class="space-y-1.5">
			<label class="uk-form-label text-destructive">Tags</label>
			<div class="uk-form-controls">
				<uk-input-tag cls-custom="uk-form-destructive" placeholder="Add a tag"></uk-input-tag>
			</div>
			<p class="uk-form-help text-destructive">This field is required.</p>
		</form>
	</TestItem>
</Test>
