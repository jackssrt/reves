<script lang="ts">
	import Background from "#lib/Background.svelte";
	import Card from "#lib/Card.svelte";
	import { m } from "#lib/paraglide/messages.js";
	import ItemStack from "./ItemStack.svelte";
	import backgroundImg from "#lib/assets/bluebackground.jpg";
	import bleachedCover from "#lib/assets/covers/bleached.png";
	import bleuCover from "#lib/assets/covers/le-bleu-a-des-yeux.jpg";
	import ArrowRightIcon from "@iconify-svelte/lucide/arrow-right";
	import { resolve } from "$app/paths";
</script>

<Background src={backgroundImg}></Background>

<Card class="h-40 bg-primary">
	<enhanced:img src="#lib/assets/avatar.jpg" class="h-full w-full"></enhanced:img>
	<div>
		<h1>Rêves</h1>
		<p>{m["index.description"]()}</p>
	</div>
</Card>

{#snippet Section(
	translationKey: "events" | "albums" | "merch",
	href: Parameters<typeof resolve>[0],
	[bottomImg, topImg]: [string, string]
)}
	<Card {href} class="group bg-secondary">
		<div class="flex grow flex-col">
			<h1>{m[`index.${translationKey}`]()}</h1>
			<p>{m[`index.${translationKey}.description`]()}</p>
			<ArrowRightIcon class="h-8 w-8 grow"></ArrowRightIcon>
		</div>
		<ItemStack class="">
			{#snippet top()}
				<enhanced:img src={bottomImg} class="h-full w-full"></enhanced:img>
			{/snippet}
			{#snippet bottom()}
				<enhanced:img src={topImg} class="h-full w-full"></enhanced:img>
			{/snippet}
		</ItemStack>
	</Card>
{/snippet}
{@render Section("albums", "/", [bleachedCover, bleuCover])}
{@render Section("events", "/", [bleachedCover, bleuCover])}
{@render Section("merch", "/", [bleachedCover, bleuCover])}
