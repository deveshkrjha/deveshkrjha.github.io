//FUNCTION ARGUMENTS AND RETURN
// function greet(student){
//     console.log(`Hello ${student}`);
// }
// greet("Devesh")

// function add(a,b){
//     return a+b;
// }
// let result=add(4,5);
// console.log(result);

function add(){
    console.log(arguments);
    console.log(arguments.length);
}
add(4,5,6,7,9,10)
