const { readdirSync } = require("fs");
const path = require("path");
const express = require("express");
const app = new express();
const helmet = require("helmet");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");

// seurity middleware
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes middleware
readdirSync("./routes").map((r) =>
  app.use("/api/v1", require(`./routes/${r}`))
);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Api is working fine" });
});

// mongodb database connect
mongoose
  .connect(process.env.DATABASE)
  .then((res) => {
    console.log("database conected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
