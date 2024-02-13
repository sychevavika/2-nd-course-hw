//Задание 1
let a = Number(prompt(`введите 1-ое число`));
let b = Number(prompt(`введите 2-ое число`));

function min(a,b) {
    if ( a == null || b == null && a == "" || b == "") {
        return('Ввод отменен');
    } else if(isNaN(a) || isNaN(b)){
        return('Введено НЕ число');
    } else if(a<b || a === b){
        return a;
    } else {
        return b;
    }
}
let result = min(a,b);
console.log(result);

//Задание 2
let c = Number(prompt(`введите число.задание 2`));

function evenOr(c) {
    if (c == null || c == "") {
        return('Ввод отменен');
    } else if(isNaN(c)){
        return('Введено НЕ число');
    } else if(c % 2 === 0){
        return(`Число четное`);
    } else {
        return(`Число нечетное`);
    }
}
let result2 = evenOr(c);
console.log(result2);

//Задание 3.1
let d = Number(prompt(`введите число.задание 3.1`));

function square(d) {
    if (d == null || d == "") {
        console.log('Ввод отменен');
    } else if(isNaN(d)){
        console.log('Введено НЕ число');
    }else {
        console.log(d**2);
    }
}
square(d)

//Задание 3.2
let e = Number(prompt(`введите число.задание 3.2`));

function square2(e) {
    if (e == null || e == "") {
        return('Ввод отменен');
    } else if(isNaN(e)){
        return('Введено НЕ число');
    }else {
        return e**2;
    }
}
let result3 = square2(e);
console.log(result3);

//Задание 4
let f = Number(prompt(`Сколько вам лет?`));

function showMessage(f) {
    if (f == null || f == "") {
        return('Ввод отменен');
    } else if(isNaN(f)){
        return('Введено НЕ число');
    } else if(f < 0){
        return(`Вы ввели неправильное значение.`);
    }else if (f >= 0 && f <= 12){
        return(`Привет, друг!`);
    }else {
        return(`Добро пожаловать!`)
    }
}
let result4 = showMessage(f);
console.log(result4);

//Задание 5
let g = Number(prompt(`введите значение 1`));
let h = Number(prompt(`введите значение 2`));

function choice(g, h) {
   if (g == null || h == null && g == "" || h == "") {
      return('Ввод отменен');
   } else if(isNaN(g) || isNaN(h)){
    return('Введено НЕ число');
   } else if(!isNaN(g),!isNaN(h)){
    return g*h;
   }else {
    return(`Одно или оба значения не являются числом`)
   }
}
let result5 = choice(g,h);
console.log(result5);

//Задание 6
let i = Number(prompt(`введите число`));

function cub(i) {
    if (i == null || i == "") {
        return('Ввод отменен');
    } else if(isNaN(i)){
        return('Введено НЕ число');
    }else if(!isNaN(i)){
        return(`${i} в кубе равняется ${i**3}`);
    }else {
        return(`Переданный параметр не является числом`)
    }
}
let result6 = cub(i);
console.log(result6);

//Задание 7

function getArea() {
    return this.radius**2*Math.PI;
}
function getPerimeter() {
    return this.radius*2*Math.PI;
}
let circle1 = {
    radius: 7,
    getArea: getArea,
    getPerimeter: getPerimeter,
}
let circle2 = {
    radius: 4,
    getArea: getArea,
    getPerimeter: getPerimeter,
}
console.log(`Площадь 1-го круга равняется ${(circle1.getArea())}, Периметр 1-го круга равняется ${(circle1.getPerimeter())}`);
console.log(`Площадь 2-го круга равняется ${(circle2.getArea())}, Периметр 2-го круга равняется ${(circle2.getPerimeter())}`);
