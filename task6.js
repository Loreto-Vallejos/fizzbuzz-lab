// Refer to Task 6 in your Instructions to complete this task

const prompt = require("prompt-sync")({ sigint: true });
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
  } else library.push(i);
}
 //console.log(typeof con);
 console.log(library);
 console.log("Cantidad de elementos en la lista: ",library.length);