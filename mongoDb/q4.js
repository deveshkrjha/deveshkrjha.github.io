db.employees.find({department:"IT"});

db.employees.find({department:{$eq:"IT"}});

db.employees.find({salary:{$gt:2000}});//greater then

db.employees.find({salary:{$gte:2000}});//greater or equal then

db.employees.find({salary:{$lt:2000}});//less then

db.employees.find({salary:{$lte:2000}});//less or equal then

db.employees.find({salary:{$ne:2000}});//not equal then

//Display the top two highest paid employees
db.employees.find().sort({ salary: -1 }).limit(2)