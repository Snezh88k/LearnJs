let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(param) {
  return (a, b) => {
    if (a[param] < b[param]) return -1;
    if (a[param] > b[param]) return 1;
  };
}

console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));
