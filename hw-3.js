//Задание 1
let password = 'пароль';
let answer = prompt('Введите пароль');
if (answer === password) {
  alert('Пароль введен верно');  
} else {
  alert('Пароль введен неправильно');
}

//Задание 2
let c = Number (2);
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 3
let d = Number(50);
let e = Number(120);
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//Задание 5
let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        alert('зима')
        break;
    case 3:
    case 4:
    case 5:
        alert('весна')
        break;    
    case 6:
    case 7:
    case 8:
        alert('лето')
        break;
    case 9:
    case 10:
    case 11:
        alert('осень')
        break;
    default:
        alert('такого месяца не существует')
        break;
}
