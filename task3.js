// Refer to Task 1 in your Instructions to complete this task

for (let i = 1; i <= 105; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    
    console.log("FizzBuzz⚡💥");
    
  } else if(i % 3 === 0){
    console.log("Fizz⚡");
  } 
  
  else if(i % 5 === 0){
    console.log("Buzz💥");
  } 
  else {
    console.log(i);
  }
}
