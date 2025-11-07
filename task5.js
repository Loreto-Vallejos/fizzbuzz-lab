// Refer to Task 5 in your Instructions to complete this task

import PromptSync from "prompt-sync";

for (let i = 1; i <= 105; i++) {
  if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
    
    console.log("FizzBuzzwoof⚡💥");
    
  }
  else if(i % 5 === 0 && i % 3 === 0){
    console.log("FizzBuzz⚡💥");
  } 
   
  
  else if(i % 5 === 0){
    console.log("Buzz💥");
  } 
  else if(i % 7 === 0){
    console.log("woof🐕");
  } 
  else {
    console.log(i);
  }
}