// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: "John",
  age: 30,
};

const count = (obj) => {
  return Object.keys(obj).length;
};

console.log(count(user));
