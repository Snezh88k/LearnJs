// Выведите односвязный список из предыдущего задания
//  Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const printListReverse = (list) => {
  arrList = [];

  while (list) {
    arrList.push(list.value);
    list = list.next;
  }
  arrList.reverse().forEach((item) => console.log(item));
};

printListReverse(list);

//   Вариант 2, через рекурсию

console.log("Вариант №2");

const printListReverseVarSecond = (list) => {
  if (list.next) {
    printListReverseVarSecond(list.next);
  }

  console.log(list.value);
};

printListReverseVarSecond(list);
