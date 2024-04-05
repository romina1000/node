require("dotenv").config({ path: ".env" });

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const uri = process.env.MONGO_URI;
const port = process.env.PORT;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(port, () => {
  console.log("Server started on port 5000");
});
