// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
//  ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

const filterRange = (arr, a, b) => {
  let newArr = arr.filter((item) => {
    return item >= a && item <= b;
  });
  return newArr;
};

let arr = [5, 3, 8, 1];

console.log(filterRange(arr, 1, 4));
