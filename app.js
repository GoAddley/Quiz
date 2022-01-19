//Collect answers in an array
const correctAnswers = ['Hashirama Senju', 'Kurama', 'Obito', '6', 'Sharingan'];
//Grab form to attach event listener to it
const form = document.querySelector('.quiz-form');
const heading = document.querySelector('.result');
const wrongAnswers = ["Naruto Uzumaki", "Madara Uchiha", "Shukaku", "Son Goku", "Madara", "Sasuke", "1", "7", "Byakugan", "Seals"];
const wrongColor = document.querySelectorAll('.wrong');
const rightColor = document.querySelectorAll('.right');

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
    }, 15);

    wrongColor.forEach((ans) =>{
        ans.classList.remove('text-white-50');
        ans.classList.add('text-danger');
    });
    rightColor.forEach(ans =>{
        ans.classList.remove('text-white-50');
        ans.classList.add('text-primary');
    });

    
});

const restart = document.createElement('input');
restart.setAttribute('type', 'submit');
restart.setAttribute('value', 'Restart');
restart.classList.add('restart', 'btn', 'btn-dark', 'btn-lg');
heading.appendChild(restart);

restart.addEventListener('click', () =>{
    window.location.reload();
});