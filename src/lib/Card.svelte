<script lang="ts">
	import type { ClassValue } from "svelte/elements";
	import { cn } from "./utils";
	import type { Snippet } from "svelte";
	import { resolve } from "$app/paths";

	let {
		class: _klass,
		href,
		title,
		left,
		right,
		dock,
		children: _children,
	}: {
		class: ClassValue;
		href?: Parameters<typeof resolve>[0];
		title: string;
		left?: Snippet;
		right?: Snippet;
		dock?: Snippet;
		children: Snippet;
	} = $props();
	let klass = $derived(cn("flex w-full gap-2 p-2 shadow-lg", _klass));
</script>

{#snippet children()}
	{@render left?.()}
	<div class="flex grow flex-col">
		<h1>{title}</h1>
		{@render _children()}
		<div class="mt-auto">
			{@render dock?.()}
		</div>
	</div>
	{@render right?.()}
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
