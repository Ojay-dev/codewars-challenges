'use-strict';

import isPangram from './detectPangram.js';


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
