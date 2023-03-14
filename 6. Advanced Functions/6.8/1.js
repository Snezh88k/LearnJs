// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду
//  начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers(from, to) {
  let start = from;
  const timeOut = () => {
    if (start <= to) {
      console.log(start);
      ++start;
    } else {
      clearInterval(timeId);
    }
  };
  let timeId = setInterval(timeOut, 1000);
}

printNumbers(5, 10);

// Вариант 2

function printNumbersSecondVar(from, to) {
  let start = from;

  const print = () => {
    console.log(start);
    start++;
    if (start <= to) {
      setTimeout(print, 1000);
    }
  };
  print();
}

printNumbersSecondVar(5, 10);
