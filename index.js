import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auths.js";
import tweetRoutes from "./routes/tweets.js";

const app = express();

// so that we can read data from env file
dotenv.config();

// connecting to mongodb
const connect = () => {
  // to get rid of warning strictQuery from console
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to mongodb database");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cookieParser());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tweets", tweetRoutes);

app.listen(8000, () => {
  connect();
  console.log("Listening to port 8000");
});
