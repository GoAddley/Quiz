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
    scrollTo({ top: 0, behavior: 'smooth' });
    //Show percentage of correct answers
    heading.classList.remove('d-none');
    //Set interval timer for score
    let counter = 0;
    const timer = setInterval(() => {
        heading.querySelector('span').textContent = `${counter}%`;
        if(counter === score){
            clearInterval(timer);
        } else {
            counter++;
        }
    }, 40);
})