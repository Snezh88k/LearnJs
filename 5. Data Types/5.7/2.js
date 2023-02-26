// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const aclean = (arr) => {
  let uniqObj = {};

  for (let i = 0; i < arr.length; i++) {
    let sortedWord = arr[i].toLowerCase().split("").sort().join("");
    uniqObj[sortedWord] = arr[i];
  }

  return Object.values(uniqObj);
};

console.log(aclean(arr));
