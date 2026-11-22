<script lang="ts">
	import Albums from './Albums.svelte';
	import Events from './Events.svelte';
	import Hero from './Hero.svelte';
	import Merch from './Merch.svelte';
	import Background from "#lib/Background.svelte";
	import backgroundImg from "#lib/assets/bluebackground.jpg";
</script>

<Background src={backgroundImg}></Background>

<Hero></Hero>
<Events></Events>
<Albums></Albums>
<Merch></Merch>
<!--  artists -->
