<script lang="ts">
	let { title, open = false, children } = $props();
</script>

<li class={open ? 'uk-open' : ''} style="border-bottom: none">
	<a class="uk-accordion-title text-2xl" href>
		{title}
	</a>
	<div class="uk-accordion-content p-4">
		{@render children()}
	</div>
</li>
