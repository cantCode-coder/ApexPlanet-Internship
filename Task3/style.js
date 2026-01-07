const quizData = [
    {
        question: "Which language is used for web styling?",
        options: ["HTML", "Java", "CSS", "Python"],
        answer: 2
    },
    {
        question: "Which keyword is used to fetch data from API?",
        options: ["get()", "fetch()", "call()", "request()"],
        answer: 1
    }
];

let currentQuestion = 0;

function loadQuestion() {
    document.getElementById("question").textContent =
        quizData[currentQuestion].question;

    const buttons = document.querySelectorAll(".options button");
    buttons.forEach((btn, index) => {
        btn.textContent = quizData[currentQuestion].options[index];
    });
}

function checkAnswer(selected) {
    let result = document.getElementById("result");

    if (selected === quizData[currentQuestion].answer) {
        result.textContent = "Correct Answer!";
        result.style.color = "green";
    } else {
        result.textContent = "Wrong Answer!";
        result.style.color = "red";
    }

    currentQuestion = (currentQuestion + 1) % quizData.length;
    setTimeout(() => {
        result.textContent = "";
        loadQuestion();
    }, 1000);
}

loadQuestion();


function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").textContent =
                data.setup + " - " + data.punchline;
        })
        .catch(() => {
            document.getElementById("joke").textContent =
                "Failed to load joke.";
        });
}
