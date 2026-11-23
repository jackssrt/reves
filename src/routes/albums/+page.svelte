<script>
	import Button from "#lib/Button.svelte";
	import Card from "#lib/Card.svelte";
	import { m } from "#lib/paraglide/messages.js";
	import SpotifyIcon from "@iconify-svelte/mdi/spotify";
	import AppleMusicIcon from "@iconify-svelte/cib/apple-music";
	import Tracklist from "./Tracklist.svelte";
</script>

<Card title="Albums" titleType="big" class="bg-primary">{m["index.albums.description"]()}</Card>

<div class="flex flex-col gap-0.5">
	<Card title="Bleached" class="bg-secondary" date={new Date(2026, 3 - 1, 20)}>
		{m["albums.bleached.description"]()}
		{#snippet right()}
			<!-- force max width -->
			<enhanced:img src="#lib/assets/typos/bleached-typo.png?w=9999" class="hidden md:block"
			></enhanced:img>
			<enhanced:img src="#lib/assets/covers/bleached.png" class="h-auto max-w-48"></enhanced:img>
		{/snippet}
		{#snippet dock()}
			<Button
				class="flex justify-center gap-2"
				href="https://open.spotify.com/intl-fr/album/3fm5uEHogwcjhaWsR4RboN"
				><SpotifyIcon class="-m-1 h-7 w-7"></SpotifyIcon>Spotify</Button
			>
			<Button
				class="flex justify-center gap-2 text-nowrap"
				href="https://music.apple.com/us/album/le-bleu-a-des-yeux/1681025871"
				><AppleMusicIcon class="-m-1 h-8 w-8 p-1"></AppleMusicIcon>Apple Music</Button
			>
		{/snippet}
	</Card>
	<Tracklist
		tracks={[
			"Spring Coat",
			"J'ressens plus rien",
			"SSRI",
			"my world",
			"4H29",
			"Beatles",
			"Daisy",
			"MAC10_MACHETTE",
			"Sheeva In The Eternal Peace Garden",
			"Interstellar",
			"GO OUT",
			"Max",
			"Try to forget you",
			"CRÈVE L'ÉCRAN",
			"Holocène",
			"Octave Parango",
			"Era",
		]}
	></Tracklist>
</div>

<div class="flex flex-col gap-0.5">
	<Card title="Le bleu a des yeux" class="bg-secondary" date={new Date(2023, 4 - 1, 21)}>
		{m["albums.lbady.description"]()}
		{#snippet right()}
			<!-- force max width -->
			<enhanced:img class="hidden md:block" src="#lib/assets/typos/lbady-typo.png?w=9999"
			></enhanced:img>
			<enhanced:img src="#lib/assets/covers/lbady.jpg" class="h-auto max-w-48"></enhanced:img>
		{/snippet}
		{#snippet dock()}
			<Button
				class="flex justify-center gap-2"
				href="https://open.spotify.com/album/0oTghbuoMeHAdBLcUaDHvc"
				><SpotifyIcon class="-m-1 h-7 w-7"></SpotifyIcon>Spotify</Button
			>
			<Button
				class="flex justify-center gap-2 text-nowrap"
				href="https://music.apple.com/us/album/bleached/1883193253"
				><AppleMusicIcon class="-m-1 h-8 w-8 p-1"></AppleMusicIcon>Apple Music</Button
			>
		{/snippet}
	</Card>
	<Tracklist
		tracks={[
			"Rêves",
			"All 2 U",
			"Tyrolienne",
			"3X",
			"Go Back",
			"Cutscene",
			"birthbysl33p",
			"link-5",
			"blue tainted thoughts",
			"j+c0le hyperpop",
			"Vie Réelle Interlude",
			"Mon Bail",
			"Film d'horreur",
			"Sin City",
			"comme un rêve",
			"Encore! demo",
			"éternelle_solitaire",
			"The Sky Is Brighter Than You Thought",
		]}
	></Tracklist>
</div>
