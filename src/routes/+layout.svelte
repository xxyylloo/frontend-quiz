<script>
	import '../app.css';
	import 'iconify-icon';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();

	let theme = $state('dark');

	function switchTheme() {
		if (theme === 'dark') theme = 'light';
		else theme = 'dark';
	}
</script>

<div data-theme={theme} class="min-h-screen p-4">
	<div class="flex justify-end">
		<div class="flex gap-1">
			<iconify-icon icon="lucide-sun" class="text-2xl"></iconify-icon>
			<input
				type="checkbox"
				class="toggle border-none bg-white [--tglbg:#a729f5] hover:bg-white"
				checked="checked"
				onclick={switchTheme}
			/>
			<iconify-icon icon="lucide-moon" class="text-2xl"></iconify-icon>
		</div>
	</div>
	{@render children?.()}
</div>
