// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

const factorial = (n) => {
  if (n < 2) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(6));
