const express = require("express");
const cors = require("cors");

require("dotenv").config();
const dbconnect = require("./config/connectDB");
const app = express();
//connectdb
dbconnect();
//routes
app.use(express.json());
app.use(cors());
app.use("/user", require("./routes/user"));
app.use("/product", require("./routes/product"));
app.use("/uploads", express.static("uploads"));
app.use("/story/uploads", require("./routes/uploadRoutes"));

const port = process.env.port;
app.listen(port, (error) =>
  error ? console.error(error) : console.log("server is running")
);
