// Create a variable using var, another using let, and one using const. Print all in console.
// var name="akanksha"
// let a=10
// const address='hyberabad'
// console.log(name)
// console.log(a)
// console.log(address)     





// // Try to reassign values to each variable — note which ones throw an error.
// name= "M.Akanksha"        //  var can reasign
// console.log(name)
// a=20 // let can reassign
// console.log(a)
// address='banglure'         //can't reassign constant
// console.log(address)






// Create a block ({ }) and declare a let and a var variable inside. Try accessing them outside the block.
// {
//     var b=40      
//     let c=19
// }
// console.log(b)     // var can access outside the block hence it is known as functional scope
// console.log(c)     // let cannot access outside the block hence it is block scope




// Declare a variable x with var inside a function. Try to access it outside the function.
// function first(){
//     var x;
// }
// console.log(x)   // x is not defined because it is not assigned



// function first(){
//     var x=10      // x is not defined even value is assigned because it is local variable it can access within the function 
    
// }
// console.log(x)




// 1. Which keyword allows re-declaration of a variable in the same scope?
// A) let
//  B) const
//  C) var
//  D) none
// answer:   A 


// 2. Which variable declaration is block-scoped?
// A) var
//  B) let
//  C) Both var and let
//  D) none
// answer  :   C 


// 3. What happens if you try to reassign a value to a const variable?
// A) It updates the value
//  B) It creates a new variable
//  C) It throws an error
//  D) It silently ignores
//   Answer:     C 


// 4. What is the output?
// console.log(typeof null);

// A) "null"
//  B) "undefined"
//  C) "object"
//  D) "string"
// answer:    c 


// 5. What is the scope of a var declared variable inside a function?
// A) Global
//  B) Block
//  C) Function
//  D) Lexical
// answer:   C 

// 6. Which of the following data types is not primitive?
// A) String
//  B) Number
//  C) Object
//  D) Boolean
//  Answer: c 

// 7. What will this code print?
// {
//   let a = 10;
//   var b = 20;
// }
// console.log(typeof a);
// console.log(typeof b);

// A) number, number
//  B) undefined, number
//  C) error, number
//  D) error, undefined
// answer:   B 


// 8. Which variable is hoisted with initialization?
// A) let
//  B) const
//  C) var
//  D) none

// Answer: c 


// 9. What is the output?
// const name = "Ravi";
// name = "Raj";
// console.log(name);

// A) Ravi
//  B) Raj
//  C) Error
//  D) undefined 
// answer: c 


// 10. Which of the following is a truthy value in JavaScript?
// A) 0
//  B) ""
//  C) null
//  D) "false"
// answer: D 




// var x = 10;
// let y = 20;
// const z = 30;
// x = 15;
// y = 25;
// // z = 35;  // uncomment this line
// console.log(x, y, z);
// OUTPUT: 10 20 30
// var x = 10;
// let y = 20;
// const z = 30;
// x = 15;
// y = 25;
// z = 35;  // uncomment this line
// console.log(x, y, z);
// OUTPUT:ERROR   BECAUSE const can’t be reassigned, but others can.

// Options:
//  A) 10 20 30
//  B) 15 25 30
//  C) Error
//  D) 15 20 30
//  📝 const can’t be reassigned, but others can.





// var a = 5;
// var a = 10;
// console.log(a);

// Options:
//  A) 5
//  B) 10
//  C) Error
//  answer: B 




// let a = 5;
// let a = 10;
// console.log(a);

// Options:
//  A) 5
//  B) 10
//  C) Error
//  D) undefined

//  📝 let doesn’t allow redeclaration in the same scope
// Answer:C 




// {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }
// console.log(a);
// console.log(b);
// console.log(c);

// Options:
//  A) 1 2 3
//  B) 1 Error Error
//  C) 1 undefined undefined
//  D) Error
//  📝 var is function-scoped; let and const are block-scoped.
// Answer: B 





// console.log(a);
// var a = 10;

// Options:
//  A) 10
//  B) undefined
//  C) Error
//  D) null
//  answer: 10 because it is hosted





// console.log(b);
// let b = 10;

// Options:
//  A) 10
//  B) undefined
//  C) ReferenceError
//  D) null
// answer:  B because temporial dead zone




// function test() {
//   if (true) {
//     var x = 100;
//     let y = 200;
//   }
//   console.log(x);
//   console.log(y);
// }
// test();

// Options:
//  A) 100 200
//  B) 100 Error
//  C) undefined 200
//  D) Error
// output: B 



// const num;
// num = 50;
// console.log(num);

// Options:
//  A) 50
//  B) undefined
//  C) Error
//  D) null
// OUTPUT : c 






// var x = 1;
// let y = 2;
// {
//   var x = 10;
//   let y = 20;
//   console.log(x, y);
// }
// console.log(x, y);

// Options:
//  A) 10 20 and 1 2
//  B) 10 20 and 10 2
//  C) 1 2 and 1 2
//  D) Error
// answer: b 





// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr);

// Options:
//  A) [1, 2, 3]
//  B) [1, 2, 3, 4]
//  C) Error
//  D) undefined
// output: B 



// Create variables for all JS data types: String, Number, Boolean, Null, Undefined, Object, Array, Symbol, BigInt.
// let name='akanksha'
// let age=20
// let ispass=true
// let stiuid=1
// let fruits=['1','2','3','4']
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof ispass)
// console.log(typeof stiuid)
// console.log(typeof fruits)

// output:
// string
// number
// boolean
// number
// object





