import bcrypt from "bcryptjs";
const users = [
  {
    name: "Suman",
    email: "sumanpervaiz3@gmail.com",
    password: bcrypt.hashSync("Qwe123@@", 10),
    isAdmin: true,
  },
  {
    name: "Mehak Riaz",
    email: "mehakriaz@gmail.com",
    password: bcrypt.hashSync("Qwe123@@", 10),
    isAdmin: true,
  },
  {
    name: "Iram",
    email: "iram@gmail.com",
    password: bcrypt.hashSync("Qwe123@@", 10),
    isAdmin: true,
  },
];
export default users;