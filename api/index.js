import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import newsRoute from "./routes/News.js";
import userRoute from "./routes/User.js";
const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
app.use(cookieParser());
//middlewares
app.use("/api/news", newsRoute);
app.use("/api/user", userRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Internal Server Error !";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("hello from mongo");
  } catch (err) {
    throw err;
  }
};

app.listen(5000, () => {
  dbConnection();
  console.log("hello from backend.");
});
