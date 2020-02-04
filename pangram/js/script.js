'use-strict';

// import pangram from './detectPangram';


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


document.querySelector('#btn').onclick = () => {
  const inputValue = document.querySelector('#sentence').value;
  const element = document.querySelector('div');
  const result = document.createElement('h3');
  // eslint-disable-next-line no-console
  console.log(inputValue);

  if (isPangram(inputValue)) {
    const innerText = document.createTextNode('Pangram');
    result.appendChild(innerText);
    element.appendChild(result);
  } else {
    const innerText = document.createTextNode('Not a Pangram');
    result.appendChild(innerText);
    element.appendChild(result);
  }
};
