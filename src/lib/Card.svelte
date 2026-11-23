<script lang="ts">
	import { cn, type Resolvable, resolve } from "./utils";
	import type { Snippet } from "svelte";

	export type TitleType = "big" | "normal";

	let {
		class: __klass,
		titleType = "normal",
		href,
		title,
		left,
		right,
		dock,
		children: _children,
	}: {
		class: string | { main: string; dock?: string };
		titleType?: TitleType;
		href?: Resolvable;
		title?: Snippet | string;
		left?: Snippet;
		right?: Snippet;
		dock?: Snippet;
		children: Snippet;
	} = $props();
	// i miss rust, name shadowing, pattern matching
	let _klass = $derived(typeof __klass === "string" ? { main: __klass ?? "" } : __klass);
	let klass = $derived(cn("flex w-full gap-2 p-2 shadow-lg", _klass.main));
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
		{#if dock}
			<div class={cn("relative mt-auto flex flex-col gap-1 md:static md:flex-row", _klass.dock)}>
				{@render dock()}
			</div>
		{/if}
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
