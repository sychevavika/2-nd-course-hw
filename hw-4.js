//Задание 1
let a = 0;
while (a < 2) {
    console.log('Привет');
    a++
}

//Задание 2
let b = 1;
while (b<=5) {
    console.log(b);
    b++;
}

//Задание 3
let c = 7;
do {
    console.log(c);
    c++
} while (c<=22);

//Задание 4
let obj = { Коля : 200, Вася : 300, Петя : 400};
for (let name in obj) {
    console.log(`${name} - зарплата ${obj[name]} долларов`);
}

//Задание 5
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++
}
console.log (n);
console.log (num);

//Задание 6
for(let friday = 2; friday <= 31; friday +=7){
   console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`)
}



