export function getMaskedText(originalText, guessedText) {
  originalText = originalText.toUpperCase();

  //   ?. -> optional chaining
  const guessedTextSet = new Set(guessedText?.map((ch) => ch.toUpperCase()));

  return originalText.split('').map((el) => {
    if (guessedTextSet.has(el)) return el;
    else return '_';
  });
}
