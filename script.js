const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean",
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "J.K. Rowling"],
        answer: "William Shakespeare",
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");
const quizContainer = document.getElementById("quiz-container");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", selectOption);
        optionsElement.appendChild(button);
    });
}

function selectOption(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = quizData[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    // Instead of directly calling showQuestion, just disable the options to prevent multiple clicks
    optionsElement.innerHTML = ""; // Clear options after selection
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Remove nextButton since we are handling progression in selectOption
// nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     showQuestion();
// });

function showResult() {
    quizContainer.classList.add("hidden");
    resultElement.classList.remove("hidden");
    scoreElement.textContent = score;
}

restartButton.addEventListener("click", startQuiz);

startQuiz();

