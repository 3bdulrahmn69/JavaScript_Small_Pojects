const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: "Paris"
    }, // question 1
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars"
    }, // question 2
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    }, // question 3
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare"
    }, // question 4
    {
        question: "In which year did the Titanic sink?",
        options: ["1910", "1912", "1915", "1920"],
        answer: "1912"
    }, // question 5
    {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        answer: "Tokyo"
    }, // question 6
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        answer: "Leonardo da Vinci"
    }, // question 7
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Iron", "Silver"],
        answer: "Oxygen"
    }, // question 8
    {
        question: "What is the currency of Brazil?",
        options: ["Peso", "Yen", "Real", "Dollar"],
        answer: "Real"
    }, // question 9
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    }, // question 10
];

function displayQuestion(index) {
    document.querySelector(".question-place").innerHTML = questions[index].question;
    document.querySelector(".answer-1").innerHTML = questions[index].options[0];
    document.querySelector(".answer-2").innerHTML = questions[index].options[1];
    document.querySelector(".answer-3").innerHTML = questions[index].options[2];
    document.querySelector(".answer-4").innerHTML = questions[index].options[3];
};

function displayScore() {
    document.querySelector(".app").style.display = "none";
    document.querySelector(".review").style.display = "flex";
    if (score === maxScore) {
        document.querySelector(".awesome").style.display = "flex";
        document.querySelector(".awesome").textContent = "Awesome!";
        document.querySelector(".awesome").style.background = "green";
    }else if (score === 0) { 
        document.querySelector(".awesome").style.display = "flex";
        document.querySelector(".awesome").textContent = "None Brain ?";
        document.querySelector(".awesome").style.background = "red";
    }
    document.querySelector(".score").textContent = score;
    document.querySelector(".max-score").textContent = maxScore;
};

function changeBg (element) {
    resetBg();
    element.style.background = "#01255c";
    element.style.color = "#fff";
    checkAnswer = element.textContent;
};

function resetBg () {
    answer1.style.background = "#fff";
    answer1.style.color = "#01255c";

    answer2.style.background = "#fff";
    answer2.style.color = "#01255c";

    answer3.style.background = "#fff";
    answer3.style.color = "#01255c";

    answer4.style.background = "#fff";
    answer4.style.color = "#01255c";
};

let index = 0;
let score = 0;
let maxScore = questions.length;
let checkAnswer = " ";
nextButton = document.querySelector(".next-button");


answer1 = document.querySelector(".answer-1");
answer1.addEventListener("click", function() {
    changeBg(answer1);
});

answer2 = document.querySelector(".answer-2");
answer2.addEventListener("click", function() {
    changeBg(answer2);
});

answer3 = document.querySelector(".answer-3");
answer3.addEventListener("click", function() {
    changeBg(answer3);
});

answer4 = document.querySelector(".answer-4");
answer4.addEventListener("click", function() {
    changeBg(answer4);
});

nextButton.addEventListener("click", function() {
    if (nextButton.textContent === "Start") {
        index = 0;
        displayQuestion(index);
        document.querySelectorAll(".btn").forEach(function(element) {
            element.style.display = "inline";
        });
        nextButton.textContent = "Next";
    }else if(index === questions.length) {
        nextButton.textContent = "Finish";
    }else if(nextButton.textContent === "Next") {
        if (checkAnswer === questions[index].answer) {
            score++;
        }
        resetBg();
        index++;
        displayQuestion(index);
        if (index === questions.length - 1) {
            nextButton.textContent = "Finish";
        }
    }else if(nextButton.textContent === "Finish"){
        if (checkAnswer === questions[index].answer) {
            score++;
        }
        displayScore(); 
    }
});