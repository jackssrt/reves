<script lang="ts">
	import "./layout.css";
	import favicon from "#lib/assets/avatar.jpg";
	import type { LayoutProps } from "./$types";
	import Footer from "./Footer.svelte";
	import LanguageSwitcher from "./LanguageSwitcher.svelte";
	import { m } from "#lib/paraglide/messages.js";
	import { page } from "$app/state";
	import { deLocalizeHref } from "#lib/paraglide/runtime.js";

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	{#if page.url.pathname !== "/"}
		<title
			>{m[`meta.${deLocalizeHref(page.url.pathname)}.title` as keyof typeof m]()} - {m[
				"meta./.title"
			]()}</title
		>
	{:else}
		<title>{m[`meta.${deLocalizeHref(page.url.pathname)}.title` as keyof typeof m]()}</title>
	{/if}
</svelte:head>

<enhanced:img
	src="#lib/assets/background.jpg?w=1920;1280;640;400"
	class="fixed top-0 left-0 -z-10 h-dvh w-dvw object-cover select-none"
	draggable="false"
	alt="background"
	sizes=""
></enhanced:img>
<div class="grid min-h-dvh place-items-center text-text">
	<div class="flex w-full flex-col gap-1 p-2 xl:w-4xl">
		{@render children()}
		<Footer></Footer>
		<LanguageSwitcher></LanguageSwitcher>
	</div>
</div>
