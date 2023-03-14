// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

const fib = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

console.log(fib(7));

// Через циклы

const fibSecond = (n) => {
  let lineFib = [1, 1];
  for (let i = 2; i < n; i++) {
    lineFib[i] = lineFib[i - 1] + lineFib[i - 2];
  }
  return lineFib[lineFib.length - 1];
};

console.log(fibSecond(7));
