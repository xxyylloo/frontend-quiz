<script>
    import { page } from '$app/stores';
    import ListItem from '$lib/fonts/components/ListItem.svelte';
    import { enableCache } from 'iconify-icon';

    
    let { data } = $props();
    let currentQuestion = $state(0);
    let selectedAnswer = $state("");
    let score = $state(0);
    let submittedAnswers =$state(false);
    let showWarning = $state(false);

   
    function handleSubmit() {
    
    if (!selectedAnswer) {
        showWarning = true;
        return; 
    }
    
    data.questions[currentQuestion].selectedAnswer = selectedAnswer;
         if (selectedAnswer === data.questions[currentQuestion].answer) {
        score++;
    }
    submittedAnswers = true;
    showWarning = false; 
}

    function nextQuestion() {
        
        currentQuestion++;
        submittedAnswers = false;
        selectedAnswer = "";
    }

    
    let progressValue = () => {
        return (currentQuestion / data.questions.length) * 100;
    };
    
</script>
{#if currentQuestion < data.questions.length}

<progress 
    class="progress progress-success w-full h-4 transition-all duration-500 ease-in-out" 
    value={progressValue()} 
    max="100">
</progress>



{#each data.questions as question, index (question.question)}
    {#if index === currentQuestion}
        <p>Question {index + 1} of {data.questions.length}</p>
        <h2>{question.question}</h2>
        {#each question.options as option, index (option)}
        {#key submittedAnswers}
            <ListItem 
                title={option} 
                {index} correctAnswer={question.selectedAnswer && question.answer === option}
                incorrectlySelceted={question.selectedAnswer === option && question.answer !== option}
                focusAction={() => (selectedAnswer = option)}>
                disabled={submittedAnswers}
            </ListItem>
            {/key}
        {/each}
    {/if}
{/each}


{#if showWarning}
<div role="alert" class="alert alert-warning mt-4">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
    </svg>
    <span>Warning: Please select an answer before submitting!</span>
</div>
{/if}

{#if !submittedAnswers}

<button class="btn btn-primary" onclick={handleSubmit} >Submit</button>

{:else}
<button class="btn btn-primary" onclick={nextQuestion}>next Question</button>
{/if}
{:else}
<h2> Game Over!</h2>
<p>Your score is {score} out of {data.questions.length} points!</p>
<button class="btn btn-primary" onclick="{window.location.reload()}">Play again!</button>
{/if}
