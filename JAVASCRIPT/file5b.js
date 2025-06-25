//ARROW FUNCTIONS
// function greet(){
//     console.log("This is regular function")
// }
// greet()

//const greet=10;

// const greet=()=>{
//     console.log("This is Arrow Function");
// }
// greet()

//Hoisting cannot be applied to arrow function
// greet()
// const greet=()=>{
//     console.log("This is Arrow Function");
// }

//HOW TO ADD ARGUMENTS IN ARROW FUNCTINS
// const add=(a,b)=>{
//     return a+b;
// }
// const result=add(4,5);
// console.log(result);

const add=(...args)=>{
    console.log(args);
}
add(4,5,6,7,2,10);
