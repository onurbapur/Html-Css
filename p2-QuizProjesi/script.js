const timeElement = document.querySelector(".time");
const countElement = document.querySelector(".count");
const timerElement = document.querySelector(".timer");
const againBtn = document.querySelector(".again");
const result = document.querySelector(".result")
const questionElement = document.querySelector(".question");
const optionsElement = document.querySelectorAll(".option")
const containerElement = document.querySelectorAll(".container")
const resultCorrectEl = document.querySelector(".result-correct");
const resultWrongEl = document.querySelector(".result-wrong");
const resultEmptytEl = document.querySelector(".result-empty");


const targetWith = 560;
const progress = targetWith / 30;
let sayac, time = 30;
let benimIntervalim;



let correctAnswerTotal = 0;
let wrongAnswerTotal = 0;
let emptyAnswerTotal = 0;
let canSelectOtion = true;
let questionNumber = 0;

result.style.display = "none";

const questions = [
    {
        question: "Türkiyenin en yüksek dağı aşağıdakilerden hangisidir?",
        options: ["Everest Dağı", "Palandöken Dağı", "Ağrı Dağı"],
        answer: "Ağrı Dağı"
    },
    {
        question: "En yüksek dağ olarak bilinen dağ Türkiye'de hangisidir?",
        options: ["Everest Dağı", "Ağrı Dağı", "Palandöken Dağı"],
        answer: "Ağrı Dağı"
    },
    {
        question: "Türkiyenin en yüksek dağı aşağıdakilerden hangisidir?",
        options: ["Ağrı Dağı", "Everest Dağı", "Palandöken Dağı"],
        answer: "Ağrı Dağı"
    },
    {
        question: "Türkiyenin en yüksek dağı aşağıdakilerden hangisidir?",
        options: ["Everest Dağı", "Palandöken Dağı", "Ağrı Dağı"],
        answer: "Ağrı Dağı"
    },
    {
        question: "Türkiyenin en yüksek dağı aşağıdakilerden hangisidir?",
        options: ["Everest Dağı", "Ağrı Dağı", "Palandöken Dağı"],
        answer: "Ağrı Dağı"
    },
    {
        question: "Türkiyenin en yüksek dağı aşağıdakilerden hangisidir?",
        options: ["Ağrı Dağı", "Everest Dağı", "Palandöken Dağı"],
        answer: "Ağrı Dağı"
    },
    {
        question: "Türkiyenin en yüksek dağı aşağıdakilerden hangisidir?",
        options: ["Everest Dağı", "Palandöken Dağı", "Ağrı Dağı"],
        answer: "Ağrı Dağı"
    },
    {
        question: "Türkiyenin en yüksek dağı aşağıdakilerden hangisidir?",
        options: ["Everest Dağı", "Ağrı Dağı", "Palandöken Dağı"],
        answer: "Ağrı Dağı"
    },
    {
        question: "Türkiyenin en yüksek dağı aşağıdakilerden hangisidir?",
        options: ["Ağrı Dağı", "Everest Dağı", "Palandöken Dağı"],
        answer: "Ağrı Dağı"
    },
    {
        question: "Türkiyenin en yüksek dağı aşağıdakilerden hangisidir?",
        options: ["Everest Dağı", "Palandöken Dağı", "Ağrı Dağı"],
        answer: "Ağrı Dağı"
    }
];




optionsElement.forEach((option) => {
    option.addEventListener("click", () => {
        if (!canSelectOtion) {
            return;
        }
        const selectedOption = option.textContent;
        const correctAnswer = questions[questionNumber].answer;
        if (selectedOption == correctAnswer) {
            option.style.backgroundColor = '#049523';
            option.style.color = '#fff';
            correctAnswerTotal++;
        } else {
            option.style.backgroundColor = '#e40505';
            option.style.color = '#fff';
            wrongAnswerTotal++;
        }
        canSelectOtion = false;
        setTimeout(() => {
            option.style.color = 'rgb(56, 135, 190)';
            canSelectOtion = true;
            nextQuestion();

        }, 500);
    });
});

start();

function start() {
    questionElement.textContent = questions[questionNumber].question;
    optionsElement.forEach((option, index) => {
        option.style.backgroundColor = "transparent";
        option.textContent = questions[questionNumber].options[index];
    });
    time = 30;
    countElement.textContent = (questionNumber + 1) + " / " + `${questions.length}`;
    timeControl();
};

function end() {
    canSelectOtion = false;
    questionElement.textContent = "-";
    optionsElement.forEach((option) => {
        option.style.backgroundColor = "transparent";
        option.textContent = "-";
    });

    result.style.display = "block";
    resultCorrectEl.textContent = `Doğru: ${correctAnswerTotal}`;
    resultWrongEl.textContent = `Yanlış: ${wrongAnswerTotal}`;
    resultEmptytEl.textContent = `Boş: ${emptyAnswerTotal}`;
}

function nextQuestion() {
    clearInterval(sayac);
    if (questionNumber < questions.length - 1) {
        questionNumber++;
    } else {
        end();
        return;
    }
    start();
}



function timeControl() {
    timerElement.style.width = "0px";
    sayac = setInterval(() => {
        if (time > 0) {
            time--;
            timeElement.textContent = time + " sn."
            const currentWidth = time * progress;
            timerElement.style.width = `${currentWidth}px`;
        } else {
            emptyAnswerTotal++;
            nextQuestion();
        }
    }, 1000)
}


againBtn.addEventListener("click", () => {
    window.location.reload();
})



/*https://www.youtube.com/watch?v=SHB1xmMrIT4&list=PL6huaSWRtPK-4GNNnXjS3l-Rw1X0Skvo8 */