<script>
	import TestItem from 'franken/test-item.svelte';
	import Test from 'franken/test.svelte';
</script>

<svelte:head>
	<title>Accordion</title>
</svelte:head>

<h1 class="uk-h1 mb-10">Accordion</h1>

<Test>
	<TestItem open={true} title="Basic">
		<ul class="uk-accordion" data-uk-accordion>
			<li class="uk-open">
				<a class="uk-accordion-title" href>
					Item 1
					<span class="uk-accordion-icon">
						<uk-icon icon="chevron-down"></uk-icon>
					</span>
				</a>
				<div class="uk-accordion-content">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</li>
			<li>
				<a class="uk-accordion-title" href>
					Item 2
					<span class="uk-accordion-icon">
						<uk-icon icon="chevron-down"></uk-icon>
					</span>
				</a>
				<div class="uk-accordion-content">
					<p>
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor reprehenderit.
					</p>
				</div>
			</li>
			<li>
				<a class="uk-accordion-title" href>
					Item 3
					<span class="uk-accordion-icon">
						<uk-icon icon="chevron-down"></uk-icon>
					</span>
				</a>
				<div class="uk-accordion-content">
					<p>
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat proident.
					</p>
				</div>
			</li>
		</ul>
	</TestItem>
	<TestItem title="No collapsing">
		<ul class="uk-accordion" data-uk-accordion="collapsible: false">
			<li>
				<a class="uk-accordion-title" href>
					Item 1
					<span class="uk-accordion-icon">
						<uk-icon icon="chevron-down"></uk-icon>
					</span>
				</a>
				<div class="uk-accordion-content">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</li>
			<li>
				<a class="uk-accordion-title" href>
					Item 2
					<span class="uk-accordion-icon">
						<uk-icon icon="chevron-down"></uk-icon>
					</span>
				</a>
				<div class="uk-accordion-content">
					<p>
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor reprehenderit.
					</p>
				</div>
			</li>
			<li>
				<a class="uk-accordion-title" href>
					Item 3
					<span class="uk-accordion-icon">
						<uk-icon icon="chevron-down"></uk-icon>
					</span>
				</a>
				<div class="uk-accordion-content">
					<p>
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat proident.
					</p>
				</div>
			</li>
		</ul>
	</TestItem>
	<TestItem title="Multiple open items">
		<ul class="uk-accordion" data-uk-accordion="multiple: true">
			<li class="uk-open">
				<a class="uk-accordion-title" href>
					Item 1
					<span class="uk-accordion-icon">
						<uk-icon icon="chevron-down"></uk-icon>
					</span>
				</a>
				<div class="uk-accordion-content">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</li>
			<li>
				<a class="uk-accordion-title" href>
					Item 2
					<span class="uk-accordion-icon">
						<uk-icon icon="chevron-down"></uk-icon>
					</span>
				</a>
				<div class="uk-accordion-content">
					<p>
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor reprehenderit.
					</p>
				</div>
			</li>
			<li>
				<a class="uk-accordion-title" href>
					Item 3
					<span class="uk-accordion-icon">
						<uk-icon icon="chevron-down"></uk-icon>
					</span>
				</a>
				<div class="uk-accordion-content">
					<p>
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat proident.
					</p>
				</div>
			</li>
		</ul>
	</TestItem>
	<TestItem title="Set open items">
		<ul class="uk-accordion" data-uk-accordion>
			<li>
				<a class="uk-accordion-title" href>
					Item 1
					<span class="uk-accordion-icon">
						<uk-icon icon="chevron-down"></uk-icon>
					</span>
				</a>
				<div class="uk-accordion-content">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</li>
			<li class="uk-open">
				<a class="uk-accordion-title" href>
					Item 2
					<span class="uk-accordion-icon">
						<uk-icon icon="chevron-down"></uk-icon>
					</span>
				</a>
				<div class="uk-accordion-content">
					<p>
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor reprehenderit.
					</p>
				</div>
			</li>
			<li>
				<a class="uk-accordion-title" href>
					Item 3
					<span class="uk-accordion-icon">
						<uk-icon icon="chevron-down"></uk-icon>
					</span>
				</a>
				<div class="uk-accordion-content">
					<p>
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat proident.
					</p>
				</div>
			</li>
		</ul>
	</TestItem>
</Test>
