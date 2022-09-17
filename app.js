function NumberGuess(x) {
  score = 19;
  HiddenNumber = Math.floor(Math.random() * 15);
}
let highscore=0;
NumberGuess();

document.querySelector(".check").addEventListener("click", function () {
    console.log(HiddenNumber);
    if (document.querySelector(".guess").value == HiddenNumber) {
      //if the guess is correct (It shows that the guess is correct )
      document.querySelector(".checktext").textContent = "Correct Number";
      document.querySelector(".result").textContent = HiddenNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent =`Highscore: ${highscore+1}`;
      }
    } else if (document.querySelector(".guess").value < HiddenNumber) {
      //if the guess is less than the hidden number
      document.querySelector(".checktext").textContent = "Too Low";
      document.querySelector(
        ".score"
      ).textContent = `Current score is ${score--}`;
    } //if the guess is greater than the hidden number
    else {
      document.querySelector(".checktext").textContent = "Too High";
      document.querySelector(
        ".score"
      ).textContent = `Current score is ${score--}`;
    }
    if (score < 0) {
      document.querySelector(".checktext").textContent = "You Lost!";
      document.querySelector(".check").disabled = true;
    }
  });

document.querySelector(".try-again").addEventListener("click", function () {
  NumberGuess();
  document.querySelector(".result").textContent = "??";
  document.querySelector(".guess").value = "";
  document.querySelector(".check").disabled=false;
});
