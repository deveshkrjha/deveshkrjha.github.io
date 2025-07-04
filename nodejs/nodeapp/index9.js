import bcrypt from 'bcrypt';
const pwd="pass1234"
const hashedpwd=await bcrypt.hash(pwd,10);
console.log(hashedpwd);
const check=await bcrypt.compare("pass1234","$2b$10$yhmDuALhUztEsbNKaO3LCO6IG26bw.eyx1f3OiBG/eLKgmNwNf6iy")
console.log(check)