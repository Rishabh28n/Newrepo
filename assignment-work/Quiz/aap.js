
const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correct: 3,
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
    ],
    correct: 0,
  },
  {
    question: "Which of the following is a CSS framework?",
    options: ["React", "Angular", "Vue", "Bootstrap"],
    correct: 3,
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const quizForm = document.getElementById("quizForm");
const nextButton = document.getElementById("nextButton");
const quizContent = document.getElementById("quizContent");
const resultContainer = document.getElementById("resultContainer");
const scoreEl = document.getElementById("score");
const restartButton = document.getElementById("restartButton");

function loadQuestion() {
  const question = quizData[currentQuestion];
  questionEl.textContent = question.question;
  optionsEl.innerHTML = "";

  question.options.forEach((option, index) => {
    const div = document.createElement("div");
    div.className = "mb-3";
    div.innerHTML = `
              <div class="form-check">
                  <input class="form-check-input" type="radio" name="quizOption" id="option${index}" value="${index}">
                  <label class="form-check-label" for="option${index}">${option}</label>
              </div>
          `;
    optionsEl.appendChild(div);
  });

  nextButton.style.display = "none";
  quizForm.style.display = "block";
}

function showResult() {
  quizContent.style.display = "none";
  resultContainer.style.display = "block";
  scoreEl.textContent = `Your score: ${score} out of ${quizData.length}`;
}

quizForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const selectedOption = document.querySelector(
    'input[name="quizOption"]:checked'
  );
  if (selectedOption) {
    const answer = parseInt(selectedOption.value);
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }
    quizForm.style.display = "none";
    nextButton.style.display = "block";
  } else {
    alert("Please select an option");
  }
});

nextButton.addEventListener("click", function () {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

restartButton.addEventListener("click", function () {
  currentQuestion = 0;
  score = 0;
  quizContent.style.display = "block";
  resultContainer.style.display = "none";
  loadQuestion();
});

loadQuestion();
