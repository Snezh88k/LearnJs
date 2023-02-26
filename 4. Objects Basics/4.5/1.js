// Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true
// Если да – приведите пример вашего кода.

const a = {};

function A() {
  return a;
}
function B() {
  return a;
}

console.log(new A() === new B());
