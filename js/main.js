document.addEventListener('DOMContentLoaded', () => {
    const btnAnswer = document.getElementById('btn');
    const btnImg = document.getElementById('btn-img');
    const answer = document.getElementById('answer');

    btnAnswer.addEventListener('click', function(e) {
        console.log('...');
        answer.classList.add('display-none');
    })



})