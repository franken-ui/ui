<script>
	import TestItem from 'franken/test-item.svelte';
	import Test from 'franken/test.svelte';
</script>

<svelte:head>
	<title>Table</title>
</svelte:head>

<h1 class="uk-h1 mb-10">Table</h1>

<Test>
	<TestItem open={true} title="Basic">
		<table class="uk-table">
			<caption> Table Caption </caption>
			<thead>
				<tr>
					<th>Table Heading</th>
					<th>Table Heading</th>
					<th>Table Heading</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td>Table Footer</td>
					<td>Table Footer</td>
					<td>Table Footer</td>
				</tr>
			</tfoot>
		</table>
	</TestItem>
	<TestItem title="Divider modifier">
		<table class="uk-table uk-table-divider">
			<thead>
				<tr>
					<th>Table Heading</th>
					<th>Table Heading</th>
					<th>Table Heading</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
			</tbody>
		</table>
	</TestItem>
	<TestItem title="Striped modifier">
		<table class="uk-table uk-table-striped">
			<thead>
				<tr>
					<th>Table Heading</th>
					<th>Table Heading</th>
					<th>Table Heading</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
			</tbody>
		</table>
	</TestItem>
	<TestItem title="Hover modifier">
		<table class="uk-table uk-table-divider uk-table-hover">
			<thead>
				<tr>
					<th>Table Heading</th>
					<th>Table Heading</th>
					<th>Table Heading</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
			</tbody>
		</table>
	</TestItem>
	<TestItem title="Size modifiers">
		<table class="uk-table-sm uk-table uk-table-divider">
			<thead>
				<tr>
					<th>Table Heading</th>
					<th>Table Heading</th>
					<th>Table Heading</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
			</tbody>
		</table>

		<table class="uk-table-lg uk-table uk-table-divider mt-4">
			<thead>
				<tr>
					<th>Table Heading</th>
					<th>Table Heading</th>
					<th>Table Heading</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
			</tbody>
		</table>
	</TestItem>
	<TestItem title="Justify modifier">
		<table class="uk-table uk-table-divider uk-table-justify">
			<thead>
				<tr>
					<th class="w-40">Table Heading</th>
					<th>Table Heading</th>
					<th>Table Heading</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Table Data</td>
					<td>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.
					</td>
					<td>
						<button class="uk-btn uk-btn-default" type="button">Button</button>
					</td>
				</tr>
				<tr>
					<td>Table Data</td>
					<td>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.
					</td>
					<td>
						<button class="uk-btn uk-btn-default" type="button">Button</button>
					</td>
				</tr>
			</tbody>
		</table>
	</TestItem>
	<TestItem title="Alignment modifier">
		<table class="uk-table uk-table-middle uk-table-divider">
			<thead>
				<tr>
					<th class="w-40">Table Heading</th>
					<th>Table Heading</th>
					<th>Table Heading</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Table Data</td>
					<td>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.
					</td>
					<td>
						<button class="uk-btn uk-btn-default" type="button">Button</button>
					</td>
				</tr>
				<tr>
					<td>Table Data</td>
					<td>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.
					</td>
					<td>
						<button class="uk-btn uk-btn-default" type="button">Button</button>
					</td>
				</tr>
			</tbody>
		</table>
	</TestItem>
	<TestItem title="Responsive table">
		<div class="uk-overflow-auto">
			<table class="uk-table-small uk-table uk-table-divider">
				<thead>
					<tr>
						<th>Table Heading</th>
						<th>Table Heading</th>
						<th>Table Heading</th>
						<th>Table Heading</th>
						<th>Table Heading</th>
						<th>Table Heading</th>
						<th>Table Heading</th>
						<th>Table Heading</th>
						<th>Table Heading</th>
						<th>Table Heading</th>
						<th>Table Heading</th>
						<th>Table Heading</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
					</tr>
					<tr>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
					</tr>
					<tr>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
						<td>Table Data</td>
					</tr>
				</tbody>
			</table>
		</div>
	</TestItem>
	<TestItem title="Stack on small viewports">
		<table class="uk-table-responsive uk-table uk-table-divider">
			<thead>
				<tr>
					<th>Table Heading</th>
					<th>Table Heading</th>
					<th>Table Heading</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
			</tbody>
		</table>
	</TestItem>
	<TestItem title="Column width modifier">
		<table class="uk-table uk-table-divider">
			<thead>
				<tr>
					<th class="uk-table-shrink">Shrink</th>
					<th class="uk-table-expand">Expand</th>
					<th class="w-40">Width Small</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
				<tr>
					<td>Table Data</td>
					<td>Table Data</td>
					<td>Table Data</td>
				</tr>
			</tbody>
		</table>
	</TestItem>
	<TestItem title="Utilities">
		<div class="uk-overflow-auto">
			<table class="uk-table uk-table-middle uk-table-divider uk-table-hover">
				<thead>
					<tr>
						<th class="uk-table-shrink"></th>
						<th class="uk-table-shrink">Preserve</th>
						<th class="uk-table-expand">Expand + Link</th>
						<th class="w-40">Truncate</th>
						<th class="uk-table-shrink text-nowrap">Shrink + Nowrap</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<input class="uk-checkbox" type="checkbox" aria-label="Checkbox" />
						</td>
						<td>
							<img
								class="uk-preserve-width rounded-full"
								src="/images/avatar.jpg"
								width="40"
								height="40"
								alt=""
							/>
						</td>
						<td class="uk-table-link">
							<a class="uk-link-reset" href=""
								>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a
							>
						</td>
						<td class="uk-text-truncate">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
						</td>
						<td class="text-nowrap">Lorem ipsum dolor</td>
					</tr>
					<tr>
						<td>
							<input class="uk-checkbox" type="checkbox" aria-label="Checkbox" />
						</td>
						<td>
							<img
								class="uk-preserve-width rounded-full"
								src="/images/avatar.jpg"
								width="40"
								height="40"
								alt=""
							/>
						</td>
						<td class="uk-table-link">
							<a class="uk-link-reset" href=""
								>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a
							>
						</td>
						<td class="uk-text-truncate">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
						</td>
						<td class="text-nowrap">Lorem ipsum dolor</td>
					</tr>
					<tr>
						<td>
							<input class="uk-checkbox" type="checkbox" aria-label="Checkbox" />
						</td>
						<td>
							<img
								class="uk-preserve-width rounded-full"
								src="/images/avatar.jpg"
								width="40"
								height="40"
								alt=""
							/>
						</td>
						<td class="uk-table-link">
							<a class="uk-link-reset" href=""
								>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a
							>
						</td>
						<td class="uk-text-truncate">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
						</td>
						<td class="text-nowrap">Lorem ipsum dolor</td>
					</tr>
					<tr>
						<td>
							<input class="uk-checkbox" type="checkbox" aria-label="Checkbox" />
						</td>
						<td>
							<img
								class="uk-preserve-width rounded-full"
								src="/images/avatar.jpg"
								width="40"
								height="40"
								alt=""
							/>
						</td>
						<td class="uk-table-link">
							<a class="uk-link-reset" href=""
								>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a
							>
						</td>
						<td class="uk-text-truncate">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
						</td>
						<td class="text-nowrap">Lorem ipsum dolor</td>
					</tr>
				</tbody>
			</table>
		</div>
	</TestItem>
</Test>
