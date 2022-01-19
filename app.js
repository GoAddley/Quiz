//Collect answers in an array
const correctAnswers = ['B', 'C', 'B', 'C', 'A'];
//Grab form to attach event listener to it
const form = document.querySelector('.quiz-form');
const heading = document.querySelector('.result');

form.addEventListener('submit', e => {
    e. preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    //check answers
    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index]){
            score += 20;
        } 
    });
    
    //Show percentage of correct answers
    heading.remove('d-none');
    const span = heading.querySelector('span');
    let percentage = document.createElement('h2');
    percentage.innerHTML = score;
    percentage.classList.add('percentage');
    span.appendChild(percentage);
    console.log(percentage);
})