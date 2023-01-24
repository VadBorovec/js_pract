// піднесення числа до степеня

// let base = prompt('Add number');
// base = Number(base);
// console.log(base);

// let power = prompt('Add power');
// power = Number(power);
// console.log(power);

// const result = base ** power;
// console.log(result);


// генератор випадкових чисел

// const max = 50;
// const min = 30;

// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// приміняє випадковий кроір для фону

const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue', 'indigo', 'lime'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;