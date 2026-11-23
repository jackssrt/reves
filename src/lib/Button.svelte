<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn, type Resolvable, resolve } from "./utils";
	import type { Locale } from "./paraglide/runtime";
	export type ButtonType = "suggested" | "normal" | "secondary" | "disabled";

	let {
		class: klass,
		href,
		type: kind = "normal",
		children: _children,
		reload = false,
		locale,
	}: {
		class?: string;
		href: Resolvable;
		type?: ButtonType;
		children: Snippet;
		reload?: boolean;
		locale?: Locale;
	} = $props();
</script>

{#snippet children()}
	<a
		href={resolve(href, locale)}
		class={cn(
			"grid h-8 min-w-24 place-items-center bg-white px-2 text-primary shadow-xs transition-shadow hover:shadow",
			{
				"bg-transparent": kind === "secondary",
				"pointer-events-none border border-dotted bg-transparent text-white": kind === "disabled",
			},
			klass
		)}
		aria-disabled={kind !== "disabled"}
		data-sveltekit-reload={reload}
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
