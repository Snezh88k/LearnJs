// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

function sum(a) {
  return function (b) {
    return (c) => {
      return a + b + c;
    };
  };
}

console.log(sum(5)(4)(3));
