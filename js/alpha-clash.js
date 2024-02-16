// function play() {
//   const homeSection = document.getElementById('home');
//   homeSection.classList.add('hidden');

//   const playgroundSection = document.getElementById('play-ground');
//   playgroundSection.classList.remove('hidden');
// }
function continueGame() {
  const randomAlphabet = generateRandomAlphabet();
  console.log(randomAlphabet);

  const currentAlphabetBox = document.getElementById('current-alphabet');
  currentAlphabetBox.innerText = randomAlphabet.toUpperCase();

  keyHighlightById(randomAlphabet);
}

function play() {
  hideElementById('home');
  showElementById('play-ground');
  continueGame();
}