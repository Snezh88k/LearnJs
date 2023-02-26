// Напишите функцию sortByAge(users),
//  которая принимает массив объектов со свойством age и сортирует их по нему.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

const sortByAge = (users) => {
  return users.sort((a, b) => a.age - b.age);
};

console.log(sortByAge(arr));
