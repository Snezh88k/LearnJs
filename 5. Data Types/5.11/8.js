// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm".
//  А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

const formatDate = (date) => {
  const difference = new Date() - date;

  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let differenceSeconds = difference / 1000;
  let differenceMinutes = differenceSeconds / 60;
  let differenceHourse = differenceMinutes / 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours < 10 ? "0" + hours : hours;
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  year = year.toString().slice(-2);

  if (differenceSeconds < 1) {
    return console.log("прямо сейчас");
  } else if (differenceMinutes < 1) {
    return console.log(`${differenceSeconds} сек. назад`);
  } else if (differenceHourse < 1) {
    return console.log(`${differenceMinutes} мин. назад`);
  } else {
    return console.log(`${day}.${month}.${year} ${hours}:${minutes}`);
  }
};

formatDate(new Date(new Date() - 1));
formatDate(new Date(new Date() - 30 * 1000));
formatDate(new Date(new Date() - 5 * 60 * 1000));
formatDate(new Date(new Date() - 86400 * 1000));
