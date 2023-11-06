require("./connection/mongodb.con")();
require("dotenv").config();
const ministryRoutes = require("./routes/fedmin.routes")();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("api/v1/ministries", ministryRoutes);

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
