<script>
	import TestItem from 'franken/test-item.svelte';
	import Test from 'franken/test.svelte';
</script>

<svelte:head>
	<title>Badge</title>
</svelte:head>

<h1 class="uk-h1 mb-10">Badge</h1>

<Test>
	<TestItem open={true} title="Basic">
		<span class="uk-badge">1</span>
		<span class="uk-badge uk-badge-primary">100</span>
		<span class="uk-badge uk-badge-secondary">100</span>
		<span class="uk-badge uk-badge-destructive">100</span>
	</TestItem>
</Test>
