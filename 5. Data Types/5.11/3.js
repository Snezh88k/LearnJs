// В Европейских странах неделя начинается с понедельника (день номер 1),
//  затем идёт вторник (номер 2) и так до воскресенья (номер 7).
//  Напишите функцию getLocalDay(date),
//  которая возвращает «европейский» день недели для даты date.

const getLocalDay = (date) => {
  let numbDay = date.getDay();
  if (numbDay === 0) {
    numbDay = 7;
  }
  return numbDay;
};

console.log(getLocalDay(new Date(2012, 0, 1)));
