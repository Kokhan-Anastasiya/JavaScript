// 1. Создать переменную “item_1”
//2. Присвоить переменной item_1 цифру 5.
//3. Вывести в консоль item_1.
let item_1 = 5
 console.log(item_1)

 //4. Создать переменную “item_2”
 //5. Присвоить переменной item_2 цифру 3.
 //6. Вывести в консоль item_2.
 let item_2 = 3;
 console.log(item_2)

 //7. Создать переменную “item_3”
 //8. Присвоить переменной item_3 сложение item_1 и item_2.
 //9. Вывести в консоль item_3.
 let item_3 = item_1 + item_2
 console.log(item_3)

//10. Создать переменную “item_4”
//11. Присвоить переменной item_4 строку “Yolochka”
//12. Вывести в консоль item_4.
 let item_4 = "Yolochka"
 console.log(item_4)

 //13. Вывести в консоль сложение item_3 и item_4.
 console.log(item_3 + item_4)

 //14. Вывести в консоль умножение item_3 и item_4.
 console.log(item_3 * item_4)

 //15. Создать переменную “item_5”
 //16. Присвоить переменной item_5 переменную item_3
 let item_5 = item_3

 //17. Создать переменную item_6.
 let item_6

 //18. Создать переменную item_6_type
 let item_6_type

 //19. Присвоить переменной item_6 значение 15
 item_6 = 15
 console.log(item_6)

 //20. Присвоить переменной item_6_type тип переменной item_6
 item_6_type = typeof(item_6)

 //21. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——  
console.log("item_6 == " + typeof(item_6), "item_6_type == " + typeof(item_6_type))
 //22. Создать переменную item_7 и в ней преобразовать item_6 в String.
let item_7
 //23. Создать переменную item_7_type
 let item_7_type
 //24. Присвоить переменной item_7_type тип переменной item_7
item_7_type = typeof(item_7)
 //25. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  
console.log("item_7 == " + typeof(item_7), "item_7_type == " + typeof(item_7_type))


//  26. Создать переменную “age_1” и присвоить ей значение 10
//  27. Создать переменную “age_2” и присвоить ей значение 18
//  28. Создать переменную “age_3” и присвоить ей значение 60
let age_1 = 60
let age_2 = 18
let age_3 = 60

 //29. Создать if в котором будите проверять значение переменной age_1
//  30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
//  31. Если age_1 >=  age_2 и age_1 <=  age_3, вывести в консоль “Welcome  !”
//  32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.

if (age_1 < age_2) {
console.log(`You don’t have access cause your age is ${age_1}. It’s less then 18`)
}
if (age_1 >= age_2 && age_1 <= age_3) {
    console.log("Welcome!")
}
if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel")
}

// 1*: Преобразовать написанный код в 26-32 пунктах в функцию, принимающую на вход возраст.

// Вывести в консоль результат работы функции с возрастами 17, 18, 61
const checkAge = function(age) {
 if (age < 18) {
    return "You don’t have access cause your age is less then 18"
 }
 if (age >= 18 && age <= 60) {
    return "Welcome!"
 }
 if (age > 60) {
    return "Keep calm and look Culture channel"
 }
}
console.log(checkAge(17))
console.log(checkAge(18))
console.log(checkAge(61))
// 2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

const checkAge1 = function(age) {
    if (age != Number) {
        return "Error"
    }
    if (age < 18) {
       return "You don’t have access cause your age is less then 18"
    }
    if (age >= 18 && age <= 60) {
       return "Welcome!"
    }
    if (age > 60) {
       return "Keep calm and look Culture channel"
    }
   } 
   console.log(checkAge1(false))

// 3**: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge2 = function(age) {
    if (age === String) {
        return +age
    }
    if (age < 18) {
       return "You don’t have access cause your age is less then 18"
    }
    if (age >= 18 && age <= 60) {
       return "Welcome!"
    }
    if (age > 60) {
       return "Keep calm and look Culture channel"
    }
   } 
   console.log(checkAge2("60"))

// Part 2

   // Создать переменную a
let a
//Создать переменную b
let b
//Создать переменную с и присвоить ей сумму а и b, деленную на произведение а и b
let c = (a + b) / a * b
//Вывести с
console.log(c)
//Вывести с, а и b в одну строку через запятую
console.log(c + ", " + a + ", " + b)

// Вывести сумму а + b + c, разницу между a и b и остаток от деления a на b в одну строку.
// Не использовать других переменных. Формат вывода:
// "Сумма a, b, c == ..., Деление a и b == ..., Остаток от деления а на b == ..."
console.log(`Сумма a, b, c == ${a + b + c}, Деление a и b == ${a / b}, Остаток от деления а на b == ${a % b}`)
// 1* Создать функцию, которая будет выводить утроенное значение остатка от деления произведения переменных а и b на их сумму.
let num = function(a, b) {
    return (a * b) % (a + b) * 3
}
console.log(num(5, 7))
// 2* Создать функцию, которая будет получать на вход число и на выходе будет писать - делится ли оно на 5 или делится оно на 11.
// Если число не делится ни на 5, ни на 11 - вывести "... - скучное число".
let num1 = function (number) {
    if (number % 5 == 0) {
        return `${number} делится на 5`
    }
    if (number % 11 == 0) {
        return `${number} делится на 11`
    }
    if (number % 5 != 0 && number % 11 !=0) {
        return `${number} - скучное число`
    }
}
console.log(num1(5))
// 3*** Подумать и предусмотреть, какие случаи могут баговать предыдущую функцию и добавить проверки на невалидные вводы. 
// В таких случаях вывести в чем ошибка вывода

let num2 = function (number1) {
    if (number1 % 5 == 0 && number1 % 11 == 0) {
        return `${number1} делится и на 5 и на 11 без остатка`
    }
    if (number1 % 5 == 0) {
        return `${number1} делится на 5`
    }
    if (number1 % 11 == 0) {
        return `${number1} делится на 11`
    }
    if (number1 % 5 != 0 && number1 % 11 !=0) {
        return `${number1} - скучное число`
    }
}
console.log(num2(55))

