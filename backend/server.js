import express from "express";
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";
import errorHandler from "./middlewares/errorHandler.js";
import ConnectDb from "./config/db.js";
import authRoutes from "./routes/auth.js";
import donateRouter from "./routes/donate.js";

dotenv.config();
ConnectDb();
const app = express();

app.use(morgan("common"));
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Server running Success Fullay" });
});
app.use("/api/auth", authRoutes);
app.use("/api/donate", donateRouter);

app.use(errorHandler);
const port = process.env.NODE_PORT | 5555;
app.listen(port, (req, res) => {
  console.log(
    `Server is running on port ${process.env.NODE_PORT} in ${process.env.NODE_MODE} Mode`
      .bgGreen
  );
});
