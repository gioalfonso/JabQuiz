export default function Question(question, choices, answerKey) {
    this.question = question;
    this.choices = choices;
    this.answerKey = answerKey;
}

// checks if the users quess is = to the answerkey
Question.prototype.isCorrect = function (guessKey) {
    return guessKey === this.answerKey;
}

