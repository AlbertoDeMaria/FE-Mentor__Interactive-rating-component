const btnsVote = document.querySelectorAll('#btn-vote');
const cardVoting = document.getElementById('card-voting');
const cardThankyou = document.getElementById('card-thank-you');
const submit = document.getElementById('btn-submit');

let activeBtn;

btnsVote.forEach((btn) => {
    btn.addEventListener('click', () => {
        // find alredy active button
        var activeElement = document.querySelector('.active');
        
        //  if exist and remove class
        if (activeElement) {
            activeElement.classList.remove('active');
        }

        //add active class to the btn clicked and save the value
        btn.classList.add('active');
        activeBtn = btn.value;
    })
})

submit.addEventListener('click', () => {
    cardVoting.classList.add('hide');
    cardThankyou.classList.remove('hide');
    document.getElementById('voting').innerHTML = activeBtn;
})