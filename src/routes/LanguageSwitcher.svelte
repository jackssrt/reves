<script lang="ts">
	import Button from "#lib/Button.svelte";
	import Card from "#lib/Card.svelte";
	import { m } from "#lib/paraglide/messages.js";
	import { getLocale } from "#lib/paraglide/runtime.js";
	import { locales } from "#lib/paraglide/runtime.js";
	import { type Resolvable } from "#lib/utils.ts";
	import { page } from "$app/state";
	import GlobeIcon from "@iconify-svelte/lucide/globe";
	const currentLocale = getLocale();
</script>

<Card class="ml-auto w-fit bg-secondary xl:absolute xl:top-0 xl:right-0 xl:bg-primary">
	{#snippet left()}
		<GlobeIcon class="w-7"></GlobeIcon>
	{/snippet}
	<div class="flex w-full gap-2">
		{#each locales as locale (locale)}
			<Button
				href={page.url.pathname as Resolvable}
				reload={true}
				{locale}
				type={locale === currentLocale ? "disabled" : "normal"}>{m.locale({}, { locale })}</Button
			>
		{/each}
	</div>
</Card>
