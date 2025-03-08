<script>
	import TestItem from 'franken/test-item.svelte';
	import Test from 'franken/test.svelte';
</script>

<svelte:head>
	<title>Alert</title>
</svelte:head>

<h1 class="uk-h1 mb-10">Alert</h1>

<Test>
	<TestItem open={true} title="Basic">
		<div class="uk-alert" data-uk-alert>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua.
		</div>
	</TestItem>
	<TestItem title="Close button">
		<div class="uk-alert" data-uk-alert>
			<a href class="uk-alert-close" data-uk-close></a>
			<div class="uk-alert-title">Notice</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>
		</div>
	</TestItem>
	<TestItem title="Destructive modifier">
		<div class="uk-alert uk-alert-destructive" data-uk-alert>
			<a href class="uk-alert-close" data-uk-close></a>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
			</p>
		</div>
	</TestItem>
</Test>
