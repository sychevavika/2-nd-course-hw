//Задание 1
let str = 'js';
str = str.toUpperCase();
console.log(str);

//Задание 2
function searchStart(array,strk){
    let result = array.filter((el)=>el.toLowerCase().includes(strk.toLowerCase()));
    return result;
}
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

//Задание 3
let x = 32.58884;
console.log(`Ближайшее целое ${x} равно ${x=Math.round(x)}`);
let a = 32.58884;
console.log(`Большее целое ${a} равно ${a=Math.ceil(a)}`);
let b = 32.58884;
console.log(`Меньшее целое ${b} равно ${b=Math.floor(b)}`);

//Задание 4
let numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

//Задание 5
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log (getRandomInt(1,10));

//Задание 6
function getRandomArrNumbers(k){
    let arr = [];
    for (let index = 0; index<Math.floor(k/2);index++){
        arr[index]=Math.floor(Math.random()*k);
    }
    return arr;
}
console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

//Задание 7
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomNumber(5,8));

//Задание 8
let currentDate = new Date();
console.log(currentDate);

//Задание 9
let days = 73;
let curDate = new Date();
let futureDate = new Date(curDate.setDate(curDate.getDate() + days));
console.log(futureDate);

//Задание 10
function mainDate (myDate){
    const day = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + day[myDate.getDay()];
    let fullTime = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
    
    return [fullDate, fullTime];
    
}
console.log(mainDate(new Date()).join());