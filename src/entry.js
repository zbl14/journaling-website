function Entry (title, body) {
  this.title = title;
  this.body = body
}

Entry.prototype.noInputtedWord = function() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
};

Entry.prototype.wordCounter = function(text) {
  if (this.noInputtedWord(text)) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

Entry.prototype.vowelsCounter = function(text) {
  let vowels = ["a", "e", "i", "o", "u"]  
  let newArray = [];
  let textArray = text.split("");
  for (let i=0; i < textArray.length; i++) {
    if (vowels.includes(textArray[i])) {
       newArray.push(textArray[i]);
    } 
  }
  return newArray.length;
} 

let title = "What a wonderful day!";
let body = "Hello, What a wonderful day!";
let entry1 = new Entry (title, body);
// entry1.wordCounter(entry1.body)