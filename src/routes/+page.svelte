<script>
	export let data;
	import ListItem from '$lib/components/ListItem.svelte';
</script>

<h1>Welcome to the <strong>Frontend Quiz!</strong></h1>
<p>Pick a subject to get started.</p>

<div class="flex flex-col gap-4">
	{#each data.quizzes as quiz, index (quiz.title)}
		<a href="/{quiz.title.toLowerCase()}"><ListItem {index} title={quiz.title} /></a>
	{/each}
</div>
