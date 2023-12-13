let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  let lengthWords = [];
  for(let i = 0; i < words.length;i++){
    lengthWords.push(words[i].length)
  }
  return lengthWords;
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
