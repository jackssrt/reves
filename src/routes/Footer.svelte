<script>
	import Card from "#lib/Card.svelte";
	import { m } from "#lib/paraglide/messages.js";
</script>

<Card class="bg-secondary text-center text-text/75">
	<p class="w-full text-center">
		{m["footer.made_with"]()}<a href="https://jackssrt.com" class="underline"
			>{m["footer.jackssrt"]()}</a
		>{m["footer.for"]()}{m["footer.reves"]()}
	</p>
</Card>
