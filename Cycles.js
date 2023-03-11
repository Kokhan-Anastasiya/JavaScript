//1. Дан цикл for. Запишите те же действия с помощью цикла while
// for (let i = 0; i < 15; i+=2){
//     console.log(i);
//   }

let i = 0;

while (i < 15) {
  console.log(i);
  i+=2;
}
  
  //2. Используя цикл while, выведите 10 раз в консоль ваше имя.
  
let name = 'Nastya';

let a = 0;
while ( a <= 11) {
  console.log(name);
  a++
}

  //3. Используя цикл while, выведите в консоль числа от -7 до 7.
  
let o = -7;

while (o <= 7) {
  console.log(o)
  o++
}

  //4. Создайте пустую строку. Используя цикл, запишите в нее 27 букв Z. Выведите в консоль полученную строку и ее длину.
  
  let str = '';

  let s = 0;
  while (s <= 26) {
    str += 'Z';
    s++
  }
  console.log(str)
  
// 5. Выведите в консоль с помощью цикла for числа от 1 до 10 с шагом 1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//6. Выведите в консоль с помощью цикла for числа от 20 до 40 с шагом 2

for (let i = 20; i <= 40; i+=2) {
  console.log(i)
}

//7. Выведите в консоль обратный "таймер", который выводит в столбец время до старта: 10, 9, 8,.., 1, 'start!'

for (let i = 10; i >= 1; i--) {
  console.log(i)
}

//8. Выведите в консоль числа от 1 до 10, их квадраты, кубы в виде:
//1  1  1
//2  4  8
//3  9  27 ...

for (let i = 1; i <= 10; i++) {
  console.log(i, i**2, i**3)
}

//9. Задайте переменную price = 3.5 (стоимость 1 кг яблок). Выведите на экран стоимость 1, 2, 3, …, 10 кг яблок (используйте ``)
// `the cost of ... kg of apples is equal to ...`

let price = 3.5;

for( let i = 1; i <= 10; i++) {
  console.log(`the cost of ${i} kg of apples is equal to ${i * price}`)
}

//10. Задан массив arr, хранящий значение температуры в градусах Цельсия. arr = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
// Задайте пустой массив temp. Пройдитесь циклом по массиву arr и заполните массив temp значениями этой температуры в градусах Фаренгейта.

const arr = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
const temp = [];

for (let i = 0; i < arr.length; i++) {
  temp.push(arr[i] * 9/5 + 32)
}
console.log(temp)

//11.Дана строка word = 'alternation'; Выведите в консоль символы строки word через один (используйте цикл).(должно получиться 'atrain') 

let word = 'alternation';
for(let i = 0; i <= word.length; i +=2) {
  console.log(word[i])
}

//12. Дана строка back = 'Madam I am Adam'; Выведите в консоль каждый символ строки back поочередно, с конца (используйте цикл).
let back = 'Madam I am Adam';
for (let i = back.length; i >= 0; i--) {
  console.log(back[i])
}

//13. Дана строка str = 'student'; задайте пустую строку result =''; 
//  Пройдите циклом по строке str и путем операции + (слияние), запишите в строку result символы строки str, разделяя их пробелами.
//  (должно получиться 's t u d e n t ')

let str2 = 'student';
let result = '';
for(let i = 0; i < str2.length; i++) {
  result = result + str2[i] + ' ';
}
console.log(result)

//14. Задайте пустой массив arr. Используя метод push, заполните 
//   в цикле массив четными числами от 30 до 10 с порядке убывания.

const array = [];

for (let i = 30; i >=10; i--) {
  array.push(i)
}
console.log(array)


//15. Задана строка str1 = 'Now I am studying programming on JS'.
// Найти количество пробелов в строке.
let  str1 = 'Now I am studying programming on JS';

let count = 0;
for(let i = 0; i <= str1.length; i++) {
  if (str1[i] === ' ') {
    count++
  } 
} 
console.log(count)

//16. Найти общее количество гласных букв (a,o,e,u,i,y) в строке str2.
let  str2 = 'Now I am studying programming on JS';
let count = 0;
for (let i = 0; i <= str2.length; i++) {
  if (str2[i] === 'a' || str2[i] === 'o' || str2[i] === 'e' || str2[i] === 'u' || str2[i] === 'i' || str2[i] === 'y')
  count++
}
console.log(count)



