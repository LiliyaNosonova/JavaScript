// 1
// Создайте функцию, которая возводит переданное число в куб, 
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const getCube = (n) => (n ** 3)
console.log(getCube(2) + getCube(3));

// 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести,
//  что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа
//  и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"


const getSalaryNet = (params) => (params * 100 / 113);
let value = Number(prompt('Введите значение:'));

console.log((value / value !== 1) ? 'Значение задано неверно' : `Размер заработной платы за вычетом налогов равен ${getSalaryNet(value)}`)
// console.log(typeof (value), value);
// условие ниже на проверку NaN не работает...   как правильно написать, что значение NaN или не NaN???? 
// console.log((value === 'NaN') ? 'Значение задано неверно' : `Размер заработной платы за вычетом налогов равен ${getSalaryNet(value)}`)

// 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, 
// которая определяет максимальное значение среди этих чисел

function findMax(params1, params2, params3) {
    let max = params1;
    if ((params2 > params1)) {
        max = params2;
    }
    if (params3 > max) {
        max = params3;
    }
    console.log(`${max} - максимум`)
}

let valueOne = Number(prompt('Введите Число 1:'));
let valueTwo = Number(prompt('Введите Число 2:'));
let valueThree = Number(prompt('Введите Число 3:'));
// // Ниже решение без функции
// // let max = valueOne;
// // if ((valueTwo > valueOne)) {
// //     max = valueTwo;
// //     // console.log(`${valueTwo} - максимум`);
// // }
// // if (valueThree > max) {
// //     max = valueThree;
// // }
// // console.log(`${max} - максимум`);

findMax(valueOne, valueTwo, valueThree);


// 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два
// числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение
// console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
// сложения в данном примере, ваши названия функций могут отличаться).
// Округлять значения, которые возвращают функции не нужно, однако, обратите
// внимание на разность, функция должна вычесть из большего числа меньшее, либо
// вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
// не нужно.

const getSum = (params1, params2) => (params1 + params2);
const getDif = (params1, params2) => (params1 > params2) ? (params1 - params2) : (params2 - params1)
const getDif1 = (params1, params2) => Math.abs(params1 - params2) // альтернатива через модуль
const getMulti = (params1, params2) => (params1 * params2);
const getDiv = (params1, params2) => (params1 / params2);

let value1 = 2;
let value2 = 2;

console.log(`Сумма = ${getSum(value1, value2)}`);
console.log(`Разность = ${getDif(value1, value2)}`);
console.log(`Разность = ${getDif1(value1, value2)}`);
console.log(`Произведение = ${getMulti(value1, value2)}`);
console.log(`Частное = ${getDiv(value1, value2)}`);