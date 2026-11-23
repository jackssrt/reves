<script lang="ts">
	import Card from "#lib/Card.svelte";
	import { m } from "#lib/paraglide/messages.js";
	let { tracks }: { tracks: string[] } = $props();
</script>

<Card title={m["albums.tracklist"]()} class="bg-secondary">
	<ol class="ml-6 grid h-min w-full list-decimal grid-cols-1 flex-col flex-wrap md:grid-cols-3">
		{#each tracks as track (track)}
			<li class="">{track}</li>
		{/each}
	</ol>
</Card>
