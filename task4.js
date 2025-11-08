// BUCLE PARA RECORRER SECUENCIA DE NUMEROS DESDE 1 HASTA 105.

for (let i = 1; i <= 105; i++) {


// SI UN NUMERO ES MULTIPLO DE 3, 5 Y 7 IMPRIME FIZZBUZZWOFF EN CONSOLA. 

  if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
    console.log("FizzBuzzWoof⚡💥🐕");  


// SI UN NUMERO ES MULTIPLO DE 3 Y 5 IMPRIME FIZZBUZZ EN CONSOLA.

  } else if(i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz⚡💥");
  

// SI UN NUMERO ES MULTIPLO DE 3 Y 7 IMPRIME FIZZWOFF EN CONSOLA.

  } else if(i % 3 === 0 && i % 7 === 0) {
    console.log("FizzWoff⚡🐕");


// SI UN NUMERO ES MULTIPLO DE 5 Y 7 IMPRIME BUZZWOOF EN CONSOLA.

  } else if(i % 5 === 0 && i % 7 === 0) {
    console.log("BuzzWoff💥🐕");


// SI UN NUMERO ES MULTIPLO DE 3 MUESTRA FIZZ EN CONSOLA.

  } else if (i % 3 === 0) {
    console.log("Fizz⚡");


// SI UN NUMERO ES MULTIPLO DE 5 MUESTRA BUZZ EN CONSOLA.

  } else if(i % 5 === 0){
    console.log("Buzz💥");
  

// SI UN NUMERO ES MULTIPLO DE 7 MUESTRA WOOF EN CONSOLA.

  } else if(i % 7 === 0){
    console.log("woof🐕");
  

// SE IMPRIMEN LOS OTROS NUMEROS

  } else {
    console.log(i);
  }
}