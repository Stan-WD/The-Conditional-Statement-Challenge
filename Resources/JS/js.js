alert("Hello, welcome to the quiz, please answer all the following three math questions..");

var score = 0;

var firstAnswer = prompt ("What is 1 + 1?");

firstAnswer = parseInt(firstAnswer);

if (firstAnswer === 2) {
    alert("Yes, your answer is correct! Next question..");
    score = score + 1;
}
else {
    alert("No, your answer is incorrect. Next question..");
}

var secondAnswer = prompt ("What is 2 + 2?");

secondAnswer = parseInt(secondAnswer);

if (secondAnswer === 4) {
    alert("Yes, your answer is correct! Next question..");
    score = score + 1;
}
else {
    alert("No, your answer is incorrect. Next question..");
}

var thirdAnswer = prompt ("What is 3 + 3?");

thirdAnswer = parseInt(thirdAnswer);

if (thirdAnswer === 6) {
    alert("Yes, your answer is correct!");
    score = score + 1;
    alert("You have answered all the three questions. Here is your quiz result..");
}
else {
    alert("No, your answer is incorrect.");
    alert("You have answered all the three questions. Here is your quiz result..");
}

if (score >= 2) {
    alert("Congratulation, your score is " + score + ". You have passed the quiz!");
}
else {
    alert("Sorry, your score is " + score + ". You have failed the quiz.");
}