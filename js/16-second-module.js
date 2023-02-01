// 1

// Запиши умову в інструкції if таким чином, щоб функція працювала правильно.

// Оголошена функція checkAge(age).
// У виразі перевірки віку використаний оператор >=
// Виклик checkAge(20) повертає "You are an adult"
// Виклик checkAge(8) повертає "You are a minor"
// Виклик checkAge(14) повертає "You are a minor"
// Виклик checkAge(38) повертає "You are an adult"
// В тілі функції є тільки одна інструкція if
// В тілі функції відсутні інструкції else або else if

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// let res = checkAge(20);
// console.log(res);
// checkAge(8);
// console.log(res);
// checkAge(14);
// console.log(res);
// checkAge(38);
// console.log(res);

// =============================================================================

// 02

Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.

Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:

видали змінну message
видали else
код повинен працювати так само, як і до оптимізації
Оголошена функція checkPassword(password)
Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
Виклик checkPassword("jqueryismyjam") повертає "Welcome!"

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  let message;

  if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
  // Change code above this line
}
