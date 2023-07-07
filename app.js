const fs = require('fs');

function readFile(fileName) {
  return fs.readFileSync(`${fileName}.txt`, { encoding: 'utf-8' });
}

function findUniqueCharInArr(arr) {
  return arr.find((char) => arr.indexOf(char) === arr.lastIndexOf(char));
}

function findUniqueCharsInWords(arrWords) {
  const arrUniqueChars = [];
  arrWords.forEach((word) => {
    const uniqueChar = findUniqueCharInArr(word.split(''));
    arrUniqueChars.push(uniqueChar);
  });
  return arrUniqueChars;
}

function findUniqueChar(fileName) {
  const text = readFile(fileName);
  const arrUniqueChars = findUniqueCharsInWords(text.split(' '));
  return findUniqueCharInArr(arrUniqueChars);
}

console.log(findUniqueChar('text'));
