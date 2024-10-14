<script>
	export let data;
</script>

<h1>Welcome to the <strong>Frontend Quiz!</strong></h1>
<p>Pick a subject to get started.</p>

<div class="flex flex-col gap-4">
	{#each data.quizzes as quiz (quiz.title)}
		<div class="alert flex">
			<img src={quiz.icon} alt={quiz.title + '-Icon'} />
			<span>{quiz.title}</span>
		</div>
	{/each}
</div>
