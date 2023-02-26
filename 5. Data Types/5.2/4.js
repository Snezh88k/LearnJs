function randomInteger(min, max) {
  let random = min + Math.random() * (max - min);
  return Math.round(random);
}

console.log(randomInteger(1, 5));
