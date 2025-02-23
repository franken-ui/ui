<script>
	import TestItem from 'franken/test-item.svelte';
	import Test from 'franken/test.svelte';
</script>

<svelte:head>
	<title>Breadcrumb</title>
</svelte:head>

<h1 class="uk-h1 mb-10">Breadcrumb</h1>

<Test>
	<TestItem open={true} title="Basic">
		<nav aria-label="Breadcrumb">
			<ul class="uk-breadcrumb">
				<li><a href="#">Home</a></li>
				<li><a href="#">Linked Category</a></li>
				<li class="uk-disabled"><a>Disabled Category</a></li>
				<li>
					<span aria-current="page">Franken UI</span>
				</li>
			</ul>
		</nav>
	</TestItem>
</Test>
