function makeCounter() {
  let count = 0;

  const counter = () => {
    return count++;
  };

  counter.set = (value) => (count = value);

  counter.decrease = () => {
    return count--;
  };

  return counter;
}
console.log(makeCounter.counter());

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter.set(15));
console.log(counter.decrease());
console.log(counter.decrease());
