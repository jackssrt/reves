<script lang="ts">
	import type { ClassValue } from "svelte/elements";
	import { cn, type Resolvable, resolve } from "./utils";
	import type { Snippet } from "svelte";

	export type TitleType = "big" | "normal";

	let {
		class: _klass,
		titleType = "normal",
		href,
		title,
		left,
		right,
		dock,
		children: _children,
	}: {
		class: ClassValue;
		titleType?: TitleType;
		href?: Resolvable;
		title?: Snippet | string;
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
		{#if typeof title === "string"}
			<h1 class={cn("text-xl font-bold", { "text-2xl": titleType === "big" })}>{title}</h1>
		{:else if typeof title !== "undefined"}
			{@render title()}
		{/if}
		{@render _children()}
		<div class="mt-auto flex gap-1">
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
