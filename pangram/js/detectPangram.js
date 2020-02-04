function pangram(sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const theSentence = sentence;
  for (let i = 0; i < alphabet.length; i += 1) {
    if (theSentence.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
}

export default pangram;
