// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

let age;

if (!(age >= 14 && age <= 90)) {
  console.log(age, " Не находится в диапазоне");
} else {
  console.log(age, " Находится в диапазоне");
}

if (age < 14 || age > 90) {
  console.log(age, " Не находится в диапазоне");
} else {
  console.log(age, " Находится в диапазоне");
}
