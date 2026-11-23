<script lang="ts">
	import type { Path } from "$app/types";
	import { resolve } from "$app/paths";
	import { page } from "$app/state";
	import { locales, localizeHref } from "#lib/paraglide/runtime.js";
	import "./layout.css";
	import favicon from "#lib/assets/favicon.svg";
	import type { LayoutProps } from "./$types";
	import Footer from "./Footer.svelte";

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<enhanced:img
	src="#lib/assets/background.jpg?w=1920;1280;640;400"
	class="fixed top-0 left-0 -z-10 h-dvh w-dvw object-cover select-none"
	draggable="false"
	alt="background"
	sizes=""
></enhanced:img>
<div class="grid min-h-dvh place-items-center text-text">
	<div class="flex min-w-full flex-col gap-1 p-2 md:min-w-2xl">
		{@render children()}
		<Footer></Footer>
	</div>
</div>

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Path)}>{locale}</a>
	{/each}
</div>
