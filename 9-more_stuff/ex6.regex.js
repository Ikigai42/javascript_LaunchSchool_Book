let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(words, regex) {
  let matchesArr = [];
  for (let i = 0; i < words.length; i += 1) {
    if (regex.test(words[i])) {
      matchesArr.push(words[i]);
    }
  }

  return matchesArr;
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

/*LS
function allMatches(words, pattern) {
  let matches = [];
  for (let index = 0; index < words.length; index += 1) {
    if (pattern.test(words[index])) {
      matches.push(words[index]);
    }
  }

  return matches;
}
*/

function allMatches2(words, pattern) {
  return words.filter((word) => pattern.test(word));
}

console.log(allMatches2(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
