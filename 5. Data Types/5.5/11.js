// Напишите функцию getAverageAge(users),
// которая принимает массив объектов со свойством age и возвращает средний возраст.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

const getAverageAge = (users) => {
  let sumAge = users.reduce((allAge, user) => allAge + user.age, 0);
  return sumAge / users.length;
};

console.log(getAverageAge(arr));
