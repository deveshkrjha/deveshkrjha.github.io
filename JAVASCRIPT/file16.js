//PROMISE
//Problem statement
// const f1 = () => {
//   setTimeout(() => {
//     return 5;
//   }, 1000);
// };
// const f2 = (x) => {
//   console.log(x + 6);
// };
// const n = f1();
// f2(n);

// const f1 = () =>{
//     return new Promise((resolve, reject)=>{
//     resolve(5);
// });
// };
// const f2 = (x) => {
//   console.log(x + 6);
// };
// f1().then((n)=>f2(n));

// const f1 = () =>{
//     return new Promise((resolve, reject)=>{
//     // resolve(5);
//     reject("Something went wrong");
// });
// };
// const f2 = (x) => {
//   console.log(x + 6);
// };
// f1()
// .then((n)=>f2(n))
// .catch((err)=>console.log(err));

// const f1 = (a) =>{
//     return new Promise((resolve, reject)=>{
//     if(x<0) reject("Invalid number");
//     resolve a;
// });
// };
// const f2 = (x) => {
//   console.log(x + 6);
// };
// f1(5)
// .then((n)=>f2(n))
// .catch((err)=>console.log(err));


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>res.json())
//     .then((data)=>{
//         data.map((value)=>{
//             console.log(value.name,value.email);
//         });
//     })
//     .catch((err)=>console.log("Something went wrong"));


const fetchData=()=>{
    const res=fetch("https://jsonplaceholder.typicode.com/users");
    const data=res.json();
    data.forEach((value)=>{
        console.log(value.name);
    });
};
fetchData()