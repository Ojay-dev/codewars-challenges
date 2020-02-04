const isPangram = (string) => {
  const sentence = string.toLowerCase().split('');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < alphabet.length; i += 1) {
    if (sentence.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
};

export default isPangram;
