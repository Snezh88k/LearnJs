// Напишите функцию getWeekDay(date),
//  показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

const getWeekDay = (date) => {
  const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return days[date.getDay()];
};

console.log(getWeekDay(new Date()));
