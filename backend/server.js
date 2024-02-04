import express from "express";
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
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

if (process.env.NODE_MODE !== "development") {
  app.use("/", express.static(path.join(__dirname, "frontend", "dist")));

  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}
app.use(errorHandler);
const port = process.env.PORT || 5555;
app.listen(port, (req, res) => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_MODE} Mode`
      .bgGreen
  );
});
