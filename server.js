import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 5000;
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from 'morgan'

//db and authenticateUser
import connectDB from "./db/connect.js";

//router
import authRouter from "./routes/authRouter.js";
import jobsRouter from "./routes/jobsRouter.js";

//middleware

import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from './middleware/auth.js'
mongoose.set("strictQuery", true);

if(process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.use(express.json());

app.get("/", (req, res) => {
  // throw new Error("error");
  res.json({msg : 'Welcome!'});
});

app.get("/api/v1", (req, res) => {
  // throw new Error("error");
  res.json({msg : 'Api'});
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}...`);
// });

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
