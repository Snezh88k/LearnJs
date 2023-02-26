// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

const copySorted = (arr) => {
  return (sortedArr = arr.slice().sort());
};

let arr = ["HTML", "JavaScript", "CSS"];

console.log(copySorted(arr));
