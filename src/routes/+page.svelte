<!--<h1 class="text-5xl text-red-500">Homepage with Tailwind</h1>

 Open the modal using ID.showModal() method 
<button class="btn" onclick="my_modal_1.showModal()">...and DaisyUI (click)</button>
<dialog id="my_modal_1" class="modal">
	<div class="modal-box">
		<h3 class="text-lg font-bold">Hello from Daisy 🌻!</h3>
		<p class="py-4">Press ESC key or click the button below to close</p>
		<div class="modal-action">
			<form method="dialog">
				if there is a button in form, it will close the modal 
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
</dialog>

<script>
	import ListItem from '$lib/fonts/components/listitem.svelte';
	export let data;
</script>

<h1>Welcome to the <strong class="text-primary">Frontend Quiz!</strong></h1>
<p>Pick a subject to geh started with.</p>

<div class="flex flex-col gap-4">

{#each data.quizzes as quiz, index (quiz.title)}
	<a href="/{quiz.title.toLowerCase()}"><ListItem title={quiz.title} {index} /></a>

{/each}
</div>
<script>
    import ListItem from '$lib/fonts/components/listitem.svelte';
    export let data;
</script>

<h1 class="text-4xl font-bold text-center text-gradient bg-clip-text mb-6">
    Welcome to the <strong class="text-primary">Frontend Quiz!</strong>
</h1>
<p class="text-lg text-center text-gray-600 mb-8">Pick a subject to get started with.</p>

<div class="flex flex-col gap-6">
    {#each data.quizzes as quiz, index (quiz.title)}
        <a 
            href="/{quiz.title.toLowerCase()}" 
            class="transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-500
			 hover:text-white p-4 rounded-lg shadow-lg
			 bg-white border-2 border-transparent hover:border-blue-500">
            <ListItem title={quiz.title} {index} />
        </a>
    {/each}
</div>
-->
<script>
    import ListItem from '$lib/fonts/components/listitem.svelte';
    export let data;
</script>

<h1 class="text-4xl font-extrabold text-center text-primary mb-6">
    Welcome to the <strong class="text-accent">Frontend Quiz!</strong>
</h1>
<p class="text-lg text-center text-secondary mb-8">Pick a subject to get started with.</p>

<div class="flex flex-col gap-6">
    {#each data.quizzes as quiz, index (quiz.title)}
        <a 
            href="/{quiz.title.toLowerCase()}" 
            class="transform transition duration-300 ease-in-out hover:scale-105 hover:bg-primary hover:text-white p-4 rounded-lg shadow-lg bg-light border-2 border-transparent hover:border-accent">
            <ListItem title={quiz.title} {index} />
        </a>
    {/each}
</div>
