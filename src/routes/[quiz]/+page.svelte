<script>
	import { page } from '$app/stores';
	import ListItem from '$lib/components/ListItem.svelte';
	export let data;
	let activeQuestion = 0;
	let score = 0;
	let answer = 'Hallo???';
	function handleSubmit() {
		if (activeQuestion === data.questions.length - 1) {
			alert('Quiz Completed!');
		}
		activeQuestion++;
	}
</script>

{#each data.questions as question, index (question.question)}
	{#if index === activeQuestion}
		<span>Question {index + 1} out of {data.questions.length}</span>
		<h2>{question.question}</h2>
		{#each question.options as option, index}
			<ListItem title={option} {index} on:click={() => alert(option)} />
		{/each}
	{/if}
{/each}

<button class="btn btn-primary" on:click={handleSubmit}>Submit Answer</button>
{answer}
