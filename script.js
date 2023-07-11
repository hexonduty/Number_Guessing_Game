const resetBTN = document.querySelector('.reset');
const numberShow = document.querySelector('.numberShow');
const number = document.querySelector('.number');
const guessBTN = document.querySelector('.guessBTN');
const score = document.querySelector('.scoreİnput');
const circa = document.querySelector('.circa');
const body = document.querySelector('body')
const againBTN = document.querySelector('.againBTN')
const circaHeader = document.querySelector('.circaHeader');


const secretNumber = Math.floor(Math.random() * 20)
console.log(secretNumber);
let scorePlus = 0;

guessBTN.addEventListener('click', function () {
    if (number.value == secretNumber) {
        numberShow.textContent = secretNumber;
        circaHeader.textContent = "True Number 🏆";
        circa.textContent = 'Direct Hit 🏹'
        circa.style.fontSize = '33px'
        body.style.background = 'green';
        circaHeader.style.fontSize = '43px'
        circaHeader.style.color = 'green'
        score.value = 1;
        highScore.value = score;
    } else if (number.value != secretNumber) {
        body.style.background = 'red';
        circaHeader.textContent = 'Wrong Number ⛔'
        circaHeader.style.fontSize = '43px'
        circaHeader.style.color = 'red'
        score.value -= 1;
        highScore.value = score;
        if (number.value > secretNumber) {
            circa.textContent = "Too High 📈";
        } else if (number.value < secretNumber) {
            circa.textContent = "Too Low 📉";
        }
    }
});


resetBTN.addEventListener('click', function(){
    body.style.background = '#171926'
    numberShow.textContent = '?';
    circaHeader.textContent = "I'm waiting..."
    circaHeader.style.fontSize = '20px'
    circaHeader.style.color = '#fff'
    circa.textContent = 'Please Guess Number'
    circa.style.fontSize = '20px'
    score.value = 0;
})
