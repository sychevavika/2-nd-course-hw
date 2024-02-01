//Задание 1
//let a=10;
//alert(a);
let b=20;
alert(b);

//Задание 2
const c=2007;
alert(c);

//Задание 3
const d="Brandan Eich";
alert(d);

//Задание 4
let e=10;
let f=2;
let sum=e+f;
alert(sum);
let difference=e-f;
alert(difference);
let multiplication=e*f;
alert(multiplication);
let degree=e/f;
alert(degree);

//Задание 5
let result=2**5;
alert(result);

//Задание 6
let g=9;
let h=2;
let remainder=g%h;
alert(remainder);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

//Задание 8
let age=Number(prompt('Сколько вам лет?'));
alert(age);

//Задание 9.0
let user = {
    name: "Вика",
    age: 24,
    isAdmin: true,
}
//Задание 9.1
user["city of residense"] = "Москва";
//Задание 9.2
user.age=20;
//Задание 9.3
delete user["city of residense"];
//Задание 9.4
let info= prompt("Какую информацию хотите узнать о пользователе?");
if (user.hasOwnProperty(info)) {
    alert(user[info])
}

//Задание 10
let i=String(prompt('Как вас зовут?'));
alert(`Привет, ${i}!`);