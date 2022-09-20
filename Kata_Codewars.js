//Your goal is to create a function that removes the first and last characters of a string.
//You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    return str.slice(1, str.length-1)
   }

//Create a function that gives a personalized greeting. This function takes two parameters: name and owner. Use conditionals to return the proper message:
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet (name, owner) {
    return name === owner ? "Hello boss" : "Hello guest";
  }

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

  function even_or_odd(number) {
    return number % 2 === 0 ? "Even" : "Odd"
  }