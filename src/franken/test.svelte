<script lang="ts">
	let { children } = $props();
</script>

<ul class="uk-accordion" data-uk-accordion>
	{@render children()}
</ul>
