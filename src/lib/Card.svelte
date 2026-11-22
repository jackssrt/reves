<script lang="ts">
	import type { ClassValue } from "svelte/elements";
	import { cn } from "./utils";
	import type { Snippet } from "svelte";
	import { resolve } from "$app/paths";

	let {
		class: _klass,
		href,
		children: _children,
	}: { class: ClassValue; href?: Parameters<typeof resolve>[0]; children: Snippet } = $props();
	let klass = $derived(cn("flex w-full gap-2 p-2 shadow-lg", _klass));
</script>

{#snippet children()}
	<!-- Extra stuff here -->
	{@render _children()}
{/snippet}

{#if typeof href !== "undefined"}
	<a class={klass} href={resolve(href)}>
		{@render children()}
	</a>
{:else}
	<div class={klass}>
		{@render children()}
	</div>
{/if}
