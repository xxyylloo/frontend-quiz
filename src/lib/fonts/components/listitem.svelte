<script>
 let {icon, title, index, focusAction, correctAnswer, incorrectlySelceted, disabled } = $props();
let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

</script>

<button class="alert flex focus:outline focus:outline-primary
{correctAnswer ? "outline outline-success" : " "}{incorrectlySelceted ? "outline outline-error" : " "}"
 onfocus={focusAction}
 disabled={disabled}
 >
    {#if icon}
    <img src={icon} alt ={title +"-icon"}/>
    {:else}
    <span>{ABC[index]}</span>
    {/if}
    <span>{title} </span>
</button>