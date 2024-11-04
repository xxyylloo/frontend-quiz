<script>
	import { page } from '$app/stores';
	import { store } from '$lib/store.svelte.js';
	import ListItem from '$lib/components/ListItem.svelte';
	let { data } = $props();
	let activeQuestion = $state(0);

	function handleSubmit() {
		if (data.questions[activeQuestion].answer === store.selectedAnswer) {
			store.score++;
		} else {
			alert('Incorrect Answer!');
		}
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
			<ListItem title={option} {index} />
		{/each}
	{/if}
{/each}

<button class="btn btn-primary" onclick={handleSubmit}>Submit Answer</button>
