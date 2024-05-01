let currentQuestion = 0;
let score = 0;
const questions = [
    {
        question: "Quelle est la capitale de la France?",
        choices: ["Paris", "Lyon", "Marseille", "Bordeaux"],
        answer: "A"
    },
    {
        question: "Qui a peint la Joconde?",
        choices: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "C"
    },
    {
        question: "Quel est le résultat de 3 + 2?",
        choices: ["5", "3", "2", "4"],
        answer: "A"
    }
];

function displayQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question').innerText = question.question;
    const buttons = document.querySelectorAll('.btn');
    question.choices.forEach((choice, index) => {
        buttons[index].innerText = choice;
    });
    document.getElementById('next').style.display = 'none';
}

function selectOption(answer) {
    let question = questions[currentQuestion];
    if (answer === question.answer) {
        score++;
    }
    document.getElementById('next').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-container').innerHTML = `<h1>Résultat</h1><p>Votre score est : ${score} sur ${questions.length}</p>`;
}

document.addEventListener('DOMContentLoaded', function() {
    displayQuestion();
});
