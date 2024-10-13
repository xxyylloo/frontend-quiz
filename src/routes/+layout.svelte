<script>
	import '../app.css';
	import 'iconify-icon';
	let theme = 'light';
	function switchTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
	}
</script>

<div data-theme={theme} class="min-h-screen">
	<div class="absolute top-4 right-4">
		<iconify-icon icon="lucide-moon" class="text-2xl"></iconify-icon>
		<input type="checkbox" class="toggle" on:click={switchTheme} />
		<iconify-icon icon="lucide-sun" class="text-2xl"></iconify-icon>
	</div>
	<slot />
</div>
