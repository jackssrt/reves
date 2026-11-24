<script lang="ts">
	import { getLocale } from "./paraglide/runtime";
	import { cn, type Resolvable, resolve } from "./utils";
	import type { Snippet } from "svelte";

	export type TitleType = "big" | "normal";

	let {
		class: __klass,
		titleType = "normal",
		href,
		title,
		date: _date,
		left,
		right,
		dock: _dock,
		children: _children,
	}: {
		class: string | { main: string; dock?: string };
		titleType?: TitleType;
		href?: Resolvable;
		date?: Date;
		title?: Snippet | string;
		left?: Snippet;
		right?: Snippet;
		dock?: Snippet;
		children: Snippet;
	} = $props();
	// i miss rust, name shadowing, pattern matching
	let _klass = $derived(typeof __klass === "string" ? { main: __klass ?? "" } : __klass);
	let klass = $derived(cn("flex flex-col gap-2 p-2 shadow-lg", _klass.main));
</script>

{#snippet dock(___klass: string)}
	{#if _dock}
		<div
			class={cn(
				"relative mt-auto flex flex-col gap-1 md:static md:flex-row",
				___klass,
				_klass.dock
			)}
		>
			{@render _dock()}
		</div>
	{/if}
{/snippet}

{#snippet children()}
	<div class="flex w-full gap-2">
		{@render left?.()}
		<div class="flex grow flex-col">
			{#snippet date()}
				{#if _date}
					<span class="block text-sm font-normal md:inline"
						>{new Intl.DateTimeFormat(getLocale()).format(_date)}</span
					>
				{/if}
			{/snippet}
			{#if typeof title === "string"}
				<h1 class={cn("text-xl font-bold", { "text-2xl": titleType === "big" })}>
					{title}
					{@render date()}
				</h1>
			{:else if typeof title !== "undefined"}
				{@render title()}
				{@render date()}
			{/if}
			{@render _children()}
			{@render dock("hidden md:flex")}
		</div>
		{@render right?.()}
	</div>
	{@render dock("flex md:hidden")}
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
