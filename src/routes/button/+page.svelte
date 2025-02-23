<script>
	import TestItem from 'franken/test-item.svelte';
	import Test from 'franken/test.svelte';
</script>

<svelte:head>
	<title>Button</title>
</svelte:head>

<h1 class="uk-h1 mb-10">Button</h1>

<Test>
	<TestItem open={true} title="Basic">
		<div class="flex flex-wrap items-center gap-2">
			<button class="uk-btn uk-btn-default">Default</button>
			<button class="uk-btn uk-btn-ghost">Ghost</button>
			<button class="uk-btn uk-btn-primary">Primary</button>
			<button class="uk-btn uk-btn-secondary">Secondary</button>
			<button class="uk-btn uk-btn-destructive">Destructive</button>
			<button class="uk-btn uk-btn-text">Text</button>
		</div>
	</TestItem>
	<TestItem title="Size modifiers">
		<div class="flex flex-wrap gap-2">
			<button class="uk-btn uk-btn-default uk-btn-xs">xs</button>
			<button class="uk-btn uk-btn-primary uk-btn-xs">xs</button>
			<button class="uk-btn uk-btn-secondary uk-btn-xs">xs</button>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<button class="uk-btn uk-btn-default uk-btn-sm">sm</button>
			<button class="uk-btn uk-btn-primary uk-btn-sm">sm</button>
			<button class="uk-btn uk-btn-secondary uk-btn-sm">sm</button>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<button class="uk-btn uk-btn-default uk-btn-md">md</button>
			<button class="uk-btn uk-btn-primary uk-btn-md">md</button>
			<button class="uk-btn uk-btn-secondary uk-btn-md">md</button>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<button class="uk-btn uk-btn-default uk-btn-lg">lg</button>
			<button class="uk-btn uk-btn-primary uk-btn-lg">lg</button>
			<button class="uk-btn uk-btn-secondary uk-btn-lg">lg</button>
		</div>
	</TestItem>
	<TestItem title="Width modifiers">
		<div class="flex flex-col gap-2">
			<button class="uk-btn uk-btn-default w-40">w-40</button>
			<button class="uk-btn uk-btn-primary w-44">w-44</button>
			<button class="uk-btn uk-btn-secondary w-48">w-48</button>
			<button class="uk-btn uk-btn-ghost w-52">w-52</button>
			<button class="uk-btn uk-btn-destructive w-full">w-full</button>
		</div>
	</TestItem>
	<TestItem title="Icon">
		<div class="flex gap-x-2">
			<button class="uk-btn uk-btn-default uk-btn-icon">
				<uk-icon icon="copy"></uk-icon>
			</button>
			<button class="uk-btn uk-btn-default uk-btn-icon">
				<uk-icon icon="file"></uk-icon>
			</button>
			<button class="uk-btn uk-btn-default uk-btn-icon">
				<uk-icon icon="trash"></uk-icon>
			</button>
		</div>
	</TestItem>
	<TestItem title="Group">
		<div>
			<div class="uk-btn-group">
				<button class="uk-btn uk-btn-secondary uk-btn-xs">Button</button>
				<button class="uk-btn uk-btn-secondary uk-btn-xs">Button</button>
				<button class="uk-btn uk-btn-secondary uk-btn-xs">Button</button>
			</div>
		</div>

		<div class="mt-4">
			<div class="uk-btn-group">
				<button class="uk-btn uk-btn-primary uk-btn-xs">Button</button>
				<button class="uk-btn uk-btn-primary uk-btn-xs">Button</button>
				<button class="uk-btn uk-btn-primary uk-btn-xs">Button</button>
			</div>
		</div>

		<div class="mt-4">
			<div class="uk-btn-group">
				<button class="uk-btn uk-btn-destructive uk-btn-xs">Button</button>
				<button class="uk-btn uk-btn-destructive uk-btn-xs">Button</button>
				<button class="uk-btn uk-btn-destructive uk-btn-xs">Button</button>
			</div>
		</div>

		<div class="mt-4">
			<div class="uk-btn-group">
				<button class="uk-btn uk-btn-secondary uk-btn-sm">Button</button>
				<button class="uk-btn uk-btn-secondary uk-btn-sm">Button</button>
				<button class="uk-btn uk-btn-secondary uk-btn-sm">Button</button>
			</div>
		</div>

		<div class="mt-4">
			<div class="uk-btn-group">
				<button class="uk-btn uk-btn-primary uk-btn-sm">Button</button>
				<button class="uk-btn uk-btn-primary uk-btn-sm">Button</button>
				<button class="uk-btn uk-btn-primary uk-btn-sm">Button</button>
			</div>
		</div>

		<div class="mt-4">
			<div class="uk-btn-group">
				<button class="uk-btn uk-btn-destructive uk-btn-sm">Button</button>
				<button class="uk-btn uk-btn-destructive uk-btn-sm">Button</button>
				<button class="uk-btn uk-btn-destructive uk-btn-sm">Button</button>
			</div>
		</div>

		<div class="mt-4">
			<div class="uk-btn-group">
				<button class="uk-btn uk-btn-secondary">Button</button>
				<button class="uk-btn uk-btn-secondary">Button</button>
				<button class="uk-btn uk-btn-secondary">Button</button>
			</div>
		</div>

		<div class="mt-4">
			<div class="uk-btn-group">
				<button class="uk-btn uk-btn-primary">Button</button>
				<button class="uk-btn uk-btn-primary">Button</button>
				<button class="uk-btn uk-btn-primary">Button</button>
			</div>
		</div>

		<div class="mt-4">
			<div class="uk-btn-group">
				<button class="uk-btn uk-btn-destructive">Button</button>
				<button class="uk-btn uk-btn-destructive">Button</button>
				<button class="uk-btn uk-btn-destructive">Button</button>
			</div>
		</div>

		<div class="mt-4">
			<div class="uk-btn-group">
				<button class="uk-btn uk-btn-secondary uk-btn-md">Button</button>
				<button class="uk-btn uk-btn-secondary uk-btn-md">Button</button>
				<button class="uk-btn uk-btn-secondary uk-btn-md">Button</button>
			</div>
		</div>

		<div class="mt-4">
			<div class="uk-btn-group">
				<button class="uk-btn uk-btn-primary uk-btn-md">Button</button>
				<button class="uk-btn uk-btn-primary uk-btn-md">Button</button>
				<button class="uk-btn uk-btn-primary uk-btn-md">Button</button>
			</div>
		</div>

		<div class="mt-4">
			<div class="uk-btn-group">
				<button class="uk-btn uk-btn-destructive uk-btn-md">Button</button>
				<button class="uk-btn uk-btn-destructive uk-btn-md">Button</button>
				<button class="uk-btn uk-btn-destructive uk-btn-md">Button</button>
			</div>
		</div>

		<div class="mt-4">
			<div class="uk-btn-group">
				<button class="uk-btn uk-btn-secondary uk-btn-lg">Button</button>
				<button class="uk-btn uk-btn-secondary uk-btn-lg">Button</button>
				<button class="uk-btn uk-btn-secondary uk-btn-lg">Button</button>
			</div>
		</div>

		<div class="mt-4">
			<div class="uk-btn-group">
				<button class="uk-btn uk-btn-primary uk-btn-lg">Button</button>
				<button class="uk-btn uk-btn-primary uk-btn-lg">Button</button>
				<button class="uk-btn uk-btn-primary uk-btn-lg">Button</button>
			</div>
		</div>

		<div class="mt-4">
			<div class="uk-btn-group">
				<button class="uk-btn uk-btn-destructive uk-btn-lg">Button</button>
				<button class="uk-btn uk-btn-destructive uk-btn-lg">Button</button>
				<button class="uk-btn uk-btn-destructive uk-btn-lg">Button</button>
			</div>
		</div>
	</TestItem>
	<TestItem title="Loading">
		<div class="flex gap-x-2">
			<button class="uk-btn uk-btn-default uk-btn-icon">
				<span data-uk-spinner></span>
			</button>
			<button class="uk-btn uk-btn-default">
				<span class="ml-2" data-uk-spinner></span>
				<span>Loading</span>
			</button>
		</div>
	</TestItem>
	<TestItem title="Button with dropdowns">
		<div class="uk-inline">
			<button class="uk-btn uk-btn-default" type="button">Dropdown</button>
			<div class="uk-drop uk-dropdown min-w-72" data-uk-dropdown>
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
		</div>
	</TestItem>
</Test>
