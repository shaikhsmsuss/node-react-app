const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

require("dotenv").config();

const app = express();

const addProduct = require("./routes/api/addProduct");

app.use(cors());
// connect mongoose

const db = process.env.MONGO_URI;
try {
  mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  if (db) {
    console.log("connected");
  }
} catch (err) {
  console.log("err", err);
}

// Body Parser Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Use routes
app.use("/api/product", addProduct);

// app.use("/api/profile", profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
