import Question from "./Question.js";
import Quiz from "./Quiz.js";

const App = (() => {
    // cache the DOM
    const quizEl = document.querySelector(".jabquiz");
    const quizQuestionEl = document.querySelector(".jabquiz__question");
    const trackerEl = document.querySelector(".jabquiz__tracker");
    const taglingEl = document.querySelector(".jabquiz__tagline");
    const choicesEl = document.querySelector(".jabquiz__choices");
    const progressInnerEl = document.querySelector("progress__inner");
    const nextButtonEl = document.querySelector(".progress__inner");
    const restartButtonEl = document.querySelector(".restart");

    // create the questions (question.js) and also initialize the quiz
    const q1 = new Question(
        "First President of US?",
        ["Barrack", "Oswald", "George Washington", "Mozart"],
        2
    );
    const q2 = new Question(
        "When was Javascript created?",
        ["June 1995", "May 1995", "July 1885", "Sep 1996"],
        1
    );
    const q3 = new Question(
        "What does CSS stand for?",
        ["County Sheriff Service", "Cascading sexy sheets", "cascading style sheets", "castle style show"],
        2
    );
    const q4 = new Question(
        "The full form of HTML is...?",
        ["Hyper Text Markup Language", "Hold The Mic", "ERROR"],
        2
    );
    const q5 = new Question(
        "console.log(type of []) would return what?",
        ["Array", "Object", "null", "array"],
        1
    );

    // initialize quiz
    const quiz = new Quiz([q1, q2, q3, q4, q5]);

    // change innerHTML
    const setValue = (elem, value) => {
        elem.innerHTML = value;
    }

    // render question
    const renderQuestion = _ => {
        const question = quiz.getCurrentQuestion().question;
        setValue(quizQuestionEl, question);
    }

 
    // render Choices Element
    const renderChoicesElements = _ => {
        let markup = "";
        const currentChoices = quiz.getCurrentQuestion().choices;
        currentChoices.forEach((elem, index) => {
            markup += `
                <li class="jabquiz__choice">
                <input type="radio" name="choice" class="jabquiz__input" id="choice${index}">
                <label for="choice${index}" class="jabquiz__label">
                    <i></i>
                    <span>${elem}</span>
                </label>
                </li>
            `
        });

        setValue(choicesEl, markup);
    }


    // rendering components
    const renderAll = _ => {
        if (quiz.hasEnded()) {
            // renderEndScreen
        } else {
            // 1. Render the question
            renderQuestion();
            // 2. Render the choices elements
            renderChoicesElements();

            // 3. Render tracker
            // 4. Render Progress
        }
    }

})();




















// //========Revealing module pattern (Closure / IIFE)

// const App = (function() {
//     let counter = 0;

//     const doubleCounter = () => {
//         counter *= 2;
//     }

//     const incrementCounter = () => {
//         counter++;
//     }

//     const getCounter = () => {
//         return counter;
//     }

//     const setCounter = (newNum) => {
//         counter = newNum;
//     }

//     /*  PUBLIC METHODS - this is where we reveal all the public
//            methods to the outside world
//         return an object with name, value pairs */

//     return {
//         get: getCounter,
//         set: setCounter
//     }
    
// })();

// console.log(App.get());
// App.set(2);
// console.log(App.get());

// ================================================================








// const q1 = new Question(
//     "what's 2 + 2",
//     [2,3,4,5],
//     2
// );
// const q2 = new Question(
//     "First president of US?",
//     ["AL", "George", "Barrack", "Johnny"],
//     1
// );
// const q3 = new Question();
// // const q4 = new Question();
// // const q5 = new Question();

// const qArray = [q1, q2];

// const myQuiz = new Quiz(qArray);

// console.log(myQuiz.getCurrentquestion());
// console.log(myQuiz.hasEnded());
// //button next is clicked
// myQuiz.nextIndex();
// console.log(myQuiz.getCurrentquestion());
// console.log(myQuiz.hasEnded());

// myQuiz.nextIndex();
// console.log(myQuiz.getCurrentquestion());
// console.log(myQuiz.hasEnded());

















// const q1 = new Question(
//     "What's 1 + 1?",
//     [2, 3, 7, 4],
//     0
// );   

// console.log(q1.isCorrect(0));