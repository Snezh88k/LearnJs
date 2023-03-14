// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.
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

const printList = (list) => {
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }
};

printList(list);

//  Вариант 2
console.log("Вариант №2");

const printListSecondVar = (list) => {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
};

printListSecondVar(list);
