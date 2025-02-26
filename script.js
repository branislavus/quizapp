let questions = [
    {
        "question": "Was ist die nächste Zahl in der Reihe: 2, 6, 12, 20, 30, ?",
        "answer_1": "38",
        "answer_2": "40",
        "answer_3": "42",
        "answer_4": "44",
        "correct": 3
    },
    {
        "question": "Welches Wort passt nicht in die Reihe? Apfel, Banane, Karotte, Orange",
        "answer_1": "Apfel",
        "answer_2": "Banane",
        "answer_3": "Karotte",
        "answer_4": "Orange",
        "correct": 3
    },
    {
        "question": "Wenn alle Blumen Pflanzen sind und einige Pflanzen Dornen haben, dann haben einige Blumen Dornen. Stimmt das?",
        "answer_1": "Ja",
        "answer_2": "Nein",
        "answer_3": "Vielleicht",
        "answer_4": "Weiß nicht",
        "correct": 2
    },
    {
        "question": "Ein Zug fährt mit 80 km/h von Stadt A nach Stadt B. Wie lange braucht er für 160 km?",
        "answer_1": "1 Stunde",
        "answer_2": "1,5 Stunden",
        "answer_3": "2 Stunden",
        "answer_4": "2,5 Stunden",
        "correct": 3
    },
    {
        "question": "Was ist die nächste Figur in der Reihe? ◯ ◯ ◯ ◯ △ ◯ ◯ ◯ ?",
        "answer_1": "◯",
        "answer_2": "△",
        "answer_3": "□",
        "answer_4": "◇",
        "correct": 2
    },
    {
        "question": "Welches Wort ist ein Anagramm von 'Hafen'?",
        "answer_1": "Hafen",
        "answer_2": "Fahne",
        "answer_3": "Hafer",
        "answer_4": "Fahen",
        "correct": 2
    },
    {
        "question": "Wenn ein Dreieck drei Ecken hat, wie viele hat ein Fünfeck?",
        "answer_1": "3",
        "answer_2": "4",
        "answer_3": "5",
        "answer_4": "6",
        "correct": 3
    },
    {
        "question": "Was ist 15 % von 200?",
        "answer_1": "25",
        "answer_2": "30",
        "answer_3": "35",
        "answer_4": "40",
        "correct": 2
    },
    {
        "question": "Welches Wort gehört nicht in die Reihe? Tisch, Stuhl, Lampe, Apfel",
        "answer_1": "Tisch",
        "answer_2": "Stuhl",
        "answer_3": "Lampe",
        "answer_4": "Apfel",
        "correct": 4
    },
    {
        "question": "Welche Zahl setzt die Reihe fort? 1, 4, 9, 16, ?",
        "answer_1": "20",
        "answer_2": "24",
        "answer_3": "25",
        "answer_4": "36",
        "correct": 3
    }
];
let currentQuestion = 0;
let rightAnswer = 0;
let AUDIO_SUCCESS = new Audio('assets/audio/success.mp3');
let AUDIO_FAIL = new Audio('assets/audio/fail.mp3');

function init() {
    document.getElementById('allQuestionsNumber').innerHTML = questions.length;
    showCurrentQuestion();
}

function showCurrentQuestion() {
    let percent = (currentQuestion +1)/ questions.length * 100;
    document.getElementById('progress-bar').innerHTML = `${percent}%`;   
    document.getElementById('progress-bar').style = `width: ${percent}%`;   

    if(currentQuestion >= questions.length){
        document.getElementById('congratulations-screen').style = '';
        document.getElementById('question-body').style = 'display: none';
        document.getElementById('card-img-top').src = './assets/img/eiscream.jpg';
        document.getElementById('congratulations').innerHTML = `Gratulation!!! Du hast  <b>${rightAnswer}</b> von <b>${questions.length}</b> richtig beantwortet!!!<br>
        Du verdienst ein Eisbecher wie dieser, holl's dir!!!`
    }else{
        let question = questions[currentQuestion].question;
        document.getElementById('questionText').innerHTML = question;
        document.getElementById('answer_1').innerHTML = questions[currentQuestion].answer_1;
        document.getElementById('answer_2').innerHTML = questions[currentQuestion].answer_2;
        document.getElementById('answer_3').innerHTML = questions[currentQuestion].answer_3;
        document.getElementById('answer_4').innerHTML = questions[currentQuestion].answer_4;
    }
}

function getAnswer(gues) {
    let answerGues = gues.slice(-1);
    let showRightAnswer = `answer_${questions[currentQuestion].correct}`;
    if (answerGues == questions[currentQuestion].correct) {
        document.getElementById(gues).parentNode.parentNode.classList.add('bg-success');
        document.getElementById(gues).classList.add('whiteText');
        rightAnswer++;
        AUDIO_SUCCESS.play();
    } else {
        document.getElementById(gues).parentNode.parentNode.classList.add('bg-danger');
        document.getElementById(showRightAnswer).parentNode.parentNode.classList.add('bg-success');
        document.getElementById(gues).classList.add('whiteText');
        AUDIO_FAIL.play();
    }
    document.getElementById('buttonNext').disabled = false;
}

function getNextQuestion() {
    currentQuestion++;
    document.getElementById('nextQuestionCount').innerHTML = currentQuestion + 1;
    document.getElementById('buttonNext').disabled = true;
    resetAnswersApearance();
    showCurrentQuestion();
}

function resetAnswersApearance(){
    document.getElementById('answer_1').parentNode.parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').classList.remove('whiteText');
    document.getElementById('answer_2').parentNode.parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').classList.remove('whiteText');
    document.getElementById('answer_3').parentNode.parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').classList.remove('whiteText');
    document.getElementById('answer_4').parentNode.parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').classList.remove('whiteText');
}

function erneutSpielen(){
    document.getElementById('card-img-top').src = './assets/img/education.jpg';
    currentQuestion = 0;
    rightAnswer = 0;
    document.getElementById('congratulations-screen').style = 'display: none';
    document.getElementById('question-body').style = '';
}