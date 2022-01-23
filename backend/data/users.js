import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "Bob",
    email: "bob@gmail.com",
    password: bcrypt.hashSync("bob", 10),
  },
  {
    name: "Tom",
    email: "tom@gmail.com",
    password: bcrypt.hashSync("tom", 10),
  },
];

export default users;
