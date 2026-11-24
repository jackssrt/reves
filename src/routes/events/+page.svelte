<script lang="ts">
	import Button, { type ButtonType } from "#lib/Button.svelte";
	import Card from "#lib/Card.svelte";
	import { m } from "#lib/paraglide/messages.js";
	import { type Resolvable } from "#lib/utils.ts";
	import { type Picture } from "@sveltejs/enhanced-img";
	import tour2Img from "#lib/assets/events/2026tour2.jpg?enhanced";
	import tourImg from "#lib/assets/events/2026tour.jpg?enhanced";
	import reves15Img from "#lib/assets/events/reves15.jpg?enhanced";
	import reves14Part2Img from "#lib/assets/events/reves14part2.jpg?enhanced";
	import reves14Img from "#lib/assets/events/reves14.jpg?enhanced";
	import BackButton from "#lib/BackButton.svelte";
</script>

<Card title={m["index.events"]()} titleType="big" class="bg-primary">
	{m["index.events.description"]()}
	{#snippet dock()}
		<BackButton></BackButton>
	{/snippet}
</Card>
{#snippet EventCard(
	name: "2026tour" | "2026tour2" | "reves15" | "reves14" | "reves14part2",
	date: Date,
	img: Picture,
	links: [keyof typeof m, Resolvable, ButtonType][]
)}
	<Card title={m[`events.${name}`]()} class="bg-secondary" {date}>
		{#snippet right()}
			<enhanced:img src={img} class="h-auto max-w-48" alt={m["events.imageAltText"]()}
			></enhanced:img>
		{/snippet}
		<pre class="font-sans text-wrap">{m[`events.${name}.description`]()}</pre>
		{#snippet dock()}
			{#each links as [name, href, kind] (name)}
				<Button {href} type={kind}>{m[name]()}</Button>
			{/each}
		{/snippet}
	</Card>
{/snippet}

{@render EventCard("2026tour2", new Date(2026, 9 - 1, 27), tour2Img, [
	["events.announcement", "https://www.instagram.com/reves.partys/p/Dc_dovVIazq/", "normal"],
])}
{@render EventCard("2026tour", new Date(2026, 4 - 1, 24), tourImg, [
	["events.aftermovie.france", "https://www.youtube.com/watch?v=BmgOQeXqUPU", "normal"],
	["events.aftermovie.japan", "https://www.youtube.com/watch?v=SXpC7atHr9c", "normal"],
	["events.announcement", "https://www.instagram.com/reves.partys/p/DVq89Q4iObt/", "secondary"],
])}
{@render EventCard("reves15", new Date(2025, 11 - 1, 28), reves15Img, [
	["events.aftermovie", "https://www.youtube.com/watch?v=5Oladw__Dn4", "normal"],
	["events.announcement", "https://www.instagram.com/reves.partys/p/DVq89Q4iObt/", "secondary"],
])}
{@render EventCard("reves14part2", new Date(2025, 9 - 1, 7), reves14Part2Img, [
	["events.aftermovie", "https://www.youtube.com/watch?v=k2QsbQb1mmw", "normal"],
	["events.announcement", "https://www.instagram.com/reves.partys/p/DN55l_0iDrz/", "secondary"],
])}
{@render EventCard("reves14", new Date(2025, 9 - 1, 6), reves14Img, [
	["events.aftermovie", "https://www.youtube.com/watch?v=k2QsbQb1mmw", "normal"],
	["events.announcement", "https://www.instagram.com/reves.partys/p/DNgJWcHsmx7/", "secondary"],
])}
