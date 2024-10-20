<script>
	export let icon, title, index;
	let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
</script>

<button class="alert flex focus:outline-primary focus:outline">
	{#if icon}
		<img src={icon} alt={title + '-Icon'} />
	{:else}
		<span>{ABC[index]}</span>
	{/if}
	<span>{title}</span>
</button>
