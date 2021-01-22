import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import orderRouter from "./routers/orderRouter.js";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "Error connecting to MongoDB Cluster: "));
connection.once("open", function callback() {
    console.log("Server connected to MongoDB Cluster");
});

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req, res) => {
    res.send("Server is ready");
});

//Error catcher
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
