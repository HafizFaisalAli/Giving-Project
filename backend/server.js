import express from "express";
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(morgan("common"));

app.get("/api", (req, res) => {
  res.json({ message: "Server running Success Fullay" });
});

const port = process.env.NODE_PORT | 5555;

app.listen(port, (req, res) => {
  console.log(
    `Server is running on port ${process.env.NODE_PORT} in ${process.env.NODE_MODE} Mode`
      .bgGreen
  );
});
