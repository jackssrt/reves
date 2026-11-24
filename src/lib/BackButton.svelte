<script>
	import Button from "./Button.svelte";
	import { m } from "./paraglide/messages";
	import ArrowIcon from "@iconify-svelte/lucide/arrow-left";
</script>

<Button href="/" class="flex gap-1">
	<ArrowIcon class="w-8"></ArrowIcon>
	{m["go_back"]()}
</Button>
