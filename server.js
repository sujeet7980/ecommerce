const express = require("express");
const Products = require("./data/Products");
const app = express();
const dotenv = require("dotenv");
const mongodb = require("./config/config");
const productRoutes = require("./routes/productRoute");
const userRoutes = require("./routes/userRoute");
const orderRoutes = require("./routes/orderRoute");
const errorHandler = require("./middleware/errorMiddleware");
//dotenv config
dotenv.config();
mongodb();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>welcome to node js</h1>");
});
app.use("/api", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});
app.use(errorHandler);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    `${process.env.NODE_ENV} server running on server ${process.env.PORT}`
  );
});
