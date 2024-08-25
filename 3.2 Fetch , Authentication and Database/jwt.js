const jwt = require("jsonwebtoken");
const jwtPassword = "Harsh";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);
// const user = {
//     email:'harsh@gmail.com',
//     password:'Harsh@123'
// }

// const newToken = jwt.sign(user,jwtPassword);
// console.log(newToken)

function verifyJwt(token) {
  try {
    const verify = jwt.verify(token, jwtPassword);
      return verify;
  } catch (error) {
    return false;
  }

}
function decodeJwt(token) {
  const decode = jwt.decode(token);
  if (!decode) {
    return false;
  }
  return true;
}

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);

  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }
  const newToken = jwt.sign({ username }, jwtPassword);
  return newToken;
}

// const fun = signJwt("harsh@gmail.com","12345678")
// const fun2 = decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhcnNoQGdtYWlsLmNvbSIsImlhdCI6MTcyNDMzOTU2NX0.E2LjPvHVUgkdvgDebNqIcjcSCtFgE-TWqLGtSfeGA64")
const fun3 = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhcnNoQGdtYWlsLmNvbSIsImlhdCI6MTcyNDMzOTU2NX0.E2LjPvHVUgkdvgDebNqIcjcSCtFgE-TWqLGtSfeGA64");
console.log(fun3);
