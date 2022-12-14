const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const UserController = require("./User/Routes/UserRoute");
const ProductController = require("./User/Routes/ProductRoute");
const cors = require("cors");
const routes = ["/user/login", "/user/signup", "/"];
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use((req, res, next) => {
  if (routes.includes(req.url)) {
    next();
  } else {
    const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
    req.body.userdata = user;
    next();
  }
});

mongoose
  .connect(process.env.CONNECTION)
  .then(() => {
    console.log(`Database is connected`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/user", UserController);
app.use("/product", ProductController);

app.listen(process.env.PORT || 3001, (err) => {
  if (!err) {
    console.log(`server is running at port ${process.env.PORT}`);
  } else {
    console.log(err);
  }
});
