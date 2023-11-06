require("dotenv").config();
require("./connection/mongodb.con")();

const ministryRoutes = require("./routes/fedmin.routes")();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/ministries", ministryRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("app listening on port 3000");
});
