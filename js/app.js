import Question from "./Question.js";
import Quiz from "./Quiz.js";

const App = (() => {
    // cache the DOM
    const quizEl = document.querySelector(".jabquiz");
    const quizQuestionEl = document.querySelector(".jabquiz__question");
    const trackerEl = document.querySelector(".jabquiz__tracker");
    const taglineEl = document.querySelector(".jabquiz__tagline");
    const choicesEl = document.querySelector(".jabquiz__choices");
    const progressInnerEl = document.querySelector(".progress__inner");
    const nextButtonEl = document.querySelector(".next");
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

// ========================================================================================

    // for buttons next and restart
    const listeners = _ => {
        nextButtonEl.addEventListener("click", function() {
            const selectedRadioElem = document.querySelector('input[name="choice"]:checked');
            if (selectedRadioElem) {
                const key = Number(selectedRadioElem.getAttribute("data-order"));
                quiz.guess(key); // compares user guess to correct answer. look at Quiz object
                renderAll(); // if user guess is correct renders next set of question
            }
        })

        restartButtonEl.addEventListener("click", function() {
            // 1. reset the quiz
            quiz.reset();
            // 2. renderAll
            renderAll();
            // 3. restore the next button
            nextButtonEl.style.opacity = 1;
            setValue(taglineEl, `Pick an option below!`);
        })

    }


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
                <input type="radio" name="choice" class="jabquiz__input" data-order="${index}" id="choice${index}">
                <label for="choice${index}" class="jabquiz__label">
                    <i></i>
                    <span>${elem}</span>
                </label>
                </li>
            `
        });

        setValue(choicesEl, markup);
    }

    // render tracker
    const renderTracker = _ => {
        const index = quiz.currentIndex;
        setValue(trackerEl, `${index+1} of ${quiz.questions.length}`);
    }

    // // get percentage
    const getPercentage = (num1, num2) => {
        return Math.round((num1/num2) * 100);
    }

    // launch function
    const launch = (width, maxPercent) => {
        let loadingBar = setInterval(function() {
            if (width > maxPercent) {
                clearInterval(loadingBar);
            } else {
                width++;
                progressInnerEl.style.width = width + "%";
            }
        }, 3)
    }

    // render progress
    const renderProgress = _ => {
        //1. width
        const currentWidth = getPercentage(quiz.currentIndex, quiz.questions.length);
        //2. launch(0, width)
        launch(0, currentWidth);
    }

    // end of quiz
    const renderEndScreen = _ => {
        setValue(quizQuestionEl, `Great Job!`);
        setValue(taglineEl, `COMPLETE`);
        setValue(trackerEl, `Your Score: ${getPercentage(quiz.score, quiz.questions.length)}%`);
        nextButtonEl.style.opacity = 0;
        renderProgress();
    }





// =====================================================================================

    // RENDERING COMPONENTS
    const renderAll = _ => {
        if (quiz.hasEnded()) {
            // renderEndScreen
            renderEndScreen();
        } else {
            // 1. Render the question
            renderQuestion();
            // 2. Render the choices elements
            renderChoicesElements();
            // 3. Render tracker
            renderTracker();
            // 4. Render Progress
            renderProgress();
        }
    }

    return {
        renderAll: renderAll,
        listeners: listeners
    }
})();

App.renderAll();
App.listeners();



















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