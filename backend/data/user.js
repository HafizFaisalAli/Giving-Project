import bcrypt from "bcryptjs";
const users = [
  {
    name: "",
    email: "",
    password: bcrypt.hashSync("Qwe123@@", 10),
    isAdmin: true,
  },
];
export default users;
