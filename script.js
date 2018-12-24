function check() {
    var questionOne = document.Quiz.questionOne.value;
    var questionTwo = document.Quiz.questionTwo.value;
    var questionThree = document.Quiz.questionThree.value;
    var questionFour = document.Quiz.questionFour.value;
    var questionFive = document.Quiz.questionFive.value;
    var right = 0;

    if (questionOne == "correct") {
        right = right + 4;
    };
    if (questionTwo == "correct") {
        right = right + 4;
    };
    if (questionThree == "correct") {
        right = right + 4;
    };
    if (questionFour == "correct") {
        right = right + 4;
    };
    if (questionFive == "correct") {
        right = right + 4;
    };

    document.getElementById("marks").style.visibility = "visible";
    document.getElementById("correctNumber").innerHTML = "HERE IS YOUR SCORE: " + right + "/20pts";
    $(".container").fadeOut();

};