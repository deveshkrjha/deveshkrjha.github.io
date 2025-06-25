//OBJECTS

const student={
    name:"Devesh",
    age:21,
};
console.log(student);
console.log(student.name);
console.log(student["name"]);
console.log(student.age);
student.city='Jalandhar';
console.log(student);
student.city='Amritsar';
console.log(student);//it will override jalandhar to amritsar
delete student.city;
console.log(student);
const keys=(Object.keys(student));//keys will store as an array
console.log(keys);
const values=(Object.values(student));//values will store as an array
console.log(values);
