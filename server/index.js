import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connection to mongoose succedsfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Success");
});

app.use("/", userRouter);
app.use("/", authRouter); // REGISTER AND LOGIN

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running at port 5000");
});
