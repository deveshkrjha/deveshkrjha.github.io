db.employees.insertOne({
    name:"John Smith",
    email:"John@gmail.com",
    department:"IT",
    salary:1456,
    location:["AB","CB"],
    date:Date()
})

db.employees.insertMany([{
    name:"Mike joseph",
    email:"mike@gmail.com",
    department:"IT",
    salary:2456,
    location:["AB","CB"],
    date:Date()
},
{name:"cathy",
    email:"cathy@gmail.com",
    department:"IT",
    salary:3456,
    location:["AB","CB"],
    date:Date()}
])