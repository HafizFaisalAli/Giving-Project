import colors from "colors";
import dotenv from "dotenv";
import ConnectDb from "./config/db.js";
import User from "./models/user.js";
import users from "./data/user.js";

dotenv.config();
ConnectDb();

const SeedData = async () => {
  try {
    await User.insertMany(users); 
    console.log(`Data added.`.bgGreen);
    process.exit(0);
  } catch (err) {
    console.error(`Unable to add data : ${err.message}`.bgRed);
    process.exit(1);
  }
};

const DeleteData = async () => {
  try {
    await User.deleteMany({});
    console.log(`Data deleted.`.bgGreen);
    process.exit(0)
  } catch (err) {
    console.error(`Unable to delete data ${err.message}`.bgRed);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  DeleteData();
} else {
  SeedData();
}

