import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/user";
import productRouter from "./routes/product";

const app = express();
app.use(express.json());
app.use(cors());
//access an api from react";

app.listen(3001, () => {
  console.log("Server started");
});
mongoose
  .connect(
    "mongodb+srv://Ruquia:ERPInc_1826@cluster0.dnrbf0r.mongodb.net/EcommAPP?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("connected!"))
  .catch((err) => {
    console.log(err);
  });
app.use("/user", userRouter);
app.use("/product",productRouter)
