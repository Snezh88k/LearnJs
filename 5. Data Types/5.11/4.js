// Создайте функцию getDateAgo(date, days), возвращающую число,
// которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(),
//  1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:

const getDateAgo = (date, days) => {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
};

console.log(getDateAgo(new Date(), 5));
