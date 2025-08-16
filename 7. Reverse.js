let words = ["apple", "banana", "cherry", "date", "elderberry"];
let transformedWords = [];

for (let i = 0; i < words.length; i++) {
  let reversedWord = "";
  
  for (let j = words[i].length - 1; j >= 0; j--) {
    reversedWord += words[i][j];
  }
  
  transformedWords.push(reversedWord.toUpperCase());
}

console.log(transformedWords);
