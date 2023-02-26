function ucFirst(str) {
  let arr = str.split("");
  arr[0] = arr[0].toUpperCase();
  let newStr = arr.join("");
  return newStr;
}

ucFirst("вася");
