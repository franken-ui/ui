<script>
	import TestItem from 'franken/test-item.svelte';
	import Test from 'franken/test.svelte';
</script>

<svelte:head>
	<title>Tab</title>
</svelte:head>

<h1 class="uk-h1 mb-10">Tab</h1>

<Test>
	<TestItem open={true} title="Basic">
		<ul class="uk-tab" data-uk-tab>
			<li class="uk-active"><a href="#">Left</a></li>
			<li><a href="#">Item</a></li>
			<li><a href="#">Item</a></li>
			<li class="uk-disabled"><a>Disabled</a></li>
		</ul>
	</TestItem>
	<TestItem title="Alternative layout">
		<ul class="uk-tab-alt">
			<li class="uk-active"><a href="#">Account</a></li>
			<li><a href="#">Password</a></li>
		</ul>
	</TestItem>
	<TestItem title="Bottom modifier">
		<ul class="uk-tab-bottom" data-uk-tab>
			<li class="uk-active"><a href="#">Left</a></li>
			<li><a href="#">Item</a></li>
			<li><a href="#">Item</a></li>
		</ul>
	</TestItem>
	<TestItem title="Left/Right modifiers">
		<div class="grid grid-cols-2 gap-4">
			<div>
				<ul class="uk-tab uk-tab-left flex-col">
					<li class="uk-active"><a class="py-2" href="#">Left</a></li>
					<li><a class="py-2" href="#">Item</a></li>
					<li><a class="py-2" href="#">Item</a></li>
				</ul>
			</div>

			<div>
				<ul class="uk-tab uk-tab-right">
					<li class="uk-active"><a class="px-4 py-2" href="#">Right</a></li>
					<li><a class="px-4 py-2" href="#">Item</a></li>
					<li><a class="px-4 py-2" href="#">Item</a></li>
				</ul>
			</div>
		</div>
	</TestItem>
	<TestItem title="Alignment">
		<div>
			<ul class="uk-tab" data-uk-tab>
				<li class="uk-active"><a href="#">Center</a></li>
				<li><a href="#">Item</a></li>
				<li><a href="#">Item</a></li>
			</ul>
		</div>

		<div class="mt-4">
			<ul class="justify-center" data-uk-tab>
				<li class="uk-active"><a href="#">Center</a></li>
				<li><a href="#">Item</a></li>
				<li><a href="#">Item</a></li>
			</ul>
		</div>

		<div class="mt-4">
			<ul class="justify-end" data-uk-tab>
				<li class="uk-active"><a href="#">Right</a></li>
				<li><a href="#">Item</a></li>
				<li><a href="#">Item</a></li>
			</ul>
		</div>

		<div class="mt-4">
			<ul class="justify-between" data-uk-tab>
				<li class="uk-active"><a href="#">Justify</a></li>
				<li><a href="#">Item</a></li>
				<li><a href="#">Item</a></li>
				<li><a href="#">Item</a></li>
			</ul>
		</div>
	</TestItem>
	<TestItem title="Tabs and dropdowns">
		<ul class="uk-tab" data-uk-tab>
			<li class="uk-active"><a href="#">Active</a></li>
			<li><a href="#">Item</a></li>
			<li>
				<a href>
					<span class="mr-2">More</span>
					<uk-icon icon="chevron-down"></uk-icon>
				</a>
				<div data-uk-dropdown="mode: click">
					<ul class="uk-dropdown-nav uk-nav">
						<li class="uk-active"><a href="#">Active</a></li>
						<li><a href="#">Item</a></li>
						<li class="uk-nav-header">Header</li>
						<li><a href="#">Item</a></li>
						<li><a href="#">Item</a></li>
						<li class="uk-nav-divider"></li>
						<li><a href="#">Item</a></li>
					</ul>
				</div>
			</li>
		</ul>
	</TestItem>
</Test>
