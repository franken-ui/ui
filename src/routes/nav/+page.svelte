<script>
	import TestItem from 'franken/test-item.svelte';
	import Test from 'franken/test.svelte';
</script>

<svelte:head>
	<title>Nav</title>
</svelte:head>

<h1 class="uk-h1 mb-10">Nav</h1>

<Test>
	<TestItem open={true} title="Basic">
		<div class="max-w-sm">
			<ul class="uk-nav-default uk-nav">
				<li class="uk-active"><a href="#">Active</a></li>
				<li><a href="#">Item</a></li>
				<li><a href="#">Item</a></li>
			</ul>
		</div>
	</TestItem>
	<TestItem title="Nested nav">
		<div class="max-w-sm">
			<ul class="uk-nav-default uk-nav">
				<li class="uk-active"><a href="#">Active</a></li>
				<li class="uk-parent">
					<a href="#">Parent</a>
					<ul class="uk-nav-sub">
						<li><a href="#">Sub item</a></li>
						<li>
							<a href="#">Sub item</a>
							<ul>
								<li><a href="#">Sub item</a></li>
								<li><a href="#">Sub item</a></li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</TestItem>
	<TestItem title="Accordion">
		<div class="max-w-sm">
			<ul class="uk-nav-default" data-uk-nav>
				<li class="uk-active"><a href="#">Active</a></li>
				<li class="uk-parent">
					<a href="#">Parent</a>
					<ul class="uk-nav-sub">
						<li><a href="#">Sub item</a></li>
						<li>
							<a href="#">Sub item</a>
							<ul>
								<li><a href="#">Sub item</a></li>
								<li><a href="#">Sub item</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li class="uk-parent">
					<a href="#">Parent</a>
					<ul class="uk-nav-sub">
						<li><a href="#">Sub item</a></li>
						<li><a href="#">Sub item</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</TestItem>
	<TestItem title="Parent icon">
		<div class="max-w-sm">
			<ul class="uk-nav-default" data-uk-nav>
				<li class="uk-active"><a href="#">Active</a></li>
				<li class="uk-parent">
					<a href="#">Parent <span data-uk-nav-parent-icon></span></a>
					<ul class="uk-nav-sub">
						<li><a href="#">Sub item</a></li>
						<li>
							<a href="#">Sub item</a>
							<ul>
								<li><a href="#">Sub item</a></li>
								<li><a href="#">Sub item</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li class="uk-parent">
					<a href="#">Parent <span data-uk-nav-parent-icon></span></a>
					<ul class="uk-nav-sub">
						<li><a href="#">Sub item</a></li>
						<li><a href="#">Sub item</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</TestItem>
	<TestItem title="Multiple open subnavs">
		<div class="max-w-sm">
			<ul class="uk-nav-default" data-uk-nav="multiple: true">
				<li class="uk-active"><a href="#">Active</a></li>
				<li class="uk-parent">
					<a href="#">Parent <span data-uk-nav-parent-icon></span></a>
					<ul class="uk-nav-sub">
						<li><a href="#">Sub item</a></li>
						<li>
							<a href="#">Sub item</a>
							<ul>
								<li><a href="#">Sub item</a></li>
								<li><a href="#">Sub item</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li class="uk-parent">
					<a href="#">Parent <span data-uk-nav-parent-icon></span></a>
					<ul class="uk-nav-sub">
						<li><a href="#">Sub item</a></li>
						<li><a href="#">Sub item</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</TestItem>
	<TestItem title="Header and divider">
		<div class="max-w-sm">
			<ul class="uk-nav-default uk-nav">
				<li class="uk-nav-header">Header</li>
				<li><a href="#">Item</a></li>
				<li><a href="#">Item</a></li>
				<li class="uk-nav-divider"></li>
				<li><a href="#">Item</a></li>
			</ul>
		</div>
	</TestItem>
	<TestItem title="Subtitle">
		<div class="max-w-sm">
			<ul
				class="uk-nav-secondary uk-nav"
				style="--uk-nav-item-active-font-weight: 400; --uk-nav-item-hover-decoration: none"
			>
				<li class="uk-active">
					<a href="#"
						><div>
							Active
							<div class="text-muted-foreground">
								Subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
							</div>
						</div></a
					>
				</li>
				<li>
					<a href="#"
						><div>
							Item
							<div class="text-muted-foreground">
								Subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
							</div>
						</div></a
					>
				</li>
				<li>
					<a href="#"
						><div>
							Item
							<div class="text-muted-foreground">
								Subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
							</div>
						</div></a
					>
				</li>
				<li>
					<a href="#"
						><div>
							Item
							<div class="text-muted-foreground">
								Subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
							</div>
						</div></a
					>
				</li>
			</ul>
		</div>
	</TestItem>
	<TestItem title="Default modifier">
		<div class="uk-card uk-card-body max-w-sm">
			<ul class="uk-nav-default" data-uk-nav>
				<li class="uk-active"><a href="#">Active</a></li>
				<li class="uk-parent">
					<a href="#">Parent <span data-uk-nav-parent-icon></span></a>
					<ul class="uk-nav-sub">
						<li><a href="#">Sub item</a></li>
						<li><a href="#">Sub item</a></li>
					</ul>
				</li>
				<li class="uk-parent">
					<a href="#">Parent <span data-uk-nav-parent-icon></span></a>
					<ul class="uk-nav-sub">
						<li><a href="#">Sub item</a></li>
						<li><a href="#">Sub item</a></li>
					</ul>
				</li>
				<li class="uk-nav-header">Header</li>
				<li>
					<a href="#">
						<uk-icon class="mr-2" icon="table"></uk-icon>
						Item
					</a>
				</li>
				<li>
					<a href="#">
						<uk-icon class="mr-2" icon="bell"></uk-icon>
						Item
					</a>
				</li>
				<li class="uk-nav-divider"></li>
				<li>
					<a href="#">
						<uk-icon class="mr-2" icon="trash"></uk-icon>
						Item
					</a>
				</li>
			</ul>
		</div>
	</TestItem>
	<TestItem title="Primary modifier">
		<div class="max-w-sm">
			<ul class="uk-nav-primary" data-uk-nav>
				<li class="uk-active"><a href="#">Active</a></li>
				<li class="uk-parent">
					<a href="#">Parent <span data-uk-nav-parent-icon></span></a>
					<ul class="uk-nav-sub">
						<li><a href="#">Sub item</a></li>
						<li><a href="#">Sub item</a></li>
					</ul>
				</li>
				<li class="uk-parent">
					<a href="#">Parent <span data-uk-nav-parent-icon></span></a>
					<ul class="uk-nav-sub">
						<li><a href="#">Sub item</a></li>
						<li><a href="#">Sub item</a></li>
					</ul>
				</li>
				<li><a href="#">Item</a></li>
			</ul>
		</div>
	</TestItem>
	<TestItem title="Secondary modifier">
		<div class="max-w-sm">
			<ul class="uk-nav-secondary uk-nav">
				<li>
					<a class="">
						<div class="flex">
							<uk-icon width="20" height="20" icon="bell"></uk-icon>
							<div class="ml-2">
								<p>Everything</p>
								<p class="text-sm text-muted-foreground">Email digest, mentions & all activity.</p>
							</div>
						</div>
					</a>
				</li>
				<li class="uk-active">
					<a class="">
						<div class="flex">
							<uk-icon width="20" height="20" icon="user"></uk-icon>
							<div class="ml-2">
								<p>Available</p>
								<p class="text-sm text-muted-foreground">Only mentions and comments.</p>
							</div>
						</div>
					</a>
				</li>
				<li>
					<a class="">
						<div class="flex">
							<uk-icon width="20" height="20" icon="eye-off"></uk-icon>
							<div class="ml-2">
								<p>Ignoring</p>
								<p class="text-sm text-muted-foreground">Turn off all notifications.</p>
							</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</TestItem>
	<TestItem title="Nav in Dropdown">
		<button class="uk-btn uk-btn-default" type="button">Hover</button>
		<div data-uk-dropdown>
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
	</TestItem>
	<TestItem title="Nav in offcanvas">
		<a href="#offcanvas-slide" class="uk-btn uk-btn-default" data-uk-toggle> Open </a>

		<div class="uk-offcanvas" id="offcanvas-slide" data-uk-offcanvas>
			<div class="uk-offcanvas-bar">
				<ul class="uk-nav-primary uk-nav">
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
