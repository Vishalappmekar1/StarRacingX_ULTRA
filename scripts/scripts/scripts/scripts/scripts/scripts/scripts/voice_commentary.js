function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utter);
}

if (game.driftPoints > 300) speak("Incredible drift!");
if (game.coins > 10) speak("You are rich with coins!");
