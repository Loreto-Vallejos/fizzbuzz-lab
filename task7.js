// Refer to Task 7 in your Instructions to complete this task
//import chalk from 'chalk';

const prompt = require("prompt-sync")({ sigint: true });

let buzzWords = [
    "Fizz🎶",
    "Buzz🤷‍♀️",
    "Woof😎",
    "Bark🤷‍♂️",
    "Awoo🍿",
    "Bang🤣"
  ];
  

let library = []

let limite = prompt("hasta donde debo contar: ");
let con = parseInt(limite);

for (let i = 1; i <= con; i++) {
  if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
    library.push("FizzBuzzWoof!!!");
  } else if (i % 3 == 0 && i % 5 == 0) {
    library.push("FizzBuzz!!!");
  }else if (i % 7 == 0) {
    library.push("Woof!!!");
  }
   else if (i % 5 == 0) {
    library.push("buzz!!!");
  } else if (i % 3 == 0) {
    library.push("fizz!!!");
  } else 
    esPrimo(i);
}
 //console.log(typeof con);
 console.log(library);
 console.log("Cantidad de elementos en la lista: ",library.length);

 //--------------------- Funcion ------------------

function esPrimo(numero) {
  // Los números menores o iguales a 1 no son primos
  if (numero <= 1) {
    return library.push(numero);
  }
  // El número 2 es el único número primo par
  if (numero === 2) {
    return library.push(buzzWords[Math.floor(Math.random() * buzzWords.length)]);
  }
  // Si el número es par y mayor que 2, no es primo
  if (numero % 2 === 0) {
    return library.push(numero);
  }
  // Comprobamos divisores impares desde 3 hasta la raíz cuadrada del número
  // Incrementamos en 2 para solo comprobar números impares
  for (let i = 3; i <= Math.sqrt(numero); i += 2) {
    if (numero % i === 0) {
      return library.push(numero);
    }
  }
  // Si no se encontraron divisores, el número es primo
  return library.push(buzzWords[Math.floor(Math.random() * buzzWords.length)]);
}
