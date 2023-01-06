import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import productRouter from "./routes/product.js";
import orderRouter from "./routes/order.js";
import cartRouter from "./routes/cart.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connection to mongoose successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Success");
});

app.use("/api/auth", authRouter); // REGISTER AND LOGIN
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/carts", cartRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running at port 5000");
});
