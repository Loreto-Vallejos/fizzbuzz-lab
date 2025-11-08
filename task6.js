// CODIGO BASE PARA COMENZAR CON TAREA 6 



/* 
### 🧱 **Tarea 6 – Guardar los resultados en un arreglo**

**Objetivo:**

Aprender a crear y manipular **arrays** en JavaScript.

**Instrucciones:**

1. Copia el código de `task5.js` a `task6.js`.
2. Declara un arreglo vacío al inicio, por ejemplo:
    
    ```jsx
    let resultados = [];
    
    ```
    
3. En vez de mostrar cada resultado en consola dentro del bucle, **guárdalo** en el arreglo.
4. Al final del programa, imprime el arreglo completo.

💡 **Pistas:**

- Usa el método `.push()` para añadir elementos.
- Recuerda: un array puede guardar tanto números como texto.

**Desafío adicional:**

Muestra cuántos elementos tiene el arreglo con `.length`.


*/




// IMPORTA LIBRERIA PROMPT SYNC

import promptSync from "prompt-sync";
const prompt = promptSync();

// PEDIR AL USUARIO HASTA QUE NUMERO QUIERE SELECCIONAR LA LISTA. 
// CONVIERTE NUMERO EN FORMATO STRING DEL PROMPT EN NUMERO ENTERO.

let limite = parseInt(prompt("#️⃣ Ingrese hasta que numero desea generar la lista: "));

// ELECCION DE USUARIO NO EXCEDE 105

if (limite > 105) {
  console.log("☢️ Recuerda que debes elegir un numero igual o menor a 105 🤖")

} else {



// BUCLE PARA RECORRER SECUENCIA DE NUMEROS DESDE 1 HASTA 105.
// SE AÑADE VARIABLE LIMITE PARA DETENER EL BUCLE EN VALOR INDICADO POR USUARIO.

for (let i = 1; i <= limite; i++) {



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

}