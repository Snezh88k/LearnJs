


// Напишите код, который выводит все простые числа из интервала от 2 до n.

const natureNumb = (n) => {
  for (let i = 2; i <= n; i++) {
    let isSimple = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isSimple = false;
        break;
      }
    }
    if (isSimple) console.log(i);
  }
};


