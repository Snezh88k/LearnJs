// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// 1. min(2, 5) == 2
// 2. min(3, -1) == -1
// 3. min(1, 1) == 1

const min = (a, b) => {
  if (a > b) {
    return b;
  } else {
    return a;
  }
};

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));
