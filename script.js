function restartGame() {
  currentQuestion = 0;
  score = 0;
  scoreElement.textContent = "";
  loadQuestion();
}

