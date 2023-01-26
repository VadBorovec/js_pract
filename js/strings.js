// підраховує кількість символів

const message = 'How many symbols, in thsi string?';
console.log(message.length);

// конкатенація рядків

const firstName = 'Manchester';
const lastName = 'United';
const fullName = firstName + ' ' + lastName;

// console.log(firstName + lastName);
console.log(fullName);

// Написати скипт який виведе рядок у форматі
// Гість x y заселяється в z номер q
//  підставивши замість x y z q значення змінних

const room = '716';
const type = 'VIP';
// const welcomeMsg = 'Гість ' + firstName + ' ' + lastName + ' заселяється в ' + type + ' номер ' + room + '.';
const welcomeMsg = `Гість ${firstName} ${lastName} заселяється в ${type} номер ${room}.`;


console.log(welcomeMsg);

// шаблонні рядки (tempate strings)

const quantity = 5;
const orderMsg = `Ви замовляєте ${quantity} холодильників`;

console.log(orderMsg);