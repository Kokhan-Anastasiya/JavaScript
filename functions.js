//1. Напишите функцию sum, которая принимает как аргументы два числа 
//   и возвращает сумму этих чисел.
//   Выведите в консоль результат  работы функции для чисел 23 и 18.  

function sum (a, b) {
    return a + b;
} 
console.log(sum (23, 18))


//2. Напишите функцию с именем mult, которая принимает как аргументы два числа 
//   и вычисляет произведение этих чисел.
//   Выведите в консоль результат работы функции для чисел 25 и 4.

function mult (a, b) {
    return a * b
} 
console.log(mult (25, 4))


//3. Напишите функцию multiply, которая принимает три числа 
//   и возвращает их произведение. 
//   Выведите в консоль результат работы функции для чисел: 2, 4, 7.

 function multiply (a, b, c) {
    return a * b * с
 } 
 console.log(multiply (2, 4, 7))


//4. Напишите функцию absValue, которая принимает значение числа и 
//   возвращает абсолютное значение (модуль) этого числа. 
//   Выведите в консоль результат работы функции для чисел: -10, 0, 10.

function absValue (a) {
    return Math.abs(a)
}
console.log(absValue(-10))
console.log(absValue(10))
console.log(absValue(0))


//5. Напишите функцию distance, которая принимает два числа x,y 
//   (координату точки на плоскости) и возвращает расстояние от этой точки до начала координат. 
//   Найдите и выведите в консоль расстояние от начала координат до точки (3, 4). 

function distance (x, y) {
    return (x**2 + y**2) ** 0.5
} 
console.log(distance(3, 4))

//6. Напишите функцию, которая принимает число как аргумент и возвращает 
//  противоположное по значению число. (1  => -1; -5 => 5; 0 => 0).

function positiveToNegative (x) {
    return (-x)
} 
console.log(positiveToNegative(5))

//7. Напишите функцию, которая принимает целое число как аргумент и возвращает 
//  "Even" для четных чисел  или  "Odd" для нечетных чисел.

function evenOrOdd (x) {
    return x % 2 === 0 ? 'Even' : 'Odd'
}
console.log(evenOrOdd(2))


//8. Напишите функцию, которая принимает строку и возвращает первый символ строки. 

function firstSymbol (string) {
    return string[0]
} 
console.log(firstSymbol('str'))

//9. Напишите функцию, которая принимает число и возвращает 
//  его отрицательным. Если число уже отрицательное, то возвращается само число. 
//  Если число равно 0, возвращается 0.

function num (x) {
   return (x === 0) ? 0 : (x < 0) ? x : -x
} 
console.log(num(5))

//10. Напишите функцию, которая принимает число, трансформирует это число  
//   в строку и возвращает эту строку.

function toStr (x) {
    return (String(x))
} 
console.log(toStr(4))

//11.Напишите функцию sum, которая принимает массив как аргумент и возвращает
//   сумму элементов массива.

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(array) {
    
    let result = 0;

    for (let i = 0; i < array.length; i++) {
        result += array[i];}

        return result
    }
    console.log(sum(arr1))

//12 . Дан массив.Напишите функцию reverse, которая принимает массив как аргумент и возвращает
//   массив, в котором элементы расположены в обратном порядке.

arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverse (array) {
   for (let i = array.length; i >= 0; i--) {
    console.log(array[i])
   }
}
console.log(reverse(arr2))

//13. Дан массив. Напишите функцию indexOfFirstNegative, которая принимает массив и возвращает
//   индекс первого отрицательного элемента массива (в данном массиве это 2).

arr3 = [1, 2, -3, 4, -5, 6, 7, -8, 9, 10];

function indexOfFirstNegative (array) {
    
    for(let i = 0; i <= array.length; i++) {
        
        if (array[i] < 0) {
            return i;
        }
    }
} 
console.log(indexOfFirstNegative(arr3))

//14. Напишите функцию с именем newArray, которая принимает два числа x, y (x<y)
//   и возвращает массив, в котором записаны целые числа от x до y.
//   Например, если x = 5, y = 10, вернуть массив [5,6,7,8,9,10];

const arr5 = [];

function newArray (x, y) {

    for (let i = x; i <= y; i++) {
        arr5.push(i);
    }
} 
console.log(newArray(5, 10))
console.log(arr5)

//15?????. Дан массив строк. Напишите функцию countWords, которая принимает массив как аргумент 
//   и возвращает количество слов, длина которых равна 5.

arr4 = ['apple', 'orange', 'grape', 'banana', 'mango', 'peach'];

function countWords (array) {
    let result = 0;
    // let str = ''; 

    for (let i = 0; i < array.length; i++) {
        // str = array[i]
        
        // if (str.length === 5) {
        //     result++;
        // } 

        if (array[i].length === 5) {
            result++;
        }
    }

    return result;
}
console.log(countWords(arr4))

