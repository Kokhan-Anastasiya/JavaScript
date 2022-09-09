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