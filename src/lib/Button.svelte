<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn, type Resolvable, resolve } from "./utils";
	export type ButtonTypes = "suggested" | "normal" | "secondary";

	let {
		class: klass,
		href,
		type: kind = "normal",
		children: _children,
	}: {
		class?: string;
		href: Resolvable;
		type?: ButtonTypes;
		children: Snippet;
	} = $props();
</script>

{#snippet children()}
	<a
		href={resolve(href)}
		class={cn(
			"grid h-8 min-w-24 place-items-center bg-white p-2 text-primary shadow-xs transition-shadow hover:shadow",
			{ "bg-transparent": kind === "secondary" },
			klass
		)}
	>
		{@render _children()}
	</a>
{/snippet}

{#if kind === "suggested"}
	<div class="border-white p-0.5">
		{@render children()}
	</div>
{:else}
	{@render children()}
{/if}
