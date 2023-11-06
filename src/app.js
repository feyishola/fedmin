require("./connection/mongodb.con")();
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Port = process.env.PORT || 3000;

app.use("api/v1/");

app.listen(Port, () => {
  console.log("app listening on port 3000");
});
