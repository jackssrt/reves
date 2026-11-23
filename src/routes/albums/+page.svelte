<script>
	import Background from "#lib/Background.svelte";
	import Button from "#lib/Button.svelte";
	import Card from "#lib/Card.svelte";
	import backgroundImg from "#lib/assets/bluebackground.jpg";
	import { m } from "#lib/paraglide/messages.js";
	import SpotifyIcon from "@iconify-svelte/mdi/spotify";
	import AppleMusicIcon from "@iconify-svelte/cib/apple-music";
</script>

<Background src={backgroundImg}></Background>
<Card title="Albums" class="bg-primary">{m["index.albums.description"]()}</Card>

<Card title="Bleached" class="bg-secondary">
	{m["albums.bleached.description"]()}
	{#snippet right()}
		<enhanced:img src="#lib/assets/typos/bleached-typo.png"></enhanced:img>
		<enhanced:img src="#lib/assets/covers/bleached.png" class="h-full w-32"></enhanced:img>
	{/snippet}
	{#snippet dock()}
		<Button
			class="flex justify-center gap-2"
			href="https://open.spotify.com/intl-fr/album/3fm5uEHogwcjhaWsR4RboN"
			><SpotifyIcon class="-m-1 h-7 w-7"></SpotifyIcon>Spotify</Button
		>
		<Button
			class="flex justify-center gap-2"
			href="https://music.apple.com/us/album/le-bleu-a-des-yeux/1681025871"
			><AppleMusicIcon class="-m-1 h-8 w-8 p-1"></AppleMusicIcon>Apple Music</Button
		>
	{/snippet}
</Card>

<Card title="Le bleu a des yeux" class="bg-secondary">
	{m["albums.lbady.description"]()}
	{#snippet right()}
		<enhanced:img class="ml-auto" src="#lib/assets/typos/lbady-typo.png"></enhanced:img>
		<enhanced:img src="#lib/assets/covers/lbady.jpg" class="h-full w-32"></enhanced:img>
	{/snippet}
	{#snippet dock()}
		<Button
			class="flex justify-center gap-2"
			href="https://open.spotify.com/album/0oTghbuoMeHAdBLcUaDHvc"
			><SpotifyIcon class="-m-1 h-7 w-7"></SpotifyIcon>Spotify</Button
		>
		<Button
			class="flex justify-center gap-2"
			href="https://music.apple.com/us/album/bleached/1883193253"
			><AppleMusicIcon class="-m-1 h-8 w-8 p-1"></AppleMusicIcon>Apple Music</Button
		>
	{/snippet}
</Card>
