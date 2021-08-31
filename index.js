let tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let split = tutorials.map(string => string.split(' '))
  let test = split.map(string => string.map(words => (words.charAt(0).toUpperCase() + words.slice(1))).join(' '))
  return test
}

console.log(tutorials)
let split = tutorials.map(string => string.split(' '))
let test = split.map(string => string.map(words => words.toUpperCase()).join(' '))
console.log(split)
console.log(test)