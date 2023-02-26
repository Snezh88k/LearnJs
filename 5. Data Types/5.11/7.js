// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

const getSecondsToTomorrow = () => {
  const date = new Date();

  let secondsToday =
    date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();

  let allSeconds = 86400;

  return allSeconds - secondsToday;
};

console.log(getSecondsToTomorrow());
