<script lang="ts">
	import Background from "#lib/Background.svelte";
	import Card from "#lib/Card.svelte";
	import { m } from "#lib/paraglide/messages.js";
	import ItemStack from "./ItemStack.svelte";
	import backgroundImg from "#lib/assets/bluebackground.jpg";
	import bleachedCover from "#lib/assets/covers/bleached.png";
	import lbadyCover from "#lib/assets/covers/lbady.jpg";
	import bleachedTShirt from "#lib/assets/tshirts/bleached.png";
	import lbadyTShirt from "#lib/assets/tshirts/lbady.png";
	import ArrowRightIcon from "@iconify-svelte/lucide/arrow-right";
	import InstagramIcon from "@iconify-svelte/mdi/instagram";
	import YoutubeIcon from "@iconify-svelte/mdi/youtube";
	import DiscordIcon from "@iconify-svelte/ic/baseline-discord";
	import { resolve } from "$app/paths";
</script>

<Background src={backgroundImg}></Background>

<Card title="Rêves" class=" bg-primary">
	{#snippet left()}
		<enhanced:img src="#lib/assets/avatar.jpg" class="h-auto w-full"></enhanced:img>
	{/snippet}
	<p>{m["index.description"]()}</p>
	{#snippet dock()}
		<a href="https://www.instagram.com/reves.partys/">
			<InstagramIcon class="m-2 h-8 w-8"></InstagramIcon>
		</a>
		<a href="https://www.youtube.com/@RevesPartys">
			<YoutubeIcon class="m-2 h-8 w-8"></YoutubeIcon>
		</a>
		<a href="https://discord.gg/yhqvPfkD9U">
			<DiscordIcon class="m-2 h-8 w-8"></DiscordIcon>
		</a>
	{/snippet}
</Card>

{#snippet Section(
	translationKey: "events" | "albums" | "merch",
	href: Parameters<typeof resolve>[0],
	[bottomImg, topImg]: [string, string]
)}
	<Card title={m[`index.${translationKey}`]()} {href} class="group bg-secondary">
		<p>{m[`index.${translationKey}.description`]()}</p>
		{#snippet dock()}
			<ArrowRightIcon class="-m-2 h-8 w-8 overflow-clip"></ArrowRightIcon>
		{/snippet}
		{#snippet right()}
			<ItemStack class="shrink-0">
				{#snippet top()}
					<enhanced:img src={bottomImg} class="h-full w-full"></enhanced:img>
				{/snippet}
				{#snippet bottom()}
					<enhanced:img src={topImg} class="h-full w-full"></enhanced:img>
				{/snippet}
			</ItemStack>
		{/snippet}
	</Card>
{/snippet}
{@render Section("events", "/", [bleachedCover, lbadyCover])}
{@render Section("albums", "/", [bleachedCover, lbadyCover])}
{@render Section("merch", "/", [bleachedTShirt, lbadyTShirt])}
