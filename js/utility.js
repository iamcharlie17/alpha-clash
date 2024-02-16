function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

function keyHighlightById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('bg-yellow-500');
}

// generate random alphabet...
function generateRandomAlphabet() {
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');
  
  const randomNumber = Math.random() * 25;
  const randomIndex = Math.round(randomNumber);

  const alphabet = alphabets[randomIndex];
  return alphabet;
}