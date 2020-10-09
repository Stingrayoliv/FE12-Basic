// alert("Hello, World");
const a = 10; // number - это константа
const str = "Hello World";
console.log('"That is it!"');
console.log("That is it!");

console.log('Const a equals ' + a + 'asdkfjkadsj'); // простой вариант с конкатинацией
console.log(`Const a equals ${a}`); // string with backticks

const b = true; // boolean
const d = false; // boolean

if (a == 10) { //equals - приводит типы
    console.log("a==10")
}
if (a === "10") { //equals equals (не приводит типы
    console.log('a===10')
}
if (a == "10") {//приводит типы, но сравнит значения
    console.log('a=="10')
}
// сначала переменная у нас String, а потом меняем на числовую
let otherStr = "string";
console.log(otherStr);
otherStr = 100;
console.log(otherStr);

console.log('for loop')
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('while loop')
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// iterating over array
for (let i = 0; i < arr.length; i++) {
    console.log(`arr[${i}] = ${arr[i]}`);
}
// let stringFromConsole = prompt("Please type some value");
// console.log(stringFromConsole);

const numbers = [];
for (let i = 0; i < 2; i++) {
    numbers[i] = +prompt('Please type some number');
}
numbers[2] = 'Vasya';

console.log(numbers);

// numbers = []; --->>> will be error
//How are we going to manipulate DOM
document.getElementById('introduction_header').innerHTML = 'Hello, world';
