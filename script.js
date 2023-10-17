const questions = [
    {
        question : "what is the capital of france",
        answers : [
            {answer:"madrid" , correct:"false"},
            {answer:"london", correct:"false"},
            {answer:"paris", correct:"true"},
            {answer:"roma", correct:"false"}
        ]
    },
    {
        question : "Who painted the Mona Lisa?",
        answers : [
            {answer:"Vincent van Gogh" , correct:"false"},
            {answer:"Leonardo da Vinci", correct:"true"},
            {answer:"Pablo Picasso", correct:"false"},
            {answer:"Michelangelo", correct:"false"}
        ]
    },
    {
        question : "what is the largest abimal in the world?",
        answers : [
            {answer:"elephant" , correct:"false"},
            {answer:"giraffe", correct:"false"},
            {answer:"blue whale", correct:"true"},
            {answer:"white shark", correct:"false"}
        ]
    },
    {
        question : "how many years separate fifa world cups?",
        answers : [
            {answer:"4" , correct:"true"},
            {answer:"5", correct:"false"},
            {answer:"2", correct:"false"},
            {answer:"3", correct:"false"}
        ]
    },
    {
        question : "Who is the current President of the United States?",
        answers : [
            {answer:"donald trump" , correct:"false"},
            {answer:"george bush", correct:"false"},
            {answer:"barak obama", correct:"false"},
            {answer:"joe biden", correct:"true"}
        ]
    },
    {
        question : "how many times does ronaldo win the golden ball?",
        answers : [
            {answer:"6" , correct:"false"},
            {answer:"4", correct:"false"},
            {answer:"5", correct:"true"},
            {answer:"3", correct:"false"}
        ]
    }
]

const qst = document.getElementById("question");
const answrs = document.getElementById("options");
const nxt = document.getElementById("next");

let score = 0;
let index = 0;

function startQuiz() {
    score=0;
    index=0;
    // nxt.style.display="none";
    showQuestion();
}

function showQuestion() {
    resetQuestion();
    nxt.style.display="none";
    let x = questions[index];
    qst.innerHTML=`${index+1}. ${x.question}`;
    x.answers.forEach(a =>{
        let btn = document.createElement("button");
        btn.innerHTML=a.answer;
        btn.addEventListener("click", select);
        btn.dataset.correct=a.correct;
        answrs.appendChild(btn);
    })
}

function resetQuestion() {
    while(answrs.firstChild) {
        answrs.removeChild(answrs.firstChild);
    }
}

function select(e) {
    if(e.target.dataset.correct==="true") {
        e.target.classList.add("correct");
        score++;
    }else {
        e.target.classList.add("incorrect");
    } 
    Array.from(answrs.children).forEach(a => {
        a.disabled="true";
        if(a.dataset.correct==="true"){
            a.classList.add("correct");
        }
    })
    nxt.style.display="block";
}

nxt.addEventListener("click", ()=>{
    if(index>=questions.length) {
        startQuiz();
    } else {
        index++;
        if(index>=questions.length) {
            nxt.innerHTML="Play Again";
            showScore();
        } else {
            showQuestion();
        }
    }
})

function showScore() {
    resetQuestion();
    qst.innerHTML= `you scored ${score} out of ${questions.length}!`;
}


startQuiz();
