<script>
	import { store } from '$lib/store.svelte.js';
	let { icon, title, index } = $props();
	let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
</script>

<button
	class="alert flex focus:outline focus:outline-primary"
	onfocus={() => (store.selectedAnswer = title)}
>
	{#if icon}
		<img src={icon} alt={title + '-Icon'} />
	{:else}
		<span>{ABC[index]}</span>
	{/if}
	<span>{title}</span>
</button>
