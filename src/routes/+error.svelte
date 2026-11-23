<script lang="ts">
	import Card from "#lib/Card.svelte";
	import { page } from "$app/state";
</script>

<Card class="bg-primary" titleType="big" title={page.status.toString()}>{page.error!.message}</Card>