//17. Дан массив arr5 = [3, 7, 4, 9, 2, 10, 1, 17, 6, 23, 5, 13];
// Найти разность между максимальным и минимальным элементом массива.
 let arr5 = [3, 7, 4, 9, 2, 10, 1, 17, 6, 23, 5, 13];
 let max = Math.max(...arr5);
 let min = Math.min(...arr5);
console.log(max-min)




//18. Выведите в консоль числа, кратные 3, в диапазоне от 1 до 40.

for (let i = 1; i <= 40; i++) {
  if (i % 3 === 0) {
    console.log(i)
  }
}



//19: Задайте переменную arr, запишите в нее массив с элементами 3, -6, 0, -7, 4, 12.
// Выведите элементы массива arr в консоль по одному (т.е. в столбец).

let arr = [3, -6, 0, -7, 4, 12];

arr.forEach(element => console.log(element));

//20: Пройдитесь циклом по этому массиву и увеличьте каждый элемент массива на 1. Выведите получившийся массив в консоль.

for (let a = 0; a < arr.length; a++) {
  let result = arr[a] + 1;

  console.log(result);
  }


//21: С помощью цикла создайте массив, заполненный числами: 1,2,3,4,5,6,7,8,9,10. Выведите полученный массив в консоль.

const array = [];

for (let i = 0; i <= 9; i++) {
  array[i] = i + 1;
}
console.log(array);

//22: Создайте пустой массив. Выведите в консоль массив и его длину.

const array1 = [];

console.log(array1, array1.length);

//23: С помощью цикла создайте массив, заполненный десятью нулями. Выведите в консоль массив и его длину.

const array2 = [];

for (i = 0; i <= 9; i++) {
    array2.push(0)
} 
console.log(array2, array2.length)


//24: С помощью цикла создайте массив, заполненный числами: 2,4,6,8,10,12,14,16,18,20. Выведите полученный массив в консоль.

let array3 = [];

for (let i = 2; i <= 20; i += 2) {
	array3.push(i);
}
console.log(array3);

//25: С помощью цикла создайте массив, заполненный числами: //   1,3,5,7,9,11,13,15,17,19. Выведите полученный массив в консоль.

let array4 = [];

for (let i = 1; i <= 19; i += 2) {
	array4.push(i);
}
console.log(array4);

//26: С помощью цикла создайте массив, заполненный числами: 1,-2,3,-4,5,-6,7,-8,9,-10. Выведите полученный массив в консоль.

let array5 = [];

  for (let i = 1; i <= 10; i++) {
    
    if (i % 2 === 0) {
      array5.push(-i)
  } else {
      array5.push(i);
  }
} 
console.log(array5)



//27: Создайте массив ar со значениями:
//   2, 13, 7, 6, 41, -7, 12, -4, 89, 5. Выведите массив в консоль. Далее задания 2-8 будут относиться к этому массиву!

const ar = [2, 13, 7, 6, 41, -7, 12, -4, 89, 5];

console.log(ar);


//28: С помощью цикла выведите в консоль все отрицательные элементы массива

for (i = 0; i<= ar.length; i++) {
  
  if (ar[i] < 0) {
    console.log(ar[i]);
  }
}
//29: С помощью цикла выведите в консоль все четные элементы массива

for (i = 0; i<= ar.length; i++) {
  
  if (ar[i] % 2 === 0) {
    console.log(ar[i]);
  }
}
//30: Подсчитайте количество элементов, значения которых больше 10

let counter = 0;

for (let elem of ar) {
    
  if (elem > 10) {
    counter++;
  }
} 
console.log(counter)


//31: Задайте переменную sum. Найдите сумму элементов массива.

let sum = 0;

for (i = 0; i < ar.length; i++) {
 sum += ar[i];
} 
console.log(sum)


//32: Найдите среднее арифметическое элементов массива.

let result = 0;

for (i = 0; i < ar.length; i++) {
 result += ar[i] / ar.length;
} 
console.log(result)

//33: Задайте переменную product. Найдите произведение положительных элементов массива.

let product = 1;

for (i = 0; i < ar.length; i++)
  
if (ar[i] > 0) {
    product *= ar[i];
} 
console.log(product)

//34: Измените массив, чтобы отрицательные элементы стали положительными.

for (i = 0; i < ar.length; i++)
  
if (ar[i] < 0) {
    ar[i] = -ar[i];
} 
console.log(ar)

//35: Массив содержит значения роста в см. 1 inch = 2.54 cm. Выведите в консоль массив, который содержит значения роста в inch

const height = [158, 160, 165, 168, 170, 175, 178, 180];

for (i = 0; i < height.length; i++) {
 height[i] /= 2.54;
}
console.log(height)