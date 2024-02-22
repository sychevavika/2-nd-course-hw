//Задание 1
const massivone = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < massivone.length; i++) {
	if (massivone[i] == 10) break;
	console.log(massivone[i]);
}

//Задание 2
const massivtwo = [1, 5, 4, 10, 0, 3];
console.log(massivtwo.indexOf(4));

//Задание 3
let massivthree = [1, 3, 5, 10, 20];
massivthree = massivthree.join(' ');
console.log(massivthree);

//Задание 4
let massivefour = [];
let l = 1;
for(let q = 0; q < 3; q++ ){
    massivefour[q] = [];
    for(let s = 0; s < 3; s++){
        massivefour[q].push(l);
    }
}
console.log(massivefour);
//Задание 5
const massivfive = [1, 1, 1];
massivfive.push(2, 2, 2);
console.log(massivfive);

//Задание 6
let massivsix = [9, 8, 7, 'a', 6, 5];
massivsix = massivsix.sort();
let massivsixpopped = massivsix.pop();
console.log(massivsix);

//Задание 7
let massivsev = [9, 8, 7, 6, 5];
let z = Number(prompt(`введите число.задание 7`));
if (z == null || z == "") {
    console.log('Ввод отменен');
} else if (isNaN(z)) {
    console.log('Введено НЕ число');
}else if (massivsev.includes(z)) {
    console.log('Угадал');
}else {
    console.log('Не угадал');
}

//Задание 8
let word = 'abcdef';
word = word.split('').reverse().join('');
console.log(word);

//Задание 9
let massivnine = [[1, 2, 3,],[4, 5, 6]];
massivnine = massivnine.flat();
console.log(massivnine);

//Задание 10
let massiveten = [5,7,9,1,4,6,3,2,8,10];
for (let c = 0; c < massiveten.length - 1; c++){
    console.log(massiveten[c] + massiveten[c + 1]);
}

//Задание 11
const massiveel = [1,2,3,4,5,6];
function numtwo(massiveel) {
    return massiveel.map(x => x * x);
}
console.log(numtwo(massiveel));

//Задание 12
let massivetwel = ['слово', '', 'слог', 'длинное предложение', 'буква'];
function getlen(massivetwel){
    return massivetwel.map(el =>el.length);
}
console.log(getlen(massivetwel));

//Задание 13
function filterPositive(array) {
    return array.filter(value => value < 0);
}
  
console.log(filterPositive([-1, 0, 5, -10, 56])); 
console.log(filterPositive([-25, 25, 0, -1000, -2]));