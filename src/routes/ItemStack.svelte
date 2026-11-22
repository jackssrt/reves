<script lang="ts">
	import { cn } from "#lib/utils.ts";
	import type { Snippet } from "svelte";
	import type { ClassValue } from "svelte/elements";

	let {
		class: klass,
		top,
		bottom,
	}: { class?: ClassValue; top: Snippet; bottom: Snippet } = $props();
</script>

<div class={cn("relative h-26 w-34", klass)}>
	<div
		class="absolute w-20 translate-x-1 translate-y-4 -rotate-10 shadow transition group-hover:translate-x-0 group-hover:translate-y-3 group-hover:shadow-lg"
	>
		{@render bottom()}
	</div>
	<div
		class="absolute w-20 translate-x-13 translate-y-1 rotate-5 shadow-lg transition group-hover:translate-x-14 group-hover:translate-y-0 group-hover:shadow-xl"
	>
		{@render top()}
	</div>
</div>
