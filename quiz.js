function checkAnswer() {
  const correctAnswer = "4";

  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  let userAnswer;

   if (selectedOption) {
    userAnswer = selectedOption.value;
   }
   if (userAnswer===correctAnswer) {
    document.getElementById('feedback').textContent = "Correct! Well done.";
   } else {
    document.getElementById('feedback').textContent = "That's incorrect. Try again."
   }


}

const submitButton = document.getElementById('submit-answer');

submitButton.addEventListener('click',checkAnswer);