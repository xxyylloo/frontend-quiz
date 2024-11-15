export async function load({fetch,params}){
    const response = await fetch("data.json")	
    const data = await response.json();   
    console.log(data)
    console.log(params)
    const filterData = data.quizzes.filter(quiz => quiz.title.toLowerCase() === params.quiz)[0]
    console.log(filterData)
    
    return filterData;
}