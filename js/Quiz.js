export default function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.currentIndex = 0; //keeps track of Quiz # (question 1 question 2)
}

// gets the current Question
Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentIndex];
          // └[q1,q2,...]   └this.currentIndex = ?
}

// method increments the currenIndex every "next" button click
Quiz.prototype.nextIndex = function() {
    this.currentIndex++;
}

// check if Quiz has ended
Quiz.prototype.hasEnded = function() {
    return this.currentIndex === this.questions.length;
}

// user guessing the answer
Quiz.prototype.guess = function(userGuess) {
    const currentQuestion = this.question[this.currentIndex]
                           //  └ same as line 8
    if (currentQuestion.isCorrect(userGuess)) {
                     //   └ this method is in Quiz.js line 8
        this.score++ // increase score by 1 in line 3 above
    }
    this.nextIndex(); // go to next question regardless ans is correct or no        
}